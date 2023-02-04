var botonScroll=document.getElementById("scroll-top")


function scrollTopButton(){
    

    window.addEventListener("scroll",e=>{   
        //Para detectar el scroll hay 2 propiedades que son las siguientes:
        //window.pageYOffset,document.documentElement.scrollTop

        let scrollY=window.pageYOffset || document.documentElement.scrollTop //En caso de que la primera propiedad no funcione en algun navegador,entonces la otra propiedad si lo hara,ya que la otra es estandar en todos los navegadores
        if (scrollY>700){
            botonScroll.classList.remove("hidden");
        }
        else{
            botonScroll.classList.add("hidden");
        }
    })


    document.addEventListener("click",e=>{

        if (e.target.matches("#scroll-top")){

            //Cuando se presione el boron,entonces nos llevara al inicio en el top=0
            window.scrollTo({
                behavior:"smooth",
                top:0,
                //left:0
            });
        }
    })
}

scrollTopButton()