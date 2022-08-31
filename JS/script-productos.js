//-------------------------------------------CONSTRUCTOR DEL ARRAY BASE DEL STORE---------------
class Productos {
    constructor(tipo, nombre, desc, size, precio, foto, stock, id){

        this.tipo = tipo;
        this.nombre = nombre;
        this.desc = desc;
        this.size = size;
        this.precio = parseFloat(precio);
        this.foto = foto;
        this.stock = parseInt(stock);
        this.id = parseInt(id);

    }
}
const productosenVenta = [];
//----------------------------------------------------------------------funciones que ejecutan librerías
function toastify(texto, color, textColor){
    Toastify({
        text: texto,
        duration: 3200,
        gravity: 'bottom',
        position: 'right',
        
        style: {

            background: color,
            borderWidth: '1px',
            borderRadius: '.5rem',
            borderStyle: 'solid',
            color: textColor,
            fontSize: '1.5rem',
            fontWeight: '600',
            textAlign: 'center',
            borderColor: '#cacaca',
            opacity: '0.95',
            padding:'5px',
            width: '30rem'
        }
       }).showToast();
}
//---------------------CARGANDO DATOS ASINCRÓNICAMENTE CON FETCH DESDE RUTA RELATIVA (JSON): obtengo los datos del json y los uso en el constructor para crear el array

fetch('../JSON/products.json')
.then ( (res) => res.json() )
.then ( (products) => { products.forEach((item) => {
    productosenVenta.push(new Productos(`${item.tipo}`, `${item.nombre}`, `${item.desc}`, `${item.size}`, `${item.precio}`, `${item.foto}`, `${item.stock}`, `${item.id}`));
})
armarPagProd(productosenVenta);
creandoModal(productosenVenta);
})

let productos = document.getElementById ('productGalery');
let flex
let cerrar
let divModal
let carritoItems = document.getElementById('carritoItems');
const carritoLista = [];//ARRAY DE ITEMS DEL CARRITO
//----------------------------------------------------------------------función para imprimir los productos del array en la página PRODUCTOS

