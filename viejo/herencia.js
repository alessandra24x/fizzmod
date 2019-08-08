//Super

function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    Persona.prototype.saludar = function() {
        console.log(`Hola, soy ${nombre}`)
    }
}

//Subclase
function Empleado(sueldo) {
    this.sueldo = sueldo
    //Persona() aca el this en window {}
    //new Persona() aca el this es nuevo {}
    //Persona.call(this, nombre, edad)
    Persona.apply(this, [nombre, edad])
    Empleado.prototype.trabajar = function() {
        console.log("Trabajo muy duro, como un esclavo...")
    }
}

//HERENCIA
//Subclass.prototype = Object.create(Superclass.prototype)
//Subclass.protoype.constructor = Subclass
Empleado.prototype = Object.create(Persona.prototype)
Empleado.prototype.constructor = Empleado

let pedro = new Empleado("Pedro", 30)