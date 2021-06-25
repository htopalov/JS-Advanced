function solve() {
    let totalPrice = 0;
    let addButton = document.querySelector('form button');
    addButton.addEventListener('click', onAdd);
    let divOutput = document.querySelector('#outputs');
    let titleField = document.querySelector('input[placeholder="Add Title"]');
    let yearField = document.querySelector('input[placeholder="Add Year"]');
    let priceField = document.querySelector('input[placeholder="Add Price"]');

    function onAdd(e){
        e.preventDefault();
        if (titleField.value !== '' && Number(yearField.value) > 0 && Number(priceField.value) > 0) {
            let newBookDiv = document.createElement('div');
            newBookDiv.className = 'book';
            let bookParagraph = document.createElement('p');
            bookParagraph.textContent = `${titleField.value} [${yearField.value}]`;
            newBookDiv.appendChild(bookParagraph);
            let buyButton = document.createElement('button');
            buyButton.textContent = `Buy it only for ${Number(priceField.value).toFixed(2)} BGN`;
            buyButton.addEventListener('click', onBuy);
            newBookDiv.appendChild(buyButton);
            if (Number(yearField.value) >= 2000) {
                let moveButton = document.createElement('button');
                moveButton.textContent = 'Move to old section';
                moveButton.addEventListener('click', onMove);
                newBookDiv.appendChild(moveButton);
                divOutput.children[1].children[1].appendChild(newBookDiv);
            } else {
                let discountedPrice =  Number(priceField.value) - Number(priceField.value) * 0.15;
                buyButton.textContent = `Buy it only for ${discountedPrice.toFixed(2)} BGN`;
                divOutput.children[0].children[1].appendChild(newBookDiv);
            }

        }

        titleField.value = '';
        yearField.value = '';
        priceField.value = '';
    }

    function onMove(e){
        let discountedPrice =  Number(priceField.value) - Number(priceField.value) * 0.15;
        e.target.textContent = `Buy it only for ${discountedPrice.toFixed(2)} BGN`;
        let cloned = e.target.parentElement.cloneNode(true);
        cloned.children[1].remove();
        e.target.parentElement.remove();
        divOutput.children[0].children[1].appendChild(cloned);
    }


    function onBuy(e){
        let priceMatch = e.target.textContent.match(/[\d\.]+/);
        let totalProfitField = document.querySelectorAll('h1')[1];
        if (priceMatch) {
            totalPrice += Number(priceMatch[0]);
            totalProfitField.textContent = `Total Store Profit: ${totalPrice.toFixed(2)} BGN`
        }
        e.target.parentElement.remove();
        
    }
}