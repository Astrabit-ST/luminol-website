#!/bin/sh

# Copyright (c) 2024 Lily Lyons
# 
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT

./clone_luminol.sh

cd luminol

~/.cargo/bin/trunk build --release
mkdir ../../static/luminol-build -p
cp dist/* ../../static/luminol-build -r