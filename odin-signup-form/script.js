//Password validation

const passwordInput = document.querySelector('.form__password-input');
const passwordConfirmInput = document.querySelector('.form__confirm-input');
const form = document.querySelector('.form');


passwordConfirmInput.addEventListener('input', () => {

    let passwd = '';
    let passwd_confirm = '';

    const formData = new FormData(form);
    const values = [...formData.entries()];

    /* Determine if password confirmation matches */ 

    for(let i=0; i < values.length; i++ ) {

        if (values[i][0] == 'user_password') {
            passwd = values[i][1];

        }

        if (values[i][0] == 'user_password_confirm') {
            passwd_confirm = values[i][1];
        }

    }
        if ( (passwd_confirm) && (passwd == passwd_confirm) ) {
            // to display green check mark if passwords match
           passwordInput.setAttribute("match", true);
           passwordConfirmInput.setAttribute("match", true);

        } else {
            if (passwd != passwd_confirm) {

                // Will now display warning message and red outline
                passwordInput.setAttribute('match', false);
                passwordConfirmInput.setAttribute('match', false);
                
            }
        } 
 /* Check if password matches confirmation */ 
    passwordInput.addEventListener('input', () => {

        let passwd = '';
        let passwd_confirm = '';

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
                // to display green check mark if passwords match
               passwordInput.setAttribute("match", true);
               passwordConfirmInput.setAttribute("match", true);

            } else {
                if (passwd != passwd_confirm) {
                    // Will now display warning message and red outline
                    passwordInput.setAttribute('match', false);
                    passwordConfirmInput.setAttribute('match', false);
                    
                }
            } 
        

    });

});


