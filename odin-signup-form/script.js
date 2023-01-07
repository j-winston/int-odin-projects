//Password validation

const btn = document.querySelector('#create-account');
const form = document.querySelector('.form');

let passwd = '';
let passwd_confirm = '';


btn.addEventListener('click', (e) => {
    // prevent form from submitting

    e.preventDefault();

    const formData = new FormData(form);
    const values = [...formData.entries()];

    for(let i=0; i < values.length; i++ ) {

        if (values[i][0] == 'user_password') {
            passwd = values[i][1];

        }

        if (values[i][0] == 'user_password_confirm') {
            passwd_confirm = values[i][1];
        }

    }
        if (passwd == passwd_confirm) {
            console.log('match')
            // display green check mark 
        } else {
            if (passwd != passwd_confirm) {
                console.log('passwords do not match');
                // display warning message 
            }
        } 

})

