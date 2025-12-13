#!/bin/sh
set -e

# node_modules ディレクトリの権限を修正
if [ -d "/app/node_modules" ]; then
    sudo chown -R node:node /app/node_modules
fi

# pnpm の store を設定
pnpm config set store-dir /tmp/.pnpm-store

# 依存関係のインストール
pnpm install

# Vite 開発サーバーの起動
exec pnpm dev --host
