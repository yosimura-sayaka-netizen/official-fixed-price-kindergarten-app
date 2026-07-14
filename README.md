# 新制度幼稚園 公定価格計算ツール

新制度幼稚園向けの公定価格計算Webアプリです。

## 公開方法

この `github-pages` フォルダの中身を、新しいGitHubリポジトリのルートに配置してください。

GitHubで公開する手順:

1. GitHubで新しいリポジトリを作成します。
2. このフォルダ内のファイル一式をリポジトリへアップロードします。
3. リポジトリの `Settings` を開きます。
4. `Pages` を開きます。
5. `Build and deployment` の `Source` を `Deploy from a branch` にします。
6. `Branch` は `main`、フォルダは `/root` を選択します。
7. `Save` を押します。

公開URLは通常、次の形式になります。

```text
https://<GitHubユーザー名>.github.io/<リポジトリ名>/
```

## ファイル構成

```text
.
├── index.html
├── styles.css
├── app.js
├── region-data.js
├── addition-unit-data.js
├── capacity-over-data.js
├── assets/
│   └── price-table-preview.png
├── .nojekyll
├── .gitignore
└── README.md
```

## 注意事項

- このアプリは静的HTML/JavaScriptで動作します。サーバーやデータベースは不要です。
- 施設名・年度で保存した計算データは、利用者のブラウザ内に保存されます。GitHub上には保存されません。
- 公開リポジトリにした場合、単価データや地域区分データは誰でも閲覧できます。
- 単価表を更新した場合は、生成済みのJavaScriptファイルも更新してから再公開してください。
