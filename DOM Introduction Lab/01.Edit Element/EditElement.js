function editElement(reference,match,replacer) {
    let str = reference.textContent;
    let regEx = new RegExp(match, 'g');
    let result = str.replace(regEx, replacer);
    reference.textContent = result;
}