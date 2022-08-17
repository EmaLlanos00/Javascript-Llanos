//-----------------------INTERACCIÓN CON HTML: CREACIÓN DE MODALES POR PRODUCTO CON VARIABLES, DESDE EL JS---------------
class Productos {
    constructor(tipo, nombre, desc, size, precio, foto, stock, id){

        this.tipo = tipo;
        this.nombre = nombre;
        this.desc = desc;
        this.size = size;
        this.precio = parseFloat(precio);
        this.foto = foto;
        this.stock = parseInt(stock);
        this.id = id;

    }
}
const productosenVenta = [];
productosenVenta.push(new Productos('cactus', 'Astrophytum asterias', 'Cactus redondo de porte pequeño.', 'N10', 1150, '../img/plants/Astrophytum-asterias.jpg', 14, 01));
productosenVenta.push(new Productos('cactus', 'Gymnocalycium erinaceum', 'Disponibles en maceta cuadrada.', 'N8', 450, '../img/plants/gymnocalycium-erinaceum.jpg', 38, 02));
productosenVenta.push(new Productos('cactus', 'Mammilaria pectinifera', 'Ejemplar de colección.', 'N8', 2800, '../img/plants/mammillaria-pectinifera.jpg', 2, 03));
productosenVenta.push(new Productos('cactus', 'Notocactus submammulosa', 'En oferta 2x700.', 'N10', 400, '../img/plants/Notocactus-submammulosa.jpg', 53, 04));
productosenVenta.push(new Productos('cactus', 'Astrophytum myriostigma', 'Pequeño cactus sin espinas con forma de estrella.', 'N6', 300, '../img/plants/astrophytum-myriostigma.webp', 21, 05));
productosenVenta.push(new Productos('cactus', 'Ferocactus latispinus', 'Pequeño pero peligroso!!', 'N8', 270, '../img/plants/ferocactus-latispinus.jpg', 34, 06));
productosenVenta.push(new Productos('suculenta', 'Kalanchoe "pink butterfly"', 'Enormes.', 'N15', 400, '../img/plants/plantas 3.webp', 18, 07));
productosenVenta.push(new Productos('suculenta', 'Graptopetalum superbum', 'Ejemplar único.', 'N16', 700, '../img/plants/graptopetalum-superbum.webp', 1, 08));
productosenVenta.push(new Productos('suculenta', 'Hworthia attenuata variegata', 'Ejemplar de lujo.', 'N22', 3900, '../img/plants/haworthia-attenuata-var.webp', 3, 09));
productosenVenta.push(new Productos('suculenta', 'Titanopsis calcarea', 'En maceta 8 colmada.', 'N8', 400, '../img/plants/titanopsis-calcarea.webp', 22, 10));
productosenVenta.push(new Productos('suculenta', 'Haworthia marumiana', 'Con hijitos.', 'N10', 300, '../img/plants/Haworthia-Marumiana-var-Batesiana.webp', 8, 11));
productosenVenta.push(new Productos('suculenta', 'Echeveria red wine', 'En maceta cuadrada.', 'N8', 500, '../img/plants/echeveria-red-wine.webp', 12, 12));
productosenVenta.push(new Productos('maceta', 'Macetas decoradas', 'Con frases surtidas.', 'N6, 8, 10, 12 y 14', 90, '../img/miscellaneous/macetitas.webp', 1200, 13));
productosenVenta.push(new Productos('maceta', 'Maceta búho', 'De cerámica, artesanal.', 'N12', 1500, '../img/miscellaneous/maceta-ceramica-buho.webp', 1, 14));
productosenVenta.push(new Productos('maceta', 'Macetas facetadas', 'Colores varios.', 'N10', 60, '../img/miscellaneous/macetas-facetadas.webp', 2020, 15));
productosenVenta.push(new Productos('maceta', 'Macetas plásticas n10', 'Colores surtidos.', 'N10', 50, '../img/miscellaneous/maceta-plastica-n10.webp', 3400, 16));
productosenVenta.push(new Productos('maceta', 'Cilíndricas de barro', 'Hay varios tamaños, preguntar.', 'N10, 14, 18', 150, '../img/miscellaneous/macetas-barro-cilindro.webp', 30, 17));
productosenVenta.push(new Productos('maceta', 'Cerámica bol', 'En color azul y rojo.', 'N15', 1300, '../img/miscellaneous/maceta-ceramica-2.webp', 2, 18));
productosenVenta.push(new Productos('suculenta', 'Crassula Ovata', 'Ideal para principiantes', 'N10', 150, '../img/plants/crassula-ovata.webp', 47, 19));
productosenVenta.push(new Productos('suculenta', 'Echeveria Laui', 'Hermoso ejemplar de colección', 'N10', 1200, '../img/plants/echeveria-laui.webp', 7, 20));

let cards = document.getElementsByClassName ('contentCard');
let productos = document.getElementById ('productGalery');
let flex
let cerrar
let divModal

let carritoItems = document.getElementById('carritoItems');
const carritoLista = [];

