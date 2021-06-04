function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchText = document.getElementById('searchField');
      let body = document.querySelectorAll('tbody tr');
      for (let tr of body) {
         tr.classList.remove('select');
      }
      for (let tr of body) {
         if (tr.textContent.includes(searchText.value)) {
            tr.classList.add('select');
         }
      }
      searchText.value = '';
   }
}