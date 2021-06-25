function solution() {
	let toyTypeField = document.querySelector('#toyType');
	let toyPriceField = document.querySelector('#toyPrice');
	let toyDescription = document.querySelector('#toyDescription');
	let giftShopSection = document.querySelector('#christmasGiftShop');
	let addButton = document.querySelector('button');
	addButton.addEventListener('click', onAdd);

	function onAdd(){
		if (toyTypeField.value && Number(toyPriceField.value) && toyDescription.value && toyDescription.value.length >= 50 ) {
			let divGift = document.createElement('div');
			divGift.className = 'gift';
			let imgElement = document.createElement('img');
			imgElement.src = 'gift.png';
			let giftNameHeader = document.createElement('h2');
			giftNameHeader.textContent = toyTypeField.value;
			let descriptionParagraph = document.createElement('p');
			descriptionParagraph.textContent = toyDescription.value
			let buyButton = document.createElement('button');
			buyButton.textContent = `Buy it for $${toyPriceField.value}`;
			buyButton.addEventListener('click', onBuy);
			divGift.appendChild(imgElement);
			divGift.appendChild(giftNameHeader);
			divGift.appendChild(descriptionParagraph);
			divGift.appendChild(buyButton);
			giftShopSection.appendChild(divGift);
		}

		toyTypeField.value = '';
		toyPriceField.value = '';
		toyDescription.value = '';

		function onBuy(e){
			e.target.parentElement.remove();
		}
	}
}