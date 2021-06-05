function solve() {
   let mainDivElement = document.querySelector('.shopping-cart');
   mainDivElement.addEventListener('click', onClick);
   let textArea = mainDivElement.querySelector('textarea');


   function onClick(event) {
      let products = [];
      let product = {};
      if (event.target.tagName == 'BUTTON' && event.target.className == 'add-product') {
         let productName = event.target.parentNode.parentNode.children[1].querySelector('.product-title').textContent;
         let productPrice = Number(event.target.parentNode.parentNode.children[3].textContent);
         textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
         if (product[productName] != undefined) {
            productPrice += product[productName];
         }
         product[productName] = productPrice;
         products.push(product);
      } else if (event.target.tagName == 'BUTTON' && event.target.className == 'checkout') {
         let addButtons = mainDivElement.querySelectorAll('.add-product');
         for (const button of addButtons) {
            button.disabled = true;
         }

         //TODO: probably wrong logic
         //have to find out how to sum total price and create list of product names
         //from object in products array

         //USE SET FOR UNIQUE OBJECTS EXAMPLE::
         //var a = {val1: 'hello', val2: 'there'}
         //var b = {val1: 'hello', val2: 'there'}
         //console.log(a === b) // false
         //console.log(a == b)  // false

         
         //textArea.value += `You bought ${productList.join(', ')} for ${totalPrice.toFixed(2)}.\n`;   
      }
   }

}