import React, {Component} from "react"
import usuario from "./usuario"

class ListadoUsuarios extends Component {
    let {usuarios} = this.props
    render() {
        return (
            <ul>
                {usuarios.length
                ? usuarios.map(usuario =>
                    <Usuario key={usuario} usuario={usuario}>
                    )
                : <li>No tienes usuarios</li>}
            </ul>
        )
    }
}

export default ListadoUsuarios