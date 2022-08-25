//--------------------------------------------EXXXXXXXXTRA: OBTENIENDO DATO DE FORMULARIO CONSULTA (INDEX)

let enviarConsulta = document.getElementById('enviarConsulta');

enviarConsulta.addEventListener('submit', enviarFormulario(event));
 function enviarFormulario(event){
    
    let emailConsulta = document.getElementById('emailConsulta').value;
    let nombreConsulta = document.getElementById('nombreConsulta').value;
    let newsletter = document.getElementById('newsletter').checked;
    let selectConsulta = document.getElementById('selectConsulta').value;
    let mensajeIndex = document.getElementById('mensajeIndex').value;
    let formulario = document.querySelector('#formulario'); 

 /*    localStorage.setItem ('emailConsulta', emailConsulta);
    localStorage.setItem ('nombreConsulta', nombreConsulta);
    localStorage.setItem ('newsletter', newsletter);
    localStorage.setItem ('selectConsulta', selectConsulta);
    localStorage.setItem ('mensajeIndex', mensajeIndex); */

    
      /*   let serviceId = 'template_001'
        let templateId = 'template_001'
        let templateParams = {

            emailConsulta: emailConsulta,
            nombreConsulta: nombreConsulta,
            newsletter: newsletter,
            selectConsulta: selectConsulta,
            mensajeIndex: mensajeIndex

        }
        let userId = 'pAzh-rv7THJ3HuKp4'
  
     emailjs.send(serviceId, templateId, formulario, userId)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
    console.log('fin del proceso') */
    
   
  /*  let templateParams = {
      user_id: 'pAzh-rv7THJ3HuKp4',
      service_id: 'service_wgzoscw',
      template_id: 'template_001',
      template_params: {

            "emailConsulta": emailConsulta,
            "nombreConsulta": nombreConsulta,
            "newsletter": newsletter,
            "selectConsulta": selectConsulta,
            "mensajeIndex": mensajeIndex
      }
  }; */
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {'content-Type': 'aplication/json'},
        body: JSON.stringify({
            user_id: 'pAzh-rv7THJ3HuKp4',
            service_id: 'service_wgzoscw',
            template_id: 'template_001',
            template_params: {
      
                  "emailConsulta": emailConsulta,
                  "nombreConsulta": nombreConsulta,
                  "newsletter": newsletter,
                  "selectConsulta": selectConsulta,
                  "mensajeIndex": mensajeIndex
            }
        })
        
        
    } )
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
   /*  .then( () => {if(Response.ok){
       Swal.fire({
            position: 'top',
            background: '#c4fa7f',
            icon: 'success',
            iconColor: 'gray',
            title: 'Consulta enviada!',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(respose.status)
          console.log(response.text)
      }else{
       Swal.fire({
            position: 'top',
            background: 'red',
            icon: 'error',
            iconColor: 'black',
            title: 'Hubo un error',
            showConfirmButton: false,
            timer: 1500
          })
          console.log('FAILED...')
      }}) */
    
}