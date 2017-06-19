//### Employee Array
//Each employee array currently is configured in this way:

//* The first index holds the employees name.
//* The second index has their employee number.
//* The third index contains their annual salary.
//* The fourth index contains their review rating.


var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];


var bonus = function (employee) {
  for (i=0; i < employees.length; i++){
  var bonusCheck = [];
  bonusCheck[0] = employee[i][0];

 if (employee[i][3] < 3) {
    bonusCheck[1]= 0;
  }
  else if (employee[i][3] === 3) {
    bonusCheck[1]= 4;
  }
  else if (employee[i][3] === 4) {
    bonusCheck[1]= 6;
  }
  else if (employee[i][3] === 5) {
    bonusCheck[1]= 10;
  }

 if (employee[i][1].length === 4) {
    bonusCheck[1] += 5;
  }

 if(employee[i][2] > 65000){
      bonusCheck[1] -=1;
  }

 if(bonusCheck[1]>13){
    bonusCheck[1]=13;
  } else if (bonusCheck[1]<0) {
  bonusCheck[1] = 0;
  }

 bonusCheck [3] = Math.round(employee[i][2]*(bonusCheck[1]/100));

 bonusCheck[2] = bonusCheck[3] + Number.parseInt(employee[i][2]);

 console.log(bonusCheck);
}
};

bonus(employees);

//could add variables to make code easier to read
//var rating = employee[3];
//var bonusPercent = bonusCheck[1];
