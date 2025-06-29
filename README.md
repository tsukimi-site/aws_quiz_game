# AWS Quiz Game

- AWS資格試験の練習問題を楽しく学習できるWebアプリケーションです。
- シンプルなhtml, js, cssから成り、GitHub Pagesでもローカルでそのまま動作可能です。
- （問題は生成AIに作ってもらったので不正確かもしれません。すみません）

## 経緯
- 「[Amazon Q CLI でゲームを作ろう Tシャツキャンペーン](https://aws.amazon.com/jp/blogs/news/build-games-with-amazon-q-cli-and-score-a-t-shirt/)」

## 🎯 特徴

- **複数コース対応**: 複数のAWS資格試験に対応
- **ランダム出題**: 問題がランダムに出題されます
- **問題数制御**: `question_number`設定に応じて出題数を調整
- **詳細な解説**: 各問題に解説付き
- **結果表示**: 正解数と詳細な振り返りが可能
- **GitHub Pages対応**: 静的サイトとして簡単に公開可能

## 🚀 使用方法

### 1. 問題の追加・更新

`questions/` フォルダにYAMLファイルを追加または更新します。

```yaml
course_detail:
  title: "コース名"
  question_number: 5       # 出題数

questions:
  - id: 1
    title: "問題のタイトル"
    text: "問題文"
    choices:
      - "選択肢1"
      - "選択肢2"
      - "選択肢3"
      - "選択肢4"
    answer: "正解の選択肢"  # または answers: [1, 2] で複数選択
    explanation: "解説文"
```

### 2. 公開用ファイルの生成

```bash
python3 generate_quiz.py
```

### 3. GitHub Pagesで公開

1. GitHubリポジトリを作成
2. `docs/` フォルダの内容をリポジトリにプッシュ
3. GitHub PagesでSource を `docs` フォルダに設定

## 📁 プロジェクト構造

```
├── questions/           # YAMLファイル（問題の元データ）
│   `── *.yaml
├── docs/               # 公開用ファイル（GitHub Pages用）
│   ├── index.html      # メインHTML
│   ├── styles.css      # スタイルシート
│   ├── app.js          # JavaScript
│   `── quiz_data.js    # 問題データ（自動生成）
├── icons/              # アイコン画像
├── images/             # 問題用画像
├── generate_quiz.py    # 公開用ファイル生成スクリプト
`── README.md
```

## 🎮 操作方法

1. **コース選択**: トップページでコースを選択
2. **問題回答**: 選択肢をクリックして回答
3. **結果確認**: 全問題終了後、結果と解説を確認
4. **再挑戦**: 「もう一度挑戦」で同じコースを再実行

## 🛠️ カスタマイズ

### 問題形式

- **単一選択**: `answer` フィールドを使用
- **複数選択**: `multiple: true` と `answers` フィールドを使用
- **画像付き問題**: `image` フィールドで画像パスを指定

## 📄 ライセンス

MIT License
