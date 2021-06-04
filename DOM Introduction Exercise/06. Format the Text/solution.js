function solve() {
  let inputText = document.getElementById('input').value.split('.').filter(e => e.length > 0);
  let output = document.getElementById('output');
  for (let i = 0; i < inputText.length; i += 3) {
    let arr = [];
    for (let j = 0; j < 3; j++) {
      if (inputText[i + j]) {
        arr.push(inputText[i + j]);
      }
    }
    let p = arr.join('. ') + '.';
    output.innerHTML += `<p>${p}</p>`;
  }

}