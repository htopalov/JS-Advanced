function validate() {
    const nameRegex = /[a-zA-Z0-9]+/gm;
    const passRegex = /[a-zA-Z0-9_]+/gm;
    const emailRegex = /[a-z]+@[a-z]+\.[a-z]+/;
    let submitButton = document.querySelector('#submit');
    let checkBox = document.querySelector('#company');
    submitButton.addEventListener('click', onClick);
    checkBox.addEventListener('change', onChange);

    function onChange() {
        document.querySelector('#companyInfo').style.display = 'block';

    }

    function onClick(e) {
        e.preventDefault();
        let name = document.querySelector('#username');
        let email = document.querySelector('#email');
        let password = document.querySelector('#password');
        let confirmPassword = document.querySelector('#confirm-password');
        let companyNumber = document.querySelector('#companyNumber');
        let validDiv = document.querySelector('#valid');
        let isName = true;
        let isPassword = true;
        let isConfirmPassword = true;
        let isEmail = true;
        let isCompanyNumber = true;
        if (name.value.length < 3 ||
            name.value.length > 20 ||
            !nameRegex.test(name.value)) {
            name.style.borderColor = 'red';
            isName = false;
        }
        if (password.value.length < 5 ||
            password.value.length > 15 ||
            !passRegex.test(password.value)) {
            password.style.borderColor = 'red';
            isPassword = false;
        }
        if (password.value !== confirmPassword.value ||
            password.value.length < 5 ||
            password.value.length > 15) {
            confirmPassword.style.borderColor = 'red';
            password.style.borderColor='red';
            isConfirmPassword = false;
        }
        if (!emailRegex.test(email.value)) {
            email.style.borderColor = 'red';
            isEmail = false;
        }
        if (checkBox.checked) {
            if (Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
                companyNumber.style.borderColor = 'red';
                isCompanyNumber = false;
            }
        }
        if (isName && isPassword && isConfirmPassword && isEmail) {
            if (checkBox.checked && isCompanyNumber) {
                validDiv.style.display = 'block';
            } else if (!checkBox.checked) {
                validDiv.style.display = 'block';
            }
            
        }
    }
}