//------función para imprimir los productos del array en la página PRODUCTOS
productosenVenta.forEach((producto) =>{
    let divItems = document.createElement('div');
    divItems.classList.add('shopCards');
    divItems.innerHTML=
    `<div class="fotoCards">
        <img src="${producto.foto}" alt="foto ${producto.nombre}">
    </div>
    <div class="contentCard">
        <h3>${producto.nombre}</h3>
        <p>${producto.desc}</p>
        <p>$${producto.precio}</p>
        <button id="item${producto.id}">Comprar</button>
    </div>`
    productos?.appendChild(divItems);
    let buyThisItem = document.getElementById(`item${producto.id}`);
    buyThisItem?.addEventListener('click', () => {
        addToCart (producto.id);
       
        sessionStorage.setItem('cartHasItems', true)
    })
   
})

//------------------lista de CARRITO  (array)
const addToCart = (idProd) => { 
    let item = productosenVenta.find((productos) => productos.id === idProd)
    carritoLista.push(item);
    sessionStorage.setItem('listaDeProductos', JSON.stringify(carritoLista))
    console.log(carritoLista);
}
 
//-------funcion para agregar contenido al carrito


let cartHasItems = (sessionStorage.getItem('cartHasItems') == 'true')
console.log(cartHasItems)
if(cartHasItems && carritoItems != null){
    const fillingCart = () => {
        let cartFromStorage = JSON.parse(sessionStorage.getItem('listaDeProductos'));
        console.log(cartFromStorage);
        carritoItems.innerHTML= '';
        cartFromStorage.forEach((producto) =>{
            let carritoItem = document.createElement('div');
            carritoItem.innerHTML =
                                `<article class="longCards1">
                                <div class="card mb-3 w-100">
                                    <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="${producto.foto}" class="img-fluid rounded-start w-100" alt="foto ${producto.nombre}">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title bodyPageFont"><strong>${producto.nombre}</strong></h5>
                                            <p class="bodyPageFont card-text">${producto.desc}</p>
                                            <p class="bodyPageFont card-text">${producto.precio}</p>
                                            <p class="card-text"><small class="text-muted">${producto.stock}</small></p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </article>`;
                    
            carritoItems.appendChild(carritoItem);   
             
        })
        sessionStorage.setItem('listaDeProductos', JSON.stringify(cartFromStorage))
    }  
    console.log(fillingCart())
}


let fotoCards = document.querySelectorAll ('.shopCards img');
let comprar = document.querySelectorAll ('.contentCard button');
//-----función para abrir y cerrar MODAL
window.addEventListener('click', function(e){
    console.log(e.target)
    for(let i = 0; i<=cards.length; i++){

        if(((e.target.parentNode == cards[i]) || (e.target == fotoCards[i]) || (e.target == cards[i])) && !(e.target == comprar[i])){
            const prodFiltrado = productosenVenta.slice(i, i + 1); 
            console.log(productosenVenta)                         
                                                                
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
                                        <img src="${producto.foto}" class="img-fluid rounded-start w-100" alt="foto ${producto.nombre}">
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body">
                                            <p class="bodyPageFont card-text" id="infoContainer">
                                            <span>Tipo: ${producto.tipo}</span><br>
                                            <span>Descripción: ${producto.nombre}</span><br>
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
            divModal = document.getElementById('box');
            cerrar = document.getElementById ('cerrar');
            flex = document.getElementById('flex');
        }else if((e.target == cerrar) || (e.target == flex)){//CERRANDO MODAL SI SE TOCA "X" Y LA PANTALLA
            divModal.remove();
        }
                
    }
});

//------------------------GUARDAR INFORMACIÓN DE FORMULARIOS: CREACIÓN DE CUENTA, HABILITAR COMPRAR SI CUENTA EXISTE---------
//armando las funciones y variables pertinentes
let nombreForm
let apellidoForm 
let passForm
let passCheckForm 
let emailForm 
let phoneForm
let selectForm
let carritoPage = document.querySelector('#mainCarrito');
let cuentaPage = document.querySelector('#cuentaHeader');
let ingresarCuentaBtn = document.getElementById('btnIngresarCuenta');
let submitButton = document.getElementById('submitBtn');
let unlockCarrito = false;

//----------------------------------------------------------------------------------------funciones de GUARDADO
function saveData(storage){
    storage.setItem('nombreForm', document.getElementById('cuentaNombre').value);
    storage.setItem('apellidoForm', document.getElementById('cuentaApellido').value);
    storage.setItem('passForm', document.getElementById('cuentaPass').value);
    storage.setItem('passCheckForm', document.getElementById('cuentaPassCheck').value);
    storage.setItem('emailForm', document.getElementById('cuentaEmail').value);
    storage.setItem('phoneForm', document.getElementById('cuentaPhone').value); 
    storage.setItem('selectForm', document.getElementById('selectForm').value);
    
    
}
function fromStorage(storage){
    nombreForm =  storage.getItem('nombreForm');
    apellidoForm = storage.getItem('apellidoForm');
    passForm = storage.getItem('passForm');
    passCheckForm = storage.getItem('passCheckForm');
    emailForm = storage.getItem('emailForm');
    phoneForm = storage.getItem('phoneForm');
    selectForm = storage.getItem('selectForm');
    console.log(passCheckForm);
    
}
function obtainNSave(storage){ saveData(storage); fromStorage(storage);}

