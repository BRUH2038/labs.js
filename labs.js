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
/* messed up (¬_¬")
let calcAverage = (_dolphinsScore1,_dolphinsScore2,_dolphinsScore3)

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
/* 
//////////////////////////////
// JSF2 Coding Challenge #3 //
//////////////////////////////

const john = {fullName: "John Smith",
 mass: 92,
 height: 1.95,
}

const mark = {fullName: "Mark Miller",
 mass: 78,
 height: 1.69,
}

function calcBMI(mass, height){
    BMI = mass / height ** 2;
    return BMI;
}

const johnBMI = calcBMI(john.mass, john.height);
const markBMI = calcBMI(mark.mass, mark.height);

console.log(johnBMI)
console.log(markBMI)

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI.toPrecision(4)}% is higher than John's ${johnBMI.toPrecision(4)}%!`)
}

else {
    console.log(`John's ${johnBMI.toPrecision(4)}% is higher than Mark's BMI ${johnBMI.toPrecision(4)}%!`)
}

//////////////////////////////////////////////////////////////
/// JSF2 Coding Challenge #4                           //////
////////////////////////////////////////////////////////////

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

*///////////////////////////////////////////////////////////////////////////
/// Data Structures, Modern Operators and Strings Coding Challenge #1//////
//////////////////////////////////////////////////////////////////////////

let players1 = [];
let players2 = [];
let allPlayers = [];

const game = {

    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',

    players: [
    [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
    ],

    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
    ],
],
score: '4:0',
scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
date: 'Nov 9th, 2037',
odds: {
    team1: 1.33, //12%
    x: 3.25, //29.33%
    team2: 6.5, //58.66%
},
};

for(let i = 0; i < game["players"].length; i++){

    for (let x = 0; x < game["players"][i].length; x++){
        if (i == 0){
            players1.push(game["players"][i][x])
        }
        else if (i == 1){
            players2.push(game["players"][i][x])
        }
        console.log(i)
        console.log(x)
        console.log(game["players"][i][x])
        allPlayers.push(game["players"][i][x])
    }
}

let players1Final = players1;
let players2Final = players2;

let gk1 = game["players"][0][0];
let gk2 = game["players"][1][0];

players1Final.push('Thiago', 'Coutinho', 'Perisic')
players2Final.push()
console.log(players1Final)
console.log(players2Final)

let randomWin = Math.floor(Math.random() * 100) + 1;
console.log(randomWin)

function printGoals(players){
    if (randomWin == 12){
        let teamWon = 'team1 won!';  
    }

    else if(randomWin == 30){
        let teamWon = 'draw';  
    }

    else{
        let teamWon = 'team2 won!';  
    }
};
printGoals