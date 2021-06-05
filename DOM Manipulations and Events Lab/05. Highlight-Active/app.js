function focused() {
    let inputElements = document.querySelectorAll('input[type="text"]');
    for (const el of inputElements) {
        el.addEventListener('focus', onFocus); 
        el.addEventListener('blur', onBlur);
    }
    function onFocus(event){
        event.target.parentNode.className = 'focused';
    }

    function onBlur(event){
        event.target.parentNode.className = '';
    }

}