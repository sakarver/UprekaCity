
document.getElementById("character-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Valores
    var name = document.getElementsByClassName("name").value;
    var age = document.getElementsByClassName("age").value;
    var birthdate = document.getElementsByClassName("birthdate").value;
    var birthplace = document.getElementsByClassName("birthplace").value;
    var profession = document.getElementsByClassName("profession").value;
    var physicalDescription = document.getElementsByClassName("physicalDescription").value;
    var personality = document.getElementsByClassName("personality").value;
    var residence = document.getElementsByClassName("residence").value;
    var strengths = document.getElementsByClassName("strengths").value;
    var weaknesses = document.getElementsByClassName("weaknesses").value;
    var history = document.getElementsByClassName("history").value;
    var funFacts = document.getElementsByClassName("funFacts").value;

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
});

function generatePDF(content);
generatePDF(pdfContent);
import { jsPDF } from "jspdf"
const doc = new jsPDF();
doc.save("a4.pdf");
