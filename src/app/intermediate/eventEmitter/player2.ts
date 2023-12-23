import { EventEmitter } from "@angular/core";


export class Player2 { 

    hp : number; 
    hpChange = new EventEmitter<number>();

    constructor(){ 
        this.hp = 100;
    }

    getHurt(hurt: number){
    
        if(hurt >= this.hp){
            this.hp = 0; 
        }else{ 
            this.hp = this.hp - hurt; 
        }
       this.hpChange.emit(this.hp);
    }
}; 