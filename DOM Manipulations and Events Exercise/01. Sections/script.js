function create(words) {
   let contentDivElement = document.querySelector('#content');
   for (const str of words) {
      let divElement = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = str;
      paragraph.style.display = 'none';
      divElement.appendChild(paragraph);
      contentDivElement.appendChild(divElement);
      divElement.addEventListener('click', onClick);
   }

   function onClick(event){
      event.target.children[0].style.display = 'block';
   }
}