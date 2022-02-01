

var name1 = document.getElementById("name");

function changeName(){
    name1.innerText = "Kostas Mazarakis";
}



var remove1 = document.querySelector("#rqst1")
var connRec = document.querySelector("#connRec")
var connCount = document.querySelector("#connCount")
var connReCcounter = 2;
var connCounter = 500;

function remover(){
    connReCcounter--;
    connRec.innerText = connReCcounter;
    remove1.remove()

}

var remove2 = document.querySelector("#rqst2")

function remover1(){
    connReCcounter--;
    connRec.innerText = connReCcounter;
    remove2.remove()
}





function removerplus(){
    connCounter++;
    connReCcounter--;
    connRec.innerText = connReCcounter;
    connCount.innerText = connCounter;
    remove1.remove()
}

function removerplus1(){
    connCounter++;
    connReCcounter--;
    connRec.innerText = connReCcounter;
    connCount.innerText = connCounter;
    remove2.remove()
}