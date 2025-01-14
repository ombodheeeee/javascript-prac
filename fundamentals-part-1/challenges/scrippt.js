const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightMark);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`john's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);



if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('dolphins win the trophy ');
}
else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('koalas win the trophy');
}
else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('both win the trophy!')
} else {
  console.log('No one wins the trophy');
}

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
  bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);