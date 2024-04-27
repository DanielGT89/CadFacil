function showcarregamento() {
    const div = document.createElement("div");
    div.classList.add("loader", "centralize");

    const img = document.createElement("img");
    img.src = "https://ronaldofelipe.com.br/imagens/carregamento.gif";
    img.alt = "loader.gif";

    div.appendChild(img);

    document.body.appendChild(div);
}

function hidecarregamento() {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.remove();
    }
}
