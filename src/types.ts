export type Album = {
    collectionType: string;
    artistId: number;
    artistName: string;
    collectionName: string;
    collectionId: number;
    artistViewUrl: string;
    trackCount: number;
    artworkUrl60: string;
    copyright: string;
    releaseDate: string;
    primaryGenreName: string;
};

export type AlbumSearchResponse = {
    resultCount: number;
    results: Album[]
};

export type Nota =  0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

export type Review = {
    collectionId: number; // Informação direta da API do iTunes
    albumRating: Nota;
    comment?: string;
    date: string;
    userId: string;
};