var xhr = new XMLHttpRequest

xhr.addEventListener("readystatechange",()=>{
    console.log(`Nuevo Estado${xhr.readyState}`)
});
xhr.addEventListener("load",()=>{
 if (xhr.status == 200){
    document.body.innerText = xhr.response
 }
});
xhr.open("get","info.txt");

xhr.send()