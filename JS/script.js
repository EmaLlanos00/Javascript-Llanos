
let carritoItems = document.getElementById('carritoItems');
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
function sweetAlert(bgColor, icon, iconColor, text, color = '#545454'){
    Swal.fire({
        position: 'top',
        background: bgColor,
        icon: icon,
        iconColor: iconColor,
        title: text,
        color: color,
        showConfirmButton: false,
        timer: 1500
      })
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
    let total = cartFromStorage.reduce((acc, item) => acc + parseInt(item.precio), 0)
    let freeShip = (total > 4000)
    let aviso = (freeShip ? 'Perfecto, ya tenés envíos gratis a todo el pais.' : 'Acordate que pasando los $4000 en tu compra tenés envíos gratis')
    carritoItems.insertAdjacentHTML('beforeend',
    `<div class="d-flex justify-content-center mb-3">
        <div class="longCards1  card w-75"> 
            <div class="bodyPageFont d-flex row">
                <div class="col-md-9"><p>${aviso}</p></div>
                <div class="col-md-3"><p class=" fw-bold text-end">Total = $${total}</p></div>
            </div>
            <div id="btnContainer" class="text-end d-none"><button onclick="toEmptyCart()" type="button" class="btn btn-danger w-25 mb-3 me-3 fs-5">Vaciar Carrito</button></div>
        </div>
    </div>`);

    if(cartFromStorage.length > 0){

        let boton = document.getElementById('btnContainer');
        boton.classList.remove('d-none');

    }

    localStorage.setItem('listaDeProductos', JSON.stringify(cartFromStorage))
    
}  

let cartHasItems = (localStorage.getItem('cartHasItems') == 'true')
if (cartHasItems && carritoItems != null) {fillingCart()}
//////////////////////////////////////////////EL CÓDIGO DESDE ESTE COMMENT HASTA EL FINAL CORRESPONDE A "CUENTA"///////////////////////////////////////////////////////////
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
         recordarForm ? saveBoth() : obtainNSave(sessionStorage);

        if((passForm.length == 0) || (nombreForm.length == 0) || (apellidoForm.length == 0) || (emailForm.length == 0)){
            toastify('No ingresaste suficientes datos','red','black');
            setTimeout (() => {location.reload()}, 1500);
            
        }else if(passForm != passCheckForm){
            
            toastify('Las contraseñas deben coincidir','red','black');
            
            document.getElementById('cuentaPass').value = ''
            document.getElementById('cuentaPassCheck').value = ''
            document.getElementById('cuentaPass').focus();
            deleteOnlyOne('passForm', sessionStorage);
            deleteOnlyOne('passCheckForm', sessionStorage);
            deleteOnlyOne('passForm', localStorage);
            deleteOnlyOne('passCheckForm', localStorage);

        }else{

            sessionStorage.setItem('unlockCarrito', 'true');
            sweetAlert('#c4fa7f', 'success', 'gray','Cuenta creada');
            cuentaExiste();
            
        }
    
    }else if(e.target == ingresarCuentaBtn){
        let correoIngresar = document.getElementById('email2').value;
        let contrasenaIngresar = document.getElementById('pass2').value;
        let emailStorage = localStorage.getItem('emailForm');
        let contrasenaStorage = localStorage.getItem('passForm');
        if(correoIngresar == emailStorage && contrasenaIngresar == contrasenaStorage){
            sessionStorage.setItem('nombreForm', localStorage.getItem('nombreForm'));
            sessionStorage.setItem('unlockCarrito', 'true');
            sweetAlert('#c4fa7f', 'success', 'gray','Ingreso Exitoso!');
            cuentaExiste();
            
        }else if(correoIngresar =='ejemplo@alguien.com' && contrasenaIngresar == '1234'){
            sessionStorage.setItem('nombreForm', 'Invitado');
            sessionStorage.setItem('unlockCarrito', 'true');
            sweetAlert('#c4fa7f', 'success', 'gray','Ingresaste como invitado!');
            
            cuentaExiste();
            
        }else{

            sweetAlert('#DC3545', 'error', 'black', 'Los datos no coinciden', 'black');

            }
    } 
});

   
//----------------------------------------------MODIFICAR "CUENTA" O BLOQUEAR "CARRITO" SI ESTÁS o NO LOGUEADO-------------------------------------

function cuentaExiste (){  

    let cuentaPage = document.querySelector('#cuentaHeader');
    if(cuentaPage != null){ cuentaPage.innerHTML = `<section class="container-fluid cartelFondo2 objCentred"><div class="cartelCarro"><h2>Hola ${sessionStorage.getItem('nombreForm')}, bienvenido/a. Podés retomar o realizar compras sin problemas yendo <a href="productos.html">aqui</a>.</h2>
    <button id="btnDelete" type="button" class="btn btn-warning mb-2">CERRAR SESIÓN</button><button id="btnHardDelete" type="button" class="btn btn-danger mb-2 ms-3">ELIMINAR CUENTA</button></div></section>`;}

}

function cuentaInexistente(){

    let cuentaPage = document.querySelector('#cuentaHeader');
    if(cuentaPage != null){cuentaPage.innerHTML = `<section class="container-fluid cartelFondo2 objCentred">
    <h2 class="cartelCarro">Para comprar en la página necesitás una cuenta. Es rápido y vas a poder retomar tu
        compra cuando quieras.</h2>
    </section>`}
      
} 

const bloquearCarrito = () => {
    if(carritoItems != null ){
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
                
        carritoPage?.parentNode.appendChild(divCarrito);}
} 

unlockCarrito = (sessionStorage.getItem('unlockCarrito') == 'true');   
unlockCarrito ? cuentaExiste() : cuentaInexistente(); //modificando "cuenta"
!unlockCarrito && bloquearCarrito();//bloquear carrito

//Botones para borrar cuenta o cerrar sesión
let btnDelete = document.getElementById('btnDelete');
btnDelete?.addEventListener('click', () => {
    
    deleteAllData(sessionStorage);
    cuentaInexistente();
    
}) 

let btnHardDelete = document.getElementById('btnHardDelete');
btnHardDelete?.addEventListener('click', () => {
    
    deleteAllData(localStorage);
    deleteAllData(sessionStorage);
    cuentaInexistente();

    
}) 
