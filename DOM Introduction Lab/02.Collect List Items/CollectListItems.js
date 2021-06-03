function extractText() {
    let elements = document.getElementsByTagName('li');
    let textArea = document.getElementById('result');
    let result = Array.from(elements);
    for (const text of result) {
        textArea.value += text.textContent + '\n';
    }
}