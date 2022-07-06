const racine = {
    1 : "Méth",
    2 : "Eth",
    3 : "Prop",
    4 :  "But",
    5 : "Pent",
    6 : "Hex",
    7 : "Hept",
    8 : "Oct",
    9 : "Non",
    10 : "Déc",
    11 : "Undéc",
    12 : "Dodéc",
    13 : "Tridéc",
    14 : "Tetradéc",
    15 : "Pentadéc"
};


const molecule = document.getElementById('molecule');
const nbcarbone = document.getElementById('nbc');
const posi = document.getElementById('posf');
const posinit = document.getElementById('pos');


molecule.addEventListener('input', generer);
nbcarbone.addEventListener('input', generer);
posi.addEventListener('input', generer);
posinit.addEventListener('input', generer);

const formulebrute = document.getElementById('fb');
const nom = document.getElementById('nom');
const formulesd = document.getElementById('fsd');

const atomeC = "C";
const atomeH = "H";
const atomeO = "O";

function generer(e) { // Fonction globale pour toutes les familles de molécules organiques
    let type = molecule.value;
    let nombre = nbcarbone.value;
    
    switch(type) {
        case 'Alcanes' :
            /* Fonction pour les alcanes qui gère tout sauf la représentation de la formule développée de la molécule. */
            genererAlcane(nombre); 
            /* Fonction qui gère pour les alcanes l'affichage de la représentation de la formule développée de la molécule. */
            genererformuledeveloppeealcane(nombre);
            break;
        case 'Alcenes' :
            /* Fonction pour les alcènes qui gère l'affichage du nom et la formule brute. */
            genererAlcene(nombre);
            /* Fonction qui gère pour les alcènes l'affichage de la formule semi-développée. */
            genererFsdAlcene(nombre);
            /* Fonction qui gère pour les alcènes l'affichage de la représentation de la formule développée de la molécule. */
            genererformuledeveloppeealcene(nombre);
            break;
        case 'Alcynes' :
            /* Fonction pour les alcynes qui gère l'affichage du nom et la formule brute. */
            genererAlcyne(nombre);
            /* Fonction qui gère pour les alcynes l'affichage de la formule semi-développée. */
            genererFsdAlcyne(nombre);
            /* Fonction qui gère pour les alcynes l'affichage de la représentation de la formule développée de la molécule. */
            genererformuledeveloppeealcyne(nombre);
            break;
        case 'Alcools' :
            // Fonction pour les alcools qui gère l'affichage du nom et la formule brute.
            genererAlcool(nombre);
            /* Fonction qui gère pour les alcools l'affichage de la formule semi-développée. */
            genererFsdAlcool(nombre);
            /* Fonction qui gère pour les alcynes l'affichage de la représentation de la formule développée de la molécule. */
            genererformuledeveloppeealcool(nombre);
            break;
        default:
        break;
    }
    
}

genererAlcane(1);
genererformuledeveloppeealcane(1);

/* Fonction qui permet d'afficher le type d'atomes choisi ainsi que le nombre */
function ajouteratome(atome,nbre){
    console.log(nbre);
    let ret = "";
    if (nbre == 1){ // Cas particulier
        ret = "<span class='atome'>" +atome+ "</span>";
    }
    else if (nbre >= 1){ // cas général (plus de 1 carbones dans la chaîne)
        ret = "<span class='atome'>"+atome+"</span>" + nbre; 
    }
    return ret;
}

/* Fonction pour les alcanes qui gère tout sauf la représentation de la formule développée de la molécule. */
function genererAlcane(nombre) {
    nom.textContent = racine[nombre] + "ane";
    posinit.style.display = "none";
    posi.style.display = "none";
    let chainecarbone = ajouteratome(atomeC, nombre);
    let chainehydrogene = ajouteratome(atomeH, 2*nombre +2);
    let chainealcane = chainecarbone + chainehydrogene;
    formulebrute.innerHTML = chainealcane;
    if (nombre == 1) { // Cas particulier
        let chainecch4 = ajouteratome(atomeC, 1);
        let chainehch4 = ajouteratome(atomeH, 4);
        let ch4 = chainecch4 + chainehch4;
        formulesd.innerHTML = ch4;
    }
    else if (nombre == 2) { // Cas particulier
        let chainecch3 = ajouteratome(atomeC, 1);
        let chainehch3 = ajouteratome(atomeH, 3);
        let ch3 = chainecch3 + chainehch3;
        formulesd.innerHTML = ch3+"<span class='atome2'>-</span>"+ch3;
    }
    else { // cas général (plus de 2 carbones dans la chaîne)
        let chainecch3 = ajouteratome(atomeC, 1);
        let chainehch3 = ajouteratome(atomeH, 3);
        let chainecch2 = ajouteratome(atomeC, 1);
        let chainehch2 = ajouteratome(atomeH, 2);
        let ch3 = chainecch3 + chainehch3;
        let ch2 = chainecch2 + chainehch2;
        let CH2 ="";
        for (i = 0; i<nombre-2; i++) {
            CH2 += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
        }
        formulesd.innerHTML = ch3 +"<span class='atome2'>-</span>"+CH2+ch3;
    }
}

