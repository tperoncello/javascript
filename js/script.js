// Objeto para almacenar el usuario registrado
let usuarioRegistrado = null;

// Función para registrar un nuevo usuario
function registrarUsuario() {
  let nombre = prompt("Ingrese su nombre:");
  let apellido = prompt("Ingrese su apellido:");
  const dni = prompt("Ingrese su DNI:");

  // Convertir la primera letra del nombre y el apellido a mayúscula
  nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
  apellido = apellido.charAt(0).toUpperCase() + apellido.slice(1);

  usuarioRegistrado = {
    nombre: nombre,
    apellido: apellido,
    dni: dni
  };

  console.log("Usuario registrado exitosamente.");
  console.log("Datos del usuario:");
  console.log("Nombre: " + usuarioRegistrado.nombre);
  console.log("Apellido: " + usuarioRegistrado.apellido);
  console.log("DNI: " + usuarioRegistrado.dni);
}

registrarUsuario();

//cometar separacion

let prestamo = prompt("¿De cuánto dinero sería su préstamo?");
prestamo = parseFloat(prestamo);

if (isNaN(prestamo)) {
  console.log("Por favor, ingrese un número válido para el monto del préstamo.");
} else if (prestamo < 4000) {
  console.log("El monto mínimo de préstamo es de $4000 pesos.");
} else {
  let mesesAPagar = prompt("¿En cuántos meses quiere devolverlo?");
  mesesAPagar = parseInt(mesesAPagar);

  if (isNaN(mesesAPagar)) {
    console.log("Por favor, ingrese un número válido para el número de meses.");
  } else {
    mesesAPagar = validarMeses(mesesAPagar);

    let interesPorcentaje = 1.40 + (mesesAPagar - 1) * 0.05; // Aumento del 5% por cada mes adicional
    let totalPagar = prestamo * interesPorcentaje + mesesAPagar * 0.80;
    let mensaje = "Usted debe pagar " + totalPagar.toFixed(2) + " pesos.";
    let mensaje2 = "Usted selecciono " + mesesAPagar + " meses a pagar."
    let mensaje3 = "El pago mensual sería de " + (totalPagar / mesesAPagar).toFixed(2) + " pesos.";

    console.log(mensaje);
    console.log(mensaje2);
    console.log(mensaje3);
  }
}

function validarMeses(meses) {
  while (![3, 6, 9, 12, 18, 24].includes(meses)) {
    meses = prompt("¿En cuántos meses quiere devolverlo? Elija 3, 6, 9, 12, 18 o 24 cuotas");
    meses = parseInt(meses);
  }
  return meses;
}


