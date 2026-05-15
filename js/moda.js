const translations = {

    es: {

        // NAVBAR
        home: "INICIO",
        category: "CATEGORÍA",
        contact: "CONTÁCTANOS",
        gastronomy: "GASTRONOMÍA",
        sports: "DEPORTES",
        music: "MÚSICA",
        fashion: "MODA",
        fairs: "FERIAS",
        entrepreneurship: "EMPRENDIMIENTO",

        // HERO
        gastroTitle: "Moda",
        gastroHero: "EXPLORA EVENTOS, FERIAS Y EXPERIENCIAS CERCA DE TI.",

        // PROGRÁMATE
        scheduleTitle: "PROGRÁMATE PARA TODO EL",
        scheduleScript: "Mes",

        scheduleText:
        'SEA LA <b>LLAVE</b> DEL ESTILO: APOYE EL TALENTO BERRACO DE NUESTROS DISEÑADORES BOGOTANOS Y RENUEVE SU ARMARIO',

        // BOTONES
        seeMore: "VER MÁS",
        location: "UBICACIÓN",

        // INFORMATE
        infoTitle: "INFORMATE MAS",

        infoText:
        "NAVEGUE ENTRE FECHAS ( < > ) PARA CONSULTAR INFORMACIÓN DETALLADA DE LOS EVENTOS ANTERIORES Y PROGRAMADOS DE LA SEMANA",

        // VOCABULARIO
        vocaTitle: "VOCABULARIO ROLO",

        vocaText:
        '<span>PILAS</span> CON ESTE GLOSARIO: ¡NO DÉ <span>PAPAYA</span> EN LA CAPITAL!',

        vocaBottom: `"¡PILAS, <span>VECI!</span> NO DÉ <span>PAPAYA</span> CON EL ESTILO. DE <a href="https://drive.google.com/file/d/1_ghikhutrCNF1FPAvcr-DaJiuXbprnUM/view?usp=sharing" target="_blank">clic aquí</a> PARA BAJAR EL GLOSARIO DE MODA Y ARMAR EL <span>PARCHE</span> CON TODA LA DE LA LEY."`,

        // FOOTER
        footerText: "© Plan BOG — Todos los derechos reservados",

        // BOGO TIPS
        tipsTag:"BOGO TIPS",

        tipsTitle:"TRANSPORTE EN BOGOTÁ",

        tipsText:
        "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT.",

        tipsBox: "DE LAS PASARELAS AL PARCHE: BOGOTÁ VISTE CON ESTILO."

    },

    en: {

        // NAVBAR
        home: "HOME",
        category: "CATEGORY",
        contact: "CONTACT",
        gastronomy: "GASTRONOMY",
        sports: "SPORTS",
        music: "MUSIC",
        fashion: "FASHION",
        fairs: "FAIRS",
        entrepreneurship: "ENTREPRENEURSHIP",

        // HERO
        gastroTitle: "Fashion",
        gastroHero: "EXPLORE EVENTS, FAIRS AND EXPERIENCES NEAR YOU.",

        // PROGRÁMATE
        scheduleTitle: "PLAN YOUR",
        scheduleScript: "Month",

        scheduleText:
        'BE THE <b>KEY</b> TO STYLE: SUPPORT THE AMAZING TALENT OF BOGOTÁ DESIGNERS AND RENEW YOUR WARDROBE',

        // BOTONES
        seeMore: "SEE MORE",
        location: "LOCATION",

        // INFORMATE
        infoTitle: "LEARN MORE",

        infoText:
        "BROWSE BETWEEN DATES ( < > ) TO VIEW DETAILED INFORMATION ABOUT PREVIOUS AND UPCOMING EVENTS OF THE WEEK",

        // VOCABULARIO
        vocaTitle: "BOGOTÁ SLANG",

        vocaText:
        'CHECK THIS GLOSSARY: DON’T LOOK LIKE A <span>TOURIST</span> IN THE CAPITAL!',

        vocaBottom: `"HEY <span>FRIEND!</span> DON'T GET CONFUSED WITH THE STYLE. <a href="https://drive.google.com/file/d/1_ghikhutrCNF1FPAvcr-DaJiuXbprnUM/view?usp=sharing" target="_blank">CLICK HERE</a> TO DOWNLOAD THE FASHION GLOSSARY AND JOIN THE <span>LOCAL VIBE.</span>"`,

        // FOOTER
        footerText: "© Plan BOG — All rights reserved",

        // BOGO TIPS
        tipsTag:"BOGO TIPS",

        tipsTitle:"TRANSPORT IN BOGOTÁ",

        tipsText:
        "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT.",

        tipsBox: "FROM THE RUNWAY TO THE STREET CREW: BOGOTÁ DRESSES WITH STYLE."

    }

};
// =========================
// EVENTOS
// =========================

