class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros= libros;
        this.mascotas= mascotas;
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }
    
    countMascotas(){
        return this.mascotas.length;
    }

    addBook(libro){
        this.libros.push(libro);
    }

    getBookNames(){ 
        let nombresLibros = [];
        this.libros.forEach(libro => {
            nombresLibros.push(`Nombre del libro: ` + libro.nombre);
            
        });  
        return nombresLibros;
    }
}

let usuario1 = new Usuario("Ana", "Lopez", 
                          [{"nombre": "La chica de nieve", "autor": "Javier Castillo"}, 
                           {"nombre": "Un cuento perfecto", "autor": "Elísabet Benavent"}], 
                          ["Reyna", "Mailo"]);


                          
console.log(usuario1);

let fullName = usuario1.getFullName();
console.log(fullName);

usuario1.addMascota("Nueva Mascota");
console.log(`Se agregó una nueva mascota`);


usuario1.addBook({"nombre": "A corazón abierto", "autor": "Elvira Lindo"});
console.log("Se agregaó un nuevo libro");

let cantMascotas = usuario1.countMascotas();
console.log(`La cantidad de Mascotas es: ${cantMascotas}`);

let titulosLibros= usuario1.getBookNames();
console.log(titulosLibros);
