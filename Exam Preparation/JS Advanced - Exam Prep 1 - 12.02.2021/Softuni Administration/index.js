function solve() {
    let button = document.querySelector('button');
    button.addEventListener('click', onClick);

    function onClick(e) {
        e.preventDefault();
        let lectureNameField = document.querySelector('input[name="lecture-name"]');
        let dateField = document.querySelector('input[name="lecture-date"]');
        let moduleField = document.querySelector('select[name="lecture-module"]');
        let divModulesContainer = document.querySelector('.modules');
        if (lectureNameField.value !== '' && dateField.value !== '' && moduleField.value !== 'Select module...') {
            let divModule = document.createElement('div');
            divModule.className = 'module';
            let h3 = document.createElement('h3');
            h3.textContent = `${moduleField.value.toUpperCase()}-MODULE`;
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            li.className = 'flex';
            let h4 = document.createElement('h4');
            let dateTimeValue = dateField.value;
            let yearValue = dateTimeValue.slice(0, 4);
            let monthValue = dateTimeValue.slice(5, 7);
            let dayValue = dateTimeValue.slice(8, 10);
            let timeValue = dateTimeValue.slice(11, 16);
            h4.textContent = `${lectureNameField.value} - ${yearValue}/${monthValue}/${dayValue} - ${timeValue}`;
            let delButton = document.createElement('button');
            delButton.textContent = 'Del';
            delButton.className = 'red';
            delButton.addEventListener('click', onDelClick);
            let checkH3 = Array.from(document.querySelectorAll('.modules h3')).find(x=>x.textContent == h3.textContent);
            if (checkH3 == undefined) {
               li.appendChild(h4);
               li.appendChild(delButton);
               ul.appendChild(li);
               divModule.appendChild(h3);
               divModule.appendChild(ul);
               divModulesContainer.appendChild(divModule); 
            } else {
                li.appendChild(h4);
                li.appendChild(delButton);
                checkH3.parentElement.children[1].appendChild(li);
            }

            let ulElements = document.querySelectorAll('ul');
            for (const ul of ulElements) {
                Array.from(ul.querySelectorAll('li'))
                     .sort((a,b)=> a.children[0].textContent.localeCompare(b.children[0].textContent))
                     .forEach(li => ul.appendChild(li));
            }
        }

    }

    function onDelClick(e){
        let liArr = Array.from(e.target.parentElement.parentElement.children);
    
        if ((liArr.length - 1) == 0) {
            e.target.parentElement.parentElement.parentElement.remove();
        } else {
            e.target.parentElement.remove(); 
        }
    }
};