class Usuario {
    constructor(nombre, usuario, clave) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.clave = clave;
    }
}
const nombre = prompt("Ingrese su nombre");
const usuario = prompt("Ingrese su usuario");
const clave = prompt("Ingrese su clave");
const nuevoUsuario = new Usuario(nombre, usuario, clave);
alert(`Gracias ${nuevoUsuario.nombre} has creado el usuario xxxx y la clave xxxx correctamente. Apreta f12 para ver los datos creados`);
console.log (`${nuevoUsuario.nombre} has creado el usuario ${nuevoUsuario.usuario} y la contraseña  
${nuevoUsuario.clave} correctamente`)




// Incio de productos

let arrayProducts = [
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
const carrito = document.getElementById("carrito")

arrayProducts.forEach((elemento) => {
    let card = document.createElement("div")
    card.classList.add("card", "cardProducto","col-sm-12", "col-lg-3")
    card.innerHTML = `<img src="${elemento.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${elemento.nombre}</h5>
      <p class="card-text">${elemento.precio}</p>
      <a href="#" class="btn btn-primary">Agregar al carrito</a>
    </div>`;

    carrito.appendChild(card);
});



