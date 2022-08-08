
//-----------------------INTERACCIÓN CON HTML: CREACIÓN DE MODALES POR PRODUCTO CON VARIABLES, DESDE EL JS---------------
class Productos {
    constructor(tipo, nombre, desc, size, precio, foto, stock){

        this.tipo = tipo;
        this.nombre = nombre;
        this.desc = desc;
        this.size = size;
        this.precio = parseFloat(precio);
        this.foto = foto;
        this.stock = parseInt(stock);

    }
}
const productosenVenta = [];
    productosenVenta.push(new Productos('cactus', 'Astrophytum asterias', 'Cactus redondo de porte pequeño.', 'N10', 1150, '../img/plants/Astrophytum-asterias.jpg', 14));
    productosenVenta.push(new Productos('cactus', 'Gymnocalycium erinaceum', 'Disponibles en maceta cuadrada.', 'N8', 450, '../img/plants/gymnocalycium-erinaceum.jpg', 38));
    productosenVenta.push(new Productos('cactus', 'Mammilaria pectinifera', 'Ejemplar de colección.', 'N8', 2800, '../img/plants/mammillaria-pectinifera.jpg', 2));
    productosenVenta.push(new Productos('cactus', 'Notocactus submammulosa', 'En oferta 2x700.', 'N10', 400, '../img/plants/Notocactus-submammulosa.jpg', 53));
    productosenVenta.push(new Productos('cactus', 'Astrophytum myriostigma', 'Pequeño cactus sin espinas con forma de estrella.', 'N6', 300, '../img/plants/astrophytum-myriostigma.webp', 21));
    productosenVenta.push(new Productos('cactus', 'Ferocactus latispinus', 'Pequeño pero peligroso!!', 'N8', 270, '../img/plants/ferocactus-latispinus.jpg', 34));
    productosenVenta.push(new Productos('suculenta', 'Kalanchoe "pink butterfly"', 'Enormes.', 'N15', 400, '../img/plants/plantas 3.webp', 18));
    productosenVenta.push(new Productos('suculenta', 'Graptopetalum superbum', 'Ejemplar único.', 'N16', 700, '../img/plants/graptopetalum-superbum.webp', 1));
    productosenVenta.push(new Productos('suculenta', 'Hworthia attenuata variegata', 'Ejemplar de lujo.', 'N22', 3900, '../img/plants/haworthia-attenuata-var.webp', 3));
    productosenVenta.push(new Productos('suculenta', 'Titanopsis calcarea', 'En maceta 8 colmada.', 'N8', 400, '../img/plants/titanopsis-calcarea.webp', 22));
    productosenVenta.push(new Productos('suculenta', 'Haworthia marumiana', 'Con hijitos.', 'N10', 300, '../img/plants/Haworthia-Marumiana-var-Batesiana.webp', 8));
    productosenVenta.push(new Productos('suculenta', 'Echeveria red wine', 'En maceta cuadrada.', 'N8', 500, '../img/plants/echeveria-red-wine.webp', 12));
    productosenVenta.push(new Productos('maceta', 'Macetas decoradas', 'Con frases surtidas.', 'N6, 8, 10, 12 y 14', 90, '../img/miscellaneous/macetitas.webp', 1200));
    productosenVenta.push(new Productos('maceta', 'Maceta búho', 'De cerámica, artesanal.', 'N12', 1500, '../img/miscellaneous/maceta-ceramica-buho.webp', 1));
    productosenVenta.push(new Productos('maceta', 'Macetas facetadas', 'Colores varios.', 'N10', 60, '../img/miscellaneous/macetas-facetadas.webp', 2020));
    productosenVenta.push(new Productos('maceta', 'Macetas plásticas n10', 'Colores surtidos.', 'N10', 50, '../img/miscellaneous/maceta-plastica-n10.webp', 3400));
    productosenVenta.push(new Productos('maceta', 'Cilíndricas de barro', 'Hay varios tamaños, preguntar.', 'N10, 14, 18', 150, '../img/miscellaneous/macetas-barro-cilindro.webp', 30));
    productosenVenta.push(new Productos('maceta', 'Cerámica bol', 'En color azul y rojo.', 'N15', 1300, '../img/miscellaneous/maceta-ceramica-2.webp', 2));

let cards = document.getElementsByClassName ('contentCard');
let fotoCards = document.querySelectorAll ('.shopCards img');
let comprar = document.querySelectorAll ('.contentCard a');
let flex
let cerrar
let divModal
console.log (comprar);

//-----función para abrir MODAL
window.addEventListener('click', function(e){
    console.log(e.target)
    for(let i = 0; i<=cards.length; i++){

        if(((e.target.parentNode == cards[i]) || (e.target == fotoCards[i]) || (e.target == cards[i])) && !(e.target == comprar[i])){
            const prodFiltrado = productosenVenta.slice(i, i + 1); //<--Este "parche" es una genialidad, para que el for of no me repita el modal por cada elemento del array
            console.log(productosenVenta)                         //saco una copia de array en cada iteración, saco la copia que necesite EN ESA iteración
                                                                //Tal vez sea algo simple pero me salvó de querer abandonar este trabajo aprox
                for (const producto of prodFiltrado){
                let divModal = document.createElement('div');
                divModal.id='box';
                divModal.innerHTML = `<div id="modalProductos" class="modal">
                <div class="flex" id="flex">
                    <div class="modalStuff">
                        <div class="modalTitulo flex">
                            <h2>${producto.nombre}</h2>
                            <span class="close" id="cerrar">&times;</span>
                        </div>
                        <div class="modalBody longCards1">
                            <div class="card mb-3 w-100">
                                <div class="row g-0">
                                    <div class="col-md-6">
                                        <img src="${producto.foto}" class="img-fluid rounded-start w-100" alt="cactus astrophytum asterias">
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body">
                                            <p class="bodyPageFont card-text" id="infoContainer">
                                            <span>Tipo: ${producto.tipo}</span><br>
                                            <span>Descripción: ${producto.desc}</span><br>
                                            <span>Tamaño: ${producto.size}</span><br>
                                            <span>Precio: $${producto.precio}</span> 
                                            </p>
                                            <button type="button" class="btn btn-success">COMPRAR</button>
                                            <p class="card-text"><small class="text-muted">Stock: ${producto.stock}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
                
                document.body.appendChild(divModal); 
                
            } 
        }
                divModal = document.getElementById('box');
                cerrar = document.getElementById ('cerrar');
                flex = document.getElementById('flex');
    }
});

//-------funciones que cierran el modal
window.addEventListener('click', function(e){
    
    if(e.target == cerrar){
       
        divModal.remove();
       
    }
});
window.addEventListener('click', function(e){
    
    if(e.target == flex){
        divModal.remove();
        
    }
});
//Esto es todo lo que quería lograr con respecto a eventos y DOM por ahora. Me gustaría hacer que pueda agregarle productos nuevos desde JS pero más adelante;
//con Storage voy a hacer más funcionales los formularios y dejé una variable de "stock" como comodín para realizar simulaciones que se guarden de manera local.






//--CÓDIGO VIEJO PARA POTENCIAL REUTILIZACIÓN: 
//KEYWORDS: filtros, búsqueda, imputs(prompts)
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

let repeat = false;

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
