const form = document.querySelector(".form")
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const repetirEmail = document.querySelector("#repetirEmail");
const telefone = document.querySelector("#numero");
const senha = document.querySelector("#senha");
const repetirSenha = document.querySelector("#repetirSenha");
const submitButton = document.querySelector("#botao");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const nameValue = nome.value;
    const emailValue = email.value;
    const repetirEmailValue = repetirEmail.value;
    const telefoneValue = telefone.value;
    const senhaValue = senha.value;
    const repetirSenhaValue = repetirSenha.value;

    if (nameValue === '' || emailValue === '' || repetirEmailValue === '' || telefoneValue === '' || senhaValue === '' || repetirSenhaValue === '' ){
        alert('algum campo vazio!')
        
    } else {
        if( emailValue !== repetirEmailValue || senhaValue !== repetirSenhaValue){
            alert('Os campos repetidos precisam ser iguais')
        } else{
            alert('Usuário cadastrado!')
        }
    }
})
