// Lógica dos botões de curtida
const botoesCurtida = document.querySelectorAll("article button");

botoesCurtida.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", function () {
        let texto = botao.querySelector("span");
        let contador = Number(texto.textContent);

        if (!curtiu) {
            texto.textContent = contador + 1;
            curtiu = true;
        } else {
            texto.textContent = contador - 1;
            curtiu = false;
        }

        botao.classList.toggle("curtido", curtiu);
    });
});

// Lógica de alternância do tema escuro
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", function () {
    document.body.classList.toggle("tema-escuro");
});