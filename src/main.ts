import { buscarAlbuns } from "./api";

// ===== Elementos da página =====
const campoAlbum = document.querySelector<HTMLInputElement>("#campoAlbum");

if (!campoAlbum) {
    throw new Error("Elemento #campoAlbum não encontrado no index.html");
}

const btnPesquisar = document.querySelector<HTMLButtonElement>("#btnPesquisar");

if (!btnPesquisar) {
    throw new Error("Elemento #btnPesquisar não encontrado no index.html");
}

const albumDestaque = document.querySelector<HTMLDivElement>("#albumDestaque");

if (!albumDestaque) {
    throw new Error("Elemento #albumDestaque não encontrado no index.html");
}

// ===== Funções =====

// ===== Eventos =====
btnPesquisar.addEventListener("click", async () => {
    const albuns = await buscarAlbuns(campoAlbum.value);
    console.log(albuns);
});