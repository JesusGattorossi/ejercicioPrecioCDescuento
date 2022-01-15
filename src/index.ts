/*
let precioInicial: number = 450.5;
let porcentajedescuento: number = 0.1;
let descuento = precioInicial * porcentajedescuento;
console.log("precio final", precioInicial - descuento);
*/
let botonEnviar = document.getElementById("boton-enviar");
let precioInicial = document.getElementById("precioInicial");
let descuento = document.getElementById("descuento");

botonEnviar?.addEventListener("click", () => {
  let numeroA: number = Number(precioInicial.value);
  let numeroB: number = Number(descuento.value);
  let resultado: number = numeroA * (1 - numeroB);
  console.log(" el precio con descuento es:");
  console.log(resultado);
});
