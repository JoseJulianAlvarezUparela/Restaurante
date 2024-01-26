document.addEventListener("DOMContentLoaded", function () {
    // Ruta al archivo JSON local
    const jsonFilePath = '../Recursos/Colombia.json';
  
    // Obtener el contenedor HTML
    var container = document.getElementById("Colombia");
  
    // Realizar la solicitud fetch para obtener el archivo JSON
    fetch(jsonFilePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Recorrer los datos y construir el HTML dinámicamente
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            // Crear un título para cada categoría
            var categoryTitle = document.createElement("h2");
            categoryTitle.textContent = key;
            container.appendChild(categoryTitle);
  
            // Crear una lista para los platillos de cada categoría
            var ul = document.createElement("ul");
  
            // Iterar sobre los platillos y crear elementos de lista
            data[key].forEach(function (platillo) {
              // Crear un elemento de lista
              var li = document.createElement("li");
  
              // Crear y agregar elementos al elemento de lista
              li.innerHTML = 
              
              
              `
              <section class="Grid">
              
              <div class="Tarjetas">
              
              <img src="${platillo.Img}" alt="${platillo.Nombre}">

              <figcaption>

              <h2>${platillo.Nombre}</h2>
              
              <h3 class="Acom">Acompañantes</h3>

              <div class="Ver">
                <p>${platillo.Acompañante}</p>
                <p>${platillo.AcompañanteDos}</p>
              </div>
              
                <p class="calificaciones">${platillo.Estrellas}</p>
                <p class="Precio">${platillo.Precio}</p>

              </figcaption>
                
              </div>  

              </section>
                `;
  
              // Agregar el elemento de lista a la lista
              ul.appendChild(li);
            });
  
            // Agregar la lista al contenedor
            container.appendChild(ul);
          }
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  