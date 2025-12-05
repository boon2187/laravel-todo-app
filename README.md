# 1. リポジトリをクローン

git clone <リポジトリ URL>
cd laravel-todo-app

# 2. 環境ファイルをコピー

cp backend/.env.example backend/.env

# 3. コンテナを起動

docker compose up -d

# 4. PHP 依存パッケージをインストール

docker compose exec php composer install

# 5. アプリケーションキーを生成

docker compose exec php php artisan key:generate

# 6. データベースマイグレーション

docker compose exec php php artisan migrate

# 7. フロントエンド依存パッケージをインストール（コンテナ内）

docker compose exec node pnpm install

# 8. フロントエンド依存パッケージをインストール（ホスト側・エディタ用）

cd frontend
pnpm install
cd ..

# 9. 動作確認

# http://localhost:5173 （React）

# http://localhost:8000/api/... （Laravel API）

# 10. 日常の開発時のコマンド

起動：docker compose up -d

停止：docker compose down

ログ確認：docker compose logs -f

PHP コンテナに入る：docker compose exec php bash

Node コンテナに入る：docker compose exec node sh

マイグレーション追加：docker compose exec php php artisan migrate
