#!/bin/bash

set -e

BUILD_DIR="dist"
DEPLOY_BRANCH="deploy"
DEPLOY_DIR="../deploy-worktree" # worktree untuk branch deploy

echo "🔨 Build project di branch main..."
npm run build

echo "📂 Siapkan worktree untuk $DEPLOY_BRANCH..."
# Hapus worktree lama kalau ada
if [ -d "$DEPLOY_DIR" ]; then
  echo "⚠️ Worktree lama ditemukan, hapus..."
  git worktree remove --force $DEPLOY_DIR || rm -rf $DEPLOY_DIR
fi

# Tambah worktree baru
git worktree add $DEPLOY_DIR $DEPLOY_BRANCH

echo "🧹 Hapus file lama di worktree (kecuali .git)..."
cd $DEPLOY_DIR
find . -mindepth 1 -not -name '.git' -exec rm -rf {} +
cd -

echo "📂 Copy hasil build ke worktree..."
cp -r $BUILD_DIR/* $DEPLOY_DIR

echo "➕ Git add & commit..."
cd $DEPLOY_DIR
git add .
git commit -m "Deploy build $(date +'%Y-%m-%d %H:%M:%S')" || echo "⚠️ Tidak ada perubahan untuk di-commit"

echo "⬆️ Push ke remote $DEPLOY_BRANCH..."
git push origin $DEPLOY_BRANCH

cd -

echo "🗑️ Bersihkan dist dari branch main..."
rm -rf $BUILD_DIR

echo "🚀 Selesai! Kamu tetap di branch main, folder dist sudah dihapus, dan website sudah ter-deploy."
