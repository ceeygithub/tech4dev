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


// dark theme
let icon = document.querySelector('.moon')
let logo = document.querySelector('.logo')

icon.addEventListener('click', () => {
    document.body.classList.toggle('darkTheme');
    if (document.body.classList.contains('darkTheme')) {

        icon.className = "fa-solid fa-sun sun"
        logo.src = "./assets/62a24af4d4cb2577520fca1a.png "

    }
    else {
        icon.className = "fa-solid fa-moon moon";
        logo.src = "./assets/medium_logo-removebg-preview.png "
    }
})