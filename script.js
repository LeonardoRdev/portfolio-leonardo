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

const botaoEnviar = document.querySelector("#botao-enviar");

botaoEnviar.addEventListener("click", () => {
    alert("Mensagem enviada!")
})
