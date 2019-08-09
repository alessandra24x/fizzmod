import React, { Component } from 'react'

class Formulario extends Component {
    render() {
        let {handlesubmit, handleChange} = this.props
        return (
            <form onSubgmit={handlesubmit}>
                <input onchange={handleChange} type="text" placeholder="Usuario"/>
                <button>Guardar</button>
            </form>
        )
    }
}

export default Formulario