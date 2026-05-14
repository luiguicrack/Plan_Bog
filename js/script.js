// BOTÓN

const languageToggle =
document.getElementById("language-toggle");

// IDIOMA ACTUAL

let currentLanguage = "es";

// TRADUCCIONES

const translations = {

    es: {

        home: "INICIO",

        category: "CATEGORÍA",

        contact: "CONTÁCTANOS",

        hero: "Tus planes, tu ciudad, tu momento",

        gastronomy: "GASTRONOMÍA",

        sports: "DEPORTES",

        music: "MÚSICA",

        fashion: "MODA",

        fairs: "FERIAS",

        entrepreneurship: "EMPRENDIMIENTO",

        plans: "PLANES",

        cool: "chimbas",

        city: "PARA UNA CIUDAD QUE",

        neverStops: "NO SE DETIENE",

        aboutText: "¡QUIUBO PARCE! Somos Plan BOG tu llave para vivir la capital sin dar papaya. Armamos el mejor parche de música, gastronomía, moda y deporte para que nunca digas '¡Qué mamera!'. Olvida el guayabo, encuentra camello con nosotros y apoya al emprendedor que es una abeja berraca para el negocio. ¡Este plan está una chimba!.",

        aboutButton: "SOBRE NOSOTROS",

        news: "ACTUALIDAD EN",

        cardsText: "MANTÉNGASE PILAS CON LAS VUELTAS DE BOGOTÁ PARA NO ANDAR DESPARCHADO.",

        news2: "CATEGORÍAS",

        cardsText2: "¡QUIUBO! PÉGUESE AL PARCHE Y EXPLORE LO MÁS BACANO  DE LA CAPITAL EN UN SOLO CLIC.",

        comingSoon: "Próximamente",

        comingText: "Muy pronto descubrirás los mejores eventos y destacados de Bogotá.",

        plansTitle: "PLANES",

        coolPlans: "bacanos",

        inBogota: "EN BOGOTÁ",

        plansText: "¡ARME EL PARCHE Y SALGA DE LA MAMERA! ENCUENTRE PLANES UNA CHIMBA PARA QUE NO SE QUEDE COMO UNA TORTUGA.",
    

        tipsTitle: "TIPS",

        tipsText: "HABLAR COMO ROLO ES UNA CHIMBA: UNA GUÍA PARA QUE NO LE ECHEN CUENTOS",

        newsletterTitle: "¡PÓNGASE",

        newsletterScript: "abeja",

        newsletterTitle2: ", VECI!",

        newsletterText: "SI TIENE UN CAMELLO PROPIO, NO SEA MULA Y MUÉSTRELO AQUÍ.",

        newsletterPlaceholder: "INGRESA TU CORREO ELECTRONICO",

        newsletterButton: "SUSCRIBIRME",

        footerText: "© Plan BOG — Todos los derechos reservados",

        downloadText: "¡PILAS, MI LLAVE! NO DÉ PAPAYA EN BOGOTÁ SIN SABER ESTAS PALABRAS. DÉ CLIC AQUÍ PARA OBTENER TODOS LOS LEPORELOS. DONDE ENCONTRARÁ LA INFORMACIÓN MÁS BACANA SOBRE LA CAPITAL.",

        downloadButton: "DESCARGAR"

    },

    en: {

        home: "HOME",

        category: "CATEGORY",

        contact: "CONTACT US",

        hero: "Your plans, your city, your moment",
       
        gastronomy: "GASTRONOMY",

        sports: "SPORTS",

        music: "MUSIC",

        fashion: "FASHION",

        fairs: "FAIRS",

        entrepreneurship: "ENTREPRENEURSHIP",

        plans: "AWESOME",

        cool: "plans",

        city: "FOR A CITY THAT",

        neverStops: "NEVER STOPS",

        aboutText: "Hey buddy! We are Plan BOG, your key to living the capital city without missing out. We create the best music, gastronomy, fashion and sports experiences so you never say 'How boring!'. Forget the hangover, find opportunities with us and support hardworking entrepreneurs. This plan is amazing!",

        aboutButton: "ABOUT US",

        news: "CURRENT NEWS IN",

        cardsText: "STAY ON TOP OF YOUR TASKS IN BOGOTA SO YOU DON'T GET LEFT STRANDED.",

        news2: "CATEGORIES",

        cardsText2: "HEY THERE! STICK TO THE PATCH AND EXPLORE THE COOLEST SPOTS IN THE CAPITAL IN JUST ONE CLICK.",

        comingSoon: "Coming Soon",

        comingText: "Soon you will discover the best events and highlights in Bogotá.",

        plansTitle: "AWESOME",

        coolPlans: "plans",

        inBogota: "IN BOGOTÁ",

        plansText: "MAKE PLANS AND STOP BEING BORED! FIND AMAZING EVENTS SO YOU DON'T STAY HOME LIKE A TURTLE.",

        tipsTitle: "TIPS",

        tipsText: "SPEAKING LIKE A LOCAL IS AWESOME: A GUIDE SO NOBODY FOOLS YOU",

        newsletterTitle: "GET",

        newsletterScript: "smart",

        newsletterTitle2: ", FRIEND!",

        newsletterText: "IF YOU HAVE YOUR OWN BUSINESS, DON'T HIDE IT — SHOW IT HERE.",

        newsletterPlaceholder: "ENTER YOUR EMAIL",

        newsletterButton: "SUBSCRIBE",

        footerText: "© Plan BOG — All rights reserved",

        downloadText: "HEY, MY FRIEND! DON'T GET LOST IN BOGOTÁ WITHOUT KNOWING THESE WORDS. CLICK HERE TO GET ALL THE BOOKLETS WHERE YOU'LL FIND THE COOLEST INFORMATION ABOUT THE CITY.",

        downloadButton: "DOWNLOAD"
    }

};

