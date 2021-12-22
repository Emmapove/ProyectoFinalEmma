
let arrayProductos = [
    {
        id: 1,
        nombre: "COD",
        precio: 3500,
        imagen: "../assets/img/xbox1.png"
    },
    {
        id: 2,
        nombre: "WATCH DOGS",
        precio: 3100,
        imagen: "../assets/img/xbox2.jpg"
    },
    {
        id: 3,
        nombre: "HALO 4",
        precio: 3000,
        imagen: "../assets/img/xbox3.jpg"
    },
    {
        id: 4,
        nombre: "RALLY",
        precio: 3000,
        imagen: "../assets/img/xbox4.jpg"
    },
    {
        id: 5,
        nombre: "COD",
        precio: 2500,
        imagen: "../assets/img/xbox1.png"
    },
    {
        id: 6,
        nombre: "WATCH DOGS",
        precio: 1500,
        imagen: "../assets/img/xbox2.jpg"
    },
    {
        id: 7,
        nombre: "HALO 4",
        precio: 4500,
        imagen: "../assets/img/xbox3.jpg"
    },
    {
        id: 8,
        nombre: "RALLY",
        precio: 4000,
        imagen: "../assets/img/xbox4.jpg"
    },
    {
        id: 9,
        nombre: "COD",
        precio: 2000,
        imagen: "../assets/img/xbox1.png"
    },
    {
        id: 10,
        nombre: "WATCH DOGS",
        precio: 3000,
        imagen: "../assets/img/xbox2.jpg"
    },
    {
        id: 11,
        nombre: "HALO 4",
        precio: 2500,
        imagen: "../assets/img/xbox3.jpg"
    },
    {
        id: 12,
        nombre: "RALLY",
        precio: 4500,
        imagen: "../assets/img/xbox4.jpg"
    },
    {
        id: 9,
        nombre: "COD",
        precio: 2000,
        imagen: "../assets/img/xbox1.png"
    },
    {
        id: 10,
        nombre: "WATCH DOGS",
        precio: 3000,
        imagen: "../assets/img/xbox2.jpg"
    },
    {
        id: 11,
        nombre: "HALO 4",
        precio: 2500,
        imagen: "../assets/img/xbox3.jpg"
    },
    {
        id: 12,
        nombre: "RALLY",
        precio: 4500,
        imagen: "../assets/img/xbox4.jpg"
    },

];
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

});

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
  const compraFinalizada = `<div><p class="total-compra"> Gracias por comprar, su ${total} </p></div>
 `
 finCarrito.innerHTML = compraFinalizada;
 carritoLocalStorage ();
};


function carritoLocalStorage () {
  localStorage.setItem('producto', JSON.stringify(cart));
  console.log("productos guardados en el localstorage")
};


