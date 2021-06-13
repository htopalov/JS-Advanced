function validate() {
    const regex = /[a-z]+@[a-z]+\.[a-z]+/;
    let input = document.querySelector('#email');
    input.addEventListener('change', onChange);

    function onChange(event){
        if (!event.target.value.match(regex)) {
            event.target.className = 'error';
        } else {
            event.target.className = '';
        }
    }
}