let sliderElement = document.querySelector("#slide");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let paswword = document.querySelector("#senha");

let conteudoSenha = document.querySelector("#conteudo-senha");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slide.oninput = function(){
    sizePassword.innerHTML = this.value;
}
function generatePassword (){
    let pass = "";
    
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    
    conteudoSenha.classList.remove("hide");
    senha.innerHTML = pass;
    novaSenha = pass;

}
function copyPassword(){
    navigator.clipboard.writeText(novaSenha);
}
const bot = document.querySelector(".bot");
const aside = document.querySelector("aside");

bot.addEventListener("click", function(){
    this.classList.toggle("active");
    aside.classList.toggle("active");
})

