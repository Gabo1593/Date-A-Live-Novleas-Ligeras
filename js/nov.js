
const asidee = document.getElementById("asideNovela")
let imgDelVolumenAside = document.getElementById("imagen-volumen")
const iconoXAside =  document.getElementById("icon_x")
let divVolumnes = document.querySelector(".volumenes")
let divNovelas = document.getElementById("containerNovelas")
let volumenDelAside = document.getElementById("volumenDAside")
let moldeNovelas
let novela 
let vol2 
let vol3 
let vol4 
let vol5
let vol6
let vol7
let vol9
let vol16
let vol17
let volumenes = []

class DetalleVolumenes {
    constructor(visual, titulo, nombreid){
        this.visual = visual
        this.titulo = titulo
        this.nombreid = nombreid
    }
}
let volumen1 = new DetalleVolumenes("./imagenes/DAL-V-1.jpg", "Date A Live - Volumen 1", "volumen_1")
let volumen2 = new DetalleVolumenes("./imagenes/DAL-V-2.jpg", "Date A Live - Volumen 2", "volumen_2")
let volumen3 = new DetalleVolumenes("./imagenes/DAL-V-3.jpg", "Date A Live - Volumen 3", "volumen_3")
let volumen4 = new DetalleVolumenes("./imagenes/DAL-V-4.jpg", "Date A Live - Volumen 4", "volumen_4")
let volumen5 = new DetalleVolumenes("./imagenes/DAL-V-5.jpg", "Date A Live - Volumen 5", "volumen_5")
let volumen6 = new DetalleVolumenes("./imagenes/DAL-V-6.jpg", "Date A Live - Volumen 6", "volumen_6")
let volumen7 = new DetalleVolumenes("./imagenes/DAL-V-7.jpg", "Date A Live - Volumen 7", "volumen_7")
let volumen9 = new DetalleVolumenes("./imagenes/DAL-V-9.jpg", "Date A Live - Volumen 9", "volumen_9")
let volumen16 = new DetalleVolumenes("./imagenes/DAL-V-16.jpg", "Date A Live - Volumen 16", "volumen_16")
let volumen17 = new DetalleVolumenes("./imagenes/DAL-V-17.jpg", "Date A Live - Volumen 17", "volumen_17")

    volumenes.push(volumen1, volumen2, volumen3, volumen4, volumen5, volumen6, volumen7, volumen9, volumen16, volumen17)


   
    volumenes.forEach((DetalleVolumenes) =>{
       moldeNovelas = `
       <div >
            <label for=${DetalleVolumenes.nombreid}>
            <img src=${DetalleVolumenes.visual} alt=${DetalleVolumenes.nombreid}>
            <p>${DetalleVolumenes.titulo}</p>
            </label>
            <input name="novelasVol" type="radio" id=${DetalleVolumenes.nombreid}>
        </div>`
        
        divNovelas.innerHTML +=moldeNovelas
        
     novela = document.getElementById("volumen_1")
     vol2 = document.getElementById("volumen_2")
     vol3 = document.getElementById("volumen_3")
     vol4 = document.getElementById("volumen_4")
     vol5 = document.getElementById("volumen_5")
     vol6 = document.getElementById("volumen_6")
     vol7 = document.getElementById("volumen_7")
     vol9 = document.getElementById("volumen_9")
     vol16 = document.getElementById("volumen_16")
     vol17 = document.getElementById("volumen_17")
    })

    function elegirNovela(){
        asidee.style.display = "flex"
        if(novela.checked){
        imgDelVolumenAside.src = "./imagenes/DAL-V-1.jpg"
        volumenDelAside.innerHTML = "Volumen 1"
        }
        else if(vol2.checked){
            imgDelVolumenAside.src ="./imagenes/DAL-V-2.jpg"
            volumenDelAside.innerHTML = "Volumen 2"
        }
        else if(vol3.checked){
            imgDelVolumenAside.src ="./imagenes/DAL-V-3.jpg"
            volumenDelAside.innerHTML = "Volumen 3"
        }
        else if(vol4.checked){
            imgDelVolumenAside.src ="./imagenes/DAL-V-4.jpg"
            volumenDelAside.innerHTML = "Volumen 4"
        }
        else if(vol5.checked){
            imgDelVolumenAside.src ="./imagenes/DAL-V-5.jpg"
            volumenDelAside.innerHTML = "Volumen 5"
        }
        else if(vol6.checked){
            imgDelVolumenAside.src ="./imagenes/DAL-V-6.jpg"
            volumenDelAside.innerHTML = "Volumen 6"
        }
        else if(vol7.checked){
            imgDelVolumenAside.src ="./imagenes/DAL-V-7.jpg"
            volumenDelAside.innerHTML = "Volumen 7"
        }
        else if(vol9.checked){
            imgDelVolumenAside.src ="./imagenes/DAL-V-9.jpg"
            volumenDelAside.innerHTML = "Volumen 9"
        }
        else if(vol16.checked){
            imgDelVolumenAside.src ="./imagenes/DAL-V-16.jpg"
            volumenDelAside.innerHTML = "Volumen 16"
        }
        else if(vol17.checked){
            imgDelVolumenAside.src ="./imagenes/DAL-V-17.jpg"
            volumenDelAside.innerHTML = "Volumen 17"
        }
    }
    
    divVolumnes.addEventListener("click", elegirNovela)
    function cerrarAside(){
        asidee.style.display = "none"
    }
    iconoXAside.addEventListener("click", cerrarAside)