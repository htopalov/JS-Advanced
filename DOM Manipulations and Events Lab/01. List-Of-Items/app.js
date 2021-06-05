function addItem() {
    let input = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');
    let liElement = document.createElement('li');
    liElement.textContent = input.value;
    ulElement.appendChild(liElement);
    input.value = '';
}