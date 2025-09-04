#!/bin/bash

# Hentikan kalau ada error
set -e

echo "🔨 Building project..."
npm run build

echo "📂 Checkout ke branch deploy..."
git checkout deploy

echo "🧹 Hapus file lama..."
rm -rf *

echo "📂 Copy hasil build..."
cp -r dist/* .

echo "➕ Git add..."
git add .

echo "✅ Commit..."
git commit -m "Deploy build $(date +'%Y-%m-%d %H:%M:%S')"

echo "⬆️ Push ke remote..."
git push origin deploy

echo "↩️ Balik lagi ke branch main..."
git checkout main

echo "🚀 Selesai! Website kamu sudah ter-deploy di Hostinger."
