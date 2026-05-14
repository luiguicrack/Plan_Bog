// =========================
// TRADUCCIONES
// =========================

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
        gastroTitle: "Gastronomía",
        gastroHero: "Explora eventos, ferias y experiencias cerca de ti.",

        // PROGRÁMATE
        scheduleTitle: "PROGRÁMATE PARA TODO EL",
        scheduleScript: "Mes",

        scheduleText:
        'Bogotá sabe a <b>AJIACO</b>, se siente como un <b>TINTO</b> y se vive en cada esquina con una <b>EMPANADA</b>.',

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

        vocaBottom:
        '"¡PILAS, <span>VECI!</span> NO DÉ <span>PAPAYA</span> CON EL MENÚ. DE <span>clic aquí</span> PARA BAJAR EL GLOSARIO GASTRONÓMICO Y ARMAR EL <span>PARCHE</span> CON TODA LA DE LA LEY."',

        // FOOTER
        footerText: "© Plan BOG — Todos los derechos reservados",

        tipsTag:"BOGO TIPS",

        tipsTitle:"GASTRONOMÍA BOGOTANA",

        tipsText:"LA SERPIENTE GUÍA AL ESPECTADOR POR LOS MEJORES SPOTS DE COMIDA ECONÓMICA BOGOTANA: PLAZAS DE MERCADO, TIENDAS DE BARRIO, EMPANADAS CALLEJERAS.",

        tipsBox:"DEL MECATO A LA TUSA: BOGOTÁ SABE A TRADICIÓN."

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
        gastroTitle: "Gastronomy",
        gastroHero: "Explore events, fairs and experiences near you.",

        // PROGRÁMATE
        scheduleTitle: "PLAN YOUR",
        scheduleScript: "Month",

        scheduleText:
        'Bogotá tastes like <b>AJIACO</b>, feels like a <b>COFFEE</b> and lives in every corner with an <b>EMPANADA</b>.',

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

        vocaBottom:
        '"HEY <span>FRIEND!</span> DON’T GET CONFUSED WITH THE MENU. <span>CLICK HERE</span> TO DOWNLOAD THE GASTRONOMIC GLOSSARY AND JOIN THE <span>LOCAL VIBE</span>."',

        // FOOTER
        footerText: "© Plan BOG — All rights reserved",

        tipsTag:"BOGO TIPS",

        tipsTitle:"BOGOTÁ GASTRONOMY",

        tipsText:"THE SNAKE GUIDES VISITORS THROUGH THE BEST AFFORDABLE FOOD SPOTS IN BOGOTÁ: LOCAL MARKETS, NEIGHBORHOOD STORES AND STREET EMPANADAS.",

        tipsBox:"FROM SNACKS TO HEARTBREAK: BOGOTÁ TASTES LIKE TRADITION."

    }

};

// =========================
// EVENTOS
// =========================

const eventos = {

    0: {
        es: {
            titulo: "PARRILLA FEST",
            descripcion:
            "Parrilla Fest reúne a los mejores restaurantes especializados en carnes, hamburguesas y parrilla. Durante varios días los asistentes pueden disfrutar platos especiales, música y experiencias gastronómicas.",
            link: "https://parrillafest.com/",
            imagen: "img/evento6.png"
        },
        en: {
            titulo: "GRILL FEST",
            descripcion:
            "Parrilla Fest brings together the best restaurants specialized in grilled meat and burgers. Visitors can enjoy special dishes, music and gastronomic experiences.",
            link: "https://parrillafest.com/",
            imagen: "img/evento6.png"
        }
    },

    1: {
        es: {
            titulo: "BURGUER MASTER",
            descripcion:
            "Burger Master es uno de los eventos gastronómicos más importantes de Colombia. Restaurantes artesanales presentan hamburguesas especiales para competir por el voto del público.",
            link: "https://tuliorecomienda.com/",
            imagen: "img/evento7.png"
        },
        en: {
            titulo: "BURGER MASTER",
            descripcion:
            "Burger Master is one of the biggest gastronomic events in Colombia. Restaurants create special burgers to compete for the public vote.",
            link: "https://tuliorecomienda.com/",
            imagen: "img/evento7.png"
        }
    },

    2: {
        es: {
            titulo: "FESTIVAL DEL PAN",
            descripcion:
            "Festival dedicado a la panadería artesanal y los postres tradicionales. Incluye degustaciones, concursos y muestras gastronómicas.",
            link: "https://tuliorecomienda.com/",
            imagen: "img/evento8.png"
        },
        en: {
            titulo: "BREAD FESTIVAL",
            descripcion:
            "Festival dedicated to artisan bakery and traditional desserts with tastings, contests and food experiences.",
            link: "https://tuliorecomienda.com/",
            imagen: "img/evento8.png"
        }
    },

    3: {
        es: {
            titulo: "FESTIVAL DE LA LECHONA",
            descripcion:
            "Evento gastronómico dedicado a uno de los platos más tradicionales de Colombia. Participan restaurantes y cocineros especializados.",
            link: "https://tuliorecomienda.com/",
            imagen: "img/evento9.png"
        },
        en: {
            titulo: "LECHONA FESTIVAL",
            descripcion:
            "A gastronomic event dedicated to one of Colombia's most traditional dishes with restaurants and specialized chefs.",
            link: "https://tuliorecomienda.com/",
            imagen: "img/evento9.png"
        }
    },

    4: {
        es: {
            titulo: "FESTIVAL DEL ARROZ",
            descripcion:
            "Festival gastronómico con platos preparados a base de arroz, música en vivo y experiencias culturales para toda la familia.",
            link: "https://tuliorecomienda.com/",
            imagen: "img/evento10.png"
        },
        en: {
            titulo: "RICE FESTIVAL",
            descripcion:
            "Food festival with rice-based dishes, live music and cultural experiences for the whole family.",
            link: "https://tuliorecomienda.com/",
            imagen: "img/evento10.png"
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