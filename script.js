// Menu Responsivo

const navBar = document.querySelector("nav");
const menuHamburguer = document.querySelector("#menu-hamburguer");

menuHamburguer.addEventListener("click", function () {
    if (!navBar.classList.contains("sumir")) {
        navBar.classList.add("sumir");
    }
    else {
        navBar.classList.remove("sumir");
    }
})


header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
        header.classList.add("sombra");
    }
    else {
        header.classList.remove("sombra");
    }
})



// Modo Claro / Escuro
corpo = document.querySelector("body");
header = document.querySelector("header");
todosParagrafos = document.querySelectorAll("p");
todasTagsA = document.querySelectorAll("a");


mudarTema = document.querySelector("#modo-escuro");

mudarTema.addEventListener("click", () => {
    if (mudarTema.classList.contains("sol")) { // SOL:
        mudarTema.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        mudarTema.classList.remove("sol");

        corpo.style.backgroundColor = "#fff";
        header.style.backgroundColor = "#fff";
        todosParagrafos.forEach(function(paragrafo) {
            paragrafo.style.color = "#000";
        })
        todasTagsA.forEach(function(tagA) {
            tagA.style.color = "000";
        })
    }
    else {
        mudarTema.classList.add("sol"); // LUA
        mudarTema.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        
        corpo.style.backgroundColor = "#333";
        header.style.backgroundColor = "#222";

        todosParagrafos.forEach(function(paragrafo) {
            paragrafo.style.color = "#fff";
        })
        todasTagsA.forEach(function(tagA) {
            tagA.style.color = "#fff";
        })
    }
})

//espaço

// Projetos -> animação de aparecer o texto e os ícones

const projeto = document.querySelectorAll(".projeto");

projeto.forEach(function (itemProjeto) {
    itemProjeto.addEventListener("mouseover", function () {
        const texto = this.querySelector("p.descricao-projeto");

        this.style.marginBottom = "100px";
        texto.style.opacity = "100%";

        const iconesProjeto = this.querySelectorAll(".icones_para_acessar_projeto");
        iconesProjeto.forEach((itemIcone) => {
            itemIcone.style.opacity = "100%";
        })
    })

    itemProjeto.addEventListener("mouseout", function () {
        const texto = this.querySelector("p.descricao-projeto");

        texto.style.opacity = "0";
        this.style.marginBottom = "0";

        const iconesProjeto = this.querySelectorAll(".icones_para_acessar_projeto");
        iconesProjeto.forEach((itemIcone) => {
            itemIcone.style.opacity = "0";
        })
    })
})



// Contato -> enviar mensagem

tudoCerto = 0;

const confirmacaoMensagemEnviada = document.querySelector("#confirmacao-mensagem-enviada");
const botaoEnviar = document.querySelector("#botao-enviar");

const inputContato = document.querySelectorAll(".input-contato");
const nome = document.querySelector("#nome");
const emailUsuario = document.querySelector("#email")
const mensagem = document.querySelector("#mensagem");

function enviarEmail() {

    confirmacaoMensagemEnviada.style.display = "none";
    botaoEnviar.style.marginTop = "20px";

    let mensagemEnviada = `Nome = ${nome.value}<br>E-mail = ${emailUsuario.value}<br>Mensagem = ${mensagem.value}`;

    Email.send({
        SecureToken: "92827fa9-b34d-4a62-aca2-2bcba499560f",
        To: 'leonardorochaconstantino@gmail.com',
        From: "leonardorochaconstantino@gmail.com",
        Subject: "Enviado de: Portfólio do Léo",
        Body: mensagemEnviada
    }).then(
        confirmado => {
            if (confirmado == "OK") {
                confirmacaoMensagemEnviada.style.display = "block";
                botaoEnviar.style.marginTop = "10px";
            }
        }
    );
}

botaoEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();
    checarInputs();

    if (tudoCerto == 3) {
        confirmacaoMensagemEnviada.innerHTML = "✅ Mensagem Enviada!";
        enviarEmail();
    }
})

function checarInputs() {
    tudoCerto = 0;
    for (const input of inputContato) {
        if (input.value == "") {
            confirmacaoMensagemEnviada.innerHTML = "❌ Por favor, insira as informações corretamente";
            confirmacaoMensagemEnviada.style.display = "block";
            botaoEnviar.style.marginTop = "10px";
            input.style.border = "solid 2px red";
        }
        else {
            tudoCerto += 1;
        }

        input.addEventListener("keyup", () => {
            if (input.value != "") {
                input.style.border = "solid 2px #000";
            }
            else {
                input.style.border = "solid 2px red"
            }
        })
    }
}