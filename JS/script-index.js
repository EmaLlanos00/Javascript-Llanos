//--------------------------------------------GUARDANDO DATOS DE FORM EN SESSIONSTORAGE, METODO POST: ENVIANDO DATOS DE FORM A GESTOR DE EMAILS

let enviarConsulta = document.getElementById('enviarConsulta');

window.addEventListener('click', function(e){
    
        if(e.target == enviarConsulta){
        e.preventDefault();
        enviarDataForm();
    }  
});
 
const enviarDataForm = () => { 

    let emailConsulta = document.getElementById('emailConsulta').value;
    let nombreConsulta = document.getElementById('nombreConsulta').value;
    let newsletter = document.getElementById('newsletter').checked;
    let selectConsulta = document.getElementById('selectConsulta').value;
    let mensajeIndex = document.getElementById('mensajeIndex').value;

    sessionStorage.setItem ('emailConsulta', emailConsulta);
    sessionStorage.setItem ('nombreConsulta', nombreConsulta);
    sessionStorage.setItem ('newsletter', newsletter);
    sessionStorage.setItem ('selectConsulta', selectConsulta);
    sessionStorage.setItem ('mensajeIndex', mensajeIndex);

    fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
        method: 'POST',
        headers: {'content-Type': 'aplication/json'},
        body: JSON.stringify({

            user_id: "pAzh-rv7THJ3HuKp4",
            service_id: "_wgzoscw",
            template_id: "template_001",
            emailConsulta : document.getElementById('emailConsulta').value,
            nombreConsulta : document.getElementById('nombreConsulta').value,
            newsletter : document.getElementById('newsletter').checked,
            selectConsulta : document.getElementById('selectConsulta').value,
            mensajeIndex : document.getElementById('mensajeIndex').value})
        
         } )
    .then((response) => {
        if(response.status < 400){
            Swal.fire({
                position: 'top',
                background: '#c4fa7f',
                icon: 'success',
                iconColor: 'gray',
                title: 'Consulta enviada!',
                showConfirmButton: false,
                timer: 1500
            })
        }else if(response.status > 399){
            Swal.fire({
                position: 'top',
                background: '#DC3545',
                icon: 'error',
                iconColor: 'black',
                title: 'Hubo un error',
                showConfirmButton: false,
                timer: 1500
            })
        }
    })}
