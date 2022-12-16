var loop = 0;

function tap(id, text){
    var element = document.getElementById(id);
    element.innerHTML = text.substring(0, loop);
    if(loop < text.length){
        loop++;
        setTimeout(function() {
            tap(id, text);
        }, 80);
    }
}

tap("company", "CARTE PÈRE");

setTimeout(function() {
    loop = 0;
    tap("company_description", "Informatique depuis 1997");
}, 900);
