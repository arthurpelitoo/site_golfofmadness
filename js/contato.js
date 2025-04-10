
document.getElementById('button').onclick = function(){
    var nome = document.getElementById('nome').value;

    var email = document.getElementById('email').value;

    var mensagem = document.getElementById('mensagem').value;

    if(nome == "" && email == "" && mensagem == ""){
        alert("Por favor, preencha todos os campos.");
    } else{

        if(nome == ""){
            alert("Informe o nome");
        }

        if(email == ""){
            alert("Informe o email");
        }

        if(mensagem == ""){
            alert("Dê alguma mensagem");
        }
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    console.log(validarEmail("bosta@emailcom"));

    // if(validarEmail)

    if(nome != "" && email != "" && mensagem != ""){
        alert("Formulário enviado com sucesso!");
    }
}


// function validarEmail(email) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     console.log(regex);
//     return regex.test(email);
// }

// console.log(validarEmail("teste@exemplo.com")); // true
// console.log(validarEmail("errado@com"));        // false