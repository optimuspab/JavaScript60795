//1
console.log("consigna 1");

let segmento = new Array ();

function Segmento (id, nombre, apellido, segmento, edad, telefono, contacto) {
    this.id=id;
    this.nombre=nombre;
    this.apellido=apellido;
    this.segmento=segmento;
    this.edad=edad;
    this.telefono=telefono;
    this.contacto=contacto;
    this.fechaDeContacto = contacto ? new Date() : null;


}

const cliente1 = new Segmento(1, 'Juan', 'Pérez', ['Préstamo personal'], 35, '123-456-7890', true);
const cliente2 = new Segmento(2, 'María', 'Gómez', ['Plazo fijo', 'Seguro de incendio'], 28, '987-654-3210', false);
const cliente3 = new Segmento(3, 'Luis', 'González', ['Plazo fijo', 'Seguro de auto'], 45, '555-123-4567', true);
const cliente4 = new Segmento(4, 'Ana', 'Martínez', ['Préstamo personal', 'Seguro de moto'], 32, '777-987-6543', false);
const cliente5 = new Segmento(5, 'Carlos', 'Rodríguez', ['Plazo fijo', 'Seguro de incendio'], 50, '111-222-3333', true);
const cliente6 = new Segmento(6, 'Sofía', 'Hernández', ['Seguro de moto'], 29, '333-666-9999', false);
const cliente7 = new Segmento(7, 'Pedro', 'Sánchez', ['Préstamo personal'], 38, '888-444-2222', true);
const cliente8 = new Segmento(8, 'Laura', 'Torres', ['Plazo fijo', 'Seguro de auto'], 28, '444-555-6666', false);
const cliente9 = new Segmento(9, 'Javier', 'López', ['Seguro de moto'], 55, '999-888-7777', true);
const cliente10 = new Segmento(10, 'Marcela', 'Díaz', ['Plazo fijo'], 42, '222-111-5555', false);

segmento.push(cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10);

console.log(segmento);

//2
console.log("consigna 2");

function compare( a, b ) {
    if ( a.apellido < b.apellido ){
      return -1;
    }
    if ( a.apellido > b.apellido ){
      return 1;
    }
    return 0;
  }
  
const sortedValues = segmento.toSorted(compare);

console.log(sortedValues);

//3
console.log("consigna 3");

const noContactados = segmento.filter(cliente => cliente.contacto === false);

console.log(noContactados);

//4
console.log("consigna 4");

const totalNoContactados = segmento.reduce((contador,cliente) => {
    if (cliente.contacto === false) {
        return contador + 1;
    } else {
        return contador;
    }
}, 0);

console.log(`Total de clientes no contactados: ${totalNoContactados}`);

//5
console.log("consigna 5");

segmento.forEach(cliente => {
    console.log(`Segmentos de ${cliente.nombre} ${cliente.apellido}: ${cliente.segmento.join(', ')}`);
});