// EVENTO BOTÓN

languageToggle.addEventListener("click", () => {

    // CAMBIAR IDIOMA

    currentLanguage =
    currentLanguage === "es" ? "en" : "es";

    // TRADUCIR TODO

    document.querySelectorAll("[data-key]").forEach(element => {

        const key =
        element.getAttribute("data-key");

        element.textContent =
        translations[currentLanguage][key];

    });

    // CAMBIAR TEXTO BOTÓN

    languageToggle.textContent =
    currentLanguage === "es"
    ? "ESP"
    : "ENG";

});

// SLIDER

const cardsContainer =
document.querySelector(".cards-container");

const nextBtn =
document.querySelector(".next-btn");

const prevBtn =
document.querySelector(".prev-btn");

// SIGUIENTE

nextBtn.addEventListener("click", () => {

    cardsContainer.scrollLeft += 340;

});

// ANTERIOR

prevBtn.addEventListener("click", () => {

    cardsContainer.scrollLeft -= 340;

});

const track = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const nextCarousel = document.querySelector(".carousel-next");
const prevCarousel = document.querySelector(".carousel-prev");

let current = 2;

function updateCarousel() {
    items.forEach((item, i) => {
        // Limpiar clases
        item.classList.remove("active", "side-left", "side-right", "far");

        const diff = i - current;

        if (diff === 0) {
            item.classList.add("active");
        } else if (diff === -1) {
            item.classList.add("side-left");
        } else if (diff === 1) {
            item.classList.add("side-right");
        } else {
            item.classList.add("far");
        }
    });
}

nextCarousel.addEventListener("click", () => {
    current = (current + 1) % items.length;
    updateCarousel();
});

prevCarousel.addEventListener("click", () => {
    current = (current - 1 + items.length) % items.length;
    updateCarousel();
});

document.addEventListener("DOMContentLoaded", updateCarousel);

/* =========================
   GLOSARIO HOVER
========================= */

const glosario =
document.getElementById("glosario-img");

/* IMÁGENES */

const imagenes = [

    "html/img/glosario1.png",
    "html/img/glosario2.png",
    "html/img/glosario3.png",
    "html/img/glosario4.png",
    "html/img/glosario5.png",
    "html/img/glosario6.png"

];

let index = 0;

let intervalo;

/* ENTRAR MOUSE */

glosario.addEventListener("mouseenter", () => {

    intervalo = setInterval(() => {

        glosario.style.opacity = 0;

        setTimeout(() => {

            index++;

            /* VOLVER A EMPEZAR */

            if(index >= imagenes.length){
                index = 0;
            }

            glosario.src = imagenes[index];

            glosario.style.opacity = 1;

        }, 180);

    }, 800);

});

/* SALIR MOUSE */

glosario.addEventListener("mouseleave", () => {

    clearInterval(intervalo);

    index = 0;

    glosario.src = imagenes[0];

});

/* PLACEHOLDERS */

document
.querySelectorAll("[data-key-placeholder]")
.forEach(input => {

    const key =
    input.getAttribute("data-key-placeholder");

    input.placeholder =
    translations[currentLanguage][key];

});