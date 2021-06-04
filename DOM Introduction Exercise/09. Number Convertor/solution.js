function solve() {
    let selectElement = document.querySelector('#selectMenuTo');
    let binaryOption = document.createElement('option');
    let hexadecimalOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.text = 'Binary';
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.text = 'Hexadecimal';
    selectElement.add(binaryOption);
    selectElement.add(hexadecimalOption);
 
    document.querySelector('button').addEventListener('click', clickEvent)

    function clickEvent() {
        let decimalNumber = Number(document.querySelector('#input').value);
        let selectElement = document.querySelector('#selectMenuTo');
        let type = selectElement.options[selectElement.selectedIndex].text;
        let result;
        switch (type) {
            case 'Binary':
                result = decimalNumber.toString(2);
                break;
            case 'Hexadecimal':
                result = decimalNumber.toString(16).toUpperCase();
                break;
        }
        document.querySelector('#result').value = result;
    }


}