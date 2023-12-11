const cadastrar = document.getElementById('cadastrar');
const aprender = document.getElementById('aprender');
const aprenderCSS = document.getElementById('aprenderCSS');
const aprenderHTML = document.getElementById('aprenderHTML');
const voltarC = document.getElementById('voltarC');
const voltarS = document.getElementById('voltarS');
const relCadastro = document.getElementById('relCadastro');
const recSenha = document.getElementById('recSenha');
const tempoAtraso1 = 1500;
const tempoAtraso2 = 3500;

if (cadastrar || aprender) {
    cadastrar.addEventListener('click', function () {
        window.location.href = 'cadastro.html';
    });

    aprender.addEventListener('click', function () {
        const errorMessage = document.getElementById("errorMessageCadastro");
        const password = document.getElementById('password').value;
        const username = document.getElementById('usernameUser').value;
        const users = JSON.parse(localStorage.getItem('usuarios')) || [];

        let usuario = users.find(function (user) {
            return user.usernameForm === username;
        });

        let senha = users.find(function (passwd) {
            return passwd.senhaForm === password;
        });

        if (usuario && senha) {
            errorMessage.textContent = "Login bem-sucedido!";
            errorMessage.style.color = "green";
            setTimeout(function () {
                errorMessage.textContent = "Redirecionando...";
                errorMessage.style.color = "black";
            }, tempoAtraso1);
            setTimeout(function () {
                window.location.href = "index.html";
            }, tempoAtraso2);
        } else if (usuario && password != senha) {
            errorMessage.textContent = "Senha incorreta!";
            errorMessage.style.color = "red";
        } else if (usernameUser != usuario) {
            errorMessage.textContent = "Usuário não cadastrado!";
            errorMessage.style.color = "red";
        }
    });

} else if (aprenderCSS || aprenderHTML) {
    aprenderCSS.addEventListener('click', function () {
        window.location.href = 'leiaC.html';
    });
    aprenderHTML.addEventListener('click', function () {
        window.location.href = 'leiaH.html';
    });
} else if (voltarC || relCadastro) {
    voltarC.addEventListener('click', function () {
        window.location.href = 'login.html';
    });
    relCadastro.addEventListener('click', function () {
        const username = document.getElementById('usernameUser').value;
        const users = JSON.parse(localStorage.getItem('usuarios')) || [];
        let usuario = users.find(function (user) {
            return user.usernameForm === username;
        });
        const errorMessage = document.getElementById("errorMessageCadastro");
        if (document.getElementById('username').value == "" || document.getElementById('usernameUser').value == "" || document.getElementById('email').value == "" || document.getElementById('senha').value == "" || document.getElementById('confSenha').value == "" || document.getElementById('dtNasc').value == "" || document.getElementById('cep').value == "" || document.getElementById('rua').value == "" || document.getElementById('num').value == "" || document.getElementById('bairro').value == "" || document.getElementById('cidade').value == "" || document.getElementById('uf').value == "") {
            errorMessage.textContent = "Nem todos os campos estão preenchidos!";
            errorMessage.style.color = "red";
        } else if (document.getElementById('senha').value != document.getElementById('confSenha').value) {
            errorMessage.textContent = "Senhas não conferem!";
            errorMessage.style.color = "red";
        } else {
            let usuarios = [];
            let usuarioAdicionar = {
                nameForm: document.getElementById('username').value,
                usernameForm: document.getElementById('usernameUser').value,
                emailForm: document.getElementById('email').value,
                senhaForm: document.getElementById('senha').value,
                confSenhaForm: document.getElementById('confSenha').value,
                dataForm: document.getElementById('dtNasc').value,
                cepForm: document.getElementById('cep').value,
                ruaForm: document.getElementById('rua').value,
                numForm: document.getElementById('num').value,
                bairroForm: document.getElementById('bairro').value,
                cidadeForm: document.getElementById('cidade').value,
                ufForm: document.getElementById('uf').value
            };
            if (localStorage['usuarios']) {
                usuarios = JSON.parse(localStorage.getItem('usuarios'))
            }
            usuarios.push(usuarioAdicionar);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            errorMessage.textContent = "Cadastro bem-sucedido!";
            errorMessage.style.color = "green";
            setTimeout(function () {
                errorMessage.textContent = "Redirecionando...";
                errorMessage.style.color = "black";
            }, tempoAtraso1);
            setTimeout(function () {
                window.location.href = "login.html";
            }, tempoAtraso2);
        }
    });
} else if (voltarS || recSenha) {
    voltarS.addEventListener('click', function () {
        window.location.href = 'login.html';
    });
    recSenha.addEventListener('click', function () {
        const errorMessage = document.getElementById("errorMessageSenha");
        if (document.getElementById('password').value == "" || document.getElementById('confPasswd').value == "") {
            errorMessage.textContent = "Nem todos os campos estão preenchidos!";
            errorMessage.style.color = "red";
        } else if (document.getElementById('password').value != document.getElementById('confPasswd').value) {
            errorMessage.textContent = "Senhas não conferem!";
            errorMessage.style.color = "red";
        } else {
            errorMessage.textContent = "Senha recuperada!";
            errorMessage.style.color = "green";
            setTimeout(function () {
                errorMessage.textContent = "Redirecionando...";
                errorMessage.style.color = "black";
            }, tempoAtraso1);
            setTimeout(function () {
                window.location.href = "login.html";
            }, tempoAtraso2);
        }
    });
};
