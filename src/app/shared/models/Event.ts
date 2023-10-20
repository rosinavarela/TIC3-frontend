/*aca vamos a definir el modelo de comida*/

import { DatePipe, Time } from "@angular/common";

export class Event { 
    
    constructor(
        public id: number,
        public name:string,
        public date:Date,
        public genrePreffered:string,
        public time: Time,
        public location:string,
        public paid:boolean,
        public artist: string | null = null,
        public picture:string | null, 
        public neighborhood: string,
        public description?:string,
        public equipment?:string
    ) {}
        
/*makes this file accesible from other files*/

   /*
    id!:number;
    name!:string; 
    place!:string;
    imageUrl?:string; 
    date!:Date;
    genre?:string;
    description?:string;
    //time!:Date;
    equipment?:string; 
    date_limit!:Date;
    payment!:boolean;
    artist: string | null = null; //objeto artista
    //fijarme que este igual que el de las chicas
*/
}

