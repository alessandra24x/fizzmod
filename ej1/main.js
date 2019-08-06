/**
 * Subir todo el trabajo en un branch nuevo y pushearlo a un repo en GitHub
 *
 * 1) Hacer una etiqueta <a> en HTMl
 * 2) Agarrarla con JS
 * 3) Asignarle un evento de "click"
 * 4) El callback del click tiene que poder crear un elemento <p> y dos <button>, todo adentro de un <div> (Se crean con JS)
 * 5) El <p> tiene que decir "Esta seguro que quiere abandonar la página" y los botones "aceptar" y "cancelar", respectivamente
 * 6) Si se hace click en aceptar , se tiene que redirigir al usuario al href del <a>
 * 7) Si se hace click en cancelar, se tiene que borrar el mensaje
 *
 *
 */



//a

var a = document.querySelector('a');
// opcion delegar evento sacar los event listener afuer y hacerlos reaccionar por propagacion

a.addEventListener("click", e =>{
  e.preventDefault();
  //div
    var div = document.createElement("div");
    document.body.appendChild(div);
    div = document.querySelector('div');

  //p
    var p = document.createElement("p");
    div.appendChild(p);
    p = document.querySelector('p');
    p.innerText = "Esta seguro que quiere abandonar la página?"

  //button 1
    var btn1 =  document.createElement("button");
    div.appendChild(btn1);
    btn1.innerText = "Aceptar";
    btn1.addEventListener("click",()=>{

      location.href = e.target.href

    });

  //button 2
    var btn2 = btn1.cloneNode(true);
    div.appendChild(btn2);
    btn2.innerText = "Cancelar";
    btn2.addEventListener("click",()=>{
      document.body.removeChild(div);
    });

});

