function slider(){
    const nextBtn=document.querySelector(".next"),
    prevBtn=document.querySelector(".prev"),
    slides=document.querySelectorAll(".slider-slide");

    let contador=0;
    
    document.addEventListener("click",e=>{
        if (e.target===prevBtn){
            e.preventDefault();
            //Se elimina la clase active al slider para que se oculte cuando pase al siguiente
            slides[contador].classList.remove("slider-active")
            contador--;
            
            //Si el contador llega a cero significa que es el ultimo slide en el que nos encontramos,y queremos que del ultimo vuelva al primer slider
            if (contador<0){
                contador=slides.length-1
            }
            //Se añade la clase active al slider
            slides[contador].classList.add("slider-active")
        }


        if (e.target===nextBtn){
            e.preventDefault();
            //Se elimina la clase active al slider para que se oculte cuando pase al siguiente
            slides[contador].classList.remove("slider-active")
            contador++;
            
            //Si el contador llega a cero significa que es el ultimo slide en el que nos encontramos,y queremos que del ultimo vuelva al primer slider
            if (contador>=slides.length){
                contador=0
            }
            //Se añade la clase active al slider
            slides[contador].classList.add("slider-active")
        }
    })
}

slider()