import {buscarAlbuns} from "./api";

const pesquisarAlbum = document.querySelector<HTMLInputElement>("#campoAlbum");

if (!pesquisarAlbum) {
    throw new Error("Elemento #campoAlbum não encontrado no index.html.");
}

const btnPesquisarAlbum = document.querySelector<HTMLButtonElement>("#btnPesquisar");

if (!btnPesquisarAlbum) {
    throw new Error("Elemento #btnPesquisar não encontrado no index.html.");
}

const albumPesquisado = document.querySelector<HTMLDivElement>("#albumDestaque");

if (!albumPesquisado) {
    throw new Error("Elemento #albumDestaque não encontrado no index.html.");
        
}

console.log(pesquisarAlbum, btnPesquisarAlbum, albumPesquisado);