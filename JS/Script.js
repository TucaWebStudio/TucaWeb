const tabs = document.querySelectorAll(".tab-btn");
const texto = document.getElementById("texto");
const imagen = document.getElementById("imagen");

const contenido = {

    quienes:{
        texto:"Somos una empresa enfocada en desarrollo web y diseño digital.",
        imagen:"Imagen Quienes Somos"
    },

    proyectos:{
        texto:"Hemos trabajado con múltiples clientes creando soluciones modernas.",
        imagen:"Imagen Proyectos"
    },

    paquetes:{
        texto:"Contamos con paquetes accesibles adaptados a tu negocio.",
        imagen:"Imagen Paquetes"
    }

};

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("activo"));
        tab.classList.add("activo");

        const seleccion = tab.dataset.tab;

        texto.textContent = contenido[seleccion].texto;
        imagen.textContent = contenido[seleccion].imagen;

    });

});