/* Fonction pour les alcènes qui gère l'affichage du nom et la formule brute. */
function genererAlcene(nombre) {
    posinit.style.display = "block";
    posi.style.display = "inline";
    let position = posf.value;
    let positionf = nombre - position;
    if (nombre == 1) { // Cas particulier
        nom.innerHTML = "<span class='erreur'>Il faut au moins 2 carbones </span>";
        formulebrute.innerHTML = "";
    }
    else if ((nombre >= 2) && (nombre < 4)){ // Cas particuliers
        if (positionf >= 1) { 
            nom.textContent = racine[nombre] + "ène";
            let chainecarbone = ajouteratome(atomeC, nombre);
            let chainehydrogene = ajouteratome(atomeH, 2*nombre);
            let chainealcene = chainecarbone + chainehydrogene;
            formulebrute.innerHTML = chainealcene;
        }
        else {
            nom.innerHTML = "<span class='erreur'>La position dans la chaîne doit être inférieure au nombre de carbones</span>"; 
        }
    }
    else if (nombre >= 4) { // cas général (plus de 3 carbones dans la chaîne)
        /* On gère les cas où la position de la fonction dans la chaîne est inférieure à la moitié 
        du nombre de carbones*/
        if (position < (Math.ceil(nombre/2))) {
            nom.textContent = racine[nombre] + "-" + position +"-ène";
            let chainecarbone = ajouteratome(atomeC, nombre);
            let chainehydrogene = ajouteratome(atomeH, 2*nombre);
            let chainealcene = chainecarbone + chainehydrogene;
            formulebrute.innerHTML = chainealcene;
        }
        else {
            if (positionf > 1) {
                nom.textContent = racine[nombre] + "-" + positionf +"-ène";
                let chainecarbone = ajouteratome(atomeC, nombre);
                let chainehydrogene = ajouteratome(atomeH, 2*nombre);
                let chainealcene = chainecarbone + chainehydrogene;
                formulebrute.innerHTML = chainealcene;
                return positionf;
            }
            /* Cas particulier [la fonction est en fin de chaîne 
            (équivalent au début de chaîne car on peut numéroter dans les 2 sens)]*/
            else if (positionf == 1) {
                nom.textContent = racine[nombre] + "-1" +"-ène";
                let chainecarbone = ajouteratome(atomeC, nombre);
                let chainehydrogene = ajouteratome(atomeH, 2*nombre);
                let chainealcene = chainecarbone + chainehydrogene;
                formulebrute.innerHTML = chainealcene;
            }
            else {
                nom.innerHTML = "<span class='erreur'>La position dans la chaîne doit être inférieure au nombre de carbones</span>";
            }
            
        }
    }
}

