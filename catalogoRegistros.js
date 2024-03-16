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
          const respuestasTabla = document.querySelector(".respuestas-tabla tbody");
          respuestasTabla.innerHTML = ""; // Limpia las filas existentes
        
          const respuestasArray = respuestas.split("<br>");
          for (const respuesta of respuestasArray) {
            const fila = document.createElement("tr");
        
            const celdaRespuesta = document.createElement("td");
            celdaRespuesta.textContent = respuesta;
        
            const celdaEliminar = document.createElement("td");
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.addEventListener("click", () => {
              fila.parentNode.removeChild(fila);
            });
            celdaEliminar.appendChild(botonEliminar);
        
            fila.appendChild(celdaRespuesta);
            fila.appendChild(celdaEliminar);
        
            respuestasTabla.appendChild(fila);
          }
        }