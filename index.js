const form = document.querySelector('.form-control')
const emailBtn = document.querySelector('#email-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})


function checkInputs() {

    let emailValue = emailBtn.value.trim()
    
    if(emailValue === ''){
        //mostrar o erro
        //adicionar a classe error
        errorValidation(emailBtn, "email@gmail.com")
    }else{
        form.className = "form-control success"
        window.location = 'success-page.html'
    }

    function errorValidation(input, message){
        const formControl = input.parentElement;
        formControl.className = "form-control error"
    }

}

console.log("teste")