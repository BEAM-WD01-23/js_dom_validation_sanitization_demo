//
    const myName = document.getElementById('name');
    const myEmail = document.getElementById('email');
    const myPassword = document.getElementById('password');
    const myError = document.getElementById('error');
    const myButton = document.getElementById('submit');
    //
   
    myButton.addEventListener('click', submitData);

    const eachErrorMessage = [];

    function submitData(e){
        e.preventDefault();
        //console.log('data submitted');
        if(myName.value === '' || myEmail.value === '' || myPassword.value === ''){
            eachErrorMessage.push('please, insert data befor you submit!')
        }else if(myName.value.length < 3){
            eachErrorMessage.push('name must be longer than 2 characters!')
        }else if(myEmail.value.includes !== '@'){
            eachErrorMessage.push('please insert a valid email address!');
        }else if(myEmail.value.length > 25){
            eachErrorMessage.push('please inseret not too long email address');
        }else if(myPassword.value.length < 5){
            eachErrorMessage.push('your password is too short!');
        }else{
            eachErrorMessage.push('successfully submitted!');
        }
        myError.innerHTML = eachErrorMessage;
    }
     