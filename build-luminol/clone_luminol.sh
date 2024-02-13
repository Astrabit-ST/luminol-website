#!/bin/sh

# Copyright (c) 2024 Lily Lyons
# 
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT

git clone --depth=1 https://github.com/Astrabit-ST/Luminol luminol 
cd luminol
git pull --depth=1 origin dev