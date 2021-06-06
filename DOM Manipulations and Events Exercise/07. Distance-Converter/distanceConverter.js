function attachEventsListeners() {
    let convertBtn = document.querySelector('#convert');
    let inputDist = document.querySelector('#inputDistance');
    let outputDist = document.querySelector('#outputDistance')
    let inputMenu = document.querySelector('#inputUnits');
    let outputMenu = document.querySelector('#outputUnits');
    convertBtn.addEventListener('click', onClick);

    let convertObj = {
        km:1000,
        m:1,
        cm:0.01,
        mm:0.001,
        mi:1609.34,
        yrd:0.9144,
        ft:0.3048,
        in:0.0254,
    };

    function onClick() {

        let inputUnits = inputMenu.options[inputMenu.selectedIndex].value;
        let outputUnits = outputMenu.options[outputMenu.selectedIndex].value;
        let inMeters = inputDist.value * convertObj[inputUnits];
        let converted = inMeters / convertObj[outputUnits];

        outputDist.value = converted;

    }
}