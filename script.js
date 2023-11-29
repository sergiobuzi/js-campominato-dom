// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed 
// emetto un messaggio in console con il numero della cella cliccata.


//seleziono il contenitore dall'html e il bottone
const gridElement = document.getElementById("grid");
const sendButton = document.getElementById("send");


//attivo la funzione del click al bottone
sendButton.addEventListener("click",

    function(){

        //genero un array di 16 numeri randomici
        const newArrNum = genArrayRandomNum(1, 100, 16);
        console.log(newArrNum);



        //DEBUG del pulsante play
        gridElement.innerHTML = "";


        for (let i = 1; i <= 100; i++) {    //avvio il ciclo che mi genera 100 div

            const square = document.createElement("div");  //crea degli elmenti chiamati div
            square.classList.add("square");               //aggiunge la classe square ai div
            grid.append(square);                         //inserisce i div dentro il container grid              
            square.append(i);                           //inserisce dentro square il numero relativo a se stesso
            

            square.addEventListener('click',            //aggiunge all elemento square l'evento click
                function() {
                    if(newArrNum === i) {
                        newArrNum.classList.add("bomb");               
                        console.log("Hai selezionato una bomba",newArrNum);
                    } else {
                        square.classList.add('active');       //al click aggiunge la classe active
                        console.log("Hai selezionato la cella numero:", i);
                    } 
                }
            );      
        }
    }
);



//funzione che genera un numero in un range (min, max)
function getRandomNumMinMax(min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}


//funzione che crea un array con ordinamento  randomico di numeri in un range (min, max)
function genArrayRandomNum(minNum, maxNum, lunghezzaArr) {

    //creo l'array da popolare e ritornare
    const arrayToGen = [];

   //creo un ciclo che mi popoli l'array
   while (arrayToGen.length < lunghezzaArr) {
    //genera un numero random in un range (min, max)
    let newNumber = getRandomNumMinMax (minNum, maxNum);
    //se il numero  generato e presente nell'array
    if (!arrayToGen.includes(newNumber)) {
        //allora lo pusho nell'array
        arrayToGen.push(newNumber);
    }
   }
   return arrayToGen;
}