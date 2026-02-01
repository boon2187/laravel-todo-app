FROM node:20-alpine

# sudo をインストール（権限修正のため）
RUN apk add --no-cache sudo

# pnpmをインストール
RUN corepack enable && corepack prepare pnpm@latest --activate

# node ユーザーに sudo 権限を付与（パスワードなし）
RUN echo "node ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

# 作業ディレクトリを設定して node ユーザーに権限を付与
WORKDIR /app
RUN chown -R node:node /app

# エントリーポイントスクリプトをコピー
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# node ユーザーに切り替え（デフォルトで UID=1000, GID=1000）
USER node

EXPOSE 5173

ENTRYPOINT ["docker-entrypoint.sh"]
