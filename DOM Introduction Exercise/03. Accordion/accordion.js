function toggle() {
    let btnText = document.getElementsByClassName('button')[0].textContent;
    if (btnText == 'More') {
        document.getElementById('extra').style.display = 'block';
        document.getElementsByClassName('button')[0].textContent = 'Less';
    } else if (btnText == 'Less') {
        document.getElementById('extra').style.display = 'none';
        document.getElementsByClassName('button')[0].textContent = 'More';
    }
}