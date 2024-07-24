import { Feed } from "feed";
import { marked } from "marked";
import markedAlert from "marked-alert";
import markedFootnote from "marked-footnote";
import { NEWS_ROOT, WEBSITE_ROOT } from "@/consts";

type NewsIndex = Record<string, {
  title: string;
  thumbnail: string;
  timestamp: number;
  tags: string[];
}>;

export async function GET(
  _: Request,
  { params }: { params: { format: string } }
) {
  const feed = new Feed({
    title: "Luminol News",
    description: "Luminol News",
    id: `${WEBSITE_ROOT}/news`,
    link: `${WEBSITE_ROOT}/news`,
    language: "en",
    favicon: `${WEBSITE_ROOT}/logo-icon.png`,
    copyright: `Copyright ${new Date().getFullYear()} The Luminol Newswriters`,
  });

  const indexRes = await fetch(`${NEWS_ROOT}/index.json`);
  const index: NewsIndex = await indexRes.json();

  const posts = await Promise.all(
    Object.entries(index)
      .map(async ([file, meta]) => {
        const fileRes = await fetch(`${NEWS_ROOT}/posts/${file}`);
        const fileText = await fileRes.text();

        const html = `<img src="${meta.thumbnail}" alt="" />` + marked
          .use(markedFootnote())
          .use(markedAlert())
          .parse(fileText, { async: false }) as string;

        return { file, html, meta };
      })
  );

  posts.forEach(post => {
    const link = `${WEBSITE_ROOT}/news/view?p=${post.file}`;

    feed.addItem({
      title: post.meta.title,
      id: link,
      link,
      category: post.meta.tags.map(name => ({ name })),
      content: post.html,
      date: new Date(post.meta.timestamp),
    });
  });

  if (params.format === "rss") return new Response(feed.rss2());
  if (params.format === "atom") return new Response(feed.atom1());
  if (params.format === "json") return new Response(feed.json1());
}

export function generateStaticParams() {
  return [
    { format: "rss" },
    { format: "atom" },
    { format: "json" },
  ]
}
