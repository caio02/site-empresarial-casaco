

function rougue(e){

    e.preventDefault();
    
    const inputNome = document.querySelector('#nome');
    const inputEmail = document.querySelector('#email');
    const inputNumero = document.querySelector('#numero');
    const mensagem = document.querySelector('#mensagem');


    let nome = inputNome.value;
    let email = inputEmail.value;
    let numero = inputNumero.value;


    

    mensagem.innerHTML = `Olá ${nome}, obrigado por completar o formulário, espero que tenha gostado da <u>Rougue</u>!
    <br>Nossa equipe entrará em contato com você dentro de algumas horas pelo seu email: ${email}, ou pelo seu número: ${numero}.`;






}