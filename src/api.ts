import type { Album,AlbumSearchResponse } from "./types";

export async function buscarAlbuns(termo: string): Promise <results: Album[]> {
    const resposta = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(termo)}&entity=album&limit=10`
    );
    const dados:AlbumSearchResponse = await resposta.json();
    return dados.results
}