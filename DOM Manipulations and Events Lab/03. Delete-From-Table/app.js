function deleteByEmail() {
    let input = document.querySelector('input[name="email"]');
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let divElement = document.querySelector('#result');
    let isFound = false;
    for (const row of rows) {
        if (row.children[1].textContent.includes(input.value)) {
          row.remove();
          divElement.textContent = 'Deleted.';
          isFound = true;  
        }
        
    }
    if (!isFound) {
        divElement.textContent = 'Not found.';
    }
}