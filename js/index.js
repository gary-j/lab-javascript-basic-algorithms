// Iteration 1: Names and Input
let hacker1 = 'Gary'; //Driver
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Sara'; // Navigator
console.log(`The Navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// 1. Avoir la longueur des noms
let numChar1 = hacker1.length;
let numChar2 = hacker2.length;
// 2. Comparer
// 3. Afficher la phrase

if(numChar1 > numChar2){
    console.log(`The driver has the longest name, it ${numChar1} characters.`);
}else if(numChar1=numChar2){
    console.log(`Wow, you both have equally long names, ${numChar1} characters!`)
} 
else{
    console.log(`It seems that the navigator has the longest name, it has ${numChar2} characters.`);
}

// Iteration 3: Loops
console.log(hacker1.toUpperCase())

// 1. Mettre le nom en CAPITAL
// 2. Mettre un espace entre les lettres
let espace = [];
let space ='';

for(let i=0; i<numChar1; i++){
    espace.push(hacker1[i].toUpperCase() + " ");
    space += hacker1[i].toUpperCase() + " ";
}
console.log(espace);
console.log(space);


// reverse  ex : 'Sara' => araS

let reverse = '';
for(i=numChar2 -1 ; i>=0; i--){
reverse += hacker2[i];
}
console.log(reverse);

// 3.3 Depending on the lexicographic order of the strings, print:
let compare = hacker1.localeCompare(hacker2);

switch(compare){

    case -1 : 
        console.log("The driver's name goes first.");
        break;
    case 1 :
        console.log("Yo, the navigator goes first definitely.");
        break;
    case 0 :
        console.log("What?! You both have the same name?");
        break;
    default :
    console.log("something get wrong !");
    break;
}

// Bonus 1 :
let lorem = `
Quisque ut turpis sollicitudin, et sollicitudin massa non, elementum felis. Nunc metus magna, pretium sed varius vel, mattis sed nunc. Sed sollicitudin mi placerat, convallis metus in, ultrices nulla. Proin vehicula arcu quis magna sollicitudin, vel varius orci commodo. Nulla hendrerit ante non urna vehicula bibendum. Duis pharetra quam libero, in mattis nisi convallis nec. Sed sollicitudin dapibus arcu, nec ullamcorper tortor tristique vitae. Cras quis rhoncus lectus. Maecenas eleifend justo non eros lobortis pretium. Sed a arcu nulla. Etiam dignissim metus at ex sollicitudin volutpat eget eget turpis.

Praesent vitae dui sit amet est cursus placerat ut ac est. Praesent nec elementum massa. Nam a justo rhoncus, consectetur nulla sit amet, sollicitudin justo. Aliquam tristique gravida ipsum, non varius quam finibus eget. Vivamus semper gravida nunc, ut elementum lectus. Sed non tincidunt magna. Phasellus lacinia imperdiet gravida. Vestibulum nec fermentum massa. Pellentesque aliquam sed est in laoreet. Nullam nec mi sem. Praesent auctor lectus urna. Sed semper lobortis egestas. Integer consectetur dui non nunc mattis auctor.

Aenean a egestas nisl, nec pharetra et nisi. Sed justo tortor, lacinia vitae gravida vel, mollis ac lacus. Vestibulum dui augue, varius non placerat ut, euismod ut ipsum. Sed leo erat, tempus non accumsan quis, blandit nec eros. Quisque vestibulum leo odio. Sed semper mi eget orci fermentum bibendum. Vivamus vestibulum scelerisque malesuada. Integer ex leo, fermentum at nunc sit amet, tristique mattis enim. Nulla facilisi. Phasellus non commodo eros, vel interdum lorem. Cras nibh mi, porttitor a libero quis, cursus varius massa. Maecenas id lobortis purus.
`;


function countWords(text){
    let totalWords = 0;
    for(let i=0; i<text.length; i++){
        if(text[i]===' '){
            totalWords++;
        }
    }
    console.log("Il y a "+totalWords+" mots.");
    return totalWords;
}

countWords(lorem);

function etCount(text){
    let etTotal = 0;
    let separator = " " || "." || "," || "!";
    for(let i=0; i<text.length; i++){
        if(text[i]==='e' && text[i+1]==='t' && text[i+2]===separator && text[i-1]===separator){
            etTotal++;
        }
    }
    console.log(`Le mot 'et' apparait ${etTotal} fois`);
    return etTotal;
}

etCount(lorem);

// Bonus 2 :

let phraseToCheck = "Amor, Roma";

console.log(phraseToCheck[0]);
console.log(phraseToCheck[phraseToCheck.length -1]);



function isPalindrom(text){

    let lower = text.toLowerCase();
    console.log(lower[lower.length -1] + " : lower.length");
    console.log(lower[0] + " : test");

    for(let i=0; i<lower.length; i++){
        if(lower[i] === (lower[lower.length -1] -i)){
            console.log("ok");
        }
        else{
            console.log('probleme');
        }
    }
}

isPalindrom(phraseToCheck);