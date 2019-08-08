//SuperClass
function Persona(nombre, edad) {
    //Atributos de configuracion de propiedades de objetos
    // value - writable - configurable - enumerable
    //let n = nombre
    //Object.defineProperty()
    //Object.defineProperties()
    //Object.create()
    Object.defineProperty(this, "nombre", {
        value: nombre,
        /*writable: false, //Permisos de escritura
        enumerable: false, //Permisos de iterabilidad
        configurable: false //Permisos de borrado*/ //Todas vienen en false por defecto
    })
    this.edad = edad
    Persona.prototype.saludar = function() {
        console.log(`Hola, soy ${n}`)
    }
}

let juan = new Persona("Juan", 30)
let ana = new Persona("Ana", 30)