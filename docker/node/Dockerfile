FROM node:20-alpine

# pnpmをインストール
RUN corepack enable && corepack prepare pnpm@latest --activate

# 作業ディレクトリを設定
WORKDIR /app

EXPOSE 5173

CMD ["sh", "-c", "pnpm install && pnpm dev --host"]
