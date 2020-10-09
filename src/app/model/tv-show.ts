import { Episode } from './episode';
import { Actor } from './actor';
import { Image } from './image';

export interface Embedded {
    episodes: Episode[];
    cast: Actor[];
}

export interface TVShow {
    id: number;
    url: string;
    name: string;
    language: string;
    genres: string[];
    status: string;
    premiered: Date;
    officialSite: string;
    image: Image;
    summary: string;
    _embedded: Embedded;
}

export interface SearchRes {
    score: number;
    show: TVShow;
}


