function attachEventsListeners() {
    //may need Array.from =>Judge
    let btnElements = Array.from(document.querySelectorAll('input[type="button"]'));
    btnElements.forEach(e=> e.addEventListener('click', onClick));
    let daysField = document.querySelector('#days');
    let hoursField = document.querySelector('#hours');
    let minutesField = document.querySelector('#minutes');
    let secondsField = document.querySelector('#seconds');

    function onClick(event){
        let btnId = event.target.id;
        if (btnId == 'daysBtn') {
            let days = Number(daysField.value);
            hoursField.value = days * 24;
            minutesField.value = days * 1440;
            secondsField.value = days * 86400;        
        } else if (btnId == 'hoursBtn') {
            let hours = Number(hoursField.value);
            minutesField.value = hours * 60;
            secondsField.value = hours * 3600;
            daysField.value = hours / 24;
        } else if (btnId == 'minutesBtn') {
            let minutes = Number(minutesField.value);
            secondsField.value = minutes * 60;
            hoursField.value = minutes / 60;
            daysField.value = minutes / 1440;
        } else {
            let seconds = Number(secondsField.value);
            minutesField.value = seconds / 60;
            hoursField.value = seconds / 3600;
            daysField.value = seconds / 86400;
        }
        
    }
}