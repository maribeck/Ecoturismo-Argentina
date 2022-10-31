function validarEnviar() {
    //valido el nombre
    if (document.fvalida.nombre.value.length < 3) {
        alert("Tiene que escribir su nombre y apellido")
        document.fvalida.nombre.focus()
        return 0; //evito mandar form
    }

    //valido la cantidad de viajeros. tiene que ser entero mayor que 0
    viajeros = document.fvalida.viajeros.value
    viajeros = validarEntero(viajeros)
    document.fvalida.viajeros.value = viajeros
    if (viajeros == 0) {
        alert("Tiene que introducir un número de viajeros.")
        document.fvalida.viajeros.focus()
        return 0;
    } else {
        if (viajeros< 0) {
            alert("El número de viajeros debe ser mayor que cero.")
            document.fvalida.viajeros.focus()
            return 0;
        }
    }

    //valido nacionalidad
        if (document.fvalida.nacionalidad.value == 0) {
            alert("Debe seleccionar su nacionalidad.")
            document.fvalida.nacionalidad.focus()
            return 0;
        }
    
    var desde = parseInt(document.fvalida.fecha1.value)
    var hasta = parseInt(document.fvalida.fecha2.value)
    if (isNaN(desde)){
    alert("Debe ingresar una fecha de entrada")
    document.fvalida.fecha.focus()
    return 0;
    }
    if (isNaN(hasta)){
        alert("Debe ingresar una fecha de salida")
        document.fvalida.fecha.focus()
        return 0;
        }

    //valido email
    if (document.fvalida.email.value == 0) {
        alert("Debe ingresar un correo electrónico")
        document.fvalida.email.focus()
        return 0;
    }
    var arroba = new Array
    arroba = document.fvalida.email.value
    if (arroba.indexOf("@") == -1){
        alert("Debe ingresar un correo electrónico válido")
        document.fvalida.email.focus()
        return 0;
    }

      
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}

function validarEntero(valor) {
    //intento convertir a entero.
    //si era un entero no le afecta, si no lo era lo intenta convertir
    valor = parseInt(valor)

    //Compruebo si es un valor numérico
    if (isNaN(valor)) {
        //entonces (no es numero) devuelvo el valor cadena vacia
        return ""
    } else {
        //En caso contrario (Si era un número) devuelvo el valor
        return valor
    }
}

function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}


const { createApp } = Vue
createApp({
 data() {
 return {
 mensaje: 'Mapa:',
 }
 }
}).mount('#app')

