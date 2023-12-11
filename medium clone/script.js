// modal

const clickedBtn = document.querySelector('.nav-btn')
const modalWindow = document.querySelector('.modalWrapper')
const form = document.querySelector('form')
// modalWindow.style.display = "none"


clickedBtn.addEventListener('click', function () {
    modalWindow.style.display = "flex";
});

modalWindow.addEventListener('click', function (event) {
    if (event.target == modalWindow) {
        closeModal()
    }
});

function closeModal() {
    modalWindow.style.display = "none"
}
form.addEventListener('click', function (e) {
    e.target.stopPropagation

})

// hamburger
let hamburger = document.querySelector('.hamburger')
let ul = document.querySelector('ul')
hamburger.addEventListener('click', () => {
    ul.classList.toggle('active');
})
