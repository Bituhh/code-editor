const editorWrapper = document.getElementById('editor-wrapper');
console.log(editorWrapper)
const codeMirror = CodeMirror(editorWrapper, {
    value: 'function tst() {return true;}\n',
    mode: 'javascript',
    styleActiveLine: true,
    lineNumbers: true,
    tabSize: 2
});