function saveBoth (){
    obtainNSave(localStorage);
    obtainNSave(sessionStorage);
}
//----------------------------------------------------------------------------------funciones de BORRADO
function deleteAllData(storage) {
    storage.clear();
}

function deleteOnlyOne(key, storage) {
    storage.removeItem(key);
}

//---------------------------------------------------------------------bloqueo de CARRITO si cuenta no existe, guardado y obtención de datos de STORAGE
window.addEventListener('click', function(e){
    
    if(e.target == submitButton){
        let recordarForm = document.getElementById('exampleCheck1').checked;
        console.log(recordarForm);
        recordarForm ? saveBoth() : obtainNSave(sessionStorage);
        if((passForm.length == 0) || (nombreForm.length == 0) || (apellidoForm.length == 0) || (emailForm.length == 0)){
            alert('No ingresaste suficientes datos');
        }else if(passForm != passCheckForm){
            alert('Las contraseñas deben coincidir');
            deleteOnlyOne(passForm, recordarForm ? localStorage : sessionStorage)
            deleteOnlyOne(passCheckForm, recordarForm ? localStorage : sessionStorage)
        }else{
            sessionStorage.setItem('unlockCarrito', 'true');
            console.log(unlockCarrito);
            alert('Cuenta creada con éxito!!');
            
        }
    }else if(e.target == ingresarCuentaBtn){
        let correoIngresar = document.getElementById('email2').value;
        let contrasenaIngresar = document.getElementById('pass2').value;
        let emailStorage = localStorage.getItem('emailForm');
        let contrasenaStorage = localStorage.getItem('passForm');
        if(correoIngresar == emailStorage && contrasenaIngresar == contrasenaStorage){
            sessionStorage.setItem('unlockCarrito', 'true');
            alert('ingreso exitoso');
        }
    }
});

   
//----------------------------------------------------------------------MODIFICAR PÁGINA DE CUENTA
function cuentaExiste (){  

    if(cuentaPage != null){ cuentaPage.innerHTML = `<div class="cartelCarro"><h2>Hola ${sessionStorage.getItem('nombreForm')}, bienvenido/a. Podés retomar o realizar compras sin problemas yendo <a href="productos.html">aqui</a>.</h2>
    <button id="btnDelete" type="button" class="btn btn-success mb-2">CERRAR SESIÓN</button><button id="btnHardDelete" type="button" class="btn btn-success mb-2 ms-3">ELIMINAR CUENTA</button></div>`;}

}
function cuentaInexistente(){
    let divCarrito = document.createElement('div');
    divCarrito.id='lock';
    divCarrito.classList.add("stopScrolling");
    divCarrito.innerHTML = `<div id="modalProductos" class="modal">
                            <div class="flex" id="flex">
                                <div class="modalStuff">
                                    <div class="modalTitulo flex">
                                        <h2>Para comprar necesitás una cuenta</h2>
                                    </div>
                                    <div class="modalBody longCards1">
                                        <div class="card mb-3 w-100">
                                            <div class="row g-0 p-3">
                                                <div class="text-center d-flex flex-wrap justify-content-around">
                                                <p>Para comprar en la página necesitás una cuenta. Es rápido y vas a poder retomar tu compra cuando quieras.</p>
                                                <a href="cuenta.html" type="button" class="btn btn-success mb-2">CREAR CUENTA</a>
                                                <a href="cuenta.html" type="button" class="btn btn-success mb-2">INICIAR SESIÓN</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
            
    carritoPage?.parentNode.appendChild(divCarrito); //--------acceso condicional a objeto
}  
//------------------------------------------------------CERRAR SESIÓN O ELIMINAR CUENTA
unlockCarrito = (sessionStorage.getItem('unlockCarrito') == 'true');   

unlockCarrito ? cuentaExiste() : cuentaInexistente() //------operador ternario utilizando funciones
let btnDelete = document.getElementById('btnDelete');
btnDelete?.addEventListener('click', () => { //----------acceso condicional a objeto
    
    deleteAllData(sessionStorage);
    location.reload();
    
    
}) 
let btnHardDelete = document.getElementById('btnHardDelete');
btnHardDelete?.addEventListener('click', () => { //----------acceso condicional a objeto
    
    deleteAllData(localStorage);
    deleteAllData(sessionStorage);
    location.reload();
    
    
}) 
//--------------------------------------------EXXXXXXXXTRA: OBTENIENDO DATO DE FORMULARIO CONSULTA (INDEX)

let enviarConsulta = document.getElementById('enviarConsulta');
enviarConsulta.addEventListener('click',()=>{

    localStorage.setItem ('emailConsulta', document.getElementById('emailConsulta').value);
    localStorage.setItem ('newsletter', document.getElementById('newsletter').checked);
    localStorage.setItem ('selectConsulta', document.getElementById('selectConsulta').value);
    localStorage.setItem ('mensajeIndex', document.getElementById('mensajeIndex').value);
    alert('consulta enviada!');

} )
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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