const eventos = {
    0: {
        es: {
            titulo: "BOGOTÁ FASHION WEEK",
            descripcion:
            "El Bogotá Fashion Week (BFW) es la principal plataforma comercial y de promoción de la moda en Colombia, liderada por la Cámara de Comercio de Bogotá (CCB). Su objetivo es posicionar a la capital colombiana como un epicentro de negocios de moda, conectando a diseñadores locales con compradores nacionales e internacionales.",
            link: "https://www.bogotafashionweek.com.co/",
            imagen: "img/fashionweek.png"
        },
        en: {
            titulo: "BOGOTÁ FASHION WEEK",
            descripcion:
            "Bogotá Fashion Week (BFW) is the main commercial and fashion promotion platform in Colombia, led by the Bogotá Chamber of Commerce (CCB). Its goal is to position the Colombian capital as a fashion business hub, connecting local designers with national and international buyers.",
            link: "https://www.bogotafashionweek.com.co/",
            imagen: "img/fashionweek.png"
        }
    },
    1: {
        es: {
            titulo: "FERIA EVA",
            descripcion:
            "La feria tiene tres ediciones al año (Edición Primavera en mayo, Love Edition en septiembre y Christmas Edition en diciembre). EVA será la oportunidad para descubrir miles de talentos y productos en las categorías: moda, joyería, hogar, bienestar y cuidado personal, niños, mascotas, gastronomía. Es un espacio para apoyar el emprendimiento local, en un ambiente festivo inspirado en la primavera y el florecer de las ciudades en esta época.",
            link: "https://mapaferiaeva.com/bogota/",
            imagen: "img/eva.png"
        },
        en: {
            titulo: "EVA FAIR",
            descripcion:
            "The fair has three editions per year (Spring Edition in May, Love Edition in September and Christmas Edition in December). EVA is the opportunity to discover thousands of talents and products in categories: fashion, jewelry, home, wellness and personal care, children, pets, gastronomy. It is a space to support local entrepreneurship, in a festive atmosphere inspired by spring and the blooming of cities at this time of year.",
            link: "https://mapaferiaeva.com/bogota/",
            imagen: "img/eva.png"
        }
    },
    2: {
        es: {
            titulo: "ANTIFERIA",
            descripcion:
            "La Antiferia ya hace parte de la agenda cultura de Bogotá. Esta feria de ropa de segunda mano llega a Medellín este fin de semana del 21 al 23 de abril. El evento se celebrará simultáneamente en Bogotá y la capital antioqueña. El objetivo de esta feria no feria es promover la moda circular, la sostenibilidad y los emprendimientos locales. Ambas ferias abrirán puertas a las 10:00 a.m. hasta las 8:00 p.m.",
            link: "https://bacanika.com/articulo/antiferia-2023",
            imagen: "img/antiferia.png"
        },
        en: {
            titulo: "ANTIFAIR",
            descripcion:
            "Antiferia is already part of Bogotá's cultural agenda. This second-hand clothing fair comes to Medellín this weekend from April 21 to 23. The event will be held simultaneously in Bogotá and the Antioquian capital. The objective of this fair is to promote circular fashion, sustainability and local entrepreneurship. Both fairs will open their doors from 10:00 a.m. to 8:00 p.m.",
            link: "https://bacanika.com/articulo/antiferia-2023",
            imagen: "img/antiferia.png"
        }
    },
    3: {
        es: {
            titulo: "ARTBO",
            descripcion:
            "En su décima edición, Fin de semana ARTBO se expande y contará con un día más de programación, los espacios abrirán al público desde el jueves 16 hasta el domingo 19 de abril de 2026. Durante 4 días, los visitantes podrán visitar, en horario extendido, diversos espacios expositivos —galerías, espacios autogestionados, instituciones, museos, espacios de diseño y librerías— organizados en ocho circuitos de la ciudad: Kennedy, Centro Histórico, Macarena, Teusaquillo, Chapinero, San Felipe, Nogal y Chicó.",
            link: "https://www.artbo.co/findesemana2026",
            imagen: "img/artbo.png"
        },
        en: {
            titulo: "ARTBO",
            descripcion:
            "In its tenth edition, ARTBO Weekend expands and will feature one more day of programming, with spaces open to the public from Thursday April 16 to Sunday April 19, 2026. Over 4 days, visitors can explore, in extended hours, various exhibition spaces — galleries, self-managed spaces, institutions, museums, design spaces and bookstores — organized in eight city circuits: Kennedy, Centro Histórico, Macarena, Teusaquillo, Chapinero, San Felipe, Nogal and Chicó.",
            link: "https://www.artbo.co/findesemana2026",
            imagen: "img/artbo.png"
        }
    },
    4: {
        es: {
            titulo: "CREATEX",
            descripcion:
            "Createx 2026 es la principal feria de la industria textil y de la confección en Colombia, que se celebrará del 12 al 14 de mayo de 2026 en Corferias, Bogotá. Actúa como una plataforma de negocios, insumos, maquinaria y tecnología que conecta a proveedores con confeccionistas, enfocándose en la cadena productiva.",
            link: "https://www.saloncreatex.com/es/",
            imagen: "img/createx.png"
        },
        en: {
            titulo: "CREATEX",
            descripcion:
            "Createx 2026 is Colombia's leading textile and garment industry fair, to be held from May 12 to 14, 2026 at Corferias, Bogotá. It serves as a business platform for supplies, machinery and technology, connecting suppliers with manufacturers and focusing on the productive chain.",
            link: "https://www.saloncreatex.com/es/",
            imagen: "img/createx.png"
        }
    }
};

