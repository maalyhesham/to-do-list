const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list')

todoForm.onsubmit = addTask;

function markTaskAsDone(event) {
    const checkboxInput = event.target;
    const parent = checkboxInput.parentNode;
    const spanELement = parent.children[1]

    if (spanELement.className.includes('done-task')) {
        spanELement.classList.remove('done-task')
    } else {
        spanELement.classList.add('done-task')
    }
}
function deleteTask(event) {
    const iconTarget = event.target;
    const parent = iconTarget.parentNode;

    parent.remove()
};

function createTodoItem(todoText) {
    const itemElement = document.createElement('div')
    itemElement.classList.add('item');

    // creat a checkbox input and add it to the itemElement;
    const checkboxInput = document.createElement('input')
    checkboxInput.type = 'checkbox'
    checkboxInput.onclick = markTaskAsDone;

    itemElement.append(checkboxInput);

    // create a span input to hold the todo text and add it to the itemElement

    const spanElement = document.createElement('span');
    spanElement.innerText = todoText;

    itemElement.append(spanElement);

    // <i class="our-trash-icon far fa-trash-alt"></i>
    // create a font awesome icon and add it to the itemElement
    const deleteIcon = document.createElement('i')
    deleteIcon.classList.add('our-trash-icon', 'far', 'fa-trash-alt')
    deleteIcon.onclick = deleteTask

    itemElement.append(deleteIcon);

    return itemElement;
}

function addTask(event) {
    event.preventDefault();
    const todoText = event.target.todoInput.value;

    if (!todoText) {
        alert('Please add content to your todo task')
        return;
    }
    // 1- create a new item (todo item)
    const todoItem = createTodoItem(todoText);

    // 2- add the created todo item to the todo list
    const firstItem = todoList.children[0];
    todoList.insertBefore(todoItem, firstItem);

    event.target.reset()
};