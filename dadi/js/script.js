
//Assegnazioni variabili
const btn = document.getElementById("lancia");          //richiamo variabile del button
//aggiunta azione al click del button
btn.addEventListener("click", function () {
//dichiarazione variabili
let pcTurn = Math.floor(Math.random() * 6) + 1;                                 //generazione numeri casuali
console.log(pcTurn, "pc_valure");
let userTurn = Math.floor(Math.random() * 6) + 1;                               //generazione numeri casuali
console.log(userTurn, "user_value");
let results;

// Controllo con una disuguaglianza
if (pcTurn > userTurn) {
    results = "ha vinto il Pc";
} else if (pcTurn === userTurn) {
    results = "Parità!"
} else  {
    results = "hai vinto"
}
console.log(results);

//output
    document.getElementById("user_result").innerHTML = `Tu : ${userTurn}`;
    document.getElementById("pc_result").innerHTML = `Pc : ${pcTurn}`;
    document.getElementById("outcome").innerHTML = results;
})