function koupit() {
    alert("Bohu�el,\nNa to si je�t� mus�me po�kat...");
}

function copy() {
    var adresa = "Nivy 25 Tluma�ov 763 62"
    navigator.clipboard.writeText(adresa); 
    alert("Zkop�rovan� adresa: " + adresa);
}


function plus1() {
    var displej1 = document.getElementById("quantity").value;
    displej1 = displej1 + 1;
    quantity.value = displej1;
}
function minus1() {
    var displej1 = document.getElementById("quantity").value;
    displej1 = displej1 - 1;
    quantity.value = displej1;
}

function spocitatCenu() {
    var adopce_vlcaka_pocet = document.getElementById("pocet_vlcak").value;
    var cena_vlcak = adopce_vlcaka_pocet * 100;
    document.getElementById("cena_vlcak").innerHTML = cena_vlcak + "K�";
}