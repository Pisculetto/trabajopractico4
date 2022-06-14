class Cuenta {

    constructor(titular,saldo){

    this.titular='Alex';
    this.saldo= 0;
    }

    
    informar(){
        document.write(`
        <ul>
        <li>Titular: ${this.titular}</li>
        <li>Saldo: ${this.saldo}</li>
        </ul>
        `);
    }

    ingresar(saldoIngresado){
        this.saldo = this.saldo + saldoIngresado;
    }

    extraer(saldoRetirado){
       this.saldo = this.saldo - saldoRetirado; 
    }
}

 
let ejemplo = new Cuenta();

document.write(`Estado de la cuenta:<br>`)

ejemplo.informar();

ejemplo.ingresar(parseInt(prompt(`Cuanto dinero desea ingresar?`)));

ejemplo.extraer(parseInt(prompt(`Cuanto dinero desea extraer?`)));

document.write(`Nuevo estado:<br>`)

ejemplo.informar();