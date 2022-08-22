//-------------------------------------------ARRAY BASE DEL PROYECTO---------------
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
productosenVenta.push(new Productos('suculenta', 'Crassula muscosa', 'Planta de tipo arbustivo muy popular.', 'N8', 120, '../img/plants/crassula-muscosa.webp', 35, 02));
productosenVenta.push(new Productos('maceta', 'Cerámica bol', 'En color azul y rojo.', 'N15', 1300, '../img/miscellaneous/maceta-ceramica-2.webp', 2, 03));
productosenVenta.push(new Productos('suculenta', 'Anacampseros rufescens', 'Variegada. Últimos disponibles', 'N10', 800, '../img/plants/anacampseros-rufescens.webp', 12, 04));
productosenVenta.push(new Productos('suculenta', 'Echeveria dionysos', 'Bello ejemplar de bordes rojo oscuro.', 'N8', 850, '../img/plants/echeveria-dionysos.webp', 34, 05));
productosenVenta.push(new Productos('maceta', 'Cilíndricas de barro', 'Hay varios tamaños, preguntar.', 'N10, 14, 18', 150, '../img/miscellaneous/macetas-barro-cilindro.webp', 30, 06));
productosenVenta.push(new Productos('suculenta', 'Kalanchoe "pink butterfly"', 'Enormes.', 'N15', 400, '../img/plants/plantas 3.webp', 18, 07));
productosenVenta.push(new Productos('cactus', 'Cactus "cerebrito"', 'Mammillaria elongata crestada.', 'N8', 300, '../img/plants/cerebritos.webp', 32, 08));
productosenVenta.push(new Productos('suculenta', 'Haworthia attenuata variegata', 'Ejemplar de lujo.', 'N22', 3900, '../img/plants/haworthia-attenuata-var.webp', 3, 09));
productosenVenta.push(new Productos('suculenta', 'Titanopsis calcarea', 'En maceta 8 colmada.', 'N8', 400, '../img/plants/titanopsis-calcarea.webp', 22, 10));
productosenVenta.push(new Productos('suculenta', 'Haworthia marumiana', 'Con hijitos.', 'N10', 300, '../img/plants/Haworthia-Marumiana-var-Batesiana.webp', 8, 11));
productosenVenta.push(new Productos('suculenta', 'Echeveria red wine', 'En maceta cuadrada.', 'N8', 500, '../img/plants/echeveria-red-wine.webp', 12, 12));
productosenVenta.push(new Productos('suculenta', 'Ceropegia woodi', 'Collar de corazones, planta colgante.', 'N8', 600, '../img/plants/ceropegia-woodi.webp', 31, 13));
productosenVenta.push(new Productos('maceta', 'Maceta búho', 'De cerámica, artesanal.', 'N12', 1500, '../img/miscellaneous/maceta-ceramica-buho.webp', 1, 14));
productosenVenta.push(new Productos('suculenta', 'Curio rowleyanus variegado', 'Planta rosario variegada!!', 'N8', 600, '../img/plants/curio-rowleyanus-variegado.webp', 20, 15));
productosenVenta.push(new Productos('maceta', 'Macetas plásticas n10', 'Colores surtidos.', 'N10', 50, '../img/miscellaneous/maceta-plastica-n10.webp', 3400, 16));
productosenVenta.push(new Productos('cactus', 'Ferocactus latispinus', 'Pequeño pero peligroso!!', 'N8', 270, '../img/plants/ferocactus-latispinus.jpg', 34, 17));
productosenVenta.push(new Productos('cactus', 'Mammilaria pectinifera', 'Ejemplar de colección.', 'N8', 2800, '../img/plants/mammillaria-pectinifera.jpg', 2, 18));
productosenVenta.push(new Productos('suculenta', 'Crassula Ovata', 'Ideal para principiantes', 'N10', 150, '../img/plants/crassula-ovata.webp', 47, 19));
productosenVenta.push(new Productos('suculenta', 'Agavoides "Romeo rubin"', 'Echeveria de colección', 'N6', 1200, '../img/plants/agavoides-romeo-rubin.webp', 21, 20));
productosenVenta.push(new Productos('suculenta', 'Echeveria Laui', 'Hermoso ejemplar de colección', 'N6', 1200, '../img/plants/echeveria-laui.webp', 7, 21));
productosenVenta.push(new Productos('cactus', 'Notocactus submammulosa', 'En oferta 2x700.', 'N10', 400, '../img/plants/Notocactus-submammulosa.jpg', 53, 22));
productosenVenta.push(new Productos('maceta', 'Macetas decoradas', 'Con frases surtidas.', 'N6, 8, 10, 12 y 14', 90, '../img/miscellaneous/macetitas.webp', 1200, 23));
productosenVenta.push(new Productos('suculenta', 'Crassula dorothy', 'Ejemplar raro ideal para coleccionistas.', 'N10', 1000, '../img/plants/crassula-dorothy.webp', 8, 24));
productosenVenta.push(new Productos('cactus', 'Gymnocalycium erinaceum', 'Disponibles en maceta cuadrada.', 'N8', 450, '../img/plants/gymnocalycium-erinaceum.jpg', 38, 25));
productosenVenta.push(new Productos('maceta', 'Macetas facetadas', 'Colores varios.', 'N10', 60, '../img/miscellaneous/macetas-facetadas.webp', 2020, 26));
productosenVenta.push(new Productos('cactus', 'Astrophytum myriostigma', 'Pequeño cactus sin espinas con forma de estrella.', 'N6', 300, '../img/plants/astrophytum-myriostigma.webp', 21, 27));
productosenVenta.push(new Productos('suculenta', 'Graptoveria "Lovely rose"', 'Con forma de rosa :D.', 'N8', 400, '../img/plants/graptoveria-lovely-rose.webp', 26, 28));
productosenVenta.push(new Productos('suculenta', 'Haworthia cooperi', 'Planta de sombra muy demandada.', 'N8', 700, '../img/plants/haworthia-cooperi.webp', 14, 29));
productosenVenta.push(new Productos('suculenta', 'Haworthiopsis attenuata', 'En maceta n12, con flor.', 'N10', 200, '../img/plants/haworthiopsis-attenuata.webp', 24, 30));
productosenVenta.push(new Productos('suculenta', 'Kalanchoe tomentosa', 'Planta orejas de conejo, ejemplares grandes', 'N12', 600, '../img/plants/kalanchoe-tomentosa.webp', 19, 31));
productosenVenta.push(new Productos('suculenta', 'Graptopetalum superbum', 'Ejemplar único.', 'N16', 700, '../img/plants/graptopetalum-superbum.webp', 1, 32));

