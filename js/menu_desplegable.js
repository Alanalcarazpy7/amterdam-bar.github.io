//Animacion Menu Desplegable

// Busca .hamburger
var $hamburger = document.querySelector(".hamburger");
 // Al hacer click
$hamburger.addEventListener("click", function() {
   // Alterna la clase "is-active",si no existe lo coloca,y si ya existe lo elimina
    $hamburger.classList.toggle("is-active");

});

let secciones=document.querySelector(".secciones")
let listas=document.querySelector(".activo")
let bg=document.querySelector(".body")
let articulos=document.querySelector(".articulos")
let invisible=document.querySelector(".invisible")

$hamburger.addEventListener("click",e=>{
    
    listas.classList.toggle("active")

        //Si se desactivo el menu,desaparecera los textos
    if (listas.classList.contains("active")==false){
        invisible.style.display="none"
    }
    //Si se activo el menu,aparecera los textos
    else{
        invisible.style.display="block"

        //Cuando se ingresa al menu,al precionar alguna opcion te debe llevar a las opcion seleccionada y cerrar el menu con todos los eventos

        if (listas.classList.contains("active")==true){
            let clicklink=document.querySelector(".activo");
            clicklink.addEventListener("click",e=>{
            
            invisible.style.display="none"
            $hamburger.classList.remove("is-active");
            bg.classList.remove("is-active-bg");
            listas.classList.remove("active")
            })
        }
    }
    
})


//Como la primera vez al entrar a la web va a ser falso,entonces no se muestra el menu
if (listas.classList.contains("active")==false){
    invisible.style.display="none"
}