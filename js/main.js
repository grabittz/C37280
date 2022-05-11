let cantidad, precio, descuento, compra, pagar;

precio = parseInt(prompt("Ingrese el precio"))
cantidad = parseInt(prompt("¿Cuantas unidades desea comprar?"))

compra = precio*cantidad;
descuento = compra*0.25;
pagar = compra-descuento;

console.log("El descuento es de "+descuento+ " $ARS");
console.log("El monto a pagar es de " +pagar+ " $ARS");