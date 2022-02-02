const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

form.addEventListener('submit', e =>{

    if(validate() === true) {
        window.location.href = 'contact.html';
    } else {
        e.preventDefault();
    } 
});

function validate() {  
    const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const messageValue = message.value.trim();
    let result = true;
    
	
    if(usernameValue === '') {
        messError(username, '!Name required¡');
        result = false;  
    } else {
        Success(username);
    }
    if(emailValue === '') {
        messError(email, '!Email required¡'); 
        result = false;  
    } else {
        Success(email);
    }
    return result;
}
// set error message
function messError(input, message) {
    const formControl = input.parentElement;
    const small = document.createElement('SMALL');
    formControl.className = 'form-control error';
    small.textContent = message;
    formControl.appendChild(small);   
}
// Set Success
function Success(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'; 
}
