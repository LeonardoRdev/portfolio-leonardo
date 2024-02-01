const projeto = document.querySelectorAll(".projeto");

projeto.forEach(function(itemProjeto) {
    itemProjeto.addEventListener("mouseover", function() {
        const texto = this.querySelector("p");
        // this.style.backgroundColor = "red"
        this.style.marginBottom = "100px";
        texto.style.opacity = "100%"
    })

    itemProjeto.addEventListener("mouseout", function() {
        const texto = this.querySelector("p")
        // alert("saiu")
        texto.style.opacity = "0"
        this.style.marginBottom = "0"
    })
})