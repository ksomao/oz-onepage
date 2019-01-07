#!/bin/bash
git add .
git commit
git push
npm run build
cat build/200.html > build/index.html
cd build
find . -type f -exec curl -s -u myselfstcd-maxtwo:Ok835999 --ftp-create-dirs -T {} ftp://ftp.cluster026.hosting.ovh.net/www/{} \;
cd ..