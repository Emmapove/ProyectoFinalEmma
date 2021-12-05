// class Usuario {
//     constructor(nombre, usuario, clave) {
//         this.nombre = nombre;
//         this.usuario = usuario;
//         this.clave = clave;
//     }
// }
// const nombre = prompt("Ingrese su nombre");
// const usuario = prompt("Ingrese su usuario");
// const clave = prompt("Ingrese su clave");
// const nuevoUsuario = new Usuario(nombre, usuario, clave);
// alert(`Gracias ${nuevoUsuario.nombre} has creado el usuario xxxx y la clave xxxx correctamente. Apreta f12 para ver los datos creados`);
// console.log (`${nuevoUsuario.nombre} has creado el usuario ${nuevoUsuario.usuario} y la contraseña  
// ${nuevoUsuario.clave} correctamente`)


// function costos() {
//     if (producto1 == "1" && producto2 == "2") {
//         return juegoPc + juegoXbox;
//     } else if (producto1 == "1" && producto2 == "3") {
//         return juegoPc + juegoPlay;
//     } else if (producto1 == "2" && producto2 == "3") {
//         return juegoXbox + juegoPlay;
//     } else if (producto1 == "2" && producto2 == "1") {
//         return juegoXbox + juegoPc;
//     } else if (producto1 == "3" && producto2 == "1") {
//         return juegoXbox + juegoXbox;
//     } else if (producto1 == "3" && producto2 == "2") {
//         return juegoPlay + juegoXbox;
//     } else if (producto1 == "3" && producto2 == "3") {
//         return juegoPlay + juegoPlay;
//     }else if (producto1 == "1" && producto2 == "1") {
//         return juegoPc + juegoPc;
//     }else if (producto1 == "2" && producto2 == "2") {
//         return juegoXbox + juegoXbox;}
//     }

// function total() {
//     if (producto1 == "1" && producto2 == "2") {
//         alert("elegiste juegoPc y juegoXbox");
//     } else if (producto1 == "1" && producto2 == "3") {
//         alert("elegiste juegoPc y JuegoPlay");
//     } else if (producto1 == "2" && producto2 == "1") {
//         alert("elegiste juegoXbox y juegoPc");
//     } else if (producto1 == "2" && producto2 == "3") {
//         alert("elegiste juegoXbox + juegoPc");
//     } else if (producto1 == "2" && producto2 == "2") {
//         alert("elegiste juegoXbox + juegoXbox");
//     } else if (producto1 == "3" && producto2 == "3") {
//         alert("elegiste juegoPc + juegoPc");
//     }else if (producto1 == "1" && producto2 == "1") {
//         alert("elegiste juegoPC + juegoPc");
//     } else if (producto1 == "3" && producto2 == "1") {
//         alert("elegiste JuegoPlay + juegoPc");
//     }else if (producto1 == "3" && producto2 == "2") {
//             alert("elegiste juegoPlay + juegoXbox");
//         }
//     }
// let juegoPc = 2500;
// let juegoXbox = 3400;
// let juegoPlay = 3000;
// let producto1 = prompt("Productos \n 1: juegoPc \n 2: juegoXbox \n 3: juegoPlay");
// let producto2 = prompt("Selecciona otro producto \n 1: juegoPc \n 2: juegoXbox \n 3: juegoPlay");

// total();
// alert("Tu compra final mas el iva es de $" + costos() * 1.21);


class articulos{
    constructor(producto,precio,cantidad){
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;

    }
}

const productos = [];
let products = prompt("¿Desea cargar un producto? (si/no)")
while(products === "si"){
    let producto = prompt("Seleccione un producto \ juegoPc, \ juegoXbox, \ juegoPlay");
    let precio = prompt("Seleccione el precio del producto 2500 \ 3000 \ 2700");
    let cantidad = prompt("Seleccione cuantos productos desea adquirir")
    let nuevoProducto = new articulos (producto , precio, cantidad);
    productos.push(nuevoProducto);
    products= prompt("¿Desea cargar un producto? (si/no)");
    console.log(productos)
    }
    if(products === "no"){
        alert("Gracias vuelva pronto")
    }
let total = 0;

for( i = 0; i < productos.length; i++){
    total = total + productos[i].precio * productos[i].cantidad;
}
alert("Su monto total es de $ " + total)