
let maxlistRowsLength = 10;
let zero = 0;
document.querySelector('.add-button').disabled = true;
let inputField = document.querySelector('.input-field');
let add_button = document.querySelector('.add-button');
let listContainer = document.querySelector('.listBox');
const notification = document.querySelector('.notification');
let dragging = null;
let liTxt, checkBoxTxt, delTxt;

inputField.onkeyup = () => {
  if (!inputField.value.trim()) {
    document.querySelector('.add-button').disabled = true;
  } else {
    document.querySelector('.add-button').disabled = false;
  }
};
add_button.onclick = () => {
  createTask(inputField.value.trim());
};
function createTask () {
  let checkAndText = document.createElement('li');
  checkAndText.className = 'listBox-item';
  checkAndText.setAttribute('draggable', true);
  liTxt = document.createTextNode(inputField.value);
  liTxt.className = 'txtStyle';

  let checkBox = document.createElement('i');
  checkBoxTxt = document.createTextNode('check_box_outline_blank');
  checkBox.className = 'material-icons';
  checkBox.appendChild(checkBoxTxt);

  let checkButton = document.createElement('button');
  checkButton.className = 'checkIconBtn';

  let deleteRow = document.createElement('i');
  delTxt = document.createTextNode('delete');
  deleteRow.className = 'material-icons';
  deleteRow.appendChild(delTxt);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'deleteIconBtn';

  checkButton.appendChild(checkBox);
  deleteBtn.appendChild(deleteRow);
  checkAndText.appendChild(checkButton);
  checkAndText.appendChild(liTxt);
  checkAndText.appendChild(deleteBtn);
  checkAndText.appendChild(checkAndText);

  checkButton.onclick = () => {
    checkBox.textContent = 'check_box';
  };
  deleteBtn.onclick = () => {
    checkAndText.remove();
    zero--;
    inputField.disabled = false;
    document.querySelector('.add-button').disabled = false;
    notification.style.display = 'none';
  };
  if (++zero >= maxlistRowsLength) {
    inputField.disabled = true;
    document.querySelector('.add-button').disabled = true;
    notification.style.display = 'block';
  }

  document.querySelector('.input-field').value = '';
  document.querySelector('.add-button').disabled = true;
}

listContainer.addEventListener('dragstart', event => {
  dragging = event.target;
});

listContainer.addEventListener('dragover', event => {
  if (event.target.className === 'listBox-item') {
    event.preventDefault();

    const ZERO_INDEX = 0, HALF = 2;

    const bounding = event.target.getBoundingClientRect();
    const offset = bounding.y + bounding.height / HALF;

    if (event.clientY - offset > ZERO_INDEX) {
      event.target.style['border-top'] = '';
      event.target.style['border-bottom'] = '2px dashed #ccc';
    } else {
      event.target.style['border-top'] = '2px dashed #ccc';
      event.target.style['border-bottom'] = '';
    }
  }
});

listContainer.addEventListener('dragleave', event => {
  event.target.style['border-bottom'] = '';
  event.target.style['border-top'] = '';
});

listContainer.addEventListener('drop', event => {
  if (event.target.className === 'listBox-item') {
    event.preventDefault();

    if (event.target.style['border-bottom']) {
      event.target.style['border-bottom'] = '';
      listContainer.insertBefore(dragging, event.target.nextSibling);
    } else {
      event.target.style['border-top'] = '';
      listContainer.insertBefore(dragging, event.target);
    }
  }
});