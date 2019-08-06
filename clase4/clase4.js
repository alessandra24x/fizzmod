//Promise

//Es un placeholder de un valor que se va a completar a futuro. Esto evita tener el valor
//que necesitamos tener en un callback, sino que ya tenemos directamente una variable con ese valor

let promesa = new Promise((resolver, rechazar) => {
    //Aca podemos hacer lo que sea. Eventualmente esta funcion resolver va a resolver en el valor que
    //estamos prometiendo
    //try {
        resolver(1)
    //}catch(e) {
        rechazar(true)
        //throw true
    //}
}) 

/**
 * status: pending - resolved - rejected - settled
 * 
 * value: Any - Le podemos asignar cualquier valor a una promesa
 * 
 * Una vez que una promesa cambia de estado y se le asigna el valor, lo cual pasa al mismo tiempo, no
 * puedo volver a cambiarle ninguno de los dos.
 * 
 * Promise.then(callback Function) => se va a ejecutar cuando la promesa cambie su estado a resolved
 * 
 * Promise.catch(callback Function) => Se va a ejecutar cuando la promesa detecta que cambio su estado
 * a resolved
 */ 
console.log(promesa)

promesa
.then((respuesta) => {
    console.log(respuesta)
})
.catch((error) => {
    console.error(error)
})

/**
 * Fetch = XHR + Promise
 * Es un pedido por HTTP que implementa promesas en su interior + Request, Response, Header, Body,
 * Stream. Por defecto solo toma una URL y hace un pedido de HTTP por GET
 * 
 * REST = Representational state Transfer
 */

 /**
  * fetch()    =>    Promise
  * Promise    =>    Promise.then().catch()
  * fetch()    =>    Response
  * Response    =>   Response.metodo()
  * .fn(() =>{Promise}) =>   fn(()=> {return Promise})
  * .fn(() =>{Promise,Promise}) =>   fn(()=> {return
  * Promise.all([Promise,Promise]) })
  * 
  * metodos: text/ arrayBuffer / Blob / json
  */

let url = "https://jsonplaceholder.typicode.com"

//1er promesa
fetch(`${url}/users`)
.then((respuesta) => {
    //2da promesa
    return respuesta.json();
})
.then((respuesta) => {
    let id = respuesta[8].id
    return fetch(`${url}/posts?userId=${id}`)
})
.then((respuesta) => {
    return respuesta.json()
})
.then((respuesta) => {
    let arr = []
    respuesta.forEach((post) => {
        arr.push(fetch(`${url}/comments?postId=${post.id}`))
    })

    return Promise.all(arr)
})
.then((respuesta) => {
    let arr = []
    respuesta.forEach((response) => {
        arr.push(response.json())
    })

    return Promise.all(arr)
})
.then((respuesta) => {
    console.log(respuesta)
})
.catch((error) => {
    console.error(error)
})

/**
 * typeof ""           "string"
 * typeof 1            "number"
 * typeof true         "boolean"
 * typeof undefined    "undefined"
 * typeof alert        "function"
 * typeof null         "object"
 * typeof []           "object"
 * typeof {}           "object"
 * 
 * Array.isArray(X)     Boolean
 * 
 * SENTENCIA: no devuelve nada
 * if(){} else{}
 * [1,2,3].forEach((e,i,arr) =>{}) => undefined
 * 
 * EXPRESION: siempre devuelve algo
 * let res = condicion ? truthy : falsy
 * [1,2,3].map((e,i,a) =>{
 * return
 * }) => array - Siempre devuelve un array con la misma longitud del array de donde sales
 */