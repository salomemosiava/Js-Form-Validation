document.getElementById('registration').addEventListener('submit', function(event){
    event.preventDefault();

    let errors = {};
    let form = event.target;
    
    //username
    let username = document.querySelector('[name = "username"]').value;

    if (username.length < 4 || username == '') {
        errors.username = 'Username must be at least 4 characters'
    }

    //password
    let password = document.querySelector('[name = "password"]').value;
    let password2 = document.querySelector('[name = "password2"]').value;

    if (password == '' || password != password2 ) {
        errors.password = "Password can not be empty";
        errors.password2 = "Password don't match"
    }

    //checkbox
    let agree = document.querySelector('[name = "agree"]').checked;
    if (!agree) {
        errors.agree = "You must agree our terms and conditions";
    }

    //radio
    let age = false;
    form.querySelectorAll('[name = "age"]').forEach(element => {
        if (element.checked) {
            age = true;
        }
    })    
    
    if (!age) {
        errors.age = "Please select your age";
    }

    for (let  item in errors) {
        let errorSpan = document.getElementById('error_' + item);
        errorSpan.innerText = '';
        if (errorSpan) {
            errorSpan.innerText = errors[item];
        } 
    }

    if (Object.keys(errors).length == 0) {
        // form.submit();
        let h1Tag =document.createElement('h1');
        h1Tag.innerHTML = "Hello, "+username.toUpperCase() + ", I wish you the best day!";
        form.appendChild(h1Tag);
    }
});

let toggled = document.getElementById('toggleicon');
let toggled2 = document.getElementById('toggleicon2');
showHidePassword = () => {
    if (password.type == 'password') {
        password.setAttribute('type', 'text');
        password2.setAttribute('type', 'text');
        toggled.classList.remove('fa-eye-slash')
        toggled.classList.add('fa-eye');
        toggled2.classList.remove('fa-eye-slash')
        toggled2.classList.add('fa-eye');
    } else {
        toggled.classList.add('fa-eye-slash');
        toggled2.classList.add('fa-eye-slash');
        password.setAttribute('type', 'password');
        password2.setAttribute('type', 'password');
    }
}
toggled.addEventListener('click', showHidePassword);
toggled2.addEventListener('click', showHidePassword);

//email validation 
function validateEmail() {
    let emailField = document.getElementById('email').value;
    let emailStructure = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let span = document.getElementById('error_email');

    if (emailField.match(emailStructure)) {
        span.innerHTML = "Your email address is valid";
        span.style.color = 'green';
    } else {
        span.innerHTML = "Your email address is invalid";
        span.style.color = 'red';
    }
}

