
const inputText = document.querySelector('#inputText');
const addListButton = document.querySelector('#addListButton');
const divList = document.querySelector('.lists');
const template = document.querySelector('template');

addListButton.addEventListener('click', () => {
  
  if (inputText.value === "") { return }
  
  addList(inputText.value);
  inputText.value = "";
  
})


divList.addEventListener('click', eventTrigger => {

  if (eventTrigger.target.className === 'bi bi-journal-check' ) {

    doneTask(eventTrigger.target.closest('.list'));

  }

  if (eventTrigger.target.className === 'bi bi-journal-x' ) {

    deleteTask(eventTrigger.target.closest('.list'));

  }


});


const addList = value => {
  
  const listElements = document.importNode(template.content, true);
  const listItem = listElements.querySelector('#listItem');
  listItem.textContent = value;
  divList.appendChild(listElements);

}

const doneTask = value => {

  const p = value.querySelector('p');
  p.style = 'color: blue; text-decoration: line-through';
  
}

const deleteTask = value => {

  value.remove();

}