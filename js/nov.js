
const asidee = document.getElementById("asideNovela")
let imgDelVolumenAside = document.getElementById("imagen-volumen")
const iconoXAside =  document.getElementById("icon_x")
const divVolumnes = document.querySelector(".volumenes")
let divNovelas = document.getElementById("containerNovelas")
let moldeNovelas
let novela 
let vol2 
let vol3 
let vol4 
let vol5
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

    volumenes.push(volumen1, volumen2, volumen3, volumen4, volumen5)


   
    volumenes.forEach((DetalleVolumenes) =>{
       moldeNovelas = `
       <div class="volumenes">
            <label for=${DetalleVolumenes.nombreid}>
            <img src=${DetalleVolumenes.visual} alt=${DetalleVolumenes.nombreid}>
            <p>${DetalleVolumenes.titulo}</p></label>
            <input name="novelasVol" type="radio" id=${DetalleVolumenes.nombreid}>
        </div>`

        divNovelas.innerHTML +=moldeNovelas

     novela = document.getElementById("volumen_1")
     vol2 = document.getElementById("volumen_2")
     vol3 = document.getElementById("volumen_3")
     vol4 = document.getElementById("volumen_4")
     vol5 = document.getElementById("volumen_5")
    })

    function elegirNovela(){
        asidee.style.display = "flex"
        if(novela.checked){
        imgDelVolumenAside.src = "./imagenes/DAL-V-1.jpg"
        }
        else if(vol2.checked){
            imgDelVolumenAside.src ="./imagenes/DAL-V-2.jpg"
        }
        else if(vol3.checked){
            imgDelVolumenAside.src ="./imagenes/DAL-V-3.jpg"
        }
        else if(vol4.checked){
            imgDelVolumenAside.src ="./imagenes/DAL-V-4.jpg"
        }
        else if(vol5.checked){
            imgDelVolumenAside.src ="./imagenes/DAL-V-5.jpg"
        }
    }
    
    divVolumnes.addEventListener("click", elegirNovela)
    function cerrarAside(){
        asidee.style.display = "none"
    }
    iconoXAside.addEventListener("click", cerrarAside)