
let addTask = document.querySelector('#addTask');

addTask.addEventListener('click', () => {
    let newTask = document.querySelector('#newTask').value;
    let tasks = document.querySelector('.tasks');

    tasks.innerHTML += `<p>${newTask}</p>`
    document.querySelector('#newTask').value = ''
    //newTask.focus()
})