/* Fonction qui gère pour les alcènes l'affichage de la formule semi-développée. */
function genererFsdAlcene(nombre) {
    let position = posf.value;
    let positionf = nombre - position;
    let chainecch3 = ajouteratome(atomeC, 1);
    let chainehch3 = ajouteratome(atomeH, 3);
    let chainecch2 = ajouteratome(atomeC, 1);
    let chainehch2 = ajouteratome(atomeH, 2);
    let ch3 = chainecch3 + chainehch3;
    let ch2 = chainecch2 + chainehch2;
       
    if (nombre == 1) { // Cas particulier
        nom.innerHTML = "<span class='erreur'>Il faut au moins 2 carbones </span>";
        formulesd.innerHTML = "";
    }
    else if (nombre == 2) { // Cas particulier
        formulesd.innerHTML = ch2+"<span class='atome2'>=</span>"+ch2;
    }
    else if (nombre == 3) { // Cas particulier
        formulesd.innerHTML = ch2+"<span class='atome2'>=</span>"+"<span class='atome'>CH</span>"+"<span class='atome2'>-</span>"+ch3;
    }
    else if (nombre >= 4) { // cas général (plus de 3 carbones dans la chaîne)
        if (position == 1) { // Cas particulier (la fonction est en début de chaîne)
            let CH2 ="";
            for (i = 0; i<nombre-3; i++) {
                CH2 += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }
            formulesd.innerHTML = ch2+"<span class='atome2'>=</span>"+"<span class='atome'>CH</span>"+"<span class='atome2'>-</span>"+CH2+ch3;
        }
        /* On gère les cas où la position de la fonction dans la chaîne est inférieure à la moitié 
        du nombre de carbones*/
        else if (position >= 2 && position < (Math.ceil(nombre/2))) {
            let CH2d ="";
            let CH2f ="";
            for (i=0; i<position-2; i++) {
                CH2d += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }
            for (i=0; i<positionf-2; i++) {
                CH2f += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }
            formulesd.innerHTML = ch3+"<span class='atome2'>-</span>"+CH2d+"<span class='atome'>CH</span>"+"<span class='atome2'>=</span>"+"<span class='atome'>CH</span>"+"<span class='atome2'>-</span>"+CH2f+ch3;
            }
        /* On gère les cas où la position de la fonction dans la chaîne est supérieure ou égale à la moitié 
        du nombre de carbones et le cas où la fonction est au milieu de la chaîne.
        Quand on dépasse le milieu de la chaîne, on retouve les mêmes molécules que dans le cas précédent
        si on les fait pivoter de 180 degrés dans un même plan.
        On minimise donc le numéro de la fonction dans la chaîne quand on écrit le nom de la molécule. */
        else if (position >= (Math.ceil(nombre/2)) && positionf > 1) {console.log("cas 3");
            let CH2d ="";
            let CH2f ="";
            for (i=0; i<position-2; i++) {
                CH2d += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }
            for (i=0; i<positionf-2; i++) {
                CH2f += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }
            formulesd.innerHTML = ch3+"<span class='atome2'>-</span>"+CH2f+"<span class='atome'>CH</span>"+"<span class='atome2'>=</span>"+"<span class='atome'>CH</span>"+"<span class='atome2'>-</span>"+CH2d+ch3;
        }
        /* Cas particulier [la fonction est en fin de chaîne 
        (équivalent au début de chaîne car on peut numéroter dans les 2 sens)]*/
        else if (positionf == 1) { 
            let CH2 ="";
            for (i = 0; i<nombre-3; i++) {
                CH2 += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }  
            formulesd.innerHTML = ch2+"<span class='atome2'>=</span>"+"<span class='atome'>CH</span>"+"<span class='atome2'>-</span>"+CH2+ch3;
        }
        else {
            formulesd.innerHTML ="";
        }
    } 
}
 
/* Fonction pour les alcynes qui gère l'affichage du nom et la formule brute. */
function genererAlcyne(nombre) {
    posinit.style.display = "block";
    posi.style.display = "inline";
    let position = posf.value;
    let positionf = nombre - position;
    if (nombre == 1) { // Cas particulier
        nom.innerHTML = "<span class='erreur'>Il faut au moins 2 carbones </span>";
        formulebrute.innerHTML = "";
    }
    else if ((nombre >= 2) && (nombre < 4)){ // Cas particuliers
        if (positionf >= 1) {
            nom.textContent = racine[nombre] + "yne";
            let chainecarbone = ajouteratome(atomeC, nombre);
            let chainehydrogene = ajouteratome(atomeH, 2*nombre-2);
            let chainealcyne = chainecarbone + chainehydrogene;
            formulebrute.innerHTML = chainealcyne;
        }
        else {
            nom.innerHTML = "<span class='erreur'>La position dans la chaîne doit être inférieure au nombre de carbones</span>"; 
        }
    }
    else if (nombre >= 4) { // cas général (plus de 3 carbones dans la chaîne)
        /* On gère les cas où la position de la fonction dans la chaîne est inférieure à la moitié 
        du nombre de carbones*/
        if (position < (Math.ceil(nombre/2))) {
            nom.textContent = racine[nombre] + "-" + position +"-yne";
            let chainecarbone = ajouteratome(atomeC, nombre);
            let chainehydrogene = ajouteratome(atomeH, 2*nombre-2);
            let chainealcyne = chainecarbone + chainehydrogene;
            formulebrute.innerHTML = chainealcyne;
        }
        else {
            if (positionf > 1) {
                nom.textContent = racine[nombre] + "-" + positionf +"-yne";
                let chainecarbone = ajouteratome(atomeC, nombre);
                let chainehydrogene = ajouteratome(atomeH, 2*nombre-2);
                let chainealcyne = chainecarbone + chainehydrogene;
                formulebrute.innerHTML = chainealcyne;
                return positionf;
            }
            /* Cas particulier [la fonction est en fin de chaîne 
            (équivalent au début de chaîne car on peut numéroter dans les 2 sens)]*/
            else if (positionf == 1) {
                nom.textContent = racine[nombre] + "-1" +"-yne";
                let chainecarbone = ajouteratome(atomeC, nombre);
                let chainehydrogene = ajouteratome(atomeH, 2*nombre-2);
                let chainealcyne = chainecarbone + chainehydrogene;
                formulebrute.innerHTML = chainealcyne;
            }
            else {
                nom.innerHTML = "<span class='erreur'>La position dans la chaîne doit être inférieure au nombre de carbones</span>";
            }   
        }
    }
}

