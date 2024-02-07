// Projetos -> animação de aparecer o texto e os ícones

const projeto = document.querySelectorAll(".projeto");

projeto.forEach(function (itemProjeto) {
    itemProjeto.addEventListener("mouseover", function () {
        const texto = this.querySelector("p.descricao-projeto");

        this.style.marginBottom = "100px";
        texto.style.opacity = "100%";

        const iconesProjeto = this.querySelectorAll(".icones_para_acessar_projeto");
        iconesProjeto.forEach((itemIcone) => {
            itemIcone.style.opacity = "100%"
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

const confirmacaoMensagemEnviada = document.querySelector("#confirmacao-mensagem-enviada");
const botaoEnviar = document.querySelector("#botao-enviar");

const nome = document.querySelector("#nome");
const emailUsuario = document.querySelector("#email")
const mensagem = document.querySelector("#mensagem");

function enviarEmail() {

    confirmacaoMensagemEnviada.style.display = "none";
    botaoEnviar.style.marginTop = "20px";

    let mensagemEnviada = `Nome = ${nome.value}<br>E-mail = ${emailUsuario.value}<br>Mensagem = ${mensagem.value}`;

Email.send({
    SecureToken: "92827fa9-b34d-4a62-aca2-2bcba499560f",
    To : 'leonardorochaconstantino@gmail.com',
    From : "leonardorochaconstantino@gmail.com",
    Subject : "Enviado de: Portfólio do Léo",
    Body : mensagemEnviada
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
    enviarEmail();
})
