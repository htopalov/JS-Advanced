function addItem() {
    let inputElement = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');
    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    let deleteLnk = document.createElement('a');
    deleteLnk.textContent = '[Delete]';
    deleteLnk.href = '#';
    liElement.appendChild(deleteLnk);
    ulElement.appendChild(liElement);
    inputElement.value = '';
    deleteLnk.addEventListener('click', onClick);

    function onClick(event){
        event.target.parentNode.remove();
    }

}