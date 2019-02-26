const listBlock = document.getElementById('list');
const headerNotification = document.getElementById('header-notification');
const addNewInput = document.getElementById('addInput');
const editTodoInput = document.getElementById('editInput');
const LOCAL_STORAGE_ITEMS = 'items';
const zero = 0;
const minus = -1;
const pustiy = 0;
let todoItems = [];
const page = ['index', 'add', 'modify'];
let id = [];
let labelToEdit = null;

function pushAndAddTodoList(elem, selector) {
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                let matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= zero && matches.item(i) !== this) {
                    //
                }
                return i > minus;
            };
    }
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) {
            return elem;
        }
    }

    return null;
}

function items() {
    todoItems = loadFromLocalStorage(LOCAL_STORAGE_ITEMS);
    id = getId();
    todoItems.forEach(item => renderItem(item));
}

items();

function getId() {
    for (let i = 0; i<todoItems.length; i++) {
        let item = todoItems[i];
        if (item.id > id) {
            id = item.id;
        }
    }
    id++;
    return id;
}

function createTaskBlocks() {
    if (editTodoInput.value) {
        const item = findItem(labelToEdit);
        item.description = editTodoInput.value;
        labelToEdit.innerText = editTodoInput.value;
        saveToLocalStorage();
        switchPage('index');
    }
}

function deleteNode(button) {
    let id = button.parentNode.getAttribute('data-id');
    id = parseInt(id);
    for (let i in todoItems) {
        if (todoItems[i].id === id) {
            todoItems.splice(i, 1);
            break;
        }
    }
    const number = pushAndAddTodoList(button, 'li');
    number.remove();
    saveToLocalStorage();
    if (todoItems.length === pustiy) {
        headerNotification.style.display = 'flex';
    }
}

function findItem(child) {
    const listItem = child.parentNode;
    let id = listItem.getAttribute('data-id');
    id = parseInt(id);
    let item = todoItems.find(item => item.id === id);
    return item;
}

function switchPage(shown) {
    location.href = '#' + shown;
    page.forEach(function(page) {
        document.getElementById(page).style.display = 'none';
    });
    document.getElementById(shown).style.display = 'flex';
    return false;
}

function checkItem(checkBox) {
    checkBox.setAttribute('src', 'assets/img/done-s.png');
}

function setChecked(checkbox, isDone) {
    if (isDone) {
        checkbox.classList.add('checked');
        checkbox.src = 'assets/img/done-s.png';
        const newPosition = listBlock.childElementCount - 1;
        const listItem = checkbox.parentNode;
        listItem.classList.add('checked');
        listBlock.removeChild(listItem);
        listBlock.appendChild(listItem);
    } else {
        checkbox.classList.remove('checked');
        checkbox.src = 'assets/img/todo-s.png';
        let listItem = checkbox.parentNode;
        listItem.classList.remove('checked');
    }
}

function loadFromLocalStorage(item) {
    const localStorageItems = localStorage.getItem(item);
    if (localStorageItems === null) {
        return [];
    }
    return JSON.parse(localStorageItems);
}

function renderItem(item) {
    const listItem = document.getElementById('item_template').cloneNode(true);
    listItem.style.display = 'flex';
    listItem.setAttribute('data-id', item.id);
    const label = listItem.querySelector('label');
    label.innerText = item.description;
    const checkbox = listItem.querySelector('input');
    listBlock.appendChild(listItem);
    setChecked(checkbox, item.isDone);
    headerNotification.style.display = 'block';
    return listItem;
}

function modifyNewElement(task, isDone) {
    const item = { isDone, id: id++, description: task };
    todoItems.push(item);
    saveToLocalStorage();
    renderItem(item);
}

function createItem(label) {
    labelToEdit = label;
    editTodoInput.value = label.innerText;
    switchPage('modify');
    editTodoInput.focus();
    editTodoInput.select();
}

function createTask() {
    if (addNewInput.value !== '') {
        modifyNewElement(addNewInput.value, false);
        addNewInput.value = '';
        switchPage('index');
    }
}

function saveToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(todoItems));
}
