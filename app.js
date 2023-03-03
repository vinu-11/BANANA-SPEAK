var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-area");
var outputDiv = document.querySelector("#output");

function clickEventHandler(){
    outputDiv.innerHTML = "jnjknjnxd" + txtInput.value;
}
btnTranslate.addEventListener("click", clickEventHandler);