let productos = document.getElementById ('productGalery');
let flex
let cerrar
let divModal
let carritoItems = document.getElementById('carritoItems');
const carritoLista = [];//ARRAY DE ITEMS DEL CARRITO

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
//----------------------------------------------------------------------función para imprimir los productos del array en la página PRODUCTOS
function armarPagProd(array) {
    if (productos != null) {
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
                    <p>${producto.desc}</p>
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
} 
armarPagProd(productosenVenta);  
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
                    cerrar = document.getElementById('cerrar');
                    flex = document.getElementById('flex');
                } else if ((e.target == cerrar) || (e.target == flex)) {//CERRANDO MODAL SI SE TOCA "X" Y LA PANTALLA
                    divModal.remove();
                }
                        
            }
        }
    });
    
}
creandoModal(productosenVenta);     
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
    armarPagProd(productosenVenta);
    estilizarTabActivo('todo');
    creandoModal(productosenVenta);
    let activeDropdown = document.querySelector('#filtroDropdown a')
    activeDropdown.textContent = 'Filtrar por'
}

function masFiltros(string) {
    const copiaArray = productosenVenta.slice(0);
    switch (string) {
        case 'Mayor a menor': 
            let expensive = copiaArray.sort((a, b) => b.precio - a.precio);
            return filtrosYModales(expensive);
        case 'Menor a mayor':
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
    console.log(carritoLista.length)
    let item = array.find((productos) => productos.id === idProd)
    let cartFromStorage = JSON.parse(localStorage.getItem('listaDeProductos'));
    if(cartFromStorage == null){
        carritoLista.push(item);
        localStorage.setItem('listaDeProductos', JSON.stringify(carritoLista))
    }else if(cartFromStorage != null){cartFromStorage.push(item);
        localStorage.setItem('listaDeProductos', JSON.stringify(cartFromStorage))
    }
    
    
}
////////////////////////////////////////////////////////////////////////////--COSAS DE 'CARRITO'--//////////////////////////////////////////////////////////////////////////////////////////////////
//-----------------eliminar item del carrito desde la página "carrito"
function deleteFromCart(prodID){        
    let cartFromStorage = JSON.parse(localStorage.getItem('listaDeProductos')); 
        let item = cartFromStorage.find((prod) => prod.id === prodID)
        let index = cartFromStorage.indexOf(item)
        cartFromStorage.splice(index, 1)
        localStorage.setItem('listaDeProductos', JSON.stringify(cartFromStorage))
       fillingCart()
    toastify('Eliminaste un producto', 'gray', 'black');
      
}
//-------------------vaciar carrito desde la página "carrito"
function toEmptyCart(prodID){        
    let cartFromStorage = JSON.parse(localStorage.getItem('listaDeProductos'));
        cartFromStorage.length = 0;
        localStorage.setItem('listaDeProductos', JSON.stringify(cartFromStorage))
       fillingCart()
    toastify('Vaciaste el carrito', 'gray', 'black');
      
}
//---------------------------------función para agregar productos a la página "carrito"

const fillingCart = () => {
    let cartFromStorage = JSON.parse(localStorage.getItem('listaDeProductos'));
    console.log(cartFromStorage);
    carritoItems.innerHTML= '';
    
    cartFromStorage.forEach((producto) =>{
        let carritoItem = document.createElement('div');
        carritoItem.innerHTML =
                            `<article class="longCards1 d-flex justify-content-center">
                            <div class="card mb-3 w-75">
                                <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="${producto.foto}" class="img-fluid rounded-start w-75" alt="foto ${producto.nombre}">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title bodyPageFont"><strong>${producto.nombre}</strong></h5>
                                        <p class="bodyPageFont card-text">Descripción: ${producto.desc}  <br>Tipo: ${producto.tipo} <br>Tamaño: ${producto.size} <br> Precio: $${producto.precio}</p>
                                        <p class="card-text"><small class="text-muted">Stock: ${producto.stock}</small></p>
                                        <button id="item${producto.id}" onclick="deleteFromCart(${producto.id})" type="button" class="btn btn-danger">Eliminar</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </article>`;
                
        carritoItems.appendChild(carritoItem);
        
    })
    let total = cartFromStorage.reduce((acc, item) => acc + item.precio, 0)
    let freeShip = (total > 4000)
    let aviso = (freeShip ? 'Perfecto, ya tenés envíos gratis a todo el pais.' : 'Acordate que pasando los $4000 en tu compra tenés envíos gratis')
    carritoItems.insertAdjacentHTML('beforeend',
    `<div class="d-flex justify-content-center mb-3">
        <div class="longCards1  card w-75"> 
            <div class="bodyPageFont d-flex row">
                <div class="col-md-9"><p>${aviso}</p></div>
                <div class="col-md-3"><p class=" fw-bold text-end">Total = $${total}</p></div>
            </div>
            <div class="text-end"><button onclick="toEmptyCart()" type="button" class="btn btn-danger w-25 mb-3 me-3 fs-5">Vaciar Carrito</button></div>
        </div>
    </div>`);
    localStorage.setItem('listaDeProductos', JSON.stringify(cartFromStorage))
    
}  

let cartHasItems = (localStorage.getItem('cartHasItems') == 'true')
if (cartHasItems && carritoItems != null) {
    fillingCart()

}


//////////////////////////////////////////////EL CÓDIGO DESDE ESTE COMMENT HASTA EL FINAL CORRESPONDE A "CUENTA" E "INDEX"///////////////////////////////////////////////////////////
//------------------------GUARDAR INFORMACIÓN DE FORMULARIOS: CREACIÓN DE CUENTA, HABILITAR COMPRAR SI CUENTA EXISTE---------

let apellidoForm 
let passForm
let passCheckForm 
let emailForm 
let phoneForm
let selectForm
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

//---------------------------------------------------------------------CÓDIGO PARA CREAR CUENTA/INICIAR SESIÓN Y DESBLOQUEAR CARRITO
window.addEventListener('click', function(e){

    let ingresarCuentaBtn = document.getElementById('btnIngresarCuenta');
    let submitButton = document.getElementById('submitBtn');

    if(e.target == submitButton){
        let recordarForm = document.getElementById('exampleCheck1').checked;

        console.log(recordarForm);

        recordarForm ? saveBoth() : obtainNSave(sessionStorage);

        if((passForm.length == 0) || (nombreForm.length == 0) || (apellidoForm.length == 0) || (emailForm.length == 0)){
            toastify('No ingresaste suficientes datos','red','black')
            setTimeout (() => {location.reload()}, 1500)
            
        }else if(passForm != passCheckForm){
            
            toastify('Las contraseñas deben coincidir','red','black');
            
            setTimeout (() => {location.reload()}, 1500)
            deleteOnlyOne('passForm', sessionStorage)
            deleteOnlyOne('passCheckForm', sessionStorage)
            deleteOnlyOne('passForm', localStorage)
            deleteOnlyOne('passCheckForm', localStorage)

        }else{

            sessionStorage.setItem('unlockCarrito', 'true');
            
            toastify('Cuenta creada','#c4fa7f','gray')
            
            setTimeout (() => {location.reload()}, 1500)
            
           
            
        }
    }else if(e.target == ingresarCuentaBtn){
        let correoIngresar = document.getElementById('email2').value;
        let contrasenaIngresar = document.getElementById('pass2').value;
        let emailStorage = localStorage.getItem('emailForm');
        let contrasenaStorage = localStorage.getItem('passForm');
        if(correoIngresar == emailStorage && contrasenaIngresar == contrasenaStorage){
            sessionStorage.setItem('nombreForm', localStorage.getItem('nombreForm'));
            sessionStorage.setItem('unlockCarrito', 'true');
            toastify('ingreso exitoso!','#c4fa7f','gray')
            
            setTimeout (() => {location.reload()}, 1500)
            
        }else{toastify('Los datos no coinciden','red','black')
            
        setTimeout (() => {location.reload()}, 1500)}
    } 
});

   
//----------------------------------------------MODIFICAR "CUENTA" O BLOQUEAR "CARRITO" SI ESTÁS LOGUEADO (operador ternario)-------------------------------------

function cuentaExiste (){  
    let cuentaPage = document.querySelector('#cuentaHeader');
    if(cuentaPage != null){ cuentaPage.innerHTML = `<div class="cartelCarro"><h2>Hola ${sessionStorage.getItem('nombreForm')}, bienvenido/a. Podés retomar o realizar compras sin problemas yendo <a href="productos.html">aqui</a>.</h2>
    <button id="btnDelete" type="button" class="btn btn-success mb-2">CERRAR SESIÓN</button><button id="btnHardDelete" type="button" class="btn btn-success mb-2 ms-3">ELIMINAR CUENTA</button></div>`;}

}
function cuentaInexistente(){
    carritoItems.innerHTML= '';
    let carritoPage = document.querySelector('#mainCarrito');
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
            
    carritoPage?.parentNode.appendChild(divCarrito);
}  

unlockCarrito = (sessionStorage.getItem('unlockCarrito') == 'true');   

unlockCarrito ? cuentaExiste() : cuentaInexistente()
let btnDelete = document.getElementById('btnDelete');
btnDelete?.addEventListener('click', () => {
    
    deleteAllData(sessionStorage);
    location.reload();
    
    
}) 
let btnHardDelete = document.getElementById('btnHardDelete');
btnHardDelete?.addEventListener('click', () => {
    
    deleteAllData(localStorage);
    deleteAllData(sessionStorage);
    location.reload();
    
    
}) 
//--------------------------------------------EXXXXXXXXTRA: OBTENIENDO DATO DE FORMULARIO CONSULTA (INDEX)

let enviarConsulta = document.getElementById('enviarConsulta');
enviarConsulta?.addEventListener('click',()=>{

    localStorage.setItem ('emailConsulta', document.getElementById('emailConsulta').value);
    localStorage.setItem ('newsletter', document.getElementById('newsletter').checked);
    localStorage.setItem ('selectConsulta', document.getElementById('selectConsulta').value);
    localStorage.setItem ('mensajeIndex', document.getElementById('mensajeIndex').value);

    Swal.fire({
        position: 'top',
        background: '#c4fa7f',
        icon: 'success',
        iconColor: 'gray',
        title: 'Consulta enviada!',
        showConfirmButton: false,
        timer: 1500
      })

} )

