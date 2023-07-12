//validate with route ...
    const submitStatus = document.getElementById('result');
    const button = document.getElementById('button');

        const showEachMessage = [];
    button.addEventListener('click', function(event){
        event.preventDefault();
        //console.log('submitted');
        const myEmail = document.getElementById('email').value;
        const myPassword = document.getElementById('password').value;
        //console.log(myEmail, myPassword);
        //
        if(myEmail.length > 25){
            showEachMessage.push('do not put too long email address')
        } else if(myPassword.length > 15){
            showEachMessage.push('do not put too long password')
        } else if(myEmail === '' && myPassword === ''){
             showEachMessage.push('plese insert data before submit')
        }else{
            window.location.href = 'welcome.html';
        } 
        submitStatus.innerHTML =  showEachMessage;
    })

    