function armarPagProd(array) {

        productos.innerHTML = '';
        array.forEach((producto) => {
            let divItems = document.createElement('div');
            divItems.classList.add('shopCards');
            divItems.innerHTML =
                `<div class="fotoCards">
                    <img src="${producto.foto}" alt="foto ${producto.nombre}">
                </div>
                <div class="contentCard">
                    <h3>${producto.nombre}</h3>
                    <p>$${producto.precio}</p>
                    <button id="item${producto.id}">Comprar</button>
                </div>`
            productos?.appendChild(divItems);
            let buyThisItem = document.getElementById(`item${producto.id}`);
            buyThisItem?.addEventListener('click', () => {
                addToCart(array, producto.id);
                toastify('Agreado al carrito!!', '#ABFFD1', 'gray');
                localStorage.setItem('cartHasItems', true);  
            })
        })
} 
//-----------------------------------------------------------------función para abrir y cerrar MODAL
function creandoModal(array){

    let fotoCards = document.querySelectorAll ('.shopCards img');
    let comprar = document.querySelectorAll ('.contentCard button');
    let cards = document.getElementsByClassName ('contentCard');
       
    window.addEventListener('click', function(e){
        
        if(e.target.innerText !== 'Comprar'){

            for(let i = 0; i<=array.length; i++){
        
                if ((e.target.parentNode == cards[i]) || (e.target == fotoCards[i]) || (e.target == cards[i])) {

                    const prodFiltrado = array.slice(i, i + 1);

                    let caja = document.getElementById('box');
                    (caja != null) && caja.remove();
                    for (const producto of prodFiltrado) {
                        let divModal = document.createElement('div');
                        divModal.id = 'box';
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
                                            <div class="col-xl-6">
                                                <img src="${producto.foto}" class="img-fluid rounded-start w-100" alt="foto ${producto.nombre}">
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="card-body">
                                                    <p class="bodyPageFont card-text" id="infoContainer">
                                                    <span>Tipo: ${producto.tipo}</span><br>
                                                    <span>Descripción: ${producto.desc}</span><br>
                                                    <span>Tamaño: ${producto.size}</span><br>
                                                    <span>Precio: $${producto.precio}</span> 
                                                    </p>
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
                    cerrar = document.getElementById('cerrar');
                    flex = document.getElementById('flex');
                } else if ((e.target == cerrar) || (e.target == flex)) {//CERRANDO MODAL SI SE TOCA "X" Y LA PANTALLA
                    divModal.remove();
                }          
            }
        }
    });
    
} 
//---------------------------------------------------------------FILTRADO DE PRODUCTOS 
function filtrarArray(string){

    const arrayFiltrado = productosenVenta.filter((producto) => producto.tipo === string);
    armarPagProd(arrayFiltrado);
    estilizarTabActivo(string);
    creandoModal(arrayFiltrado);
    let activeDropdown = document.querySelector('#filtroDropdown a')
    activeDropdown.textContent = 'Filtrar por'
    
}

function mostrarTododeNuevo(){
     fetch('../JSON/products.json')
    .then ( (res) => res.json() )
    .then ( (data) => { armarPagProd(data);
    creandoModal(data);
    })

    estilizarTabActivo('todo');
    
    let activeDropdown = document.querySelector('#filtroDropdown a')
    activeDropdown.textContent = 'Filtrar por'
}

function masFiltros(string) {

    const copiaArray = productosenVenta.slice(0);

    switch (string) {
        case 'Mayor precio': 
            let expensive = copiaArray.sort((a, b) => b.precio - a.precio);
            return filtrosYModales(expensive);
        case 'Menor precio':
            let cheap = copiaArray.sort((a, b) => a.precio - b.precio);
            return filtrosYModales(cheap);
        case 'A - Z':
            let toZet = copiaArray.sort((a, b) => a.nombre.localeCompare(b.nombre));
            return filtrosYModales(toZet);
        case 'Z - A':
            let toA = copiaArray.sort((a, b) => b.nombre.localeCompare(a.nombre));
            return filtrosYModales(toA);
    }
    
}
const filtrosYModales = (array) => {
    armarPagProd(array);
    creandoModal(array);
 }
function filtrosDropdown(string){
    masFiltros(string);
    estilizarTabActivo(string);
    
    let activeDropdown = document.querySelector('#filtroDropdown a')
    activeDropdown.textContent = `${string}`
}
//aplicando los filtros en los elementos html
    document.getElementById('filtroDefault').addEventListener('click', () => {mostrarTododeNuevo()});
    document.getElementById('filtroCactus').addEventListener('click', () => {filtrarArray('cactus')});
    document.getElementById('filtroSuculentas').addEventListener('click', () => {filtrarArray('suculenta')});
    document.getElementById('filtroMacetas').addEventListener('click', () => {filtrarArray('maceta')});
    document.getElementById('filtroDropdown').addEventListener('click', () => {estilizarTabActivo('')});
    document.getElementById('filtroExpensive').addEventListener('click', () => {filtrosDropdown('Mayor precio')});
    document.getElementById('filtroCheap').addEventListener('click', () => {filtrosDropdown('Menor precio')});
    document.getElementById('filtroAZ').addEventListener('click', () => {filtrosDropdown('A - Z')});
    document.getElementById('filtroZA').addEventListener('click', () => {filtrosDropdown('Z - A')});

//-------------------------ESTILOS: cambiando la apariencia de los filtros de "PRODUCTOS"
function estilizarTabActivo (string){
    let activeTodo = document.querySelector('#filtroDefault a');
    let activeCactus = document.querySelector('#filtroCactus a');
    let activeSucus = document.querySelector('#filtroSuculentas a');
    let activePots = document.querySelector('#filtroMacetas a');
    let activeAZ = document.querySelector('#filtroAZ a');
    let activeZA = document.querySelector('#filtroZA a');
    let activeDropdown = document.querySelector('#filtroDropdown a')
    activeTodo.classList.remove('active'); 
    activeTodo.classList.add('disabled');
    activeCactus.classList.remove('active'); 
    activeCactus.classList.add('disabled');
    activeSucus.classList.remove('active'); 
    activeSucus.classList.add('disabled');
    activePots.classList.remove('active'); 
    activePots.classList.add('disabled');
    activeDropdown.classList.remove('active');
    activeDropdown.classList.add('disabled');
    switch(string){
        case 'cactus':
            activeCactus.classList.remove('disabled'); 
            activeCactus.classList.add('active');
            break;
            
        case 'suculenta':
            activeSucus.classList.remove('disabled'); 
            activeSucus.classList.add('active');
            break;

        case 'maceta':    
            activePots.classList.remove('disabled'); 
            activePots.classList.add('active');
            break;

        case 'todo':
            activeTodo.classList.remove('disabled'); 
            activeTodo.classList.add('active');
            break;
        default: 
            activeDropdown.classList.remove('disabled');
            activeDropdown.classList.add('active');
            break;
    }
}
//------------------CREANDO EL ARRAY QUE SE MUESTRA EN "CARRITO" (función ejecutada desde botón "comprar")
const addToCart = (array, idProd) => { 
    
    let item = array.find((productos) => productos.id === idProd)
    let cartFromStorage = JSON.parse(localStorage.getItem('listaDeProductos'));

    if(cartFromStorage == null){

        carritoLista.push(item);
        localStorage.setItem('listaDeProductos', JSON.stringify(carritoLista))

    }else if(cartFromStorage != null){

        cartFromStorage.push(item);
        localStorage.setItem('listaDeProductos', JSON.stringify(cartFromStorage))

    } 
    
}