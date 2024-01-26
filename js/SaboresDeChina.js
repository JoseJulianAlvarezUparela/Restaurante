document.addEventListener("DOMContentLoaded", function () {
    const JsonFile = '../Recursos/China.json';

    let container = document.getElementById("China")

    fetch(JsonFile)
        .then (response => {
            if(!response.ok) {
                throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
              }
              return response.json();
        })

        .then (data => {
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                  // Crear un título para cada categoría
                  let categoryTitle = document.createElement("h2");
                  categoryTitle.textContent = key;
                  container.appendChild(categoryTitle);
        
                  // Crear una lista para los platillos de cada categoría
                  let ul = document.createElement("ul");
        
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
    
})