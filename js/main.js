//devo continuare da dove mi sono fermato con l'altro test, devo inserire dei prezzi in base alle ore richieste devo fare 
// in modo che al click del send si compili il form e si calcoli il prezzo con i dati inseriti e dare la possibilità di applicare 
// sconti 

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
    
    let discountCodeList = ["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24"];

    let discountCodeUsed = false;
        for(let i = 0; i < discountCodeList.length && discountCodeUsed == false; i++) {
            if(discountCodeList[i] == discountCode) {
                let discountedPrice = finalPrice - (finalPrice * 20 / 100);

                document.getElementById("work_price").innerHTML = discountedPrice.toFixed(2);
                discountCodeUsed = true;
            } else {
                document.getElementById("work_price").innerHTML= finalPrice;
            }
        }

        if(discountCodeUsed == true) {
            alert("questo codice è già stato usato");
        } else {
            alert("codice valido");
        }
    
}
