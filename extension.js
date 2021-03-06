var vscode = require('vscode');
var opn = require('opn');
var i18nHelper = require('./i18n-helper');

var config = JSON.parse(process.env.VSCODE_NLS_CONFIG);
var locale = config.locale;


function activate(context) {

    var disposable = vscode.commands.registerCommand('peakchen90.openInBrowser', function (e) {
        var document = vscode.window.activeTextEditor.document;
        var languageId = document.languageId;
        var filename = document.fileName;
        var message = i18nHelper(locale, 'nonHTML.warn', 'Unable to open non-HTM or non-HTML files');
        if (languageId === 'html') {
            opn(filename);
        } else if (e) {
            vscode.window.showWarningMessage(message);
        }
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;