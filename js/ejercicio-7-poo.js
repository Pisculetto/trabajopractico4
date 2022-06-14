class Contacto{

    constructor(nombre, telefono){ 

        this.nombre = nombre;
        this.telefono = telefono;

    }

    añadirContacto(nuevoContacto){

    nuevoContacto = this.nombre(prompt("Ingrese nombre del nuevo contacto")), this.nombre(prompt("Ingrese numero del nuevo contacto"));
    agenda.push(nuevoContacto);  

    }

    existeContacto(Contacto){

        if(this.nombre == nuevoContacto.nombre && this.telefono == nuevoContacto.telefono){

            document.write("El contacto ya existe.");
        }
    }

    listarContactos(){

        for(let i = 0; i < agenda.length; i++){

            document.write(
                `Contacto: <br>
                Nombre: ${agenda[i].nombre}<br>
                Telefono: ${agenda[i].telefono}`)
        }

    }

    buscarContacto(nombre){


    }

    eliminarContacto(contactoX){

        agenda = [10]
        agenda.slice(0,1); 

    }

    agendaLlena(){


    }

    huecosLibres(){


    }
}

let agenda = [10];
let opcion = 0;

do{
    opcion = Number(prompt(`Bienvenido
    1. Añadir contacto 
    2. Mostrar contactos 
    3. Buscar contacto 
    4. Eliminar contacto 
    5. Verificar espacio en la agenda`))

    switch(opcion){

        case 1: 
        añadirContacto();
        break;

        case 2: 
        listarContactos();
        break;

        case 3: 
        buscarContacto();
        break;

        case 4: 
        eliminarContacto();
        break;

        case 5: 
        agendaLlena();
        huecosLibres();
    }
    
}while(opcion != 0);