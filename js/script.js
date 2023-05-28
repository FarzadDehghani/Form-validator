function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const name = nameInput.value.trim();

    if (name.length === 0) {
        nameError.textContent = 'نام را وارد کنید.';
        nameInput.style.borderColor = 'red';
    } else if (name.length > 15) {
        nameError.textContent = 'نام باید کمتر از 15 کاراکتر باشد.';
        nameInput.style.borderColor = 'red';
    } else if (!/^[a-zA-Z]+$/.test(name)) {
        nameError.textContent = 'نام فقط می‌تواند شامل حروف انگلیسی باشد.';
        nameInput.style.borderColor = 'red';
    } else {
        nameError.textContent = '';
        nameInput.style.borderColor = '';
    }
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const email = emailInput.value.trim();

    if (email.length === 0) {
        emailError.textContent = 'ایمیل را وارد کنید.';
        emailInput.style.borderColor = 'red';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = 'ایمیل باید در فرمت درستی باشد.';
        emailInput.style.borderColor = 'red';
    } else {
        emailError.textContent = '';
        emailInput.style.borderColor = '';
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const password = passwordInput.value;

    if (password.length === 0) {
        passwordError.textContent = 'پسورد را وارد کنید.';
        passwordInput.style.borderColor = 'red';
    } else if (password.length < 8) {
        passwordError.textContent = 'پسورد باید حداقل 8 کاراکتر باشد.';
        passwordInput.style.borderColor = 'red';
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        passwordError.textContent = 'پسورد باید شامل حروف کوچک و بزرگ و اعداد باشد.';
        passwordInput.style.borderColor = 'red';
    } else {
        passwordError.textContent = '';
        passwordInput.style.borderColor = '';
    }
}

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    validateName();
    validateEmail();
    validatePassword();
});