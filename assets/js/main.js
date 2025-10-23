// Descrizione

// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus

// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)





// Salvo in variabili gli elementi del DOM con cui devo interagire

const url = "https://flynn.boolean.careers/exercises/api/random/mail"

const emailListEl = document.getElementById("mail-list")

const generateBtnEl = document.getElementById("generate-btn")

// Avvio un ciclo per 10 volte

function appendRandomMail() {

    for (i = 0; i < 10; i++) {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // -estraggo il dato con la mail
                let eMail = data["response"]
                console.log(eMail);
                //creo un li
                let li = document.createElement("li")
                li.className = 'mb-5'
                // inserisco il testo nel li
                li.innerText = eMail
                console.log(li);
                // lo aggiungo dentro l'ul con appendchild
                emailListEl.appendChild(li)
            })
            .catch(error => {
                console.error(error);
            })


    }
}

appendRandomMail()

function resetandrepeat(){
    emailListEl.innerHTML = ""
    appendRandomMail()
}

generateBtnEl.addEventListener("click",resetandrepeat)