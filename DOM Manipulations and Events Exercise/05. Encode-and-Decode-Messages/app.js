function encodeAndDecodeMessages() {
    let textAreas = document.querySelectorAll('textarea');
    let inputArea = textAreas[0];
    let outputArea = textAreas[1];
    let buttons = document.querySelectorAll('button');
    let encodeBtn = buttons[0];
    let decodeBtn = buttons[1];
    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode(){
        let encryptedMessageArr = [];
        let input = inputArea.value;
        for(let i=0; i< input.length; i++){
            let symb = input.charCodeAt(i);
            encryptedMessageArr.push(String.fromCharCode(symb + 1));
        }
        inputArea.value = '';
        outputArea.value = encryptedMessageArr.join('');
    }

    function decode(){
        let encrypted = outputArea.value;
        let decryptedMessageArr = [];
        for(let i= 0; i< encrypted.length; i++){
            let symb = encrypted.charCodeAt(i);
            decryptedMessageArr.push(String.fromCharCode(symb - 1));
        }
        outputArea.value = decryptedMessageArr.join('');
    }


}