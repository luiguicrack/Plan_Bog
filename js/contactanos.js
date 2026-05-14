// =========================
// TRADUCCIONES
// =========================

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

        gastroTitle: "Contáctenos",
        gastroHero: "Y CONSTRUYAMOS ALGO INCREÍBLE",

        footerText: "© Plan BOG — Todos los derechos reservados",

        teamTitle1: "CONOCE A NUESTRO",
        teamTitle2: "Equipo",

        registerTitle: "REGÍSTRATE CON NOSOTROS",

        registerText: "PILAS CON ESTE GLOSARIO: ¡NO DÉ PAPAYA EN LA CAPITAL!",

        sendBtn: "ENVIAR",

        eventName: "Nombre del evento",

        email: "Email",

        location: "Ubicación",

        description: "Descripción",

        miniTitle: "DESCUBRE BOGOTÁ",

        infoTitle: "PLANES INTELIGENTES PARA UNA CIUDAD QUE NO SE DETIENE",

        infoText: "Descubre Bogotá jugando con Plan BOG, el juego de cartas donde cada ronda es un nuevo parche. Roba, arriesga y vive la ciudad como un verdadero rolo.",

        infoBtn: "¡21 horas, mil planes y una sola ciudad!",

        card1Title: "SOSTENIBLE PRIMERO",

        card1Text: "Impulsamos eventos locales y responsables con el entorno y los comercios de barrio",

        card2Title: "HECHO PARA TI",

        card2Text: "Recomendaciones por zona, presupuesto y gustos. Filtra y encuentra sin perder tiempo.",

        card3Title: "LO QUE FUNCIONA",

        card3Text: "Rutas y planes probados por la comunidad con tips reales y mapas listos para salir."
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

        gastroTitle: "Contact Us",
        gastroHero: "AND LET'S BUILD SOMETHING INCREDIBLE",

        footerText: "© Plan BOG — All rights reserved",

        teamTitle1: "MEET OUR",
        teamTitle2: "Team",
        registerTitle: "REGISTER WITH US",

        registerText: "WATCH THIS GLOSSARY: DON'T GET INTO TROUBLE IN THE CAPITAL!",

        sendBtn: "SEND",

        eventName: "Event name",

        email: "Email",

        location: "Location",

        description: "Description",

        miniTitle: "DISCOVER BOGOTÁ",

        infoTitle: "SMART PLANS FOR A CITY THAT NEVER STOPS",

        infoText: "Discover Bogotá by playing Plan BOG, the card game where every round is a new adventure. Take risks and live the city like a true local.",

        infoBtn: "21 hours, a thousand plans and one city!",

        card1Title: "SUSTAINABILITY FIRST",

        card1Text: "We promote local and responsible events connected with neighborhoods and local businesses",

        card2Title: "MADE FOR YOU",

        card2Text: "Recommendations by area, budget and interests. Filter and find plans easily.",

        card3Title: "WHAT WORKS",

        card3Text: "Routes and plans tested by the community with real tips and ready-to-use maps."
    }
};


// =========================
// IDIOMA ACTUAL
// =========================

let currentLanguage = "es";


// =========================
// BOTÓN TRADUCCIÓN
// =========================

const languageButton = document.getElementById("language-toggle");

languageButton.addEventListener("click", () => {

    // CAMBIAR IDIOMA
    currentLanguage = currentLanguage === "es" ? "en" : "es";

    // CAMBIAR TEXTOS
    document.querySelectorAll("[data-key]").forEach(element => {

        const key = element.getAttribute("data-key");

        element.textContent = translations[currentLanguage][key];

    });

    // =========================
    // PLACEHOLDERS
    // =========================

    document
    .querySelectorAll("[data-key-placeholder]")
    .forEach(element => {

        const key =
            element.getAttribute("data-key-placeholder");

        element.placeholder =
            translations[currentLanguage][key];

    });

    // CAMBIAR TEXTO BOTÓN
    languageButton.textContent =
        currentLanguage === "es" ? "ESP" : "ENG";

});

// =========================
// POPUP CARDS
// =========================

const cards = document.querySelectorAll(".team-card");

cards.forEach(card => {

    const popup = card.querySelector(".popup");

    const closeBtn = card.querySelector(".close-btn");

    // ABRIR
    card.addEventListener("click", () => {
        popup.classList.add("active");
    });

    // CERRAR
    closeBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        popup.classList.remove("active");
    });

    // CERRAR CLICK AFUERA
    popup.addEventListener("click", (e) => {

        if(e.target === popup){
            popup.classList.remove("active");
        }

    });

});

