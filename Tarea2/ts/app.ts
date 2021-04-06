//Creacion de Variables a trabajar//

let formulario:any = document.getElementById("formulario");

let nombre: any = document.getElementById("nombre");
let apellidos: any = document.getElementById("apellidos");
let rut: any = document.getElementById("rut");
let correo: any = document.getElementById("email");
let telefono: any = document.getElementById("telefono");
let lenguajes: any = document.getElementsByName("lenguajes");
let rango: any = document.getElementById("rango");
let rangoMuestra: any = document.getElementById("outrange");
let años: any = document.getElementsByName("años");
let descripcion: any = document.getElementById("descripcion");

let limpiar: any = document.getElementById("limpiar");

let mensaje :any = document.getElementById("mensaje");


//Funcion de boton que envia la informacion y valida si los datos estan bien escritos //
formulario.addEventListener("submit",function(evento: any){
    evento.preventDefault();

    if(/^\d{7,8}[-][0-9kK]{1}$/.test(rut.value)==false){
        alert("RUT invalido");
        return;
    }
    
    if(telefono.value.length != 9){
         alert("Telefono debe contener 9 números");
         return;
    }

    let casillas = false;
    for(let i = 0; i < lenguajes.length; i++){
        if(lenguajes[i].checked == true ){
            casillas = true;
        }
    }
    if(casillas == false){
        alert("Debes seleccionar al menos 1 lenguaje de programación");
        return;
    }

    formulario.style.display="none";
    mensaje.style.display="block";
    mensaje.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    mensaje.style.color="#ff0000";
});

//Funcion que permite limpiar todas las casillas de el formulario //
limpiar.onclick = function(evento: any){
    nombre.value = defaultStatus;
    apellidos.value = defaultStatus;
    rut.value = defaultStatus;
    correo.value = defaultStatus;
    telefono.value = defaultStatus;

    for(let i = 0; i < lenguajes.length; i++){
        lenguajes[i].checked = defaultStatus;
    }

    rango.value = "50";
    rangoMuestra.value = "50";

    for(let i = 0; i < años.length; i++){
        años[i].checked = defaultStatus;
    }

    descripcion.value = defaultStatus;
}    