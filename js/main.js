var inputs=document.getElementsByTagName("input");
var nombre=document.getElementById("mostrarNombre");
var email=document.getElementById("mostrarMail");
var expresion =  /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
var correoExpresion=/\w+@\w+\.+[com]/ ;
function myFunction(){
nombre.innerHTML=" <strong> Nombres            : </strong>"+inputs[0].value;
email.innerHTML= " <strong> Correo Electronico </strong> : "+inputs[1].value;
}

function limpiarInput(){
inputs[0].value="";
inputs[1].value="";
}

function validaCampos(){
  if(!expresion.test(inputs[0].value)){
    alert(" INGRESE UN NOMBRE VALIDO");
  }
  else if (!correoExpresion.test(inputs[1].value)){
    alert("INGRESE UN CORREO VALIDO");
  }
 else {
    myFunction();
    alert("GRACIAS : SUS DATOS FUERON REGISTRADOS EXITOSAMENTE");
    limpiarInput();
  }
}
