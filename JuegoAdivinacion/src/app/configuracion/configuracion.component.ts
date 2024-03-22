import { Component } from '@angular/core';
import { Config } from '../modelos/configuracion';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css'
})
export class ConfiguracionComponent {
  
  public configuracion:Config;

  public nombre:string = "";
  public apellido:string = "";
  public rango:number = 0;
  public intentos:number = 0;
  public numAleatorio:number = 0;

  public ongiEtorri:string = "";

  public numero:number = 0;

  public fallos:Array<number> = []

  constructor(){
    this.configuracion = new Config("","",0,0,0);
  }

  getDatos():void{

    this.configuracion = new Config(this.nombre, 
                                    this.apellido, 
                                    this.rango, 
                                    this.intentos, 
                                    this.numAleatorio)
    console.log(this.configuracion)
    this.ongiEtorri = "Ongi Etorri";
    console.log(this.configuracion.nombre)
    this.calcNumAleatorio(this.configuracion.rango,this.configuracion.intentos)
  
  }

  calcNumAleatorio(rango:number,intentos:number){
    // console.log(rango);
    // console.log(intentos);
    this.numAleatorio = Math.floor(Math.random() * (rango - 0 + 1) + 0);
    console.log("Numero aleatorio generado: " + this.numAleatorio);
  }

  juegoAdivinacion(){
    let numero = this.numero
    
    console.log(this.numAleatorio)
    if(numero == this.numAleatorio){
      this.intentos = 0;
      this.numero = 0;
      this.fallos=[];
    } else if(this.numero != this.numAleatorio){
    this.intentos = this.intentos -1;
    console.log("intentos restantes " + this.intentos)
    this.fallos.push(numero);
    }
  }

}
