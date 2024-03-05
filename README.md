# Luminol website
This is the source of [lumiol.dev](https://luminol.dev), the Luminol website!
I (Speak2Erase) am pretty new to web development in general so a lot of this repository is based off of the [bevy website](https://github.com/bevyengine/bevy-website).

## Building
This project uses zola (mainly because bevy's website uses it, but also because it'd allow us to write markdown for any news articles)

To build the project, all you need to do is run `zola serve`! 

If you want to also compile Luminol (optional) you'll need both rust and [trunk](https://trunkrs.dev) installed. 
Compiling Luminol is done by running the `build-luminol` sheell script in the `build-luminol` directory.
This step is only required to be done every time the Luminol repository gets a commit!
If you want more detailed build instructions, please refer to [the Luminol README](https://github.com/Astrabit-ST/Luminol/blob/dev/README.md#running-luminol).
