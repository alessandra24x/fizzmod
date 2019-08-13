/**
 * React se separa en: react y react-dom
 * 
 * 1- Tiene que SIEMPRE estar la variable React en scope
 * 2- Un componente de React es una funcion
 * 3- Todos los componentes de React TIENEN que retornar: React.Component - String - DomNode
 * 4- Todos los componentes en React van en mayuscula
 * 5- Los componentes, para ejecutarlos, 
 */
//ES6

import React, {Component, Fragment} from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Formulario from "../widgets/formulario";

//CommonJS
//const React = require("react")
//let App = () => <p>Hola Mundo</p>

/*function App() {
    return <p>Hola Mundo</p>
}*/

/*
- Todos los componentes pueden tener su propio estado (state) y/o pueden recibir
parametros (props). El state, por default, SOLO se puede crear en una componente de
tipo class y SOLO puede ser modificado por aquel componente que lo crea. Los props son
de solo lectura y se pasan en JSX como atributos de HTML.

- Si mando props vacio envia un booleano true por defecto

- El pasaje de informacion de componente a componente es unidireccional

- El estado de un componente no se puede cambiar por asignacion de variable, es decir:
this.state = {contador: 0}
this.state.contador = nuevo_valor

Para modificarlo, se usa this.setState():

this.setState({contador: nuevo_valor})

- Dado que muchos metodos los vamos a querer pasar como props, tenemos que mantener el
contexto(this) de cada uno con el this que esta en el constructor() entonces:

this.mnetodo = this.metodo.bind(this)
*/

class App extends Component {

    constructor() {
        super()
        this.state = {
            links: ["perfil", "portfolio", "contacto"],
            contador: 0,
            usuario: "",
            usuarios: []
        }
        this.aumentarContador = this.aumentarContador.bind(this)
        this.mostrarFormulario = this.mostrarFormulario.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    aumentarContador() {
        this.setState({contador: this.state.contador + 1})
    }

    mostrarFormulario() {
        this.setState({mostrar: !this.state.mostrar})
    }

    handleChange(e) {
        this.setState({usuario: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        /*
        LA VIEJA

        let copia = this.state.usuarios.slice(0)
        copia.push(this.state.usuarios)

        LA NUEVA
        let copia = []
        */
        this.setState({usuarios: [...this.state.usuarios,this.state.usuario]})
    }

    render() {
        let {links, contador, mostrar, usuario, usuarios} = this.state
        return (
            <Fragment>
                <Header links={links}/>
                <p>Contador: {contador}</p>
                <button onClick={this.aumentarContador}>+</button>
                {mostrar ?
                <Formulario
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                usario={usuario}
                usuarios={usuarios}
                />
                : null
                }
                <button onClick={this.mostrarFormulario}>mostrar</button>
                <Main/>
                <Footer/>
            </Fragment>
        )
    }
}

export default App