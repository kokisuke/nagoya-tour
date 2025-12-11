# 🌸 名古屋観光アプリ（Nagoya Tourism App）

名古屋の25箇所の観光地・施設の情報を一覧で確認でき、**リアルタイムで混雑状況**を表示するWebアプリケーションです。  
インテリジェントな混雑度予測システムと外部API連携により、快適な観光体験をサポートします。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-brightgreen.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![API Ready](https://img.shields.io/badge/API-Ready-brightgreen.svg)](https://shields.io/)

## 🚀 デモ

現在の状態では、**予測アルゴリズム**による混雑度表示を提供しています。  
外部APIを設定することで、より高精度なリアルタイムデータを取得できます。

**📂 プロジェクトファイル**:
- `index.html` - メインアプリケーション
- `api-guide.html` - API設定ガイド（日本語）
- `app.js` - 混雑監視システムとAPI統合
- `style.css` - レスポンシブUI
- `README.md` - プロジェクト説明書

---

## ✨ 主な機能

### 📍 観光スポット情報
- **25箇所の厳選スポット**: オアシス21、名古屋城、熱田神宮、東山動植物園、レゴランド・ジャパンなど
- **詳細情報表示**: カテゴリ、エリア、混雑状況を一目で確認
- **高品質画像**: 著作権フリーの美しい写真とSVGフォールバック

### 🔄 リアルタイム混雑監視
- **自動更新**: 5分間隔で混雑状況を自動更新
- **手動更新**: ワンクリックで即座に最新情報を取得
- **インテリジェント予測**: 時間帯・曜日・施設タイプに基づく高精度な混雑度予測
- **視覚的フィードバック**: 更新時のスムーズなアニメーション

### 🎨 ユーザーエクスペリエンス
- **レスポンシブデザイン**: PC・タブレット・スマートフォン対応
- **直感的UI**: 色分けされた混雑レベルとアイコン
- **リアルタイム通知**: 更新完了の通知表示

---

## 🔧 技術スタック

| 種類           | 内容                                    |
|----------------|-----------------------------------------|
| フロントエンド | HTML5 / CSS3 / Vanilla JavaScript (ES6+) |
| 画像ソース     | Unsplash API / Wikimedia Commons / SVG Fallback |
| デザイン       | Flexbox / CSS Grid / CSS Animations     |
| 監視システム   | Custom JavaScript Class (CrowdMonitor)  |
| 外部API統合    | Google Maps Places API / OpenWeatherMap / Twitter API v2 |
| データ永続化   | LocalStorage (API設定・ユーザー設定)    |

---

## 🎯 混雑レベル判定システム

### 混雑度レベル
| レベル | 説明             | 表示色        | 判定条件                    |
|--------|------------------|---------------|----------------------------|
| 0      | 空いています     | 🟢 緑色      | 来場者数が通常の50%以下     |
| 1      | やや混雑         | 🟡 黄色      | 来場者数が通常の50-75%      |
| 2      | 混雑しています   | 🟠 オレンジ   | 来場者数が通常の75-90%      |
| 3      | 非常に混雑       | 🔴 赤色      | 来場者数が通常の90%以上     |

### 予測アルゴリズム
- **時間帯分析**: 観光地は10-16時に混雑、飲食店は12-14時・18-20時に混雑
- **曜日分析**: 週末は観光地・テーマパークの混雑度が上昇
- **施設タイプ別最適化**: 各カテゴリに特化した予測モデル
- **動的調整**: ±1レベルのランダム変動で実際の状況を模擬

---

## 🔌 API統合システム

### 対応API
| API | 機能 | 状態 | 料金 |
|-----|------|------|------|
| **🗺️ Google Maps Places API** | 実際の混雑データ・営業時間・レビュー数 | ✅ 統合済み | 月28,500リクエスト無料 |
| **🌤️ OpenWeatherMap API** | 天気情報による混雑度調整 | ✅ 統合済み | 1日1,000リクエスト無料 |
| **🐦 Twitter API v2** | SNS投稿からの混雑分析 | ⚠️ CORS制限あり | 月50,000ツイート無料 |

### API設定方法
1. **ブラウザで `api-guide.html` を開く**
2. **各APIの詳細な設定手順を確認**
3. **アプリの「⚙️ API設定」からAPIキーを入力**
4. **LocalStorageに安全に保存される**

**注意**: APIキーなしでも予測アルゴリズムで動作します。

---

## 🗂 ファイル構成

```
nagoya-tour/
├── index.html          # メインHTML（エントリーポイント）
├── api-guide.html      # API設定ガイド（日本語）
├── style.css           # レスポンシブCSS（API設定UI含む）
├── app.js              # 混雑監視システム + API統合
├── README.md           # プロジェクト説明書
└── update_images.js    # 画像管理ユーティリティ
```

---

## 🚀 セットアップ・使用方法

### 基本セットアップ
```bash
# プロジェクトをダウンロード
cd nagoya-tour

# ローカルサーバーを起動
python3 -m http.server 8080

# ブラウザでアクセス
open http://localhost:8080
```

### 📖 API設定（オプション）
```bash
# API設定ガイドを開く
open http://localhost:8080/api-guide.html
```

### 機能の使い方
1. **自動更新**: ページ読み込み後3秒で自動的に混雑監視が開始
2. **手動更新**: 「🔄 今すぐ更新」ボタンで即座に最新データを取得
3. **リアルタイム表示**: 各カードの下部に最終更新時刻とデータソースを表示

---

## 📊 含まれる観光スポット（25箇所）

### 🏛️ 観光地・文化施設（18箇所）
- **オアシス21** - 栄エリアの象徴的商業施設
- **熱田神宮** - 歴史ある神社
- **名古屋城** - 名古屋のシンボル
- **名古屋市科学館** - プラネタリウムで有名
- **名古屋港水族館** - 海の生き物との出会い
- **徳川園** - 日本庭園の美しさ
- **東山動植物園** - 動物と植物の楽園
- **ノリタケの森** - 陶磁器の文化
- **名古屋テレビ塔** - 街のランドマーク
- **白鳥庭園** - 静寂な日本庭園
- **四間道** - 江戸時代の面影を残す街並み
- **名古屋市美術館** - 現代アートの展示
- **覚王山日泰寺** - 仏教寺院
- **名古屋市博物館** - 地域の歴史と文化
- **名古屋港ガーデンふ頭** - 港の景観を楽しむ
- **有松・鳴海絞会館** - 伝統工芸体験
- **文化のみち橦木館** - 歴史的建造物
- **大須観音** - 庶民の信仰を集める寺院
- **ヤマザキマザック美術館** - 芸術作品の展示
- **名古屋城本丸御殿** - 復元された歴史的建造物

### 🛍️ ショッピング・グルメ（2箇所）
- **大須商店街** - 下町情緒あふれる商店街
- **円頓寺商店街** - レトロな雰囲気の商店街

### 🎢 エンターテインメント（1箇所）
- **レゴランド・ジャパン** - ファミリー向けテーマパーク

### ⚽ スポーツ施設（2箇所）
- **名古屋ドーム（バンテリンドーム）** - プロ野球の本拠地
- **パロマ瑞穂スタジアム** - サッカー・ラグビーの聖地

### 機能の使い方
1. **自動更新**: ページ読み込み後3秒で自動的に混雑監視が開始
2. **手動更新**: 「🔄 今すぐ更新」ボタンで即座に最新データを取得
3. **API設定**: 「⚙️ API設定」でGoogle Maps・天気情報APIを追加
4. **リアルタイム表示**: 各カードの下部に最終更新時刻とデータソースを表示

---

## 💡 現在の実装状況

### ✅ 完成済み機能
- **📍 25箇所の名古屋観光スポット**データベース
- **🔄 リアルタイム混雑監視システム**（CrowdMonitorクラス）
- **🤖 インテリジェント予測アルゴリズム**（時間・曜日・カテゴリ別）
- **🌤️ 天気情報連動**（OpenWeatherMap API対応）
- **🗺️ Google Places API統合**（実データ取得）
- **⚙️ API設定UI**（モーダル・LocalStorage保存）
- **📱 レスポンシブデザイン**（全デバイス対応）
- **🎨 美しいUI/UX**（アニメーション・通知機能）

### 🔧 技術的特徴
- **バニラJavaScript**: フレームワーク不要のシンプル構成
- **エラーハンドリング**: API障害時の自動フォールバック
- **画像最適化**: Wikimedia + Unsplash + SVG fallback
- **セキュリティ**: APIキーの安全な管理（LocalStorage）
- **パフォーマンス**: 適切なレート制限とキャッシング

### 📋 今後の拡張案
- **🔍 フィルタリング機能**: カテゴリ・エリア・混雑度での絞り込み
- **🗺️ 地図表示**: Google Maps連動で位置情報表示
- **📊 統計機能**: 混雑傾向の可視化・分析
- **🌐 多言語対応**: 英語・中国語・韓国語サポート
- **📱 PWA化**: オフライン対応・アプリ化

---

## 📱 動作環境・ブラウザ対応

### 対応ブラウザ
- **Chrome** 90+ ✅
- **Firefox** 88+ ✅  
- **Safari** 14+ ✅
- **Edge** 90+ ✅

### デバイス対応
- **デスクトップ** - フル機能利用可能
- **タブレット** - レスポンシブデザイン最適化
- **スマートフォン** - モバイルファーストUI

---

## 🤝 コントリビューション

プルリクエストやIssueの報告を歓迎します！

### 開発に参加する
```bash
# 開発環境セットアップ
git clone https://github.com/your-username/nagoya-tour.git
cd nagoya-tour

# 機能ブランチを作成
git checkout -b feature/new-feature

# 変更をコミット
git commit -m "Add: 新機能の追加"

# プルリクエストを作成
git push origin feature/new-feature
```

### 課題・改善提案
- [Issues](https://github.com/your-username/nagoya-tour/issues) で課題や機能要望を報告
- [Discussions](https://github.com/your-username/nagoya-tour/discussions) でアイデアを議論

---

## 📄 ライセンス

このプロジェクトは [MIT License](LICENSE) の下で公開されています。

---

---

## 📱 動作環境・ブラウザ対応

### 対応ブラウザ
- **Chrome** 90+ ✅
- **Firefox** 88+ ✅  
- **Safari** 14+ ✅
- **Edge** 90+ ✅

### デバイス対応
- **デスクトップ** - フル機能利用可能
- **タブレット** - レスポンシブデザイン最適化
- **スマートフォン** - モバイルファーストUI

---

## 🤝 コントリビューション

プルリクエストやIssueの報告を歓迎します！

### 開発に参加する
```bash
# 開発環境セットアップ
git clone https://github.com/kokihashimoto/nagoya-tour.git
cd nagoya-tour

# 機能ブランチを作成
git checkout -b feature/new-feature

# 変更をコミット
git commit -m "Add: 新機能の追加"
```

---

## 👥 作成者・謝辞

**開発者**: [@kokihashimoto](https://github.com/kokihashimoto)

**画像提供**:
- [Unsplash](https://unsplash.com/) - 高品質な著作権フリー画像
- [Wikimedia Commons](https://commons.wikimedia.org/) - 名古屋観光地の写真

**技術参考**:
- [MDN Web Docs](https://developer.mozilla.org/) - Web技術リファレンス
- [CSS-Tricks](https://css-tricks.com/) - CSS設計パターン

---

## 📄 ライセンス

このプロジェクトは [MIT License](LICENSE) の下で公開されています。

---

<div align="center">
  <p><strong>🌸 名古屋の素晴らしい観光体験をお楽しみください！ 🌸</strong></p>
  <p><em>Made with ❤️ for Nagoya tourism by @kokihashimoto</em></p>
</div>

