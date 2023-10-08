/*aca vamos a definir el modelo de comida*/

import { DatePipe, Time } from "@angular/common";

export class Event { 
    constructor(
        public id: number,
        public name:string,
        public date:Date,
        public genre:string,
        public time: Time,
        public location:string,
        public date_limit:Date,
        public paid:boolean,
        public artist: string | null = null,
        public picture:string, 
        public applicationDeadline: Date,
        public description?:string,
        public equipment?:string
    ) {}

/*makes this file accesible from other files*/

    /*
    mandatorio:
    id!:number; 
    */

    /* si no queremos que sea mandatorio: 
    id?:number; 
    */

    /* si queremos que haya un default: 
    id:number = 0; 
    */
    // id!:number;
    // name!:string; 
    // place!:string;
    // imageUrl?:string; 
    // date!:Date;
    // genre?:string;
    // description?:string;
    // //time!:Date;
    // equipment?:string; 
    // date_limit!:Date;
    // payment!:boolean;
    // artist: string | null = null; //objeto artista
    // //fijarme que este igual que el de las chicas

}

