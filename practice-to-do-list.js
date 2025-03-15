let storedToDo = [];
function addInputs() {
  const textInput = document.querySelector('.js-text-input').value;
  const timeInput = document.querySelector('.js-time-input').value;

  const object = {
    textInput: textInput,
    timeInput: timeInput
  }
  storedToDo.push(object);
  
}

function createNewElements() {
  let accumulatorOfElements = '';
  for (let i = 0; i < storedToDo.length; i++) {
    const retrieveObject = storedToDo[i];
    const text = retrieveObject.textInput;
    const time = retrieveObject.timeInput;
    
    const html = `<div class="added-to-do">${text}</div>
      <div class="added-time">${time}</div>
      <button class="delete-button" onclick="
        deleteElement(${i});
     ">Delete</button>`;

     accumulatorOfElements += html;
  }
  document.querySelector('.added-element-container').innerHTML = accumulatorOfElements;
}

function deleteElement(deleteIndex) {
  storedToDo.splice(deleteIndex, 1);
  createNewElements();
}
