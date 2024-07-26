const switchForms = document.querySelectorAll('.switch-form');
const formContainers = document.querySelectorAll('.form-container');

switchForms.forEach(switchForm => {
    switchForm.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('data-target');
        formContainers.forEach(container => {
            container.classList.remove('active');
        });
        document.querySelector(`.${target}-container`).classList.add('active');
    });
});
