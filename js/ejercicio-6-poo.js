class Libro {
  constructor(isbn, titulo, autor, paginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }

  get get_isbn() {
    return this.isbn;
  }

  get get_titulo() {
    return this.titulo;
  }

  get get_autor() {
    return this.autor;
  }

  get get_paginas() {
    return this.paginas;
  }

  set set_isbn(isbn) {
    this.isbn;
  }

  set set_titulo(titulo) {
    this.titulo;
  }

  set set_autor(autor) {
    this.autor;
  }

  set set_paginas(paginas) {
    this.paginas;
  }

  mostrarLibro() {
    document.write(
      `El libro ${this.titulo} con ISBN ${this.isbn} fue creado por ${this.autor} y tiene ${this.paginas} páginas.<br>`
    );
  }
}

function compararPaginas(libro1, libro2){

    if (libro1.get_paginast_ > libro2.get_paginas) {

        document.write(`<br>El libro ${libro1.get_titulo} tiene mas paginas.<br>`);

      } 

      else {

        document.write(`<br>El libro ${libro2.get_titulo} tiene mas paginas.<br>`);

    }


}

let libro1 = new Libro(
    prompt("Ingrese ISBN del primer libro: "),
    prompt("Ingrese el nombre del primer libro: "),
    prompt("Ingrese el autor del primer libro: "),
    parseInt(prompt("Ingrese el numero de paginas del primer libro: "))
);
  
let libro2 = new Libro(
    prompt("Ingrese ISBN del segundo libro: "),
    prompt("Ingrese el nombre del segundo libro: "),
    prompt("Ingrese el autor del segundo libro: "),
    parseInt(prompt("Ingrese el numero de paginas del segundo libro: "))
);

libro1.mostrarLibro();
libro2.mostrarLibro();
compararPaginas(libro1, libro2);