const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInput([username,email,password,confirm_password]);
    
    if(email.value === ''){
        showError(email,'ກະລຸນາປ້ອນອີເມວ');
        
    }else if(!validateEmail(email.value.trim())){
        showError(email,'ອີເມວບໍ່ຖຶກຕ້ອງ');
    } else{
         showSuccess(email);
    }

    checkPassword(password,confirm_password);
    checkInputLength(username,5,10);
    checkInputLength(password,5,12);
});

function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function validateEmail(email) {
    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
  };

function checkInput(inputArray) {
    inputArray.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`ກະລຸນາປ້ອນ ${getInputCase(input)}`);
        }else{
            showSuccess(input);
        }
    });
  }

  function getInputCase(input) {
    return input.id.charAt(0).toUpperCase()+input.id.slice(1)
  }

  function checkPassword(password,confirm_password) {
    if(password.value !== confirm_password.value){
        showError(confirm_password,'ລະຫັດຜ່ານບໍ່ຕົງກັນ');
    }
  }

  function checkInputLength(input, min, max) {
    if(input.value.length <= min){
        showError(input, `${getInputCase(input)} ຕ້ອງຫຼາຍກ່ວາ ${min} ຕົວອັກສອນ`);
    }else if(input.value.length > max){
        showError(input,`${getInputCase(input)} ຕ້ອງບໍ່ເກີນ ${max} ຕົວອັກສອນ`)
    }else{
        showSuccess(input);
    }
  }