function solve() {
   let createBtnElement = document.querySelector('form button');
   createBtnElement.addEventListener('click', onCreate);


   function onCreate(e){
      e.preventDefault();
      let authorField = document.querySelector('#creator');
      let titleField = document.querySelector('#title');
      let categoryField = document.querySelector('#category');
      let contentField = document.querySelector('#content');
      let newArticleElement = document.createElement('article');
      //
      let destinationSection = document.querySelector('main section');
      //
      let newH1 = document.createElement('h1');
      newH1.textContent = titleField.value;
      newArticleElement.appendChild(newH1);
      let firstParagraph = document.createElement('p');
      firstParagraph.textContent = 'Category:';
      let firstStrong = document.createElement('strong');
      firstStrong.textContent = categoryField.value;
      firstParagraph.appendChild(firstStrong);
      newArticleElement.appendChild(firstParagraph);
      let secondParagraph = document.createElement('p');
      secondParagraph.textContent = 'Creator:';
      let secondStrong = document.createElement('strong');
      secondStrong.textContent = authorField.value;
      secondParagraph.appendChild(secondStrong);
      newArticleElement.appendChild(secondParagraph);
      let thirdParagraph = document.createElement('p');
      thirdParagraph.textContent = contentField.value;
      newArticleElement.appendChild(thirdParagraph);
      let buttonsDiv = document.createElement('div');
      buttonsDiv.className = 'buttons';
      let buttonDelete = document.createElement('button');
      buttonDelete.textContent = 'Delete';
      buttonDelete.classList.add('btn','delete');
      buttonDelete.addEventListener('click', onDelete);
      buttonsDiv.appendChild(buttonDelete);
      let buttonArchive = document.createElement('button');
      buttonArchive.textContent = 'Archive';
      buttonArchive.classList.add('btn','archive');
      buttonArchive.addEventListener('click', onArchive);
      buttonsDiv.appendChild(buttonArchive);
      newArticleElement.appendChild(buttonsDiv);



      destinationSection.appendChild(newArticleElement);

   }

   function onDelete(e){
      e.target.parentElement.parentElement.remove();
   }

   function onArchive(e){
      let olElement = document.querySelector('ol');
      let liElement = document.createElement('li');
      let title = e.target.parentElement.parentElement.children[0].textContent;
      liElement.textContent = title;
      olElement.appendChild(liElement);
      Array.from(olElement.children)
           .sort((a,b) => a.textContent.localeCompare(b.textContent))
           .forEach(li => olElement.appendChild(li));

      e.target.parentElement.parentElement.remove();
   }
}