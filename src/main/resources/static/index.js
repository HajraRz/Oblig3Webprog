

function kjopBillett() {

    let bestilling = {
        Valg: $("#velgFilm").val(),
        Antall: $('#antall').val(),
        Fornavn: $("#fornavn").val(),
        Etternavn: $("#etternavn").val(),
        Telefonnr: $("#telefonNr").val(),
        Epost: $("#epost").val()
    }
    console.log(bestilling.Telefonnr)
    let feilmelding = 0;

    if (bestilling.Valg === "") {
        $("#feilValg").html("Velg film");
        feilmelding++;
    }else{
        $("#feilValg").html("");
    }

    if (bestilling.Antall === '' || bestilling.Antall < 1) {
        $("#feilTall").html("Oppgi antall");
        feilmelding++;
    } else if (isNaN(bestilling.Antall)){
        $("#feilTall").html("Skriv inn gyldig tall!");
        feilmelding++;
    }  else if (bestilling.Antall == null){
        $("#feilTall").html("null verdi");
        feilmelding++;
    }
    else {
        $("#feilTall").html("");
    }
    if (bestilling.Fornavn === "") {
        $("#feilNavn").html("Oppgi fornavn");
        feilmelding++;
    } else {
        $("#feilNavn").html("");
    }
    if (bestilling.Etternavn === "") {
        $("#feilEtternavn").html("Oppgi etternavn");
        feilmelding++;
    } else {
        $("#feilEtternavn").html("");
    }

    let telefonRegex= /^[0-9]{8}$/;
    if (bestilling.Telefonnr === "") {
        $("#feilTlfNr").html("Oppgi telefonnr");
        feilmelding++;
    } else if (!telefonNr.value.match(/^[0-9]{8}$/)){
        $("#feilTlfNr").html("Skriv inn gyldig telefonnr!");
        feilmelding++;
    } else {
        $("#feilTlfNr").html("");
    }
    if (bestilling.Epost === "") {
        $("#feilEpost").html("Må skrive Epost");
        feilmelding++;
    } else if(!epost.value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)){
        $("#feilEpost").html("Skriv gyldig epost");
        feilmelding++;
    } else {
        $("#feilEpost").html("");
    }
    if (feilmelding === 0) {
        console.log("Vi er på vei til å gi post :");
        console.log(bestilling);
        $.post("/kjopBillett", bestilling, function(){
            hentbillett();
        })
        tomAlt();
    }

}

function hentbillett(){

    $.get("/hentbilletter", function (data){
        console.log("Vi er inne i alle hentbilletter");
        console.log(data);
        alleBilletter(data);

    })

}

function alleBilletter(data) {
    let billettkjop = data;
    console.log("Vi er inne i alle billetter");
    console.log(data);
    let ut = "<table><tr><th>Valgt film</th><th>Antall</th><th>Fornavn</th>" +
        "<th>Etternavn</th><th>Tlfnr</th><th>Epost</th></tr>";
    for (let i = 0; i< billettkjop.length ; i++) {
        console.log("Vi sjekker hva som er i index 0")
        console.log(billettkjop[i]);
        ut += "<tr>";
        ut += "<td>" + billettkjop[i].valg + "</td><td>" + billettkjop[i].antall + "</td><td>" + billettkjop[i].fornavn +
            "</td><td>" + billettkjop[i].etternavn + "</td><td>" + billettkjop[i].telefonnr + "</td><td>" +
            billettkjop[i].epost + "</td>";
    }
    ut += "</table>"

    $("#kjopBillett").html(ut);
    console.log(ut);
}

function tomAlt(){
    $("#velgFilm").val("")
    $("#antall").val("")
    $("#fornavn").val("")
    $("#etternavn").val("")
    $("#telefonNr").val("")
    $("#epost").val("")
}
function slettAlle() {
    $.get("/slettAlleBilletter", function (){
        hentbillett();

    });
}
