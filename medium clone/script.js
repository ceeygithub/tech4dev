const clickedBtn = document.querySelector('.nav-btn')
const modalWindow = document.querySelector('.modalWrapper')
const form = document.querySelector('form')
modalWindow.style.display = "none"
// clickedBtn.addEventListener('click', function () {
//     if (modalWindow == 'click)') {
//         modalWindow.style.display = "flex"
//     }
// })

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