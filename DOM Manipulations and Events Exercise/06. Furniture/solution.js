function solve() {
  let input = document.querySelectorAll('textarea');
  let buttons = document.querySelectorAll('button');
  let genBtn = buttons[0];
  let buyBtn = buttons[1];
  genBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);
  let tableBody = document.querySelector('tbody');

  function generate(){
    let furnitureArr = JSON.parse(input[0].value);
    for (const obj of furnitureArr) {
      let row = document.createElement('tr');
      for (const key in obj) {
        let cell = document.createElement('td');
        if (key == 'img') {
          let imgElement = document.createElement('img');
          imgElement.src = obj[key];
          cell.appendChild(imgElement);
        }
        cell.textContent = obj[key];
        row.appendChild(cell);
      }
      let chkBox = document.createElement('input');
      chkBox.setAttribute('type','checkbox');
      row.appendChild(chkBox);
      tableBody.appendChild(row);
    }
  }

  function buy(){
    let totalPrice = 0;
    let totalFactor = 0;
    let names = [];
    let rows = Array.from(document.getElementsByTagName('tr')).filter(e=> e.children[4].checked == true);
    for (const row of rows) {
      names.push(row.children[1].textContent);
      totalPrice += Number(row.children[2].textContent);
      totalFactor += Number(row.children[3].textContent);
    }
    input[1].value += `Bought furniture: ${names.join(', ')}.\n`;
    input[1].value += `Total price: ${totalPrice.toFixed(2)}\n`;
    input[1].value +=  `Average decoration factor: ${totalFactor / rows.length}`;
    
  }

}