function solve() {
  let sections = document.querySelectorAll('section');
  let resultElement = document.querySelector('.results-inner');
  let firstSection = sections[0];
  let secondSection = sections[1];
  let thirdSection = sections[2];
  let buttonsFirstSection = Array.from(firstSection.querySelectorAll('ul li p'));
  let buttonsSecondSetion = Array.from(secondSection.querySelectorAll('ul li p'));
  let buttonsThirdSection = Array.from(thirdSection.querySelectorAll('ul li p'));
  buttonsFirstSection.forEach(b=>b.addEventListener('click', onClickFirst));
  buttonsSecondSetion.forEach(b=>b.addEventListener('click', onClickSecond));
  buttonsThirdSection.forEach(b=>b.addEventListener('click', onClickThird));
  let points = 0;


  function onClickFirst(event){
    let currentBtn = event.target;
    if (currentBtn.textContent == 'onclick') {
      points++;
    }
    firstSection.style.display = 'none';
    secondSection.style.display = 'block';

  }
  function onClickSecond(event){
    let currentBtn = event.target;
    if (currentBtn.textContent == 'JSON.stringify()') {
      points++;
    }
    secondSection.style.display = 'none';
    thirdSection.style.display = 'block';
  }

  function onClickThird(event){
    let currentBtn = event.target;
    if (currentBtn.textContent == 'A programming API for HTML and XML documents') {
      points++;
    }
    thirdSection.style.display = 'none';
    resultElement.parentNode.style.display = 'block';
    if (points == 3) {
      resultElement.children[0].textContent = 'You are recognized as top JavaScript fan!';  
    } else {
      resultElement.children[0].textContent = `You have ${points} right answers`;
    }
    
  }
  
}
