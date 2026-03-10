let carrito=[]
let subtotal=0

function agregar(nombre,precio){

carrito.push({nombre,precio})

subtotal+=precio

actualizar()

}

function actualizar(){

let lista=document.getElementById("lista")

lista.innerHTML=""

carrito.forEach(p=>{

let li=document.createElement("li")

li.textContent=p.nombre+" $"+p.precio

lista.appendChild(li)

})

document.getElementById("contador").textContent=carrito.length

document.getElementById("subtotal").textContent=subtotal

let envio=subtotal>1000?0:120

document.getElementById("envio").textContent=envio

document.getElementById("total").textContent=subtotal+envio

}

function pagar(){

let nombre=document.getElementById("nombre").value

let direccion=document.getElementById("direccion").value

let total=document.getElementById("total").textContent

let mensaje="Pedido:%0A"

carrito.forEach(p=>{

mensaje+=p.nombre+" $"+p.precio+"%0A"

})

mensaje+="Total $"+total+"%0A"

mensaje+="Cliente: "+nombre+"%0A"

mensaje+="Dirección: "+direccion

let numero="5210000000000"

window.open("https://wa.me/"+numero+"?text="+mensaje)

}

function agregarReseña(){

let texto=document.getElementById("comentario").value

let div=document.createElement("p")

div.textContent="⭐ "+texto

document.getElementById("listaReseñas").appendChild(div)

}
