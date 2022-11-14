
function mainFunction(){ 
printText();
console.log("Bienvenido a la evaluación de javascript!!!")
}
function printText(){
    inputText = document.getElementById("textoIngresado").value
    if (inputText == "") {
        inputText = "Ups! nada que mostrar!!!"
    }
    alert(inputText)

    document.getElementById("textoIngresado").value=""
}

function updateHeader(){
    document.getElementById("header3").setAttribute("class","");
    document.getElementById("header3").innerHTML="Cabecera Actualizada";
}
