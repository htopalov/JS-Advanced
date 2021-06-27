window.addEventListener('load', solution);

function solution() {
  let submitButton = document.querySelector('#submitBTN');
  submitButton.addEventListener('click', onSubmition);
  let fullNameField = document.querySelector('#fname');
  let emailField = document.querySelector('#email');
  let phoneField = document.querySelector('#phone');
  let addressField = document.querySelector('#address');
  let codeField = document.querySelector('#code');
  let previewInfoUl = document.querySelector('#infoPreview');
  let editButton = document.querySelector('#editBTN');
  editButton.addEventListener('click', onEdit);
  let continueButton = document.querySelector('#continueBTN');
  continueButton.addEventListener('click', onContinue);


  function onSubmition(e){
    if (fullNameField.value && emailField.value) {
      let nameLi = document.createElement('li');
      nameLi.textContent = `Full Name: ${fullNameField.value}`;
      let emailLi = document.createElement('li');
      emailLi.textContent = `Email: ${emailField.value}`;
      let phoneLi = document.createElement('li');
      phoneLi.textContent = `Phone Number: ${phoneField.value}`;
      let addressLi = document.createElement('li');
      addressLi.textContent = `Address: ${addressField.value}`;
      let codeLi = document.createElement('li');
      codeLi.textContent = `Postal Code: ${codeField.value}`;
      previewInfoUl.appendChild(nameLi);
      previewInfoUl.appendChild(emailLi);
      previewInfoUl.appendChild(phoneLi);
      previewInfoUl.appendChild(addressLi);
      previewInfoUl.appendChild(codeLi);
      e.target.disabled = true;
      editButton.disabled = false;
      continueButton.disabled = false;
    }

    fullNameField.value = '';
    emailField.value = '';
    phoneField.value = '';
    addressField.value = '';
    codeField.value = '';
  }

  function onEdit(e){
    e.target.disabled = true;
    continueButton.disabled = true;
    submitButton.disabled = false;
    // fullNameField.value = previewInfoUl.children[0].textContent.slice(11);
    // emailField.value = previewInfoUl.children[1].textContent.slice(7)
    // phoneField.value = previewInfoUl.children[2].textContent.slice(14);
    // addressField.value = previewInfoUl.children[3].textContent.slice(9);
    // codeField.value = previewInfoUl.children[4].textContent.slice(13);

    fullNameField.value = previewInfoUl.children[0].textContent.split(': ').slice(1);
    emailField.value = previewInfoUl.children[1].textContent.split(': ').slice(1)
    phoneField.value = previewInfoUl.children[2].textContent.split(': ').slice(1);
    addressField.value = previewInfoUl.children[3].textContent.split(': ').slice(1);
    codeField.value = previewInfoUl.children[4].textContent.split(': ').slice(1);
    Array.from(previewInfoUl.children).forEach(li=> li.remove());
  }

  function onContinue(){
    let divBlock = document.querySelector('#block');
    Array.from(divBlock.children).forEach(ch=>ch.remove());
    let message = document.createElement('h3');
    message.textContent = 'Thank you for your reservation!';
    divBlock.appendChild(message);
  }
}
