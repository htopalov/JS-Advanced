function solve() {
   let mainDivElement = document.querySelector('.shopping-cart');
   mainDivElement.addEventListener('click', onClick);
   let textArea = mainDivElement.querySelector('textarea');
   let totalPrice = 0;
   let names = [];

   function onClick(event) {


      if (event.target.tagName == 'BUTTON' && event.target.className == 'add-product') {
         let productName = event.target.parentNode.parentNode.children[1].querySelector('.product-title').textContent;
         let productPrice = Number(event.target.parentNode.parentNode.children[3].textContent);
         textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
         totalPrice += productPrice;
         if (!names.includes(productName)) {
            names.push(productName);
         }
      } else if (event.target.tagName == 'BUTTON' && event.target.className == 'checkout') {
         let addButtons = mainDivElement.querySelectorAll('.add-product');
         for (const button of addButtons) {
            button.disabled = true;
         }
         
         textArea.value += `You bought ${names.join(', ')} for ${totalPrice.toFixed(2)}.\n`;   
      }
   }

}