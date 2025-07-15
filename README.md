# nagoya-tour
名古屋観光アプリ
# 名古屋観光アプリ（Nagoya Tourism App）

名古屋の観光地・施設の情報を一覧で確認でき、**リアルタイムで混雑状況**を表示するWebアプリケーションです。  
Firebase Realtime Databaseと連携することで、常に最新の混雑度をユーザーに提供します。

---

## 🏷 主な機能

- 名古屋市内の観光スポットをカード形式で表示
- スポットごとの画像・カテゴリ・エリア情報を表示
- **Firebase Realtime Database**と連携して、混雑状況をリアルタイムで取得・表示
- 混雑度に応じた色分け（緑・黄・橙・赤）

---

## 🔧 技術スタック

| 種類           | 内容                           |
|----------------|--------------------------------|
| フロントエンド | HTML / CSS / JavaScript        |
| データベース   | Firebase Realtime Database      |
| 外部連携       | Firebase JavaScript SDK         |

---

## 🔄 混雑レベルの表示ルール

| レベル | 説明             | 表示色     |
|--------|------------------|------------|
| 0      | 空いています     | 緑（light green） |
| 1      | やや混雑         | 黄（yellow）      |
| 2      | 混雑しています   | 橙（orange）      |
| 3      | 非常に混雑       | 赤（red）         |

---

## 🗂 ディレクトリ構成

nagoya-tourism-app/
├── index.html # メインHTML
├── style.css # スタイル
├── app.js # Firebase連携＆描画ロジック
├── README.md # このファイル
└── data/
└── nagoya_spots.json # Firebaseインポート用JSON（開発時用）

---

## 🚀 セットアップ手順

1. [Firebase](https://firebase.google.com/) にアクセスしてプロジェクト作成
2. Realtime Database を有効化し、「テストモード」に設定
3. JSONエディタに `data/nagoya_spots.json` をインポート
4. `index.html` の `<script>` 内の Firebase 設定を、自分のプロジェクト情報に書き換え
5. ブラウザで `index.html` を開けば動作確認可能！

---

## 📡 今後の拡張案

- 管理画面から混雑度を更新できるUI（管理者向け）
- カテゴリ／エリア別の絞り込み機能
- Google Maps APIと連携して地図表示
- 多言語対応（英語・中国語など）

---

## 📌 ライセンス

このプロジェクトは個人学習目的で作成されています。商用利用は事前にご相談ください。

