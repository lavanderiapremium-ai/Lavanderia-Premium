let carrito=[]
let total=0

function agregar(nombre,precio){

carrito.push({nombre,precio})

total+=precio

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

document.getElementById("total").textContent=total

}

function comprar(){

let nombre=document.getElementById("nombre").value

let telefono=document.getElementById("telefono").value

let direccion=document.getElementById("direccion").value

let mensaje="Pedido:%0A"

carrito.forEach(p=>{

mensaje+=p.nombre+" $"+p.precio+"%0A"

})

mensaje+="Total: $"+total+"%0A"

mensaje+="Nombre: "+nombre+"%0A"

mensaje+="Teléfono: "+telefono+"%0A"

mensaje+="Dirección: "+direccion

let numero="5210000000000"

window.open("https://wa.me/"+numero+"?text="+mensaje)

}
