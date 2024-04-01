const mailList = ["francesco.merelli56@gmail.com", "pippo@gmail.com", "roberto@gmail.com", "slasher54@gmail.com", "killercrock4789.@gmail.com"]; // array mail

// chiamata variabili
const sendBtn = document.getElementById("send");   //button di invia mail
//aggiunta comando al click del bottone
//SEZIONE DATI INSERIRITI DALL'UTENTE
sendBtn.addEventListener("click", function () {
    const mail = document.getElementById("e_mail");     // richiamo variabile dall'input
    let mailValue = mail.value;                         // conversione della variabile in valore
    console.log(mailValue);                               // check

// SEZIONE CONTROLLO PRESENZA MAIL
let result;
let i = 0

// ciclo if
    if (mailValue === mailList[i]) {
        result = "User Registered";
    } else {
        result = "User not Found";
    }
// output
    document.getElementById("output").innerHTML = result; 
    console.log(result);
})
