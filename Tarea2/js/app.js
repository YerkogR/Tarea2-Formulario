"use strict";
//Creacion de Variables a trabajar//
var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var correo = document.getElementById("email");
var telefono = document.getElementById("telefono");
var lenguajes = document.getElementsByName("lenguajes");
var rango = document.getElementById("rango");
var rangoMuestra = document.getElementById("outrange");
var años = document.getElementsByName("años");
var descripcion = document.getElementById("descripcion");
var limpiar = document.getElementById("limpiar");
var mensaje = document.getElementById("mensaje");
//Funcion de boton que envia la informacion y valida si los datos estan bien escritos //
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    if (/^\d{7,8}[-][0-9kK]{1}$/.test(rut.value) == false) {
        alert("RUT invalido");
        return;
    }
    if (telefono.value.length != 9) {
        alert("Telefono debe contener 9 números");
        return;
    }
    var casillas = false;
    for (var i = 0; i < lenguajes.length; i++) {
        if (lenguajes[i].checked == true) {
            casillas = true;
        }
    }
    if (casillas == false) {
        alert("Debes seleccionar al menos 1 lenguaje de programación");
        return;
    }
    formulario.style.display = "none";
    mensaje.style.display = "block";
    mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    mensaje.style.color = "#ff0000";
});
//Funcion que permite limpiar todas las casillas de el formulario //
limpiar.onclick = function (evento) {
    nombre.value = defaultStatus;
    apellidos.value = defaultStatus;
    rut.value = defaultStatus;
    correo.value = defaultStatus;
    telefono.value = defaultStatus;
    for (var i = 0; i < lenguajes.length; i++) {
        lenguajes[i].checked = defaultStatus;
    }
    rango.value = "50";
    rangoMuestra.value = "50";
    for (var i = 0; i < años.length; i++) {
        años[i].checked = defaultStatus;
    }
    descripcion.value = defaultStatus;
};
