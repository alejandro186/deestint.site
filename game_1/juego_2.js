// Obtener referencias a los elementos de configuración y la tabla
const houseInput = document.getElementById('houses');
const wallColorInput = document.getElementById('wall-colors');
const nationalityInput = document.getElementById('nationalities');
const cigarInput = document.getElementById('cigars');
const beverageInput = document.getElementById('beverages');
const animalInput = document.getElementById('animals');
const gridTable = document.getElementById('logic-grid');
const gridBody = gridTable.querySelector('tbody');
const gridHeadRow = gridTable.querySelector('thead tr');

/**
 * Función para generar o regenerar la cuadrícula completa 
 * basándose en los valores introducidos por el usuario.
 */
function generateGrid() {
    // 1. Obtener y parsear los elementos de cada categoría
    // Se convierten los valores de texto (separados por coma) a arrays, 
    // eliminando espacios en blanco.
    const categories = {
        'CASA': parseInput(houseInput.value),
        'COLOR DE PARED': parseInput(wallColorInput.value),
        'NACIONALIDAD': parseInput(nationalityInput.value),
        'CIGARRO': parseInput(cigarInput.value),
        'BEBIDA': parseInput(beverageInput.value),
        'ANIMAL': parseInput(animalInput.value)
    };
    
    // Las casas actúan como encabezados de columna
    const houses = categories['CASA']; 
    // Las demás categorías serán las filas (excepto 'CASA')
    const rowCategories = Object.keys(categories).filter(key => key !== 'CASA');
    
    // Asegurarse de que todas las categorías tengan el mismo número de elementos (idealmente 5)
    if (houses.length === 0 || rowCategories.some(cat => categories[cat].length !== houses.length)) {
        alert("Asegúrate de ingresar la misma cantidad de elementos (idealmente 5) separados por comas en todas las categorías.");
        return;
    }
    
    // 2. Limpiar la tabla existente
    gridHeadRow.innerHTML = '<th></th>'; // Limpia encabezados (excepto la primera celda vacía)
    gridBody.innerHTML = ''; // Limpia todas las filas

    // 3. Generar los encabezados de columna (Casas)
    houses.forEach(house => {
        const th = document.createElement('th');
        th.textContent = house.toUpperCase();
        gridHeadRow.appendChild(th);
    });

    // 4. Generar el cuerpo de la tabla (Filas de categorías)
    // Se recorre cada CATEGORÍA de fila (Color, Nacionalidad, etc.)
    rowCategories.forEach(categoryName => {
        const elements = categories[categoryName]; // Los elementos de la fila actual (e.g., 'rojo', 'verde', 'azul'...)
        
        // Generar las FILAS para la categoría actual (e.g., Fila de 'COLOR DE PARED')
        elements.forEach(elementName => {
            const tr = document.createElement('tr');
            
            // Primera celda de la fila (Nombre del elemento/criterio)
            const th = document.createElement('td'); // Usamos <td> para las etiquetas de fila
            th.textContent = elementName.toUpperCase();
            th.classList.add('category-label');
            tr.appendChild(th);
            
            // Generar las celdas de intersección (donde va la 'X' o vacío)
            houses.forEach(house => {
                const td = document.createElement('td');
                td.classList.add('grid-cell');
                td.dataset.row = elementName; // Usamos data-attributes para identificar la celda
                td.dataset.col = house;
                td.textContent = ''; // Inicialmente vacío
                td.addEventListener('click', toggleCross); // Agregar interactividad
                tr.appendChild(td);
            });

            gridBody.appendChild(tr);
        });
        
        // Opcional: Agregar un separador entre grupos de categorías (e.g., después de todos los colores y antes de todas las nacionalidades)
        const spacerRow = document.createElement('tr');
        spacerRow.innerHTML = `<td colspan="${houses.length + 1}" style="background-color: #ddd; height: 5px;"></td>`;
        gridBody.appendChild(spacerRow);
    });

    // 5. Eliminar la última fila espaciadora para que no quede un borde feo al final
    if (gridBody.lastElementChild) {
        gridBody.removeChild(gridBody.lastElementChild);
    }
}

/**
 * Función que procesa el input de texto separado por comas en un array.
 * @param {string} inputString - La cadena de texto.
 * @returns {string[]} Un array de strings limpios.
 */
function parseInput(inputString) {
    if (!inputString) return [];
    return inputString.split(',')
                      .map(item => item.trim())
                      .filter(item => item.length > 0);
}


/**
 * Función para alternar la 'X' en la celda al hacer clic.
 * @param {Event} event - El evento de clic.
 */
function toggleCross(event) {
    const cell = event.currentTarget;
    
    // Si la celda contiene una 'X' (o cualquier texto), lo borra; si está vacía, pone una 'X'.
    if (cell.textContent.trim() === 'X') {
        cell.textContent = '';
    } else {
        cell.textContent = 'X';
    }
}

// Inicializar la cuadrícula al cargar la página (con los valores por defecto)
window.onload = generateGrid;
