import React, { Component } from 'react'
import ListadoUsuarios from "./ListadoUsuarios"

class Formulario extends Component {
    render() {
        let {handlesubmit, handleChange, usuario, usuarios} = this.props
        return (
            <Fragment>
                <form onSubgmit={handlesubmit}>
                    <input onchange={handleChange} type="text" placeholder="Usuario" value={usuario}/>
                    <button>Guardar</button>
                </form>
                <ListadoUsuarios usuarios={usuarios}/>
            </Fragment>
        )
    }
}

export default Formulario