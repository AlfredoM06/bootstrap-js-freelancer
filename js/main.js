//devo continuare da dove mi sono fermato con l'altro test, devo inserire dei prezzi in base alle ore richieste devo fare 
// in modo che al click del send si compili il form e si calcoli il prezzo con i dati inseriti e dare la possibilità di applicare 
// sconti 
let jobCards = [
    {
       photo: "cabin.png",
       name: "Cabin Website",
       
   },
   {
       photo: "cake.png",
       name: "Cake Website",
      
   },
   {
       photo: "circus.png",
       name: "Circus Website",
      
   },
   {
       photo: "game.png",
       name: "Game Website",
      
   },
   {
       photo: "safe.png",
       name: "Safe Website",
       
   },
   {
       photo: "submarine.png",
       name: "Submarine Website",
       
   },
];



for (let i = 0; i < jobCards.length; i++){

   document.getElementById("job_cards").innerHTML += `
   <div class="card text-center card-w col-4 mb-3 p-cards" >
        <img src="./img/${jobCards[i].photo}" class="card-img-top" alt="Cabin">
        <div class="card-body">
            <h5 class="card-title">${jobCards[i].name}</h5>
            <a href="#" class="btn btn-info">Preview</a>
            <a href="#" class="btn btn-outline-info">Visit site</a>
        </div>
    </div>
   `

}

let discountCodeList = ["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24"];
//creo una funzione oer far si che al click del bottone si verifichi il submitdel form
function calcPriceWork(event) {
    event.preventDefault();

    // inizio collegando le informazione da inserire nel form su html a js 

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let hours = document.getElementById("hours").value;
    let inputTypeWork = document.getElementById("input_type_work").value;
    let discountCode = document.getElementById("discount_code").value;


    // mi creo la base del calcolo per la tariffa oraria 

    let backendPrice = 20.50;
    let frontendPrice = 15.30;
    let projectgAnalysisPrice = 33.60;
    let workPrice;

    // converto le ore inserire dall'utente in valore numerico per poi fare il calcolo della tariffa

    hours = parseInt(hours);

    // faccio si che alla scelta dell'utente corrisponda ad un calcolo del prezzo

    if (inputTypeWork == "1") {
        workPrice = backendPrice * hours;
    } else if (inputTypeWork == "2") {
        workPrice = frontendPrice * hours;
    } else if (inputTypeWork == "3") {
        workPrice = projectgAnalysisPrice * hours;
    }

    let finalPrice = workPrice.toFixed(2);

    document.getElementById("work_price").innerHTML= finalPrice;
    document.getElementById("first_name").innerHTML= name;
    document.getElementById("last_name").innerHTML= surname;
    document.getElementById("email_address").innerHTML= email;


    //faccio si che l'utente possa utilizzare dei  codici sconto
    // inizio con 1 codice che deve essere del 25%
    // verificato che il codice funziona provare a far si che non possa essere usato 2 volte
    
   
    let discountCodeIndex = -1;
    let discountCodeFound = false;

    for(let i = 0; i < discountCodeList.length && discountCodeFound == false; i++) {
        if(discountCodeList[i] == discountCode) {
            let discountedPrice = finalPrice - (finalPrice * 20 / 100);

            document.getElementById("work_price").innerHTML = discountedPrice.toFixed(2);
            discountCodeFound = true;
            discountCodeIndex = i;


        } else {
            document.getElementById("work_price").innerHTML= finalPrice;
        }
    }

    if (discountCodeFound == true) {
        discountCodeList.splice(discountCodeIndex, 1);
    }


    if(discountCodeFound == true) {
        alert("questo codice è valido");
    } else {
        alert("codice sconto NON è valido");
        document.getElementById("discount_code").classList.add('text-danger');
    }
    
}
