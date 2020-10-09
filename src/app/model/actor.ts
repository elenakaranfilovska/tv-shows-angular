import { Image } from './image';

export interface Person {
    name: string;
    image: Image;
}

export interface Character {
    name: string;
}

export interface Actor {
    person: Person;
    character: Character,


}