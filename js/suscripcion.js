// =========================
// FORMATO TARJETA
// =========================

const cardNumber = document.getElementById("card-number");

cardNumber.addEventListener("input", (e) => {

    let value = e.target.value.replace(/\D/g, "");

    value = value.replace(/(.{4})/g, "$1 ").trim();

    e.target.value = value;

});


// =========================
// MÉTODOS DE PAGO
// =========================

const methodButtons =
    document.querySelectorAll(".method-btn");

const paymentContents =
    document.querySelectorAll(".payment-content");

methodButtons.forEach(button => {

    button.addEventListener("click", () => {

        methodButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        paymentContents.forEach(content =>
            content.classList.remove("active")
        );

        button.classList.add("active");

        const method =
            button.getAttribute("data-method");

        document
        .getElementById(method + "-payment")
        .classList.add("active");

    });

});


// =========================
// PAGO FALSO
// =========================

const payBtn = document.getElementById("pay-btn");

const successMessage =
    document.getElementById("success-message");

payBtn.addEventListener("click", () => {

    payBtn.innerHTML = "PROCESANDO...";

    payBtn.style.opacity = "0.8";

    setTimeout(() => {

        payBtn.innerHTML = "PAGO EXITOSO ✔";

        successMessage.style.display = "flex";

    }, 2000);

});


// =========================
// TRADUCCIONES
// =========================

const translations = {

    es: {

        backHome: "← VOLVER AL INICIO",

        premiumTag: "PREMIUM PLAN BOG",

        premiumTitle: "SUSCRÍBETE Y VIVE BOGOTÁ SIN LÍMITES",

        premiumText: "Accede a descuentos, eventos exclusivos, recomendaciones inteligentes y experiencias únicas por toda la ciudad.",

        copText: "COP / MES",

        paymentTitle: "MÉTODO DE PAGO",

        cardMethod: "TARJETA",

        cardNumber: "Número de tarjeta",

        expiry: "Expira",

        holderName: "Nombre del titular",

        bankLabel: "Banco",

        documentLabel: "Documento",

        payBtn: "PAGAR AHORA",

        successText: "Pago procesado correctamente"
    },

    en: {

        backHome: "← BACK TO HOME",

        premiumTag: "PLAN BOG PREMIUM",

        premiumTitle: "SUBSCRIBE AND EXPERIENCE BOGOTÁ WITHOUT LIMITS",

        premiumText: "Access discounts, exclusive events, smart recommendations and unique experiences throughout the city.",

        copText: "COP / MONTH",

        paymentTitle: "PAYMENT METHOD",

        cardMethod: "CARD",

        cardNumber: "Card number",

        expiry: "Expires",

        holderName: "Card holder",

        bankLabel: "Bank",

        documentLabel: "Document",

        payBtn: "PAY NOW",

        successText: "Payment processed successfully"
    }
};


// =========================
// CAMBIO IDIOMA
// =========================

let currentLanguage = "es";

const languageButton =
    document.getElementById("language-toggle");

languageButton.addEventListener("click", () => {

    currentLanguage =
        currentLanguage === "es"
        ? "en"
        : "es";

    document
    .querySelectorAll("[data-key]")
    .forEach(element => {

        const key =
            element.getAttribute("data-key");

        element.textContent =
            translations[currentLanguage][key];

    });

    // TEXTO BOTÓN
    languageButton.textContent =
        currentLanguage === "es"
        ? "ESP"
        : "ENG";

});
