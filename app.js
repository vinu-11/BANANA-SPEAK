var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-area");
var outputDiv = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text){
    return serverURL + "?" + "text=" + text

}

function errorHandler(error){
    console.log("Error occured",error);
    alert("Something wrong with server! Try again after some time")
}

function clickEventHandler(){
   // outputDiv.innerHTML = "jnjknjnxd" + txtInput.value;
   var inputTxt = txtInput.value;

    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var transaltedTxt = json.contents.translated;
        outputDiv.innerText = transaltedTxt;
        })
    .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickEventHandler);


