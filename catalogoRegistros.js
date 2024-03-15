const formulario = document.getElementById('orderForm');
        const respuestasContainer = document.getElementById('respuestas');
      
        formulario.addEventListener('input', () => {
          const respuestas = obtenerRespuestas();
          mostrarRespuesta(respuestas);
        });
      
        function obtenerRespuestas() {
          const campos = formulario.elements;
          let respuestas = '';
      
          for (const campo of campos) {
            if (campo.type !== 'checkbox' || campo.checked) {
              respuestas += `${campo.name}: ${campo.type === 'checkbox' ? campo.checked : campo.value}<br>`;
            }
          }
      
          return respuestas.trim();  // Elimina posibles espacios al final
        }
      
        function mostrarRespuesta(respuestas) {
          respuestasContainer.innerHTML = respuestas;
        }