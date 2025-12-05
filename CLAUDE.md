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
- フロントエンドのTypeScriptコードは開発者が手動で実装する（Claudeはアドバイス・レビューのみ）

## フロントエンド実装方針

### UIデザイン
- ダークテーマ（濃紺/紫系の背景）
- Tailwind CSSでスタイリング
- シンプル＆モダンなデザイン
- レスポンシブ対応

### 主要機能
1. Todo追加フォーム
   - テキスト入力欄
   - "Add Task" ボタン
2. Todo一覧表示
   - 作成日時降順で表示
   - 各Todoに編集・削除ボタン
   - インライン編集機能（編集モードへの切り替え）
   - 完了/未完了のトグル（チェックボックスまたはクリック）
3. Todo編集
   - インライン編集（その場で入力フィールド表示）
   - "Update Task" ボタンで更新
4. Todo削除
   - ゴミ箱アイコンクリックで削除
   - （オプション）確認ダイアログ

### コンポーネント構成案
```
src/
├── components/
│   ├── TodoForm.tsx      # 新規Todo追加フォーム
│   ├── TodoList.tsx      # Todo一覧コンテナ
│   ├── TodoItem.tsx      # 個別Todo項目（表示・編集・削除）
│   └── Header.tsx        # ヘッダー部分（オプション）
├── hooks/
│   └── useTodos.tsx      # Todo操作のカスタムフック
├── types/
│   └── todo.ts           # Todo型定義
├── api/
│   └── todos.ts          # API通信関数
└── App.tsx               # メインコンポーネント
```

### 状態管理
- React Hooksベース（useState, useEffect）
- カスタムフック（useTodos）でAPI呼び出しとstate管理を集約
- 必要に応じてContext APIやZustandも検討可能

### API連携
- バックエンド: `http://localhost:8000/api/todos`
- HTTPクライアント: axios または fetch
- 必要なエンドポイント:
  - `GET /api/todos` - 一覧取得
  - `POST /api/todos` - 新規作成
  - `PATCH /api/todos/{id}` - 更新
  - `DELETE /api/todos/{id}` - 削除
  - `PATCH /api/todos/{id}/toggle` - 完了トグル

### 型定義
```typescript
interface Todo {
  id: number;
  title: string;
  is_completed: boolean;
  due_date: string | null;
  created_at: string;
  updated_at: string;
}
```

### 実装の進め方
1. 型定義作成（types/todo.ts）
2. API通信関数作成（api/todos.ts）
3. カスタムフック作成（hooks/useTodos.tsx）
4. コンポーネント作成（TodoForm, TodoItem, TodoList）
5. App.tsxでコンポーネント統合
6. スタイリング調整

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