/* Fonction qui gère pour les alcynes l'affichage de la formule semi-développée. */
function genererFsdAlcyne(nombre) {
    let position = posf.value;
    let positionf = nombre - position;
    let chainecch3 = ajouteratome(atomeC, 1);
    let chainehch3 = ajouteratome(atomeH, 3);
    let chainecch2 = ajouteratome(atomeC, 1);
    let chainehch2 = ajouteratome(atomeH, 2);
    let chainecch = ajouteratome(atomeC, 1);
    let chainehch = ajouteratome(atomeH, 1);
    let ch3 = chainecch3 + chainehch3;
    let ch2 = chainecch2 + chainehch2;
    let ch = chainecch + chainehch;
       
    if (nombre == 1) { // Cas particulier
        nom.innerHTML = "<span class='erreur'>Il faut au moins 2 carbones </span>";
        formulesd.innerHTML = "";
    }
    else if (nombre == 2) { // Cas particulier
        formulesd.innerHTML = ch+"<span class='atome2'>&#x2261</span>"+ch;
    }
    else if (nombre == 3) { // Cas particulier
        formulesd.innerHTML = ch+"<span class='atome2'>&#x2261</span>"+"<span class='atome'>C</span>"+"<span class='atome2'>-</span>"+ch3;
    }
    else if (nombre >= 4) { // cas général (plus de 3 carbones dans la chaîne)
        if (position == 1) { // Cas particulier (la fonction est en début de chaîne)
            let CH2 ="";
            for (i = 0; i<nombre-3; i++) {
                CH2 += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }
            formulesd.innerHTML = ch+"<span class='atome2'>&#x2261</span>"+"<span class='atome'>C</span>"+"<span class='atome2'>-</span>"+CH2+ch3;
        }
        /* On gère les cas où la position de la fonction dans la chaîne est inférieure à la moitié 
        du nombre de carbones*/
        else if (position >= 2 && position < (Math.ceil(nombre/2))) {console.log("cas 2");
            let CH2d ="";
            let CH2f ="";
            for (i=0; i<position-2; i++) {
                CH2d += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }
            for (i=0; i<positionf-2; i++) {
                CH2f += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }
            formulesd.innerHTML = ch3+"<span class='atome2'>-</span>"+CH2d+"<span class='atome'>C</span>"+"<span class='atome2'>&#x2261</span>"+"<span class='atome'>C</span>"+"<span class='atome2'>-</span>"+CH2f+ch3;
            }
        /* On gère les cas où la position de la fonction dans la chaîne est supérieure ou égale à la moitié 
        du nombre de carbones et le cas où la fonction est au milieu de la chaîne.
        Quand on dépasse le milieu de la chaîne, on retouve les mêmes molécules que dans le cas précédent
        si on les fait pivoter de 180 degrés dans un même plan.
        On minimise donc le numéro de la fonction dans la chaîne quand on écrit le nom de la molécule. */
        else if (position >= (Math.ceil(nombre/2)) && positionf > 1) {
            let CH2d ="";
            let CH2f ="";
            for (i=0; i<position-2; i++) {
                CH2d += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }
            for (i=0; i<positionf-2; i++) {
                CH2f += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }
            formulesd.innerHTML = ch3+"<span class='atome2'>-</span>"+CH2f+"<span class='atome'>C</span>"+"<span class='atome2'>&#x2261</span>"+"<span class='atome'>C</span>"+"<span class='atome2'>-</span>"+CH2d+ch3;
        }
        /* Cas particulier [la fonction est en fin de chaîne 
        (équivalent au début de chaîne car on peut numéroter dans les 2 sens)]*/
        else if (positionf == 1) {
            let CH2 ="";
            for (i = 0; i<nombre-3; i++) {
                CH2 += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }  
            formulesd.innerHTML = ch+"<span class='atome2'>&#x2261</span>"+"<span class='atome'>C</span>"+"<span class='atome2'>-</span>"+CH2+ch3;
        }
        else {
            formulesd.innerHTML ="";
        }
    }
}

