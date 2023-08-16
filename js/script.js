// Objeto para almacenar el usuario registrado
let usuarioRegistrado = null;

// Cargar datos almacenados en Local Storage al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  cargarDatosUsuario();
});

// Función para cargar datos almacenados en Local Storage
function cargarDatosUsuario() {
  const usuarioGuardadoJSON = localStorage.getItem("usuarioRegistrado");
  if (usuarioGuardadoJSON) {
    usuarioRegistrado = JSON.parse(usuarioGuardadoJSON);
  }
}

// Función para registrar un nuevo usuario
function registrarUsuario() {
  const nombre = document.getElementById("firstNameInput").value;
  const apellido = document.getElementById("lastNameInput").value;
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;

  if (!nombre || !apellido || !email || !password) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Por favor, ingrese una dirección de correo electrónico válida.");
    return;
  }

  const nombreCapitalizado = nombre.charAt(0).toUpperCase() + nombre.slice(1);
  const apellidoCapitalizado = apellido.charAt(0).toUpperCase() + apellido.slice(1);

  usuarioRegistrado = {
    nombre: nombreCapitalizado,
    apellido: apellidoCapitalizado,
    email: email,
    password: password
  };

  const usuarioRegistradoJSON = JSON.stringify(usuarioRegistrado);
  localStorage.setItem("usuarioRegistrado", usuarioRegistradoJSON);

  console.log("Usuario registrado exitosamente.");
  console.log("Datos del usuario:");
  console.log("Nombre: " + usuarioRegistrado.nombre);
  console.log("Apellido: " + usuarioRegistrado.apellido);
  console.log("Correo Electrónico: " + usuarioRegistrado.email);

  // Redirigir a la página de préstamo después del registro exitoso
  window.location.href = "pages/prestamo.html"; // Cambia esto por la URL correcta
}

// Función para validar formato de correo electrónico
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Función para realizar el inicio de sesión
function logIn() {
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;

  const usuarioGuardadoJSON = localStorage.getItem("usuarioRegistrado");
  if (usuarioGuardadoJSON) {
    const usuarioGuardado = JSON.parse(usuarioGuardadoJSON);
    if (usuarioGuardado.email === email && usuarioGuardado.password === password) {
      console.log("Inicio de sesión exitoso.");
      console.log("Bienvenido, " + usuarioGuardado.nombre + " " + usuarioGuardado.apellido + "!");
      window.location.href = "pages/prestamo.html"; // Redirigir después del inicio de sesión exitoso
    } else {
      console.log("Correo electrónico o contraseña incorrectos.");
      // Agregar aquí un mensaje en la página para mostrar el error al usuario si lo deseas
    }
  } else {
    console.log("No se encontró ningún usuario registrado.");
  }
}



// Array con la cantidad de cuotas disponibles
const cuotasDisponibles = [3, 6, 9, 12, 18, 24];

let prestamo = prompt("¿De cuánto dinero sería su préstamo?");
prestamo = parseFloat(prestamo);

if (isNaN(prestamo)) {
  console.log("Por favor, ingrese un número válido para el monto del préstamo.");
} else if (prestamo < 4000) {
  console.log("El monto mínimo de préstamo es de $4000 pesos.");
} else {
  let mesesAPagar = prompt("¿En cuántos meses quiere devolverlo? Elija 3, 6, 9, 12, 18 o 24 cuotas");
  mesesAPagar = parseInt(mesesAPagar);

  // Validar que el número de cuotas sea válido
  while (!cuotasDisponibles.includes(mesesAPagar)) {
    mesesAPagar = prompt("Por favor, elija un número de cuotas válido. Elija 3, 6, 9, 12, 18 o 24 cuotas");
    mesesAPagar = parseInt(mesesAPagar);
  }

  let interesPorcentaje = 1.40 + (mesesAPagar - 1) * 0.05; // Aumento del 5% por cada mes adicional
  let totalPagar = prestamo * interesPorcentaje + mesesAPagar * 0.80;
  let mensaje = "Usted debe pagar " + totalPagar.toFixed(2) + " pesos.";
  let mensaje2 = "Usted seleccionó " + mesesAPagar + " meses a pagar.";
  let mensaje3 = "El pago mensual sería de " + (totalPagar / mesesAPagar).toFixed(2) + " pesos.";

  console.log(mensaje);
  console.log(mensaje2);
  console.log(mensaje3);
}