document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const cuotasDisponibles = [3, 6, 9, 12, 18, 24];

  // Elementos del formulario de cálculo
  const calculateButton = document.querySelector('.calculate-button');
  const prestamoInput = document.getElementById('prestamo-dinero');
  const cuotasInputs = document.querySelectorAll('.radio-input');
  const cuotaResult = document.getElementById('cuota-result');

  // Evento para calcular la cuota
  calculateButton.addEventListener('click', async () => {
    const prestamo = parseFloat(prestamoInput.value.replace(',', '.'));

    // Validar el monto del préstamo
    if (isNaN(prestamo) || prestamo < 4000 || prestamo > 10000000) {
      cuotaResult.textContent = "Por favor, ingrese un monto válido (entre $4000 y $10,000,000 pesos).";
      return;
    }

    let mesesAPagar = 0;
    for (const cuotaInput of cuotasInputs) {
      if (cuotaInput.checked) {
        mesesAPagar = parseInt(cuotaInput.value);
        break;
      }
    }

    // Validar el número de cuotas
    if (!cuotasDisponibles.includes(mesesAPagar)) {
      cuotaResult.textContent = "Por favor, elija un número de cuotas válido (3, 6, 9, 12, 18 o 24 cuotas).";
      return;
    }

    // Obtener el valor del dólar blue
    const dolarBlueValue = await getDolarBlueValue();

    if (dolarBlueValue === null) {
      cuotaResult.textContent = "No se pudo obtener el valor del dólar blue.";
      return;
    }

    // Calcular el monto total a pagar con interés
    const totalAumentado = prestamo * (1 + (dolarBlueValue / 1000));
    const interesAdicional = (mesesAPagar - 3) * 0.10;
    const totalPagar = totalAumentado * (1 + interesAdicional);

    // Mostrar resultados en la página
    cuotaResult.innerHTML = `Usted debe pagar: <span style="color: black">$${totalPagar.toFixed(2)}</span> pesos.<br>
                             Usted seleccionó: <span style="color: black">${mesesAPagar}</span> meses a pagar.<br>
                             El pago mensual sería de: <span style="color: black">$${(totalPagar / mesesAPagar).toFixed(2)}</span> pesos.`;
  });

  // Función para obtener el valor del dólar blue desde una API
  async function getDolarBlueValue() {
    try {
      const response = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
      const data = await response.json();
      const dolarBlueValueStr = data[1]?.casa?.compra;

      if (dolarBlueValueStr) {
        const dolarBlueValue = parseFloat(dolarBlueValueStr.replace(',', '.'));
        return dolarBlueValue;
      } else {
        console.error('No se pudo obtener el valor del dólar blue.');
        return null;
      }
    } catch (error) {
      console.error('Error al obtener el valor del dólar blue:', error);
      return null;
    }
  }

  // Crear el pie de página
  const footer = document.createElement('footer');
  footer.style.textAlign = 'center';
  footer.style.marginTop = '50px';
  const footerText = document.createElement('p');
  footerText.textContent = '© 2023 PrestaPlus. Todos los derechos reservados.';
  footerText.style.color = '#ffffff';
  footer.appendChild(footerText);
  body.appendChild(footer);
});


