# Todo App

## 技術スタック

- Backend: Laravel 11 (API only)
- Frontend: React + TypeScript + Vite + Tailwind CSS
- Database: MySQL 8
- Package Manager: pnpm
- Styling: Tailwind CSS

## Docker 構成

- nginx:80 → リバースプロキシ
- php:9000 → Laravel
- mysql:3306 → DB
- node:5173 → React dev server

## 開発ルール

- API は /api/ プレフィックス
- 認証は後から追加予定（user_id カラムは nullable で先に作る）

```

---

## 具体的な最初の一言

これをそのままClaude Codeに投げれば始められます：
```

todo-app というフォルダを作って、Laravel API + React（TypeScript）の
Docker 開発環境を構築したい。

コンテナ構成：

- nginx（リバースプロキシ）
- php（PHP-FPM + Composer）
- mysql（MySQL 8）
- node（pnpm + Vite）

まず docker-compose.yml と必要な Dockerfile、nginx 設定ファイルを作って。
backend/と frontend/は空のディレクトリで良い。

その後、コンテナを起動して、Laravel 雛形と React 雛形を作成するところまで
一緒に進めたい。
