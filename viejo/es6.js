/*function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    Persona.prototype.saludo = function() {}
}
*/

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    saludo() {

    }
}

class Empleado extends Persona {
    constructor(sueldo, nombre, edad) {
        super(nombre, edad)
        this.sueldo = sueldo
    }
    trabajar() {
        
    }
}