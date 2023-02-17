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


/////////////////////////////////
// Coding Challenge #3///////////
/////////////////////////////////

// dolphins score calc

let dolphins_average;

let dolphins_round1 = prompt("Dolphins score round 1");
let dolphins_round2 = prompt("Dolphins score round 2");
let dolphins_round3 = prompt("Dolphins score round 3");

dolphins_average = (Number(dolphins_round1) + Number(dolphins_round2) + Number(dolphins_round3))/3

// dolphins score calc

let koalas_average;

let koalas_round1 = prompt("Koalas score round 1");
let koalas_round2 = prompt("Koalas score round 2");
let koalas_round3 = prompt("Koalas score round 3");

koalas_average = (Number(koalas_round1) + Number(koalas_round2) + Number(koalas_round3))/3

if (koalas_average > dolphins_average) {
    alert(`koalas average of ${koalas_average} is greater then the dolphins average of ${dolphins_average}`)
}

else {
    alert(`koalas average of ${koalas_average} is greater then the dolphins average of ${dolphins_average}`)
}
*/

//////////////////////////////
// JSF2 Coding Challenge #1 //
//////////////////////////////

let calcAverage = (_dolphinsScore1,_dolphinsScore2,_dolphinsScore3)

/* messed up (¬_¬")
function calcAverage(dolphinsScore,kosalasScore){
    let currentTeam;
    let currentTeamTotal;
   
    for(let team = 1;team < 2 ; team++){
        if (team == 1){
            currentTeam = dolphinsScore            
        }

        else{
            currentTeam = kosalasScore
        }

        for(let i = 0;i < currentTeam.length ; i++){
            currentTeamTotal += currentTeam[i]
            if (team == 1 && i == (currentTeam.length -1)){
                let avgDolhins = currentTeamTotal / 3
                console.log(avgDolhins)
                return avgDolhins
            }

            else if (team == 2 && i == (currentTeam.length -1)){
                let avgKoalas = currentTeamTotal / 3
                return avgKoalas
            }
        }
        
    }
    checkWinner(avgDolhins, avgKoalas)
}

function checkWinner(avgDolhins, avgKoalas){
    if(avgDolhins >= (avgKoalas*2)| avgKoalas >= (avgDolhins*2)){
        if (avgDolhins >= (avgKoalas*2)){
            console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
        }

        else{
            console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
        }
    }

    else{
        console.log("No winer");
    }

}

calcAverage([44,23,71], [65,54,49])
*/
ddddd