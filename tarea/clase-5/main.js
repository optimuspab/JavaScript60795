//1
console.log("consigna 1")

let vacio = new Object()

vacio.name = "Jhon";

vacio.surname = "Smith";

console.log(vacio);

vacio.name = "Pete";

console.log(vacio);

delete vacio.name

console.log(vacio);

vacio.name = "Saraza"

console.log(vacio);

//2
console.log("consigna 2")

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let suma = 0;

for (const salarie in salaries) {
  suma += salaries[salarie];
}

console.log(suma)

//3
console.log("consigna 3")

const notebook1 = {
    id: "MLA26979880",
    nombreDelProducto: "Notebook Enova Intel Core I3 8ram 240gb 11va Gen W11 Color Negro",
    precio: 659999,
    color: "Negro",
    categoriaDelProducto: "Computación",
    oferta: true,
    descuentoEnCyberWeek: 53.00,
    vendedor: "eNova",
    reputacionVendedor: 4,
    reputacionProducto: 2,
    cantidadDisponible: 15,
    cantidadVendida: 20,
    aplicarDescuento: function () {
        if (this.oferta === true) {
            const discount = (this.descuentoEnCyberWeek/100) * this.precio;
            this.precio -= discount;
        }
    }
};

const notebook2 = {
    id: "MLA24848273",
    nombreDelProducto: "Notebook I3 Acer Aspire Intel Core 256gb Ssd 8gb Ram Color Negro",
    precio: 629999,
    color: "Gris",
    categoriaDelProducto: "Computación",
    oferta: true,
    descuentoEnCyberWeek: 38.00,
    vendedor: "DMAKER_FOR_GAMERS",
    reputacionVendedor: 5,
    reputacionProducto: 4,
    cantidadDisponible: 25,
    cantidadVendida: 100,
    aplicarDescuento: function () {
        if (this.oferta === true) {
            const discount = (this.descuentoEnCyberWeek/100) * this.precio;
            this.precio -= discount;
        }
    }
};

const notebook3 = {
    id: "MLA23354026",
    nombreDelProducto: "Notebook Banghó MAX L5 i7 gris oscura 15.6, Intel Core i7 1165G7 8GB de RAM 480GB SSD, Intel Iris Xe Graphics G7 96EUs 1366x768px FreeDOS",
    precio: 517999,
    color: "Negro",
    categoriaDelProducto: "Computación",
    oferta: false,
    descuentoEnCyberWeek: 0,
    vendedor: "ESPACIO ELECTRONICA",
    reputacionVendedor: 5,
    reputacionProducto: 4,
    cantidadDisponible: 5,
    cantidadVendida: 9995,
    aplicarDescuento: function () {
        if (this.oferta === true) {
            const discount = (this.descuentoEnCyberWeek/100) * this.precio;
            this.precio -= discount;
        }
    }
};


console.log(notebook1,notebook2,notebook3);
notebook1.aplicarDescuento();
notebook2.aplicarDescuento();
notebook3.aplicarDescuento();
console.log(notebook1,notebook2,notebook3);

//4
console.log("consigna 4")
class Pokemon {

    constructor ( nombre, tipo, vida, ataque, danio, pocion ) {

        this.nombre = nombre
        this.tipo = tipo
        this.vida = vida
        this.ataque = ataque
        this.danio = danio
        this.pocion = pocion

    }

    mostrarInfo() {
        console.log(`El pokemon: ${this.nombre}, tiene una vida de: ${this.vida} y su ataque ${this.ataque} de ${this.danio}`)
    }

    usarPocion() {
        if ( this.vida <= this.vida - this.vida / 2 ) {
            this.vida = this.vida + 30
        }
     }
}

class cliente {

    constructor (name, surname, street, number, appartment, city, country, id, email) {

    this.nombreCompleto = ( caracter ) => caracter + " " + this.name + " " + this.surname


    }
}

function User(name, surname, street, number, appartment, town, city, country, id, email) {

    this.name = name;
    this.surname = surname;
    this.street = street;
    this.number = number;
    this.appartment = appartment;
    this.town = town
    this.city = city;
    this.country = country;
    this.id = id;
    this.email = email;

    this.fullInformation = function() {
        console.log(`Nombre: ${this.name}, Apellido: ${this.surname}, Calle: ${this.street}, Número: ${this.number}, Departamento: ${appartment}, Localidad: ${this.town}, Ciudad: ${this.city}, País: ${this.country}, DNI: ${this.id}, Email: ${this.email}`);
    };

}

//5
console.log("consigna 5")

const discoSolido = { 
    "id": "MLA1410362542",
    "category_id": "MLA1672",
    "title": "Disco sólido interno Adata Ultimate SU650 ASU650SS-240GT-R 240GB negro",
    "url": "https://www.mercadolibre.com.ar/disco-solido-interno-adata-ultimate-su650-asu650ss-240gt-r-240gb-negro/p/MLA15749699#reco_item_pos=0&reco_backend=machinalis-pdp-pads-v2p-brothers&reco_backend_type=low_level&reco_client=pdp-pads-right&reco_id=14b8ec57-61a1-49f7-9d64-3c1ba4abf3f8",
    "price": {
        "currency_id": "ARS",
        "symbol": "$",
        "decimal_separator": ",",
        "fraction": "13.399"
    },
    "sale_price": {
        "amount": 13399,
        "currency_id": "ARS",
        "metadata": {},
        "fallback": false
    },
    "image": {
        "src": "https://http2.mlstatic.com/D_Q_NP_726919-MLA40462053410_012020-AB.webp",
        "src2x": "https://http2.mlstatic.com/D_Q_NP_2X_726919-MLA40462053410_012020-AB.webp",
        "size": "224px"
    },
    "product_id": "MLA15749699",
    "available_quantity": 12,
    "status": "active",
    "is_cart_enabled": false,
    "vertical": "CORE",
    "shipping": {
        "text": "Envío gratis",
        "freeShipping": true,
        "fullfilment": true
    }
}

const tituloProducto = discoSolido.title;
const simboloPrecio = discoSolido.price.symbol;
const montoPrecioOferta = discoSolido.sale_price.amount;
const envioGratis = discoSolido.shipping.freeShipping;

function deliveryValidator (titulo, simbolo, precio, envioGratis) {
    if (envioGratis === true) {
        return `El artículo: ${ titulo }, de precio: ${ simbolo }${ precio }, que se encuentra disponible, cuenta con envío gratis.`
    } else {
        return `El artículo: ${ titulo }, de precio: ${ simbolo }${ precio }, que se encuentra disponible, no cuenta con envío gratis.`
    }
}

console.log(deliveryValidator(tituloProducto,simboloPrecio,montoPrecioOferta,envioGratis));


