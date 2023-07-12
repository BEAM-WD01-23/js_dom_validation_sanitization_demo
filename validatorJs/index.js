//validator js
    const errorMessage = document.getElementById('errorMessage');
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        //console.log('submitted');
        const myName = document.getElementById('name').value;
        const myEmail = document.getElementById('email').value;
        //console.log(myEmail, myName);
        if(validator.isEmpty(myName)){
            errorMessage.innerHTML = 'please insert data before submit!';
            return;
        }else if(!validator.isEmail(myEmail)){
            errorMessage.innerHTML = 'plese insert a valid email address!';
            return;
        }
        // else{
        //     errorMessage.innerHTML = 'successfully logged!';
        // }
        form.submit();
    })

    // use getForm.io for backend handling ....