// Fonction pour les alcools qui gère l'affichage du nom et la formule brute.
function genererAlcool(nombre) {
    posinit.style.display = "block";
    posi.style.display = "inline";
    let position = posf.value;
    let positionf = nombre - position;
    let positionfbis = positionf + 1;
    if (nombre == 1) { // Cas particulier
        if (positionf >= 0){
            nom.textContent = racine[nombre] + "anol";
            let chainecch3oh = ajouteratome(atomeC, 1);
            let chainehch3oh = ajouteratome(atomeH, 4);
            let chaineoch3oh =ajouteratome(atomeO, 1)
            let ch3oh = chainecch3oh + chainehch3oh + chaineoch3oh;
            formulebrute.innerHTML = ch3oh;
        }
        else {
            nom.innerHTML = "<span class='erreur'>La position dans la chaîne ne peut pas être supérieure au nombre de carbones</span>";
        }
    }
    else if (nombre == 2) { // Cas particulier
        if (positionf >= 0){
            nom.textContent = racine[nombre] + "anol";
            let chainec2ch3ch2oh = ajouteratome(atomeC, 2);
            let chaineh2ch3ch2oh = ajouteratome(atomeH, 6);
            let chaineo2ch3ch2oh = ajouteratome(atomeO, 1);
            let ch3ch2oh = chainec2ch3ch2oh + chaineh2ch3ch2oh + chaineo2ch3ch2oh;
            formulebrute.innerHTML = ch3ch2oh;
        }
        else {
            nom.innerHTML = "<span class='erreur'>La position dans la chaîne ne peut pas être supérieure au nombre de carbones</span>";
        }
    }
    else if (nombre >= 3) { // cas général (plus de 2 carbones dans la chaîne)
        if (position <= (Math.ceil(nombre/2))) {
        /* On gère les cas où la position de la fonction dans la chaîne est inférieure à la moitié 
        du nombre de carbones*/
            nom.textContent = racine[nombre] + "an" + "-" + position + "-" + "ol";
            let chainecarbone = ajouteratome(atomeC, nombre);
            let chainehydrogene = ajouteratome(atomeH, 2*nombre+2);
            let chaineoxygene = ajouteratome(atomeO, 1);
            let chainealcool = chainecarbone + chainehydrogene + chaineoxygene;
            formulebrute.innerHTML = chainealcool;
        }
        else {
            if (positionf > 0) {
                nom.textContent = racine[nombre] + "an" + "-" + positionfbis + "-" + "ol";
                let chainecarbone = ajouteratome(atomeC, nombre);
                let chainehydrogene = ajouteratome(atomeH, 2*nombre+2);
                let chaineoxygene = ajouteratome(atomeO, 1);
                let chainealcool = chainecarbone + chainehydrogene + chaineoxygene;
                formulebrute.innerHTML = chainealcool;
                return positionf;
            }
            /* Cas particulier [la fonction est en fin de chaîne 
            (équivalent au début de chaîne car on peut numéroter dans les 2 sens)]*/
            else if (positionf == 0) {
                nom.textContent = racine[nombre] + "an" + "-" + positionfbis + "-" + "ol";
                let chainecarbone = ajouteratome(atomeC, nombre);
                let chainehydrogene = ajouteratome(atomeH, 2*nombre+2);
                let chaineoxygene = ajouteratome(atomeO, 1);
                let chainealcool = chainecarbone + chainehydrogene + chaineoxygene;
                formulebrute.innerHTML = chainealcool;
            }
            else {
                nom.innerHTML = "<span class='erreur'>La position dans la chaîne ne peut pas être supérieure au nombre de carbones</span>";
            }
        }
    }
}

