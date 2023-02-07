// JSF1 Coding Challenge #1
//https://sites.google.com/site/tyroneunblockedgame/drift-hunters
// mass in kg, height in meters

//Marks weights 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
//Johns weights 95 kg and is 1.88 m tall. John weighs 85 kg and is 1.76 m tall.

/*

marks_mass = 78;
marks_height = 1.69;
marks_BMI = marks_mass / marks_height ** 2;

johns_mass = 92;
johns_height = 1.95;
johns_BMI = johns_mass / johns_height ** 2;

console.log("marks_BMI", marks_BMI)
console.log("marks_mass", marks_mass)
console.log("marks_height", marks_height)

console.log("johns_BMI", johns_BMI)
console.log("johns_mass", johns_mass)
console.log("johns_height", johns_height)

console.log("Is John's bmi greater then marks?", johns_BMI > marks_BMI)

  ///////////////////////////////
 // Coding Challenge #2/////////
///////////////////////////////

function precise(x) {
    return x.toPrecision(4);
}

if (marks_BMI > johns_BMI) {
    console.log(`Mark's BMI ${precise(marks_BMI)} is higher than John's ${precise(johns_BMI)}!`)
}


else {
    console.log(`John's ${precise(johns_BMI)} is higher than Mark's BMI ${precise(marks_BMI)} !`)
}

*/

/////////////////////////////////
// Coding Challenge #3///////////
/////////////////////////////////

let dolphins_average;
let koalas_average;

let Number(dolphins_round1) = alert(prompt("Dolphins score round 1"));
let Number(dolphins_round2) = alert(prompt("Dolphins score round 2"));
let Number(dolphins_round3) = alert(prompt("Dolphins score round 3"));

dolphins_average = (dolphins_round1 + dolphins_round2 + dolphins_round3)/3
alert((`Dolphins average ${dolphins_average}`));