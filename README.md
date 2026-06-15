# mathmatic_task
# jsPsych Calculation Task: Student ID + Public IP + Google Sheets

## 概要

- GitHub Pagesで `index.html` を公開
- 学生はスマホでアクセス
- 最初に学生番号・グループ番号・条件を入力
- public IPを取得
- 課題終了後にGoogle Apps Script経由でGoogleスプレッドシートに保存

## 重要

Apps Scriptの`doPost(e)`だけでアクセス元IPを直接取得する方法は安定しないため、この版ではブラウザ側でpublic IPを取得して、その値をスプレッドシートへ送っています。

## 手順

1. Googleスプレッドシートを作成
2. 拡張機能 → Apps Script
3. `Code.gs` を貼り付け
4. デプロイ → 新しいデプロイ → ウェブアプリ
5. 実行ユーザー：自分
6. アクセスできるユーザー：全員
7. WebアプリURLをコピー
8. `index.html` の `GAS_WEB_APP_URL` に貼る
9. GitHubに `index.html` をアップロード
10. Settings → Pages → Deploy from a branch → main / root

## 不正出席チェック

全員が教室Wi-Fiに接続している前提なら、public IPが異なる提出は要確認にできます。

ただし、以下の場合は異なるIPになります。

- 学生がモバイル通信を使っている
- VPNを使っている
- 教室Wi-Fiではなく別SSIDに接続している
- 大学ネットワークが複数の出口IPを持っている
- IPv4/IPv6の出方が端末で異なる

授業開始時に「必ず教室Wi-Fiに接続」「VPNを切る」と指示することを推奨します。
