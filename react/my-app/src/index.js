import React from "react"
import ReactDOM from "react-dom"
import App from "./ui/layout/App"
import {Provider} from "react-redux"
import store from "./api/store"
/*
1- Crear un store con createStore
2- Meter toda la aplicacion adentro de un <Provider>
3- Pasarle el store al provider por prop
4- Crear un reducer como una funcion pura que toma un estado anterior o inicial y un action,
que puede ser cualquier cosa
5- Completar el reducer con todos los cambios posibles de la aplicacion
6- Pasar el reducer como parametro al store


*Nota: El componente Provider asegura que cualquier componente hijo de la aplicacion que
envuelve puede tomar datos directamente del store sin pasar por toda la cadena de pasos
*/
ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById("root")
)