//seleccionar los elementos que necesito
const fondo = document.getElementById("fondo");

const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");

const separa = document.getElementById("separa");
//escuchar los eventos
separa.addEventListener("input",cambiarGradiente);

// funcion cambiar gradiente
function cambiarGradiente() {
    console.log(color1.value);
    fondo.style.background =`linear-gradient(to right, ${color1.value} ${separa.value}%,${color2.value})`;
}