let feedNome = document.querySelector("#feedNome");
let feedCognome = document.querySelector("#feedCognome");
let feedEmail = document.querySelector("#feedEmail");
let feedTel = document.querySelector("#feedTel");

let nome = document.querySelector("#nome");
let cognome = document.querySelector("#cognome");
let tel = document.querySelector("#telefono");
let email = document.querySelector("#email");

let formRegUser = document.querySelector("#formRegUser");

class Utente {
    constructor(nome, cognome, tel, email) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.tel = tel;
    }
}

function verificaUtente() {
    if (localStorage.getItem("utente")) {
        document.querySelector("body").innerHTML = "";

        let btnLogout = document.createElement("button");
        btnLogout.textContent = "Logout";
        btnLogout.addEventListener("click", function() {
            localStorage.removeItem("utente");
            location.reload();
        });
        document.querySelector("body").appendChild(btnLogout);
    }
}

document.addEventListener("DOMContentLoaded", verificaUtente);

function registraUtente(event) {
    event.preventDefault();

    let nome = document.querySelector("#nome").value;
    let cognome = document.querySelector("#cognome").value;
    let tel = document.querySelector("#telefono").value;
    let email = document.querySelector("#email").value;

    if (checkNome(nome) && checkCognome(cognome) && checkTel(tel) && checkEmail(email)) {
        let mioUser = new Utente(nome, cognome, tel, email);
        localStorage.setItem("utente", JSON.stringify(mioUser));
        console.log(mioUser);
    }
}

formRegUser.addEventListener("submit", registraUtente);

nome.addEventListener("blur", function() {
    let nome = document.querySelector("#nome").value;
    checkNome(nome);
});

cognome.addEventListener("blur", function() {
    let cognome = document.querySelector("#cognome").value;
    checkCognome(cognome);
});

email.addEventListener("blur", function() {
    let email = document.querySelector("#email").value;
    checkEmail(email);
});

tel.addEventListener("blur", function() {
    let tel = document.querySelector("#telefono").value;
    checkTel(tel);
});

function checkNome(nome) {
    if (nome.length > 1) {
        feedNome.textContent = "";
        return true;
    } else {
        feedNome.textContent = "Non hai inserito il nome";
        return false;
    }
}

function checkCognome(cognome) {
    if (cognome.length > 1) {
        feedCognome.textContent = "";
        return true;
    } else {
        feedCognome.textContent = "Non hai inserito il cognome";
        return false;
    }
}

function checkEmail(email) {
    let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (email.match(regexMail)) {
        feedEmail.textContent = "";
        return true;
    } else {
        feedEmail.textContent = "Stai dimenticando @ o .";
        return false;
    }
}

function checkTel(tel) {
    let regexTel = /\d{8}/;
    if (tel.match(regexTel)) {
        feedTel.textContent = "";
        return true;
    } else {
        feedTel.textContent = "Numero di telefono debi essere di 8 digito";
        return false;
    }
}
