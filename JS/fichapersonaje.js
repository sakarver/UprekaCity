
document.getElementById("character-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Valores
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

    // Contenido del pdf
    var pdfContent = "Nombre: " + name +
        "\nEdad: " + age +
        "\nFecha de Nacimiento: " + birthdate +
        "\nLugar de Nacimiento: " + birthplace +
        "\nProfesión: " + profession +
        "\nDescripción Física: " + physicalDescription +
        "\nPersonalidad: " + personality +
        "\nResidencia: " + residence +
        "\nFortalezas: " + strengths +
        "\nDebilidades: " + weaknesses +
        "\nHistoria: " + history +
        "\nDatos Curiosos: " + funFacts;

    // Generar

generatePDF(pdfContent);
});

function generatePDF(content) {
    // Here you would use a PDF generation library, like jsPDF or pdfmake, to generate the PDF using the provided content.
    // Unfortunately, the JavaScript environment in this demo does not support PDF generation, so you'll need to implement this part in your own development environment.
    // You can refer to the documentation of a PDF generation library for the necessary steps to generate the PDF.
    console.log(content); // Placeholder to display the generated content in the console
}