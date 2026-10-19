import { buscarAlbuns } from "./api";
import type { Album } from "./types";

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

const listaAlbuns = document.querySelector<HTMLUListElement>("#listaAlbuns");

if (!listaAlbuns) {
  throw new Error("Elemento #listaAlbuns não encontrado no index.html");
}

// ===== Funções =====
const mostrarLista = (albuns: Album[]) => {
  listaAlbuns.replaceChildren();

  for (const album of albuns) {
    const item = document.createElement("li");
    item.textContent = `${album.collectionName} - ${album.artistName}`;

    item.addEventListener("click", () => {
      mostrarAlbum(album);
    });

    listaAlbuns.appendChild(item);
  }
};

const mostrarAlbum = (album: Album) => {
  albumDestaque.textContent = album.collectionName;

  const capa = document.createElement("img");
  capa.src = album.artworkUrl60.replace("60x60", "300x300");
  capa.alt = "Capa de " + album.collectionName;
  albumDestaque.appendChild(capa);
};

// ===== Eventos =====
btnPesquisar.addEventListener("click", async () => {
  const albuns = await buscarAlbuns(campoAlbum.value);

  mostrarLista(albuns);

  if (albuns.length === 0) {
    albumDestaque.textContent = "Nenhum álbum encontrado.";
    return;
  }

  mostrarAlbum(albuns[0]);
});
