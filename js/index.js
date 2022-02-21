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




