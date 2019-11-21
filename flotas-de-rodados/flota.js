class ChevroletCorsa {
    constructor (col) {
        this._color = col;
        this._capacidad = 4;
        this._velocidadMaxima = 150;
        this._peso = 1300;
    }
    queColorTenes(){
        return this._color;
    }
     capacidad() { return this._capacidad;}
     velocidadMaxima() { return this._velocidadMaxima; }
     peso(){ return this._peso; }
  }
  
  class RenaultKwid {
    constructor () {
        this._tieneTanqueAdicional = false;
    }
    
    capacidad() { 
      if (this._tieneTanqueAdicional) {
        return 3;
      } else {
        return 4;
      }  
    }
    velocidadMaxima()
    {
        if (this._tieneTanqueAdicional) {
        return 120;
      } else {
        return 110;
      }  	
    }
         peso() 
        {
             if (this._tieneTanqueAdicional) 
             {
              return 1350;
          } else {
              return 1200;
          }
      }
        color() 
        {
        return azul; 
        }
  }
  
  const trafic = { motor:() => null , interior:() => null}
  /*
  const trafic {
      var motor = null
      var interior = null
  
      capacidad() { return interior.capacidad() } 
      velocidadMaxima() { return motor.velocidadMaxima() }
      peso() {
          return 4000 + motor.peso() + interior.peso()
      }
    color() { return blanco }
  }
  */
  const interiorComodo = { capacidad:() => 5 , peso:() => 700 }
  const interiorPopular = { capacidad:() => 12 , peso:() => 1000 }
  const motorPulenta =  { velocidadMaxima:() => 130 , peso:() => 800 }  
  const motorBataton = { velocidadMaxima:() => 80 , peso:() => 500 }  
 
  class AutoEspecial {
        constructor (col,capacidad,velocidadM,pes){
            this._color = col
            this._capacidad = capacidad
            this._velocidadMaxima = velocidadM
            this._peso = pes
        }
        color(){
            return this._color;
        }  
  }
  
const azul = { 
  color(){
    return "azul"
  } 
}
  const rojo = {
    color(){
      return "rojo"
    } 
  }
  const verde = {
    color(){
      return "verde"
    } 
  }
  const blanco = {
    color(){
      return "blanco"
    } 
  }
  const bordo = {
    color(){
      return "bordo"
    } 
  }
  const cremita = {
    color(){
      return "cremita"
    } 
  }
  const negro = {
    color(){
      return "negro"
    } 
  }
