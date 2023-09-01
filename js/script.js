const body = document.body;
// Array para almacenar usuarios registrados
let usuariosRegistrados = [];

// Cargar datos almacenados en Local Storage al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  cargarDatosUsuarios();
});

// Función para cargar datos almacenados en Local Storage
function cargarDatosUsuarios() {
  const usuariosGuardadosJSON = localStorage.getItem("usuariosRegistrados");
  usuariosRegistrados = JSON.parse(usuariosGuardadosJSON) || [];
}

// Función para registrar un nuevo usuario
function registrarUsuario() {
  const nombre = document.getElementById("firstNameInput").value;
  const apellido = document.getElementById("lastNameInput").value;
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;

  if (!nombre || !apellido || !email || !password) {
    Swal.fire({
      icon: 'error',
      title: 'Por favor complete todos los campos requeridos',
      customClass: {
        title: 'color-de-fondo' 
      }
    });
    return;
  }

  if (!isValidEmail(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Por favor ingrese una cuenta de correo válida',
      customClass: {
        title: 'color-de-fondo' 
      }
    });
    return;
  }

  const nombreCapitalizado = (nombre.charAt(0).toUpperCase() + nombre.slice(1)) ?? '';
  const apellidoCapitalizado = (apellido.charAt(0).toUpperCase() + apellido.slice(1)) ?? '';

  const nuevoUsuario = {
    nombre: nombreCapitalizado,
    apellido: apellidoCapitalizado,
    email: email,
    password: password
  };

  usuariosRegistrados.push(nuevoUsuario);

  const usuariosRegistradosJSON = JSON.stringify(usuariosRegistrados);
  localStorage.setItem("usuariosRegistrados", usuariosRegistradosJSON);

  console.log("Usuario registrado exitosamente.");
  console.log("Datos del usuario:");
  console.log("Nombre: " + nuevoUsuario.nombre);
  console.log("Apellido: " + nuevoUsuario.apellido);
  console.log("Correo Electrónico: " + nuevoUsuario.email);

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

  const usuarioGuardado = usuariosRegistrados.find((usuario) => usuario.email === email && usuario.password === password);

  if (usuarioGuardado) {
    console.log("Inicio de sesión exitoso.");
    console.log("Bienvenido, " + usuarioGuardado.nombre + " " + usuarioGuardado.apellido + "!");
    window.location.href = "pages/prestamo.html"; // Redirigir después del inicio de sesión exitoso
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Correo electrónico o contraseña no registrados.',
      customClass: {
        title: 'color-de-fondo' 
      }
    });
    // Agregar aquí un mensaje en la página para mostrar el error al usuario si lo deseas
  }
}

// Crear el pie de página
const footer = document.createElement('footer');
footer.style.textAlign = 'center';
footer.style.marginTop = '500px';
const footerText = document.createElement('p');
footerText.textContent = '© 2023 PrestaPlus. Todos los derechos reservados.';
footerText.style.color = '#ffffff';
footer.appendChild(footerText);
body.appendChild(footer);