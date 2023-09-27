/*aca vamos a definir el modelo de comida*/

import { DatePipe } from "@angular/common";

export class Event { 
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
    id!:number;
    name!:string; 
    place!:string;
    imageUrl?:string; 
    date!:Date;
    genra?:string;
    description?:string;
    //time!:Date;
    equipment?:string; 
    date_limit!:Date;
    payment!:boolean;
    artist: string | null = null; //objeto artista
    //fijarme que este igual que el de las chicas

}

