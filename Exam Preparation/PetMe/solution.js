function solve() {
    let nameField = document.querySelector('input[placeholder="Name"]');
    let ageField = document.querySelector('input[placeholder="Age"]');
    let kindField = document.querySelector('input[placeholder="Kind"]');
    let currentOwnerField = document.querySelector('input[placeholder="Current Owner"]');
    let adoptionSectionList = document.querySelector('#adoption ul');
    let addButton = document.querySelector('#container button');
    addButton.addEventListener('click', onAdd);

    function onAdd(e){
        e.preventDefault();
        if (nameField.value && Number(ageField.value) && kindField.value && currentOwnerField.value) {
           let liElement = document.createElement('li');
           let paragraphInfoElement = document.createElement('p');
           let strongName = document.createElement('strong');
           strongName.textContent = nameField.value;
           let strongAge = document.createElement('strong');
           strongAge.textContent = ageField.value;
           let strongKind = document.createElement('strong');
           strongKind.textContent = kindField.value;
           let spanOwner = document.createElement('span');
           spanOwner.textContent = `Owner: ${currentOwnerField.value}`;
           let contactButton = document.createElement('button');
           contactButton.textContent = 'Contact with owner';
           contactButton.addEventListener('click', onClickContact);
           paragraphInfoElement.appendChild(strongName);
           paragraphInfoElement.innerHTML += ' is a ';
           paragraphInfoElement.appendChild(strongAge);
           paragraphInfoElement.innerHTML += ' year old ';
           paragraphInfoElement.appendChild(strongKind);
           liElement.appendChild(paragraphInfoElement);
           liElement.appendChild(spanOwner);
           liElement.appendChild(contactButton);
           adoptionSectionList.appendChild(liElement);
        }
        nameField.value = '';
        ageField.value = '';
        kindField.value = '';
        currentOwnerField.value = '';
    }

    function onClickContact(e){
        let divContactAdopter = document.createElement('div');
        let inputNameField = document.createElement('input');
        inputNameField.placeholder = 'Enter your names';
        let buttonTake = document.createElement('button');
        buttonTake.addEventListener('click', onTakeClick);
        buttonTake.textContent = 'Yes! I take it';
        divContactAdopter.appendChild(inputNameField);
        divContactAdopter.appendChild(buttonTake);
        let liToAppend = e.target.parentElement;
        liToAppend.appendChild(divContactAdopter);
        e.target.remove();
    }

    function onTakeClick(e){
        let nameValue = e.target.parentElement.children[0].value;
        let adoptedSectionList = document.querySelector('#adopted ul');
        if (nameValue) {
            let clonedLi = e.target.parentElement.parentElement.cloneNode(true);
            clonedLi.children[2].remove();
            let checkedButton = document.createElement('button');
            checkedButton.textContent = 'Checked';
            checkedButton.addEventListener('click', (e)=> {
                e.target.parentElement.remove();
            });
            clonedLi.appendChild(checkedButton);
            clonedLi.children[1].textContent = `New Owner:${nameValue}`;
            adoptedSectionList.appendChild(clonedLi);
            e.target.parentElement.parentElement.remove();
        }
    }
}

