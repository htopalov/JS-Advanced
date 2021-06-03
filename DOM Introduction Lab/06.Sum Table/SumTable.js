function sumTable() {
  let rows = Array.from(document.getElementsByTagName('tr'));
  let sum = 0;
  for(let i = 1; i< rows.length -1; i++){
      sum += Number(rows[i].lastChild.textContent);
  }
  document.getElementById('sum').textContent = sum;
}