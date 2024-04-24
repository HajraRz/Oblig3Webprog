

function sjekk() {
    const streng = $("#antall").val();
    if (streng === "" || isNaN(Number(streng))) {
        $("#feilTall").html("Skriv gyldig tall")
    } else {
        $("#feilTall").html("")
    }
}

function kjopBillett() {

    let bestilling = {
        valg: $("#velgFilm").val(),
        antall: $('#antall').val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonNr").val(),
        epost: $("#epost").val()
    };
    let feilmelding = 0;

    if (bestilling.valg === "") {
        $("#feilValg").html("Velg film");
        feilmelding++;
    }else{
        $("#feilValg").html("");
    }

    if (bestilling.antall === '' || bestilling.antall < 1) {
        $("#feilTall").html("Oppgi antall");
        feilmelding++;
    } else if (isNaN(bestilling.antall)){
        $("#feilTall").html("Skriv inn gyldig tall!");
        feilmelding++;
    } else {
        $("#feilTall").html("");
    }
    if (bestilling.fornavn === "") {
        $("#feilNavn").html("Oppgi fornavn");
        feilmelding++;
    } else {
        $("#feilNavn").html("");
    }
    if (bestilling.etternavn === "") {
        $("#feilEtternavn").html("Oppgi etternavn");
        feilmelding++;
    } else {
        $("#feilEtternavn").html("");
    }

    let telefonRegex= /^[0-9]{8}$/;
    if (bestilling.telefonnr === "") {
        $("#feilTlfNr").html("Oppgi telefonnr");
        feilmelding++;
    } else if (!bestilling.telefonnr.match(/^[0-9]{8}$/)){
        $("#feilTlfNr").html("Skriv inn gyldig telefonnr!");
        feilmelding++;
    } else {
        $("#feilTlfNr").html("");
    }
    if (bestilling.epost === "") {
        $("#feilEpost").html("Må skrive Epost");
        feilmelding++;
    } else if(!bestilling.epost.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)){
        $("#feilEpost").html("Skriv gyldig epost");
        feilmelding++;
    } else {
        $("#feilEpost").html("");
    }
    if (feilmelding === 0) {
        console.log(bestilling);
        console.log(typeof bestilling.telefonnr, bestilling.telefonnr);
        $.post("/kjopBillett", bestilling, function(){
            hentbillett();
        })
        tomAlt();
    }

}

function hentbillett(){

    $.get("/hentbilletter", function (data){
        console.log(data);
        alleBilletter(data);

    })

}

function alleBilletter(billett) {

    let ut = "<table><tr><th>Valgt film</th><th>Antall</th><th>Fornavn</th>" +
        "<th>Etternavn</th><th>Tlfnr</th><th>Epost</th></tr>";
    for (let i of billett) {
        ut += "<tr>";
        ut += "<td>" + i.valg + "</td><td>" + i.antall + "</td><td>" + i.fornavn +
            "</td><td>" + i.etternavn + "</td><td>" + i.telefonnr + "</td><td>" +
            i.epost + "</td>"
        ut += "</tr>"
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
        hentbillett()
    })

}
