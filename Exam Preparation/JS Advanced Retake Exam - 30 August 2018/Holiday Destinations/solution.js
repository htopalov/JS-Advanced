function addDestination(e) {
    let labelInputs = document.querySelectorAll('.inputData ');
    let seasonInput = document.querySelector('.custom-select');
    let cityName = labelInputs[0].value;
    let countryName = labelInputs[1].value;
    let season = seasonInput.value;
    let destinationList = document.querySelector('#destinationsList');
    if (cityName !== '' && countryName !== '') {
        let row = document.createElement('tr');
        let destinationCell = document.createElement('td');
        destinationCell.textContent = `${cityName}, ${countryName}`;
        let seasonCell = document.createElement('td');
        seasonCell.textContent = season[0].toUpperCase() + season.slice(1);
        row.appendChild(destinationCell);
        row.appendChild(seasonCell);
        destinationList.appendChild(row);
        switch (season) {
            case 'summer': 
            let summerCounterField = document.querySelector('#summer');
            let summerCounter = Number(summerCounterField.value);
            summerCounterField.value = ++summerCounter;
                break;
            case 'autumn':
            let autumnCounterField = document.querySelector('#autumn');
            let autumnCounter = Number(autumnCounterField.value);
            autumnCounterField.value = ++autumnCounter;
                break;
            case 'winter':
            let winterCounterField = document.querySelector('#winter');
            let winterCounter = Number(winterCounterField.value);
            winterCounterField.value = ++winterCounter;
                break;
            case 'spring':
            let springCounterField = document.querySelector('#spring');
            let springCounter = Number(springCounterField.value);
            springCounterField.value = ++springCounter;
                break;
        }
    }
    Array.from(labelInputs).forEach(e => e.value = '');
}