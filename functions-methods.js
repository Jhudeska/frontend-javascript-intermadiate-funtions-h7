// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


const domain1 = getEmailDomain("n.eeken@novi-education.nl");
const domain2 = getEmailDomain("t.mellink@novi.nl");
const domain3 = getEmailDomain("a.wiersma@outlook.com");

function getEmailDomain(email) {

    let domain = "";
if (email !== null){
 if (email.includes("@")) {
     const  atSign = email.indexOf("@");
    domain = email.substring(atSign);
 }

    }
    return domain;
}

console.log(domain1);
console.log(domain2);
console.log(domain3);
console.log();

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

const typeMail1 = typeOfEmail("n.eeken@novi-education.nl");
const typeMail2 = typeOfEmail("t.mellink@novi.nl");
const typeMail3 = typeOfEmail("novi.nlaapjesk@outlook.com");
const typeMail4 = typeOfEmail("a.wiersma@outlook.com");

function typeOfEmail(email) {
    let user = "";

    if (email.includes("@novi-education.nl")) {
        user = "Student";
    }else if (email.includes("@novi.nl")) {
        user = "Medewerker";
    }else{
        user = "Extern";
    }
    return user;
}

console.log(typeMail1);
console.log(typeMail2);
console.log(typeMail3);
console.log(typeMail4);

console.log();


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

const checkMail = checkEmailValidity("n.eeken@novi.nl");
const checkMail1 = checkEmailValidity("tessmellink@novi.nl");
const checkMail2 = checkEmailValidity("n.eekenanovi.nl");
const checkMail3 = checkEmailValidity("n.eeken@novinl.");
const checkMail4 = checkEmailValidity("tessmellink@novi,nl");

function checkEmailValidity(email) {
    let valid =  false;

    if (email.includes("@")) {
        if (!email.includes(",")){
            if ((!email.endsWith(".")) || (!email.endsWith(","))) {
                valid = true;
            }
        }
    }
    return valid;
}

console.log(checkMail);
console.log(checkMail1);
console.log(checkMail2);
console.log(checkMail3);
console.log(checkMail4);

console.log();