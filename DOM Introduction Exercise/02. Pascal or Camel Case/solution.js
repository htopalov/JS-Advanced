function solve() {
  let convention = document.getElementById('naming-convention').value.split(' ')[0];
  let inputStrArr = document.getElementById('text').value.toLowerCase().split(' ');
  let result = [];
  if (convention == 'Pascal') {
    for(let i = 0; i< inputStrArr.length; i++){
      let pascaled = inputStrArr[i][0].toUpperCase() + inputStrArr[i].slice(1);
      result.push(pascaled);
    }
  } else if (convention == 'Camel') {
    result.push(inputStrArr[0]);
    for(let i = 1; i < inputStrArr.length; i++){
      let cameled = inputStrArr[i][0].toUpperCase() + inputStrArr[i].slice(1);
      result.push(cameled);
    }
  } else {
    result.push('Error!');
  }

  document.getElementById('result').textContent = result.join('');
}