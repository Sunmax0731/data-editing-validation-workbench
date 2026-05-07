function activate(context) {
  const disposable = vscode.commands.registerCommand("data-editing-validation-workbench.open", () => {
    vscode.window.showInformationMessage("データ編集・検証ワークベンチ: npm test で検証できます。");
  });
  context.subscriptions.push(disposable);
}

function deactivate() {}

const vscode = require("vscode");
module.exports = { activate, deactivate };
