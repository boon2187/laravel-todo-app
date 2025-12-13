#!/bin/bash
set -e

echo "Initializing Laravel storage directories..."

# storage/framework 配下のディレクトリ構造を作成
mkdir -p /var/www/backend/storage/framework/sessions
mkdir -p /var/www/backend/storage/framework/views
mkdir -p /var/www/backend/storage/framework/cache/data
mkdir -p /var/www/backend/storage/framework/testing

# .gitignore ファイルを作成（既存のものがない場合）
touch /var/www/backend/storage/framework/sessions/.gitignore
touch /var/www/backend/storage/framework/views/.gitignore
touch /var/www/backend/storage/framework/cache/.gitignore
touch /var/www/backend/storage/framework/cache/data/.gitignore
touch /var/www/backend/storage/framework/testing/.gitignore

# storage/logs ディレクトリを作成
mkdir -p /var/www/backend/storage/logs
touch /var/www/backend/storage/logs/.gitignore

# bootstrap/cache ディレクトリを確保
mkdir -p /var/www/backend/bootstrap/cache

# すべての storage と bootstrap/cache に適切な権限を設定
chown -R www-data:www-data /var/www/backend/storage/framework
chown -R www-data:www-data /var/www/backend/storage/logs
chown -R www-data:www-data /var/www/backend/bootstrap/cache

chmod -R 775 /var/www/backend/storage/framework
chmod -R 775 /var/www/backend/storage/logs
chmod -R 775 /var/www/backend/bootstrap/cache

echo "Storage directories initialized. Starting PHP-FPM..."

# PHP-FPM を起動
exec php-fpm
