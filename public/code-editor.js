// function getCaretPosition() {
//     if (window.getSelection && window.getSelection().getRangeAt) {
//         var range = window.getSelection().getRangeAt(0);
//         var selectedObj = window.getSelection();
//         var rangeCount = 0;
//         var childNodes = selectedObj.anchorNode.parentNode.childNodes;
//         for (var i = 0; i < childNodes.length; i++) {
//             if (childNodes[i] == selectedObj.anchorNode) {
//                 break;
//             }
//             if (childNodes[i].outerHTML)
//                 rangeCount += childNodes[i].outerHTML.length;
//             else if (childNodes[i].nodeType == 3) {
//                 rangeCount += childNodes[i].textContent.length;
//             }
//         }
//         return range.startOffset + rangeCount;
//     }
//     return -1;
// }

class CodeEditor {
    constructor(elementId) {
        this.codeEditor = document.getElementById(elementId);
        this.codeEditorGutter = document.createElement('div');
        this.codeEditorLines = document.createElement('div');
        this.codeEditor.appendChild(this.codeEditorGutter);
        this.codeEditor.appendChild(this.codeEditorLines);
        this.setStyling();
        this.setEventHandlers();
        this.content = '';
    }

    setStyling() {
        // Initializing codeEditor div
        this.codeEditor.classList.add('code-editor');

        // Initializing codeEditorGutter div
        this.codeEditorGutter.classList.add('code-editor-gutter');
        this.codeEditorGutter.innerHTML = '<div>1</div>';

        // Initializing codeEditorLines div
        this.codeEditorLines.classList.add('code-editor-lines');
        this.codeEditorLines.setAttribute('contenteditable', 'true');
        this.codeEditorLines.setAttribute('spellcheck', 'false');
        this.codeEditorLines.setAttribute('role', 'textarea');
    }

    setEventHandlers() {
        // removing format from paste
        this.codeEditorLines.addEventListener('paste', (e) => {
            e.preventDefault();
            const text = e.clipboardData.getData('text/plain');
            document.execCommand('insertHTML', false, text);
        });

        // adding default cursor to consider overflow
        this.codeEditorLines.addEventListener('mousemove', (e) => {
            if (e.offsetY > this.codeEditorLines.offsetHeight - 7 || e.offsetX > this.codeEditorLines.offsetWidth - 7) {
                this.codeEditorLines.style.cursor = 'default';
            } else {
                this.codeEditorLines.style.cursor = 'text';
            }
        });

        this.codeEditorLines.addEventListener('keydown', (e) => {
            const divElements = this.codeEditorLines.querySelectorAll('div');
            divElements.forEach((divElement, index) => {
                divElement.setAttribute('data-index', index.toString());
            });

            console.log();





            if (e.key === 'Enter') {
                this.content += '\n';
            } else if (e.key === 'Backspace') {
                // console.log(index);
                // if (selection.rangeCount === 1) {
                //     this.content = this.content.slice(0, this.content.length - 1);
                // }
            } else if (
                // e.key === 'Shift' ||
            // e.key === 'Control' ||
            // e.key === 'Alt' ||
            // e.key === 'AltGraph' ||
            // e.key === 'Tab' ||
            // e.key === 'Home' ||
            // e.key === 'End' ||
            // e.key === 'NumLock' ||
            // e.key === 'Escape' ||
            // e.key === 'ContextMenu' ||
            // e.key === 'CapsLock' ||
                e.key.length > 1) {
                // Do something with shift, control or tab
            } else {
                this.content += e.key;
            }
            console.log(this.content.split('\n').length);
            // this.codeEditorLines.innerText = this.content


        });
    }
}


// let divElement = document.getElementById('editor-wrapper');
new CodeEditor('editor');
//
//
// let currentLineNumber = 1;
// let codeEditorContent =
//
// const codeEditorLine = document.getElementById('code-editor-line');
// const codeEditorLineNumber = document.getElementById('code-editor-line-number');
//
// codeEditorLine.addEventListener('keydown', keyDownHandler);
//
// // function addNewLine() {
// //     const divElement = document.createElement('div');
// //     currentLineNumber = codeEditorLineNumber.querySelectorAll('div').length + 1;
// //     divElement.innerText = currentLineNumber.toString();
// //     codeEditorLineNumber.appendChild(divElement);
// //     currentLineNumber++;
// // }
//
// function keyDownHandler(event) {
//
//
//     // const pos = event.target.innerHTML.toString().indexOf('<div>');
//     // let divLength = event.target.querySelectorAll('div').length;
//     // let currentLineCount = divLength;
//     //
//     // if (pos !== 0) {
//     //     currentLineCount = divLength + 1;
//     // }
//     //
//     // console.log(pos, currentLineCount);
//
//     // console.log(pos);
//     // console.log(event.target.innerText.split('\n').length);
//     // console.log();
//
//
//     // if (event.key === 'Enter') {
//     //     addNewLine();
//     // }
// }
// //