/* Fonction qui gère pour les alcools l'affichage de la formule semi-développée. */
function genererFsdAlcool(nombre) {
    let position = posf.value;
    let positionf = nombre - position;
    let chainecch3 = ajouteratome(atomeC, 1);
    let chainehch3 = ajouteratome(atomeH, 3);
    let chainecch2 = ajouteratome(atomeC, 1);
    let chainehch2 = ajouteratome(atomeH, 2);
    let chaineooh = ajouteratome(atomeO, 1);
    let chainehoh = ajouteratome(atomeH, 1);
    let ch2 = chainecch2 + chainehch2;
    let ch3 = chainecch3 + chainehch3;
    let oh = chaineooh + chainehoh;
    let ho = chainehoh + chaineooh;
    
    if (nombre == 1) { // Cas particulier
        formulesd.innerHTML = ch3 +"<span class='atome2'>-</span>"+ oh;
    }
    else if (nombre == 2) { // Cas particulier
        formulesd.innerHTML = ch3 +"<span class='atome2'>-</span>"+ ch2 +"<span class='atome2'>-</span>"+ oh;
    }
    else if (nombre >= 3) { // cas général (plus de 2 carbones dans la chaîne)
        if (position == 1) { // Cas particulier (la fonction est en début de chaîne)
            let CH2 ="";
            for (i = 0; i<nombre-2; i++) {
                CH2 += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }
            formulesd.innerHTML = ho+"<span class='atome2'>-</span>"+ch2+"<span class='atome2'>-</span>"+CH2+ch3;
        }
        /* On gère les cas où la position de la fonction dans la chaîne est inférieure à la moitié 
        du nombre de carbones*/
        else if (position >= 2 && position <= (Math.ceil(nombre/2))) {console.log("cas 2");
            let CH2d ="";
            let CH2f ="";
            for (i=0; i<position-2; i++) {
                CH2d += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }
            for (i=0; i<positionf-1; i++) {
                CH2f += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }
            formulesd.innerHTML = ch3+"<span class='atome2'>-</span>"+CH2d+"<span class='atome'>CHOH</span>"+"<span class='atome2'>-</span>"+CH2f+ch3;
            }
        /* On gère les cas où la position de la fonction dans la chaîne est supérieure ou égale à la moitié 
        du nombre de carbones et le cas où la fonction est au milieu de la chaîne.
        Quand on dépasse le milieu de la chaîne, on retouve les mêmes molécules que dans le cas précédent
        si on les fait pivoter de 180 degrés dans un même plan.
        On minimise donc le numéro de la fonction dans la chaîne quand on écrit le nom de la molécule. */
        else if (position > (Math.ceil(nombre/2)) && positionf > 0) {console.log("cas 3");
            let CH2d ="";
            let CH2f ="";
            for (i=0; i<position-2; i++) {
                CH2d += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }
            for (i=0; i<positionf-1; i++) {
                CH2f += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }
            formulesd.innerHTML = ch3+"<span class='atome2'>-</span>"+CH2f+"<span class='atome'>CHOH</span>"+"<span class='atome2'>-</span>"+CH2d+ch3;
        }
        /* Cas particulier [la fonction est en fin de chaîne 
        (équivalent au début de chaîne car on peut numéroter dans les 2 sens)]*/
        else if (positionf == 0) {
        let CH2 ="";
            for (i = 0; i<nombre-2; i++) {
                CH2 += "<span class='atome'>CH</span>"+2+"<span class='atome2'>-</span>";
            }
            formulesd.innerHTML = ho+"<span class='atome2'>-</span>"+ch2+"<span class='atome2'>-</span>"+CH2+ch3;
        }
        else {
            formulesd.innerHTML ="";
        }
    }
}

/*
 * Requêtes AJAX
 */

/* Fonction qui gère pour les alcanes l'affichage de la représentation de la formule développée de la molécule. */
function genererformuledeveloppeealcane(nombre) {
    /* On fabrique les paramètres de la requêtes AJAX grâce à FormData */
    const paramalcane = new FormData();
    paramalcane.append("nombre", nombre);
    /* On prépare la requête AJAX : URL, méthode et paramètres */
    const requetealcane = fetch('php/formuledevalcane.php', {
        method: 'POST',
        body: paramalcane
    });

    /* On lance la requête AJAX grâce à fetch */
    requetealcane.then(traiterReponseAlcane).then(traiterTexteAlcane).catch(traiterErreurAlcane);
}

