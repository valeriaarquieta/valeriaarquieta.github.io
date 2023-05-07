//Se definen las variables totales a utilizar en este JavaScript
let txtNombre = document.getElementById("name");
let txtEmail = document.getElementById("email");
let txtMensaje = document.getElementById("message");


//Listener acerca de los diferentes campos a rellenar en el formulario de contacto
txtNombre.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNombre.value.trim();

    txtEmail.addEventListener("blur", function (event) {
        event.preventDefault();
        txtEmail.value = txtEmail.value.trim();
    });

    txtMensaje.addEventListener("blur", function (event) {
        event.preventDefault();
        txtMensaje.value = txtMensaje.value.trim();
    });
});


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_6dgjbqr';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire('Message sent!');
    }, (err) => {
      btn.value = 'Send Email';
      Swal.fire(JSON.stringify(err));
    });
  
});