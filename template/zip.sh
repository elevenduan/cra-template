#!/usr/bin/env bash
TARGET_DIR=zip
rm -rf ${TARGET_DIR};
mkdir -p ${TARGET_DIR};
cp -rf build/* ${TARGET_DIR};
cd ${TARGET_DIR};
zip build.zip -q -r -m *;