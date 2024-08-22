#!/bin/sh

# Copyright (c) 2024 Lily Lyons
# 
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT

./clone_luminol.sh

cd luminol

~/.cargo/bin/trunk build --release
mkdir ../../public/luminol-build -p
cp crates/launcher/dist/* ../../public/luminol-build -r