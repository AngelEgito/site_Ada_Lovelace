
var nome = prompt("Qual é seu nome Dev(a)?")
alert(nome + ", bem vinde!");


var nome = document.getElementById('nome');
var email = document.getElementById('email');
var telefone = document.getElementById('telefone');

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)


function validaFormulario(){
  if(nome.value != "" && email.value != "" && telefone.value != ""){
    alert("Prontinho! você receberá as novidades por email.")
  }else{ 
    alert("Por favor, preencha os campos nome, email e telefone .")
  }
}


/* (document.getElementById("nome") 
document.getElementById("email") */

/* document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)


function validaFormulario(){
  if(document.getElementById("nome").value != "" &&
  document.getElementById("email").value != ""){
  alert("Prontinho! você receberá as novidades por email.")
  }else{ 
  alert("Por favor, preencha os campos nome, email e telefone .")
  }
} */