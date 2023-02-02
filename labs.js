// JSF1 Coding Challenge #1

// mass in kg, height in meters

//Marks weights 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
//Johns weights 95 kg and is 1.88 m tall. John weighs 85 kg and is 1.76 m tall.

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

