//----------Introducción: el propósito de este trabajo es realizar una simulación de un stock de una tienda de plantas.
//----------Se pretende aplicar tipos de filtrado y mostrar los resultados como alerts

class Plantas {
    constructor (familia, genero, especie, price, size, id,){

                  
    this.familia = familia;      
    this.genero = genero;       
    this.especie = especie;
    this.price = parseFloat(price);
    this.size = size;
    this.id = id;
    

    }
    asignarId(array){
        this.id=array.length
    }
}

//------------Creado el constructor, procedemos a declarar y agregar contenido al array
const arrayPlantas = []

    arrayPlantas.push(new Plantas('cactaceae', 'astrophytum', 'asterias', 1150, 'N10', 1));
    arrayPlantas.push(new Plantas('cactaceae', 'gymnocalycium', 'erinaceum', 450, 'N8', 2));
    arrayPlantas.push(new Plantas('cactaceae', 'mammillaria', 'pectinifera', 2800, 'N8', 3));
    arrayPlantas.push(new Plantas('cactaceae', 'notocactus', 'submammulosus', 400, 'N10', 4));
    arrayPlantas.push(new Plantas('cactaceae', 'astrophytum', 'myriostigma', 300, 'N6', 5));
    arrayPlantas.push(new Plantas('cactaceae', 'ferocactus', 'latispinus', 270, 'N8', 6));
    arrayPlantas.push(new Plantas('crassulaceae', 'kalanchoe', 'pink butterfly', 400, 'N15', 7));
    arrayPlantas.push(new Plantas('crassulaceae', 'graptopetalum', 'superbum', 700, 'N16', 8));
    arrayPlantas.push(new Plantas('asphodelaceae', 'haworthiopsis', 'attenuata variegata', 3900, 'N22', 9));
    arrayPlantas.push(new Plantas('aizoaceae', 'titanopsis', 'calcarea', 400, 'N8', 10));
    arrayPlantas.push(new Plantas('asphodelaceae', 'haworthiopsis', 'marumiana', 300, 'N10', 11));
    arrayPlantas.push(new Plantas('crassulaceae', 'echeveria', 'red wine', 500, 'N8', 12));

console.log(arrayPlantas)
//---------------------creando más arrays
class Macetas {
    constructor (material, color, forma, size){
        this.material = material;
        this.color = color;
        this.forma = forma;
        this.size = size;
    }

}
const arrayPots = []
    arrayPots.push(new Macetas('plastica', 'decorada', 'redonda', 10));
    arrayPots.push(new Macetas('ceramica', 'verde oscuro', 'buho', 12));
    arrayPots.push(new Macetas('plastica', 'surtido', 'facetada', 10));
    arrayPots.push(new Macetas('plastica', 'surtido', 'redonda', 10));
    arrayPots.push(new Macetas('de barro', 'marron', 'cilindrica', 14));
    arrayPots.push(new Macetas('ceramica', 'azul y blanco', 'bol', 20));
//---------función para sorting de plantas
function sorting(string, array) {
    const sortArray = array.slice(0);
    switch (string) {
        case '1': 
            return sortArray.sort((a, b) => b.price - a.price);
        case '2':
            return sortArray.sort((a, b) => a.price - b.price);
        case '3':
            let toZet = sortArray.sort((a, b) => a.genero.localeCompare(b.genero));
            return toZet;
        case '4':
            let toA = sortArray.sort((a, b) => b.genero.localeCompare(a.genero));
            return toA;
       
           
    }
}
//----------función para mostrar el contenido
function showItems (array){
    let item = '';
    array.forEach(element => { item += 'Nombre: ' + element.genero +' ' + element.especie + '\nPrecio: ' + element.price + '\n\n'
        
    });
    return item;
}
//----------función para mostrar el contenido de MACETAS
function showPots (array){
    let item = '';
    array.forEach(element =>{ item += 'Maceta/s: ' + element.material + '\nColor/es: ' + element.color + '\nForma: ' + element.forma + '\n\n'});
    return item;
}

let repeat = true;

while(repeat){
let mainChoice = prompt('Hola, elegí una opción' + '\n1. Ver todos los productos' + '\n2. Ver cactus' + '\n3. Ver suculentas' + '\n4. Filtrar por...' +'\n5. Ver macetas' + '\n6. Salir');

    if(mainChoice == '6'){
        /* alert('Gracias por visitarnos :)') */
        repeat = false;
    }else if (mainChoice == '1'){
        const allPlants = arrayPlantas.slice(0, 12);
        console.log(allPlants.length);
        const namePlants = [];
        for (const genero of allPlants){
            namePlants.push([genero.genero + ' ' + genero.especie]);
        }
        alert(namePlants.join('\n'));

        repeat = false;
    }else if (mainChoice == '2') {
        const onlyCacti = arrayPlantas.slice(0, 6);
       
        alert(showItems(onlyCacti));
        repeat = false;

    }else if (mainChoice == '3'){
        const onlySucculent = arrayPlantas.slice(6, 12);
        
        alert(showItems(onlySucculent));
        repeat = false;

    }else if (mainChoice == '4'){
        
        let sortChoice = prompt('Elegí cómo filtrar...' + '\n1. Mayor precio primero' + '\n2. Menor precio primero' + '\n3. Alfabético (A-Z)' + '\n4. Alfabético (Z-A)' + '\n5. Salir');
       console.log(sortChoice)
        if (sortChoice == '5'){
            alert ('Volviendo al menú');
            repeat = true
        }else if (!(sortChoice == '1' || '2' || '3' || '4')){
            alert ('Opción inválida')
            repeat = true
        }else if (sortChoice === '1' || '2' || '3' || '4'){
        alert(showItems(sorting(sortChoice, arrayPlantas)));
        repeat = false}
    }       
    else if(mainChoice == '5'){
        const allPots = arrayPots.slice(0);
        alert(showPots(allPots));
        repeat = false;

    }else {repeat = true}
}

//-----------------------INTERACCIÓN CON HTML: CREACIÓN DE MODALES POR PRODUCTO CON VARIABLES, DESDE EL JS---------------
let cards = document.getElementsByClassName ('contentCard')
let fotoCards = document.getElementsByClassName ('fotoCards')
let cerrar = document.getElementById ('cerrar')
let modal = document.getElementById('modalProductos');
let flex = document.getElementById('flex');
console.log (cards)


window.addEventListener('click', function(e){
    
    if(e.target == cards[1] || fotoCards [1]){
        modal.style.display = 'block';
    }
});

window.addEventListener('click', function(e){
    
    if(e.target == cerrar){
        modal.style.display = 'none';
    }
});
window.addEventListener('click', function(e){
    
    if(e.target == flex){
        modal.style.display = 'none';
    }
});
let miniArray = arrayPlantas.slice(0,2)
let containerP = document.getElementById('infoContainer')
for (const planta of miniArray){
    let lista = document.createElement('div');
    lista.innerHTML = `<span>Nombre: ${planta.genero} ${planta.especie}</span><br>
                        <span>Familia: ${planta.familia}</span><br>
                        <span>Tamaño: ${planta.size}</span><br>
                        <span>Precio: ${planta.price}</span>`;
    containerP.appendChild(lista);
}
//Sol me voy a volver loco si tengo que hacer un modal por cada imagen, son como 25. Mi idea es tomar de los arrays la información para sobreescribir el DOM.
//No sé si sea posible, pero no tiene sentido hacer un pedazo de código para cada producto en el html.
//Es más, si pudiera poner el modal 100% desde JS lo haría, lo voy a intentar después...
