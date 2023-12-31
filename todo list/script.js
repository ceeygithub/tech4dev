

const input = document.querySelector('#input-task');
const listContainer = document.querySelector('#list-container');
const addBtn = document.querySelector('#add-taskBtn');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value === '') {
        alert('Please write something');
    } else {
        let li = document.createElement('li');
        li.innerText = input.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        let icon = document.createElement('i');
        icon.className = "fa-solid fa-xmark";
        span.appendChild(icon);

        li.appendChild(span);
    }

    input.value = '';
    saveData();
});

listContainer.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'I') {
        e.target.parentElement.parentElement.remove();
        saveData();
    }

}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// Load data from localStorage when the page loads
const savedData = localStorage.getItem('data');
if (savedData) {
    listContainer.innerHTML = savedData;
}
// localStorage.clear();