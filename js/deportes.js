// =============================================
// TRADUCCIONES
// =============================================
const translations = {
    es: {
        home: "INICIO",
        category: "CATEGORÍA",
        gastronomy: "GASTRONOMÍA",
        sports: "DEPORTES",
        music: "MÚSICA",
        fashion: "MODA",
        fairs: "FERIAS",
        entrepreneurship: "EMPRENDIMIENTO",
        contact: "CONTÁCTANOS",
        gastroTitle: "Deporte",
        gastroHero: "EXPLORA EVENTOS, FERIAS Y EXPERIENCIAS CERCA DE TI.",
        scheduleTitle: "PROGRÁMATE PARA TODO EL",
        scheduleScript: "Mes",
        scheduleText: "NO SE QUEDE COMO UNA TORTUGA, PÓNGASE PILAS CON LOS MEJORES PLANES DEPORTIVOS.",
        seeMore: "VER MÁS",
        location: "UBICACIÓN",
        infoTitle: "INFORMATE MAS",
        infoText: "NAVEGUE ENTRE FECHAS ( < > ) PARA CONSULTAR INFORMACIÓN DETALLADA DE LOS EVENTOS ANTERIORES Y PROGRAMADOS DE LA SEMANA",
        vocaTitle: "VOCABULARIO ROLO",
        vocaText: "PILAS CON ESTE GLOSARIO: ¡NO DÉ PAPAYA EN LA CAPITAL!",
        vocaBottom: `"¡PILAS, <span>VECI!</span> NO DÉ <span>PAPAYA</span> CON EL EJERCICIO. DE <a href="https://drive.google.com/file/d/1VpVLq0OthzVmmHzx0LqGwzsQSwCTNyOZ/view?usp=sharing" target="_blank">clic aquí</a> PARA BAJAR EL GLOSARIO DE DEPORTES Y ARMAR EL <span>PARCHE</span> CON TODA LA DE LA LEY."`,
        tipsTag: "BOGO TIPS",
        tipsTitle: "CULTURA BOGOTANA",
        tipsText: "LOREM IPSUM DOLOR SIT AMET. CONSECTETUR ADIPISCING ELIT. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT.",
        tipsBox: "¡DEL ESTADIO A LA CANCHA: BOGOTÁ VIVE EL DEPORTE!",
        footerText: "© Plan BOG — Todos los derechos reservados"
    },
    en: {
        home: "HOME",
        category: "CATEGORY",
        gastronomy: "GASTRONOMY",
        sports: "SPORTS",
        music: "MUSIC",
        fashion: "FASHION",
        fairs: "FAIRS",
        entrepreneurship: "ENTREPRENEURSHIP",
        contact: "CONTACT US",
        gastroTitle: "Sports",
        gastroHero: "EXPLORE EVENTS, FAIRS AND EXPERIENCES NEAR YOU.",
        scheduleTitle: "PLAN YOUR ENTIRE",
        scheduleScript: "Month",
        scheduleText: "DON'T BE LEFT BEHIND — GET READY FOR THE BEST SPORTS PLANS IN THE CITY.",
        seeMore: "SEE MORE",
        location: "LOCATION",
        infoTitle: "FIND OUT MORE",
        infoText: "BROWSE BETWEEN DATES ( < > ) TO CHECK DETAILED INFORMATION ABOUT PAST AND UPCOMING EVENTS OF THE WEEK",
        vocaTitle: "BOGOTÁ SLANG",
        vocaText: "WATCH OUT FOR THIS GLOSSARY: DON'T GET CAUGHT OFF GUARD IN THE CAPITAL!",
        vocaBottom: `"HEADS UP, <span>NEIGHBOR!</span> DON'T SLIP UP WITH YOUR EXERCISE. <a href="https://drive.google.com/file/d/1VpVLq0OthzVmmHzx0LqGwzsQSwCTNyOZ/view?usp=sharing" target="_blank">CLICK HERE</a> TO DOWNLOAD THE SPORTS GLOSSARY AND MAKE THE MOST OF IT WITH <span>THE CREW.</span>"`,
        tipsTag: "BOGO TIPS",
        tipsTitle: "BOGOTÁ CULTURE",
        tipsText: "LOREM IPSUM DOLOR SIT AMET. CONSECTETUR ADIPISCING ELIT. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT.",
        tipsBox: "FROM THE STADIUM TO THE FIELD: BOGOTÁ LIVES SPORTS!",
        footerText: "© Plan BOG — All rights reserved"
    }
};

