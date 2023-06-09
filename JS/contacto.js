    // Configurar reglas de validación y mensajes de error usando jQuery validation para el formulario de contacto
    $('#formularioContacto').validate({
        rules: {
            nombre: 'required',
            email: {
                required: true,
                email: true
            },
            mensaje: 'required'
        },
        messages: {
            nombre: 'Por favor ingrese su nombre',
            email: {
                required: 'Por favor ingrese su dirección de correo electrónico',
                email: 'Por favor ingrese una dirección de correo electrónico válida'
            },
            mensaje: 'Por favor ingrese un mensaje'
        },
        submitHandler: function(form) {
            // Obtener los valores de los campos del formulario
            var nombre = $('#nombre').val();
            var email = $('#email').val();
            var mensaje = $('#mensaje').val();

            // Hacer la petición AJAX para enviar los datos al servidor
            $.ajax({
                url: 'https://reqres.in/api/users?page=2', // URL de regres.in para la petición de contacto
                method: 'POST', // Método HTTP POST
                data: {
                    nombre: nombre,
                    email: email,
                    mensaje: mensaje
                },
                success: function(response) {
                    // Aquí puedes manejar la respuesta del servidor si es necesario
                    console.log('Éxito:', response);
                    // Puedes mostrar un mensaje de éxito al usuario
                    alert('¡Mensaje enviado con éxito!');
                },
                error: function(xhr, status, error) {
                    // Aquí puedes manejar los errores de la petición AJAX si es necesario
                    console.error('Error:', error);
                    // Puedes mostrar un mensaje de error al usuario
                    alert('Error al enviar el mensaje. Por favor inténtelo nuevamente.');
                }
            });
        }
    });