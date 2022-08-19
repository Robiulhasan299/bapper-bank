// step 1 .
document.getElementById('inputSubmit').addEventListener('click',function(){
    const email = document.getElementById('inputEmail');
    const emailValue = email.value;
    
    // step 2 .
    const password = document.getElementById('inputPassword');
    const passwordValue = password.value;

    // step 3.

    if(emailValue === 'mdrobiulhasan299@gmail.com' && passwordValue === '12345'){
         window.location.href="bank.html";
    }else{
            alert('Invalid');
    }
});
