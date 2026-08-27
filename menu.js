const botaoMenu = document.querySelector(".cabecalho__botao-menu");
const menu = document.querySelector(".cabecalho__menu");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("cabecalho__menu--aberto");

        const menuEstaAberto = menu.classList.contains(
            "cabecalho__menu--aberto"
        );

        botaoMenu.setAttribute("aria-expanded", menuEstaAberto);
    });
}