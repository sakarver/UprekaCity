document.addEventListener('DOMContentLoaded'), function(){

    $('#formularioPj').validate({
        rules:{
            name: 'required',
            age: 'required',
            birthdate: 'required',
            birthplace: 'required',
            profession: 'required',
            physicalDescription: 'required',
            personality: 'required',
            residence: 'required',
            strengths: 'required',
            weaknesses: 'required',
            history: 'required',
            funFacts: 'required',

        },
        messages:{
            name: 'Por favor ingrese nombre o le llamaremos NN',
            age: 'Por favor ingrese edad, no le llamaremos viejx',
            birthdate:'Puede que reciba regalos este día',
            birthplace: 'Por favor ingrese lugar de nacimiento',
            profession: '¿Su personaje tiene fobia a las palas?',
            physicalDescription: 'Nos gusta imaginar pero por favor ingrese descripción física',
            personalidad: 'Una descripción corta sobre su personalidad, o las que posea',
            residence: 'Incluso si es bajo un puente o en casa de su madre, ingrese datos',
            strengths: 'Ingrese las fortalezas por favor, con consciencia',
            weaknesses: 'Obligatorio, no deseamos Saitamas o Vegetas',
            history: 'Ingrese por favor su trágico backstory',
            funFacts: 'Ingrese aquí datos sobre su personaje y a tener en cuenta',
            email: 'Ingresa tu email para que podamos contactarnos con vos',
        },

    // Valores
    submitHandler:function(form){
        var name = document.getElementsById("name").value;
        var age = document.getElementsById("age").value;
        var birthdate = document.getElementsById("birthdate").value;
        var birthplace = document.getElementsById("birthplace").value;
        var profession = document.getElementsById("profession").value;
        var physicalDescription = document.getElementsById("physicalDescription").value;
        var personality = document.getElementsById("personality").value;
        var residence = document.getElementsById("residence").value;
        var strengths = document.getElementsById("strengths").value;
        var weaknesses = document.getElementsById("weaknesses").value;
        var history = document.getElementsById("history").value;
        var funFacts = document.getElementsById("funFacts").value;
        var email = document.getElementsById("email").value;

        var pdfImpreso = 'La ficha de tu personaje ${name} fue enviada con éxito. \n Nos comunicaremos a la brevedad para informarte si has sido aceptado.'
        var pdf = new jsPDF();

        pdf.text(pdfImpreso,10,10);
        var pdfBlob = pdf.output('blob')

        var downloadLinkPdf = document.createElement('a');
        downloadLinkPdf.href = URL.createObjectURL(pdfBlob);
        downloadLinkPdf.download = 'resumen_reserva.pdf';
        downloadLinkPdf.click();


        URL.revokeObjectURL(pdfBlob)

    }
})

$('#formularioPj').validate({
    rules:{
        name: 'required',
        age: 'required',
        email: {
            required: true,
            email: true
        },
        birthdate: 'required',
        birthplace: 'required',
        physicalDescription:'required',
        profession:'required',
        personality:'required',
        weaknesses:'required',
        strengths:'required',
        history:'required',
        funFacts:'required',
        email:'required',

    },
    messages:{
        name: 'Por favor ingrese nombre o le llamaremos NN',
        age: 'Por favor ingrese edad, no le llamaremos viejx',
        birthdate:'Puede que reciba regalos este día',
        birthplace: 'Por favor ingrese lugar de nacimiento',
        profession: '¿Su personaje tiene fobia a las palas?',
        physicalDescription: 'Nos gusta imaginar pero por favor ingrese descripción física',
        personalidad: 'Una descripción corta sobre su personalidad, o las que posea',
        residence: 'Incluso si es bajo un puente o en casa de su madre, ingrese datos',
        strengths: 'Ingrese las fortalezas por favor, con consciencia',
        weaknesses: 'Obligatorio, no deseamos Saitamas o Vegetas',
        history: 'Ingrese por favor su trágico backstory',
        funFacts: 'Ingrese aquí datos sobre su personaje y a tener en cuenta',
        email:{required:'Por favor ingrese su correo electrónico',
               email:'Por favor ingrese una dirección de correo electrónico válida' 
              },

    },
    submitHandler:function(form){
        var name = document.getElementsById("name").val();
        var age = document.getElementsById("age").val();
        var birthdate = document.getElementsById("birthdate").val();
        var birthplace = document.getElementsById("birthplace").val();
        var profession = document.getElementsById("profession").val();
        var physicalDescription = document.getElementsById("physicalDescription").val();
        var personality = document.getElementsById("personality").val();
        var residence = document.getElementsById("residence").val();
        var strengths = document.getElementsById("strengths").val();
        var weaknesses = document.getElementsById("weaknesses").val();
        var history = document.getElementsById("history").val();
        var funFacts = document.getElementsById("funFacts").val();
        var email = document.getElementsById("email").val();
            
    $.ajax({
        url:'https://reqres.in/api/users?page=2',
        method: 'POST',
        data:{
            nombre: name,
            edad: age,
            fechaDeNaci: birthdate,
            lugarDeNac: birthplace,
            profesion: profession,
            descripcionFisica: physicalDescription,
            personalidad: personality,
            residencia: residence,
            fortalezas: strengths,
            debilidades: weaknesses,
            historia: history,
            otrosDatos: funFacts,
        },
        success: function(response){
            console.log('Éxito', response);
            alert('Ficha enviada con éxito')
        },
        error: function(xhr,status,error){
            console.log('Error:', error);
            alert('Error al enviar los datos. Por favor inténtelo nuevamente');
        }
    })
})

function abrirModal() {
    $('#exampleModal').modal('show');
  }

  function guardarDatos() {
    var nombre = document.getElementById("inputName").value,
    var comentario = document.getElementById("inputComment").value,
    var datos = `Bienvenido ${nombre}!! Reservá tu personaje `
    document.getElementById("datos").innerHTML = datos,
    $('#exampleModal').modal('hide'),
    }

}