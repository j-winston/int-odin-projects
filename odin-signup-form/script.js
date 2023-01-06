//Password validation

const btn = document.querySelector('#create-account');
const form = document.querySelector('.form');


btn.addEventListener('click', (e) => {
    // prevent form from submitting

    e.preventDefault();

    const formData = new FormData(form);
    const values = [...formData.entries()];
    console.log(values);
})

