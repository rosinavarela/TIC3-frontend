import { ArtistDTO } from "./ArtistDTO";

export class Application {

    constructor(public id: string, public artist: ArtistDTO, public msj?: string) { }
}