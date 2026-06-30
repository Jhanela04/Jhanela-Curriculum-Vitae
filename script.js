// TEXTO ANIMADO

const textos = [
"Estudiante de Ingeniería Industrial",
"Desarrolladora Web",
"Innovación y Transformación Digital"
];

let indiceTexto = 0;
let indiceLetra = 0;

function escribir(){

    const elemento =
    document.getElementById("texto-escribiendo");

    if(indiceLetra < textos[indiceTexto].length){

        elemento.innerHTML +=
        textos[indiceTexto].charAt(indiceLetra);

        indiceLetra++;

        setTimeout(escribir,100);

    }else{

        setTimeout(borrar,1500);

    }
}

function borrar(){

    const elemento =
    document.getElementById("texto-escribiendo");

    if(elemento.innerHTML.length>0){

        elemento.innerHTML =
        elemento.innerHTML.slice(0,-1);

        setTimeout(borrar,50);

    }else{

        indiceTexto++;

        if(indiceTexto>=textos.length){
            indiceTexto=0;
        }

        indiceLetra=0;

        escribir();
    }
}

escribir();

// MODO OSCURO

const botonModo = document.getElementById("modoOscuro");

botonModo.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    // Cambiar icono del botón

    if(document.body.classList.contains("dark")){
        botonModo.innerHTML = "☀️";
    }else{
        botonModo.innerHTML = "🌙";
    }

});

// BOTON ARRIBA

const btnArriba =
document.getElementById("btn-arriba");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){
        btnArriba.style.display="block";
    }else{
        btnArriba.style.display="none";
    }

});

btnArriba.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// CONTADORES

const contadores =
document.querySelectorAll(".contador");

contadores.forEach(contador=>{

    function actualizar(){

        const objetivo =
        +contador.dataset.target;

        const actual =
        +contador.innerText;

        const incremento = objetivo/100;

        if(actual < objetivo){

            contador.innerText =
            Math.ceil(actual+incremento);

            setTimeout(actualizar,20);

        }else{

            contador.innerText=objetivo;

        }

    }

    actualizar();

});


// BIENVENIDA

window.onload=()=>{

    setTimeout(()=>{

        alert("¡Bienvenido a mi Portafolio Profesional!");

    },1000);

};
