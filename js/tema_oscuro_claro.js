
var boton=document.getElementById("botonTema")

function botonOscuroClaro(){

    //Cuando se le de click al boton si no tiene una clase llamada oscuro,entonces al presionar se agregara esa clase y se activara el modo oscuro,en caso contrario se activara el modo claro
    boton.addEventListener("click",e=>{
        if (boton.classList.contains("boton-oscuro")==false){
            ModoOscuro()
        }
        else{
            ModoClaro()
        }
    })
    document.addEventListener("DOMContentLoaded",e=>{
        //Si no existe ninguna variable llamada "theme" en el localStorage,entonces lo creamos con el valor de "claro"

        //localstorage=Almacena los datos de manera local,es decir que cuando la pagina se recargue o se cierre,esta va a seguir manteniendo el dato que se guardo por ultima vez
        if (localStorage.getItem("theme")===null){
            localStorage.setItem("theme","claro")
        }

        //Si existe esta variable en el localStorage,entonces lo va a ejecutar y poner el modo claro o oscuro
        if (localStorage.getItem("theme")==="claro"){
            ModoClaro()
        }
        if (localStorage.getItem("theme")==="oscuro"){
            ModoOscuro()
        }
    })
}

function ModoOscuro(){
    let menuText=document.querySelectorAll(".boton.seis")
    boton.innerHTML=`☀️`
    document.body.style.backgroundColor="black"
    boton.classList.add("boton-oscuro")
    boton.classList.remove("boton-claro")
    localStorage.setItem("theme","oscuro")
    document.body.style.color="white"
    for (i=0;i<menuText.length;i++){
        menuText[i].style.color="white"
    }
}

function ModoClaro(){
    let menuText=document.querySelectorAll(".boton.seis")
    boton.classList.remove("boton-oscuro")
    boton.classList.add("boton-claro")
    boton.innerHTML=`🌙`
    document.body.style.backgroundColor="white"
    localStorage.setItem("theme","claro")
    document.body.style.color="black"
    for (i=0;i<menuText.length;i++){
        menuText[i].style.color="black"
    }
}

botonOscuroClaro()
