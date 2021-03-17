const insert = document.getElementById("tasks__add");
let taskDelete = document.getElementsByClassName('task__remove');
const taskList = document.getElementById('tasks__list');

function addingTasks(event) {
    const task = document.getElementById('task__input');

    let elem = document.createElement("div");
    elem.classList.add('task')
    elem.innerHTML = '<div class="task__title">' + task.value + ' </div> <a href="#" class="task__remove">&times;</a>'
    taskList.appendChild(elem);
    taskDelete = document.getElementsByClassName('task__remove');
    taskDelete[taskDelete.length - 1].addEventListener("click", () => {
        taskList.removeChild(elem)
    });
    task.value = "";
    event.preventDefault();
}

insert.addEventListener("click", addingTasks);