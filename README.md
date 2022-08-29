# Morpho - アセスメント自動採点アプリ

このリポジトリは Code Chrysalis の生徒であるときに作成しました。

This was created during my time as a student at Code Chrysalis.

## このアプリについて

[Heroku](https://morpho-production.herokuapp.com/) でこのアプリのデモを確認できます。

問題に沿ってユーザーから送信されたコードを自動で採点し、結果を保存してくれるツールです。
管理者はユーザーに対しコメントを残すことができます。

## 使用しているライブラリ

- Frontend: React, monaco-editor-react
- Backend: knex, express, react-dom-router
- DB: postgres
- Deploy: Heroku
- サインアップ / ログイン機能: Firebase 認証
- ユーザーのコードテスト用: lodash
- 実行環境: Node.js

## セットアップ

このアプリを動かすためには、以下の手順で環境のセットアップを行なってください。

### Downloading and installing steps

repository を clone します。

```
$ git clone https://github.com/codechrysalis/cct1-project.continuous-delivery-react-team2.git
```

repository に移動します。

```
$ cd cct1-project.continuous-delivery-react-team2
```

dependencies をインストールします。

```
$ npm init
```

サーバーの立ち上げ。
データテーブルの作成と、migration、 seed の実行を同時に行います。
[localhost:9000](localhost:9000) で確認できます。

```
$ npm run start
```

### その他のコマンド

ホットリロードで React を起動する

```
$ npm run hack
```

静的ファイルを build する

```
$ npm run build
```

## このアプリができること

- ユーザーが送信したコードの採点（問題は 1 種類）
  - 現象はフィボナッチ数列の問題が表示されていますが、テストできるのは「1 を返す関数」のみです 😢
- Gmail か メールアドレス + パスワード を使ってサインアップ（/signup）ログイン（/login）することができます。Heroku で試す場合テスト用として以下をご利用ください。
  - メール: bayegofun@rapt.be
  - パスワード: JiKqfP@w\*(0y

## 今後の開発予定

- [ ] 問題数を増やす
- [ ] 生徒 1 人につき 1 アカウント
- [ ] ニックネーム機能
- [ ] インストラクターがコメントすると生徒にメール通知が来る機能
- [ ] 管理者画面（/admin）を管理者のみに限定
- [ ] 管理者は管理画面でユーザーの試行回数、正誤、解くのにかかった時間、最終的なコードを確認できる
- [ ] 生徒が自分のアセスメント機能を見直せる機能
- [ ] Github 認証
- [ ] メールでのサインアップ通知
- [ ] 管理者はユーザーが行なった一連の操作を動画で確認できる
- [ ] コホートごとの分析機能
- [ ] Google Spread Sheet への書き出し機能
