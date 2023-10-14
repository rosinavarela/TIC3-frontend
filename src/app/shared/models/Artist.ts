export class Artist {
    constructor(
        public id: number,
        public name: string,
        public lastName: string,
        public phone: number,
        public artisticName?: string,
        public picture?: string,   //checkear esto a futuro
        public description?: string,
        public musicGenre?: string,
        public igUsername?: string,
        public links?: string,
        public rating?: number
    ){}
    
}