// =========================
// CAMBIO DE IDIOMA
// =========================

let currentLang = "es";

const toggleBtn =
document.getElementById("language-toggle");

toggleBtn.addEventListener("click", () => {

    currentLang =
    currentLang === "es"
    ? "en"
    : "es";

    toggleBtn.textContent =
    currentLang === "es"
    ? "ESP"
    : "ENG";

    // TRADUCIR TODO
    document.querySelectorAll("[data-key]")
    .forEach(el => {

        const key =
        el.getAttribute("data-key");

        if(translations[currentLang][key]){

            // IMPORTANTE:
            // innerHTML mantiene <b> y <span>
            el.innerHTML =
            translations[currentLang][key];

        }

    });

    actualizarEvento(eventoActivo);

});

// =========================
// CARRUSEL EVENTOS
// =========================

const track =
document.getElementById("gastroTrack");

const btnNext =
document.querySelector(".btn-next");

const btnPrev =
document.querySelector(".btn-prev");

btnNext.addEventListener("click", () => {

    track.scrollLeft += 332;

});

btnPrev.addEventListener("click", () => {

    track.scrollLeft -= 332;

});

// =========================
// INFO EVENTO
// =========================

let eventoActivo = 1;

const botonesVerMas =
document.querySelectorAll(".ver-mas");

const infoTitulo =
document.getElementById("infoTitulo");

const infoDescripcion =
document.getElementById("infoDescripcion");

const infoImagen =
document.getElementById("infoImagen");

const infoLink =
document.getElementById("infoLink");

function actualizarEvento(index){

    eventoActivo = index;

    const data =
    eventos[index][currentLang];

    infoTitulo.textContent =
    data.titulo;

    infoDescripcion.textContent =
    data.descripcion;

    infoImagen.src =
    data.imagen;

    infoLink.href =
    data.link;

    infoLink.textContent =
    data.link;

    document.getElementById("infoEvento")
    .scrollIntoView({
        behavior:"smooth"
    });

}

botonesVerMas.forEach((btn,index)=>{

    btn.addEventListener("click",(e)=>{

        e.preventDefault();

        actualizarEvento(index);

    });

});

// =========================
// VOCABULARIO ROLO
// =========================

const vocaTrack = document.getElementById("vocaTrack");

const vocaNext = document.querySelector(".next-voca");
const vocaPrev = document.querySelector(".prev-voca");

const imagenes = document.querySelectorAll(".voca-track img");

let indexActual = 0;

// FUNCION MOVER
function moverCarrusel() {

    const ancho = vocaTrack.clientWidth;

    vocaTrack.scrollTo({
        left: ancho * indexActual,
        behavior: "smooth"
    });

}

// BOTON DERECHA
vocaNext.addEventListener("click", () => {

    indexActual++;

    // SI LLEGA AL FINAL VUELVE AL INICIO
    if(indexActual >= imagenes.length){
        indexActual = 0;
    }

    moverCarrusel();

});

// BOTON IZQUIERDA
vocaPrev.addEventListener("click", () => {

    indexActual--;

    // SI ESTA EN LA PRIMERA VA A LA ULTIMA
    if(indexActual < 0){
        indexActual = imagenes.length - 1;
    }

    moverCarrusel();

});