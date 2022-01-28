
let arrayProductos = [];
$.ajax({
  url: "../json/data.json",
  dataType: "json",
  success: (respuesta) =>{
    cargarProductos(respuesta);
  },
});
const cargarProductos = (respuesta) =>{
  arrayProductos = respuesta;
const contenedor = document.getElementById("contenedor");
contenedor.innerHTML = "";
arrayProductos.forEach((producto, indice) => {
  let card = document.createElement("div");
  card.classList.add("card", "cards", "col-sm-12", "col-lg-3");
  let html = `
    <img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <a href="#cart" class="btn btn-primary" onClick="agregarCarrito(${indice})">Comprar</a>
    </div>
      `;
  card.innerHTML = html;
  contenedor.appendChild(card);
})};
const cart = [];
const agregarCarrito = (indiceArray) => {
  const indiceCarrito = cart.findIndex((elemento) => {
    return elemento.id === arrayProductos[indiceArray].id;
  });
  if (indiceCarrito === -1) {
    const productoAgregar = arrayProductos[indiceArray];
    productoAgregar.cantidad = 1;
    cart.push(productoAgregar);
    compraCarrito();
  } else {
    cart[indiceCarrito].cantidad += 1;
    compraCarrito();
  }
  

};

let finCarrito = document.getElementById("cart");

const compraCarrito = () => {
  let total = 0;
  finCarrito.className = "cart";
  finCarrito.innerHTML = "";
  if (cart.length > 0) {
    cart.forEach((producto, indice) => {
      total = total + producto.precio * producto.cantidad;
      const carritoContainer = document.createElement("div");
      carritoContainer.className = "producto-carrito";
      carritoContainer.innerHTML = `
        <img class="car-img" src="${producto.imagen}"/>
        <div class="product-details">
          ${producto.nombre}
        </div>
        <div class="product-details" > Cantidad: ${producto.cantidad}</div>
        <div class="product-details"> Precio: $ ${producto.precio}</div>
        <div class="product-details"> Subtotal: $ ${
          producto.precio * producto.cantidad
        }</div>
        <button class="btn btn-danger"  id="remove-product" onClick="eliminarProducto(${indice})">Eliminar producto</button>
         `;
      finCarrito.appendChild(carritoContainer);
    });
    const totalContainer = document.createElement("div");
    totalContainer.className = "total-carrito";
    totalContainer.innerHTML = `<div class= "total"> TOTAL $ ${total}</div>
    <button class= "btn btn-danger finalizar" id="finalizar" onClick="finalizarCompra()"> FINALIZAR COMPRA </button>`;
    finCarrito.appendChild(totalContainer);
  } else {
    finCarrito.classList.remove("cart");
  }
  
};
const eliminarProducto = (indice) => {
  cart.splice(indice, 1);
  compraCarrito();
};
const finalizarCompra = () => {
  const total = document.getElementsByClassName("total")[0].innerHTML;
  finCarrito.innerHTML = "";
  const compraFinalizada = `<div class="compra-finalizada"><p class="compra-parrafo"> YA CASI ES TUYA LA COMPRA, EL   ${total} </p></div>
  <div class="datos-cliente">
  <p class="datos-parrafo"> Complete el formulario con sus datos para coordinar la entrega</p>
  <button class= "btn btn-danger formulario" id="formulario" onClick="dibujarFormu()"> FORMULARIO </button>
  </div>`;
 finCarrito.innerHTML = compraFinalizada;
 carritoLocalStorage ();
};
const dibujarFormu = () => {
  finCarrito.innerHTML = "";
  const formulario = `
  <h2> DATOS PARA EL ENVÍO </h2>
  <div class="contact__secction-container">
   <div class="row">
     <div class="formContacto">
       <label>Nombre</label>
       <input type="text" id="nombre" placeholder="Nombre"  />
     </div>
     <div class="formContacto">
       <label>E-mail</label>
       <input type="text" id="mail" placeholder="E-mail" />
     </div>
     <div class="formContacto">
       <label>Telefono</label>
       <input type="text" id="telefono" placeholder="Telefono"  />
     </div>
     <div class="formContacto">
       <label>Domicilio</label>
       <input type="text" id="domicilio" placeholder="Domicilio" />
     </div>
     <div class="contact-button">
       <button type="button" class="btn btn-danger envio" onClick="mostrarMensaje()" >Confirmar</button>
     </div>
   </div>
 </div>`;
 finCarrito.innerHTML = formulario;
};

const mostrarMensaje = () => {
  const nombreCliente = document.getElementById("nombre").value;
  const domicilioCliente = document.getElementById("domicilio").value;
  debugger;
  finCarrito.innerHTML = "";
  let mensaje = `<div class="mensaje-final">Gracias ${nombreCliente} por su compra! en 48 horas recibira su paquete en ${domicilioCliente} </div>`;
  finCarrito.innerHTML = mensaje;
};



function carritoLocalStorage () {
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log("productos guardados en el localstorage")
};

 const valEmail =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
// formulario
$('#boton-form').click(function(){
  let formNombre = $('#nombre-form').val();
  let apellido = $('#apellido-form').val();
  let email = $('#email-form').val();
  if(formNombre == ""){
    $('#mensaje1').fadeIn();
    return false;
  } else {
    $('#mensaje1').fadeOut();
    if(apellido = ""){
      $('#mensaje2').fadeIn();
      return false;
    }else{
      $('#mensaje2').fadeOut();
      if(email == "" || !valEmail.test(email)){
        $('#mensaje3').fadeIn();
        return false;
      } else{
        $('#mensaje3').fadeOut();
      }
    }
   }
});

