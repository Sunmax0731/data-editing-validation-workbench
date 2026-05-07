export const productProfile = {
  "repository": "data-editing-validation-workbench",
  "title": "データ編集・検証ワークベンチ",
  "domain": "VSCodeExtension",
  "hostApp": null,
  "rank": 34,
  "ideaNo": 4,
  "overview": "JSON、CSV、SQLite、APIレスポンス、正規表現をVS Code内で扱う。入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
  "problem": "小さなデータ確認のために複数アプリを開く必要がある。",
  "differentiation": "開発中の設定や検証結果をワークスペース内に保存する。",
  "publish": "GitHub Release / VSIX",
  "surface": "VS Code extension + webview",
  "entity": "data validation job",
  "requiredFields": [
    "id",
    "title",
    "source",
    "dataKind",
    "schema",
    "owner",
    "acceptance"
  ],
  "warningField": "sampleData",
  "benchmarkRepos": [
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/git-release-publish-assistant",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
