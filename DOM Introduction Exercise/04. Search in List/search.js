function search() {
   let liElements = document.getElementsByTagName('li');
   let searchName = document.getElementById('searchText').value;
   let resultCount = 0;
   for (const city of liElements) {
      if (city.textContent.includes(searchName)) {
         resultCount++;
         city.style.textDecoration = 'underline';
         city.style.fontWeight = 'bold';
      }
   }

   document.getElementById('result').textContent = `${resultCount} matches found`;
}
