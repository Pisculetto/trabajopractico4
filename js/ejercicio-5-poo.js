class Persona {

    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento, comidaFav) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.nacimiento = nacimiento;
      this.comidaFav = comidaFav;
    }

    generaciones(){

        if(this.nacimiento >= 1930 && this.nacimiento <= 1948){ 

            document.write(`${this.nombre} pertecene a la generacion Silent Generation<br>Su rasgo caracteristico: Austeridad.<br>`);

        }
        
        if(this.nacimiento >= 1949 && this.nacimiento <= 1968){ 
        
            document.write(`${this.nombre} pertenece a la generacion Baby boom<br>Su rasgo caracteristico: Ambicion.<br>`);

        }
        if(this.nacimiento >= 1969 && this.nacimiento <= 1980){ 
                
            document.write(`${this.nombre} pertenece a la generacion X<br>Su rasgo caracteristico: Obsesion por el exito.<br>`);

        }
        if(this.nacimiento >= 1981 && this.nacimiento <= 1993){ 
        
            document.write(`${this.nombre} pertenece a la generacion Y<br>Rasgo caracteristico: Frustracion.<br>`);

        }
        if(this.nacimiento >= 1994 && this.nacimiento <= 2010){ 
        
            document.write(`${this.nombre} pertenece a la generacion Z<br>Rasgo caracteristico: irreverencia.<br>`);
            
        }
    }
    
    mostrarDatos(){

        document.write(`
        <ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Año de nacimiento: ${this.nacimiento}</li>
        </ul>
        `);
    }

    mayoriaEdad(){

        if(this.edad >= 18){
           
            document.write(`${this.nombre} es mayor de edad.<br>`);

        }
    }

    generarDNI(){

        let dni = Math.floor((Math.random() * (99999999 + 1)));
        return dni;
    }
}

let persona = new Persona(
prompt("Ingrese el nombre de la persona"), 
parseInt(prompt("Ingrese la edad: ")), 
parseInt(prompt("Ingrese el dni: ")), 
prompt("Ingrese el sexo (M o F): "), 
parseInt(prompt("Ingrese el peso: ")), 
parseInt(prompt("Ingrese la altura: ")), 
parseInt(prompt("Ingrese año de nacimiento: ")));

persona.generaciones();
persona.mayoriaEdad();
persona.mostrarDatos();
document.write(`<br>DNI random: ${persona.generarDNI()}`);