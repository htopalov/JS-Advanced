function solve() {
    let addButton = document.querySelector('#add');
    addButton.addEventListener('click', addTaskHandler);

    function addTaskHandler(e){
        e.preventDefault();

        let divDestinationEl = document.querySelectorAll('section')[1].children[1];//place to add new articles
        let taskInput = document.querySelector('#task');
        let descriptionInput = document.querySelector('#description');
        let dateInput = document.querySelector('#date');
        let task = taskInput.value;
        let description = descriptionInput.value;
        let date = dateInput.value;
        if (task == '' || description == '' || date == '') {
            return;
        }
        //create elements of article
        let h3 = document.createElement('h3');
        h3.textContent = task;
        let firstP = document.createElement('p');
        firstP.textContent = `Description: ${description}`;
        let secondP = document.createElement('p');
        secondP.textContent = `Due Date: ${date}`;
        let divButtonEl = document.createElement('div');
        divButtonEl.setAttribute('class','flex');
        let startButton = document.createElement('button');
        startButton.textContent = 'Start';
        startButton.setAttribute('class', 'green');
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.setAttribute('class','red');

        divButtonEl.appendChild(startButton);
        divButtonEl.appendChild(deleteButton);

        let article = document.createElement('article');
        //appending elements to article and div container
        article.appendChild(h3);
        article.appendChild(firstP);
        article.appendChild(secondP);
        article.appendChild(divButtonEl);

        divDestinationEl.appendChild(article);
        //empty input fields
        taskInput.value ='';
        descriptionInput.value = '';
        dateInput.value = '';

        //event listeners for start and delete button in new article
        startButton.addEventListener('click', clickedStart);
        deleteButton.addEventListener('click', clickedDelete);
    }


    function clickedDelete(e){
        let currentArticle = e.target.parentElement.parentElement;
        currentArticle.remove();
    }

    function clickedStart(e){
        let currentArticle = e.target.parentElement.parentElement;
        let copiedArticle = currentArticle.cloneNode(true);
        currentArticle.remove();
        let destinationDivEl = document.querySelector('#in-progress');
        destinationDivEl.appendChild(copiedArticle);
        let divButtonsToRemove = copiedArticle.querySelector('.flex');
        divButtonsToRemove.remove();
        let newDivButtonContainer = document.createElement('div');
        newDivButtonContainer.setAttribute('class','flex');

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.setAttribute('class','red');
        newDivButtonContainer.appendChild(deleteButton);
        let finishButton = document.createElement('button');
        finishButton.textContent = 'Finish';
        finishButton.setAttribute('class','orange');
        newDivButtonContainer.appendChild(finishButton);
        copiedArticle.appendChild(newDivButtonContainer);
        deleteButton.addEventListener('click', clickedDelete);
        finishButton.addEventListener('click', clickedFinish);
    }

    function clickedFinish(e){
        let currentArticle = e.target.parentElement.parentElement;
        let copiedArticle = currentArticle.cloneNode(true);
        currentArticle.remove();
        let destinationDiv = document.querySelectorAll('section')[3].children[1];
        let buttonDiv = copiedArticle.querySelector('.flex');
        buttonDiv.remove();
        destinationDiv.appendChild(copiedArticle);
    }
}