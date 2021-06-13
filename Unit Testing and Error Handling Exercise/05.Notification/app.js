function notify(message) {
  let divEl = document.querySelector('#notification');
  let textNode = document.createTextNode(message);
  divEl.appendChild(textNode);
  divEl.style.display = 'block';
  divEl.addEventListener('click', onClick);

  function onClick(e){
    e.target.style.display = 'none';
    divEl.innerHTML = '';
  }
}