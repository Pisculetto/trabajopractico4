class Rectangulos{
    constructor(alto, ancho){ 
    this.alto = alto;
    this.ancho = ancho;
}

modificarAltura(nuevaAltura){

    this.alto = nuevaAltura;

}

modificarAncho(nuevoAncho){

    this.ancho = nuevoAncho;

}

calcularPerimetro(){

    this.perimetro = this.ancho * 2 + this.alto * 2;

}

calcularArea(){

    this.area = this.ancho * this.alto;
    
}

mostrarInformacion(){

    document.write(`Su rectangulo: <br> 
    
    Alto: ${this.alto}<br>
    Ancho: ${this.ancho}<br>
    Perimetro: ${this.perimetro}<br>
    Area: ${this.area}<br><br>`)
}

mostrarInformacionModificada(){

    document.write(`Su rectangulo modificado: <br> 
    
    Alto: ${this.alto}<br>
    Ancho: ${this.ancho}<br>
    Perimetro: ${this.perimetro}<br>
    Area: ${this.area}<br><br>`)
}

}

let ejemplo = new Rectangulos(parseInt(prompt("Primer altura: ")), parseInt(prompt("Primer ancho: ")));

ejemplo.calcularPerimetro();
ejemplo.calcularArea();
ejemplo.mostrarInformacion();
ejemplo.modificarAltura(parseInt(prompt("NUEVA ALTURA: ")));
ejemplo.modificarAncho(parseInt(prompt("NUEVO ANCHO: ")));
ejemplo.calcularPerimetro();
ejemplo.calcularArea();
ejemplo.mostrarInformacionModificada();
