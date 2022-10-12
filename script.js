// SOBRE MIM
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) => {
        var windowHeight = window.innerHeight;
        var elementTop = reveal.getBoundingClientRect().top;
        var elementVisible = 500;

        if(elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");

        } else {
            reveal.classList.remove("active");


        }

    })

}
    window.addEventListener("scroll", reveal);

// CONTATO
function mascara(telefone){ 
    if(telefone.value.length == 0)
        telefone.value = '(' + telefone.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
    if(telefone.value.length == 3)
        telefone.value = telefone.value + ') '; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

    if(telefone.value.length == 10)
        telefone.value = telefone.value + '-'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.

}