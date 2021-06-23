function solution() {
    let addButton = document.querySelector('.card button');
    let giftNameField = document.querySelector('input[type="text"]');
    addButton.addEventListener('click', onClick);

    function onClick(e){
        e.preventDefault();
        let giftName = giftNameField.value;
        let liElement = document.createElement('li');
        liElement.className = 'gift';
        liElement.textContent = giftName;
        let sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.id = 'sendButton';
        sendButton.addEventListener('click', onSend);
        let discardButton = document.createElement('button');
        discardButton.textContent = 'Discard';
        discardButton.id = 'discardButton';
        discardButton.addEventListener('click', onDiscard);
        liElement.appendChild(sendButton);
        liElement.appendChild(discardButton);
        let listOfGifts = document.querySelectorAll('.card')[1].children[1];
        listOfGifts.appendChild(liElement);
        giftNameField.value = '';
        Array.from(listOfGifts.children)
             .sort((a,b)=> a.textContent.localeCompare(b.textContent))
             .forEach(li=> listOfGifts.appendChild(li));
    }

    function onSend(e){
        let sentGiftsList = document.querySelectorAll('.card')[2].children[1];
        let sentLiItem = e.target.parentElement.cloneNode(true);
        e.target.parentElement.remove();
        Array.from(sentLiItem.children).forEach(b=> b.remove());
        sentGiftsList.appendChild(sentLiItem);

    }
    function onDiscard(e){
        let discardGiftsList = document.querySelectorAll('.card')[3].children[1];
        let discardLiItem = e.target.parentElement.cloneNode(true);
        e.target.parentElement.remove();
        Array.from(discardLiItem.children).forEach(b=> b.remove());
        discardGiftsList.appendChild(discardLiItem);
    }
}