const eventos = {
    0: {
        es: {
            titulo: "LA SELECCIÓN SE DESPIDE",
            descripcion: "LA SELECCIÓN COLOMBIA TENDRÁ UN PARTIDO ESPECIAL DE DESPEDIDA ANTES DEL INICIO DE LA COPA MUNDIAL FIFA 2026™. LOS AFICIONADOS PODRÁN DISFRUTAR DE UN EVENTO LLENO DE FÚTBOL, SHOWS Y ACTIVIDADES PARA TODA LA FAMILIA EN BOGOTÁ.",
            link: "https://bogota.gov.co/mi-ciudad/cultura-recreacion-y-deporte/despedida-seleccion-colombia-de-futbol-en-bogota-29-de-mayo-de-2026",
            imagen: "img/evento12.png"
        },
        en: {
            titulo: "THE TEAM SAYS GOODBYE",
            descripcion: "THE COLOMBIAN NATIONAL TEAM WILL PLAY A SPECIAL FAREWELL MATCH BEFORE THE FIFA WORLD CUP 2026™ BEGINS. FANS WILL ENJOY FOOTBALL, LIVE SHOWS AND FAMILY ACTIVITIES IN BOGOTÁ.",
            link: "https://bogota.gov.co/mi-ciudad/cultura-recreacion-y-deporte/despedida-seleccion-colombia-de-futbol-en-bogota-29-de-mayo-de-2026",
            imagen: "img/evento12.png"
        }
    },

    1: {
        es: {
            titulo: "PARTIDO DE DESPEDIDA COPA MUNDIAL FIFA 2026",
            descripcion: "DE ACUERDO CON LA FIFA 2026™ HOY FALTAN EXACTAMENTE 100 DÍAS PARA QUE EMPIECE LA COPA MUNDIAL QUE SE JUGARÁ EN CANADÁ, MÉXICO Y ESTADOS UNIDOS. EN EL TORNEO SE DISPUTARÁN 104 PARTIDOS Y COMENZARÁ EL 11 DE JUNIO EN EL ESTADIO CIUDAD DE MÉXICO Y CONCLUIRÁ EL 19 DE JULIO EN EL ESTADIO NUEVA YORK NUEVA JERSEY.",
            link: "https://bogota.gov.co/mi-ciudad/cultura-recreacion-y-deporte/despedida-seleccion-colombia-de-futbol-en-bogota-29-de-mayo-de-2026",
            imagen: "img/evento13.png"
        },
        en: {
            titulo: "FIFA 2026 WORLD CUP FAREWELL MATCH",
            descripcion: "ACCORDING TO FIFA 2026™ THERE ARE EXACTLY 100 DAYS LEFT UNTIL THE WORLD CUP BEGINS, TO BE HELD IN CANADA, MEXICO AND THE UNITED STATES. THE TOURNAMENT WILL FEATURE 104 MATCHES AND WILL KICK OFF ON JUNE 11 AT THE ESTADIO CIUDAD DE MÉXICO AND CONCLUDE ON JULY 19 AT THE NEW YORK NEW JERSEY STADIUM.",
            link: "https://bogota.gov.co/mi-ciudad/cultura-recreacion-y-deporte/despedida-seleccion-colombia-de-futbol-en-bogota-29-de-mayo-de-2026",
            imagen: "img/evento13.png"
        }
    },

    2: {
        es: {
            titulo: "SANTA FE VS AMÉRICA",
            descripcion: "INDEPENDIENTE SANTA FE Y AMÉRICA DE CALI SE ENFRENTAN EN UNO DE LOS PARTIDOS MÁS ESPERADOS DE LA LIGA COLOMBIANA. EL ESTADIO VIBRARÁ CON LA PASIÓN DE DOS GRANDES HINCHADAS DEL FÚTBOL NACIONAL.",
            link: "https://tuboleta.com/es/eventos/santa-fe-vs-america",
            imagen: "img/evento14.png"
        },
        en: {
            titulo: "SANTA FE VS AMÉRICA",
            descripcion: "INDEPENDIENTE SANTA FE AND AMÉRICA DE CALI FACE EACH OTHER IN ONE OF THE MOST ANTICIPATED MATCHES OF THE COLOMBIAN LEAGUE.",
            link: "https://tuboleta.com/es/eventos/santa-fe-vs-america",
            imagen: "img/evento14.png"
        }
    },

    3: {
        es: {
            titulo: "RONALDINHO GAÚCHO — LATAM VS EUROPA",
            descripcion: "RONALDINHO GAÚCHO REGRESA A SUDAMÉRICA EN UN PARTIDO DE EXHIBICIÓN ENTRE ESTRELLAS DE LATINOAMÉRICA Y EUROPA. EL EVENTO REUNIRÁ FIGURAS HISTÓRICAS DEL FÚTBOL MUNDIAL.",
            link: "https://www.tuboleta.com/",
            imagen: "img/evento15.png"
        },
        en: {
            titulo: "RONALDINHO GAÚCHO — LATAM VS EUROPE",
            descripcion: "RONALDINHO GAÚCHO RETURNS TO SOUTH AMERICA FOR AN EXHIBITION MATCH BETWEEN LATIN AMERICAN AND EUROPEAN FOOTBALL LEGENDS.",
            link: "https://www.tuboleta.com/",
            imagen: "img/evento15.png"
        }
    },

    4: {
        es: {
            titulo: "WWE SOUTH AMERICA LIVE TOUR 2026",
            descripcion: "LA WWE LLEGA A SUDAMÉRICA CON SU GIRA 2026 PRESENTANDO COMBATES EN VIVO, SUPERSTRELLAS INTERNACIONALES Y TODA LA EMOCIÓN DE LA LUCHA LIBRE EN BOGOTÁ.",
            link: "https://www.wwe.com/events",
            imagen: "img/evento16.png"
        },
        en: {
            titulo: "WWE SOUTH AMERICA LIVE TOUR 2026",
            descripcion: "WWE ARRIVES IN SOUTH AMERICA WITH ITS 2026 LIVE TOUR FEATURING INTERNATIONAL SUPERSTARS AND EXCITING WRESTLING MATCHES IN BOGOTÁ.",
            link: "https://www.wwe.com/events",
            imagen: "img/evento16.png"
        }
    },

    5: {
        es: {
            titulo: "COLOMBIA VS COSTA RICA — BOLETERÍA",
            descripcion: "YA ESTÁ DISPONIBLE LA BOLETERÍA PARA EL PARTIDO ENTRE COLOMBIA Y COSTA RICA. LOS HINCHAS PODRÁN VIVIR UNA NUEVA FIESTA DEL FÚTBOL INTERNACIONAL EN EL ESTADIO.",
            link: "https://www.tuboleta.com/",
            imagen: "img/evento17.png"
        },
        en: {
            titulo: "COLOMBIA VS COSTA RICA — TICKETS",
            descripcion: "TICKETS ARE NOW AVAILABLE FOR THE MATCH BETWEEN COLOMBIA AND COSTA RICA. FANS WILL EXPERIENCE AN EXCITING INTERNATIONAL FOOTBALL EVENT.",
            link: "https://www.tuboleta.com/",
            imagen: "img/evento17.png"
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