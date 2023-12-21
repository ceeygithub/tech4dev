let icon = document.querySelector('.moon')

icon.addEventListener('click', () => {
    document.body.classList.toggle('darkTheme');
    if (document.body.classList.contains('darkTheme')) {

        icon.className = "fa-solid fa-sun sun"

    }
    else {
        icon.className = "fa-solid fa-moon moon";

    }
})