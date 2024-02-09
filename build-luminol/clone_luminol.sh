#!/bin/sh

# Copyright (c) 2024 Lily Lyons
# 
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT

git init luminol
cd luminol
git remote add origin https://github.com/Astrabit-ST/Luminol
git pull --depth=1 origin dev