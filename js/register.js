let username = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let registerBtn = document.getElementById('sign-up');
let usernameError = document.getElementById('usernameError');
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');
let signInWelcomeDig = document.getElementById('signInWelcomeDig');
let signInWelcome = document.getElementById('signInWelcome');
let signInOk = document.getElementById('signInOk');


registerBtn.addEventListener('click', function(event) {
    event.preventDefault();
    validateInputs();

})


console.log(usernameError)

const validateInputs = () =>{

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    
    isValid = true;

  // Validate Username
    if (usernameValue === "") {
        username.classList.add('shadow-error');
        usernameError.classList.remove('hidden');
        usernameError.textContent = "Please enter your name";
        isValid = false;
    } else if (usernameValue.length < 3) {
        username.classList.add('shadow-error');
        usernameError.classList.remove('hidden');
        usernameError.textContent = "Name must be at least 3 characters";
        isValid = false;
    } else {
        username.classList.remove('shadow-error');
        username.classList.add('shadow-success');
        usernameError.classList.add('hidden');
        usernameError.textContent = "";
    }
    
     // Validate Email
     if (emailValue === "") {
        email.classList.add('shadow-error');
        emailError.classList.remove('hidden');
        emailError.textContent = "Please enter your email";
        isValid = false;
    } else if (!validateEmail(emailValue)) {
        email.classList.add('shadow-error');
        emailError.classList.remove('hidden');
        emailError.textContent = "Please enter a valid email";
        isValid = false;
    } else {
        email.classList.remove('shadow-error');
        email.classList.add('shadow-success');
        emailError.classList.add('hidden');
        emailError.textContent = "";
    }
      // Validate Password
      if (passwordValue === "") {
        password.classList.add('shadow-error');
        passwordError.classList.remove('hidden');
        passwordError.textContent = "Please enter your password";
        isValid = false;
    } else if (passwordValue.length < 8) {
        password.classList.add('shadow-error');
        passwordError.classList.remove('hidden');
        passwordError.textContent = "Password must be at least 8 characters";
        isValid = false;
    }else if (!/[!@$%^&*+#]/.test(passwordValue)) {
        password.classList.add('shadow-error');
        passwordError.classList.remove('hidden');
        passwordError.textContent = "Password must contain at least one special character (!@$%^&*+#).";
        isValid = false;
    }
     else {
        password.classList.remove('shadow-error');
        password.classList.add('shadow-success');
        passwordError.classList.add('hidden');
        passwordError.textContent = "";
    }
    
    
    if(isValid){
        localStorage.setItem('username', username.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('loggedIn', "true");
        signInWelcomeDig.classList.replace("hidden" , "flex");
        signInWelcome.textContent = `Welcome ${username.value}!`;
        setTimeout(() => {
            window.location = "index.html";
           
        }, 3500);
    }
}
// Email validation function
const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}