/* Cette fonction traite la réponse du serveur */
function traiterReponseAlcane(reponse) {
    return reponse.text();
}

/* Cette fonction traite le texte reçu dans la réponse du serveur */
function traiterTexteAlcane(texte) {
   document.getElementById("formdev").innerHTML = texte;
}

/* Cette fonction traite les cas d'erreur */
function traiterErreurAlcane(texte) {
   alert(texte);
}

/* Fonction qui gère pour les alcènes l'affichage de la représentation de la formule développée de la molécule. */
function genererformuledeveloppeealcene(nombre) {
    let position = posf.value;
    let positionf = nombre - position;
    /* On fabrique les paramètres de la requêtes AJAX grâce à FormData */
    const paramalcene = new FormData();
    paramalcene.append("nombre", nombre);
    paramalcene.append("position", position);
    /* On prépare la requête AJAX : URL, méthode et paramètres */
    const requetealcene = fetch('php/formuledevalcene.php', {
        method: 'POST',
        body: paramalcene
    });

    /* On lance la requête AJAX grâce à fetch */
    requetealcene.then(traiterReponseAlcene).then(traiterTexteAlcene).catch(traiterErreurAlcene);
}

/* Cette fonction traite la réponse du serveur */
function traiterReponseAlcene(reponse) {
    return reponse.text();
}

/* Cette fonction traite le texte reçu dans la réponse du serveur */
function traiterTexteAlcene(texte) {
   document.getElementById("formdev").innerHTML = texte;
}

/* Cette fonction traite les cas d'erreur */
function traiterErreurAlcene(texte) {
   alert(texte);
}

/* Fonction qui gère pour les alcynes l'affichage de la représentation de la formule développée de la molécule. */
function genererformuledeveloppeealcyne(nombre) {
    let position = posf.value;
    let positionf = nombre - position;
    /* On fabrique les paramètres de la requêtes AJAX grâce à FormData */
    const paramalcyne = new FormData();
    paramalcyne.append("nombre", nombre);
    paramalcyne.append("position", position);
    /* On prépare la requête AJAX : URL, méthode et paramètres */
    const requetealcyne = fetch('php/formuledevalcyne.php', {
        method: 'POST',
        body: paramalcyne
    });

    /* On lance la requête AJAX grâce à fetch */
    requetealcyne.then(traiterReponseAlcyne).then(traiterTexteAlcyne).catch(traiterErreurAlcyne);
}

/* Cette fonction traite la réponse du serveur */
function traiterReponseAlcyne(reponse) {
    return reponse.text();
}

/* Cette fonction traite le texte reçu dans la réponse du serveur */
function traiterTexteAlcyne(texte) {
   document.getElementById("formdev").innerHTML = texte;
}

/* Cette fonction traite les cas d'erreur */
function traiterErreurAlcyne(texte) {
   alert(texte);
}

/* Fonction qui gère pour les alcools l'affichage de la représentation de la formule développée de la molécule. */
function genererformuledeveloppeealcool(nombre) {
    let position = posf.value;
    let positionf = nombre - position;
    /* On fabrique les paramètres de la requêtes AJAX grâce à FormData */
    const paramalcool = new FormData();
    paramalcool.append("nombre", nombre);
    paramalcool.append("position", position);
    /* On prépare la requête AJAX : URL, méthode et paramètres */
    const requetealcool = fetch('php/formuledevalcool.php', {
        method: 'POST',
        body: paramalcool
    });

    /* On lance la requête AJAX grâce à fetch */
    requetealcool.then(traiterReponseAlcool).then(traiterTexteAlcool).catch(traiterErreurAlcool);
}

/* Cette fonction traite la réponse du serveur */
function traiterReponseAlcool(reponse) {
    return reponse.text();
}

/* Cette fonction traite le texte reçu dans la réponse du serveur */
function traiterTexteAlcool(texte) {
   document.getElementById("formdev").innerHTML = texte;
}

/* Cette fonction traite les cas d'erreur */
function traiterErreurAlcool(texte) {
   alert(texte);
}
