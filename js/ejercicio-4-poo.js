class Producto{

    constructor(nombre, precio, codigo){
        
        this.nombre = nombre;
        this.precio = precio;
        this.codigo = codigo;

    }

    mostrarDatos(){

        document.write(`Producto:
        <ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: ${this.precio}</li>
        <li>Codigo: ${this.codigo}</li>
        </ul>`)

    }
}

let producto1 = new Producto("Cerveza Quilmes 473cc", "$150", "001");
let producto2 = new Producto("Coca Cola 3L", "$400", "002");
let producto3 = new Producto("Papas Tafí 500g", "$200", "003");

let productos = [producto1, producto2, producto3];

for(i = 0; i < productos.length; i++){

    productos[i].mostrarDatos();
}