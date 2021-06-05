function attachGradientEvents() {
    let gradientElement = document.querySelector('#gradient');
    let output = document.querySelector('#result');

    gradientElement.addEventListener('mousemove', onMove);
    gradientElement.addEventListener('mouseout', onOut);

    function onMove(event){
        let position = event.offsetX / (event.target.clientWidth - 1);
        position = Math.trunc(position * 100);
        output.textContent = `${position}%`;
    }

    function onOut(event){
        output.textContent = '';
    }
}