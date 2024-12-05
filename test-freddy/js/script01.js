let btnReservaParis = document.querySelector("#btnReservaParis");
let btnReservaTokyo = document.querySelector("#btnReservaTokyo");
let btnReservaNY = document.querySelector("#btnReservaNY");
let btnReservaLondon = document.querySelector("#btnReservaLondon");
let btnReservaRome = document.querySelector("#btnReservaRome");
let btnReservaBangkok = document.querySelector("#btnReservaBangkok");
let btnReservaSydney = document.querySelector("#btnReservaSydney");
let btnReservaDubai = document.querySelector("#btnReservaDubai");

let destinations = [];

function recuperaDestino() {
    const URLEndpoint = "https://www.freetestapi.com/api/v1/destinations";

    fetch(URLEndpoint)
    .then(response => response.json())
    .then(data => {
        destinations = data.slice(0, 8);
        console.log(destinations);

        btnReservaParis.addEventListener("click", () => guardarDestino(0));
        btnReservaTokyo.addEventListener("click", () => guardarDestino(1));
        btnReservaNY.addEventListener("click", () => guardarDestino(2));
        btnReservaLondon.addEventListener("click", () => guardarDestino(3));
        btnReservaRome.addEventListener("click", () => guardarDestino(4));
        btnReservaBangkok.addEventListener("click", () => guardarDestino(5));
        btnReservaSydney.addEventListener("click", () => guardarDestino(6));
        btnReservaDubai.addEventListener("click", () => guardarDestino(7));
    })
    .catch(error => {
        console.log("Error al recuperar los destinos:", error);
    });
}

function guardarDestino(index) {
    const destination = destinations[index];
    localStorage.setItem("selectedDestination", JSON.stringify(destination));
    window.location.href = "reserva.html";
}

recuperaDestino();

