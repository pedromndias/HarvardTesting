function changeColorEvent(event){
    let trigger = event.srcElement;
    document.getElementById("colorDiv").style.backgroundColor = 
    trigger.innerHTML.toLowerCase();
}

