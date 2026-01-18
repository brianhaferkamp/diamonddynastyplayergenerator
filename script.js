var rollResult;
var salary;
var firstName;
var lastName;
var skill;
var age;

// roll dice function
function dice() {
  function die1() {
    var dice = {
      sides: 6,
      roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
      }
    };

    die1Result = dice.roll();
    // console.log("Die 1 result: " + die1Result);
  }

  function die2() {
    var dice = {
      sides: 6,
      roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
      }
    };

    die2Result = dice.roll();
    // console.log("Die 2 result: " + die2Result);
  }

  // roll dice
  die1();
  die2();

  // output die roll result
  rollResult = die1Result + "" + die2Result;
}

// 5-sided die
function die3() {
  var dice = {
    sides: 5,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  };

  die3Result = dice.roll();
  // console.log("Die 3 result: " + die3Result);
}

function getPlayerName() {
  $.ajax({
    url: "https://randomuser.me/api/?inc=name&noinfo&gender=male&nat=us,gb,mx,au,ca,ie,nz",
    dataType: "json",
    success: function (data) {
      var person = data.results;
      // console.log(person);
      firstName = person[0].name.first;
      lastName = person[0].name.last;
      // console.log(firstName + " " + lastName);

      $(".player-name .name").text(firstName + " " + lastName);
    }
  });
}

function getRookieName() {
  $.ajax({
    url: "https://randomuser.me/api/?inc=name&noinfo&gender=male&nat=us,gb,mx,au,ca,ie,nz",
    dataType: "json",
    success: function (data) {
      var person = data.results;
      // console.log(person);
      firstName = person[0].name.first;
      lastName = person[0].name.last;
      // console.log(firstName + " " + lastName);

      $(".rookie-name .name").text(firstName + " " + lastName);
    }
  });
}

function calculateSalary() {
  if (skill <= 3) {
    salary = "$" + skill;
    $(".player-salary .salary").text(salary);
    $(".player-stars .stars").text("");
  } else if (skill == 4) {
    skill = skill + 1;
    salary = "$" + skill;
    $(".player-salary .salary").text(salary);
    $(".player-stars .stars").html("<span>&#x2605;</span>");
  } else if (skill == 5) {
    skill = skill + 2;
    salary = "$" + skill;
    $(".player-salary .salary").text(salary);
    $(".player-stars .stars").html("<span>&#x2605;&#x2605;</span>");
  }
}

function calculateRookieSalary() {
  if (skill <= 3) {
    salary = "$" + skill;
    $(".rookie-salary .salary").text(salary);
  }
}

function getSkill() {
  // run dice() function
  die3();
  // log roll result
  // console.log(rollResult);

  skill = die3Result;

  $(".player-skill .skill").text(skill);
}

function getRookieSkill() {
  // run dice() function
  dice();
  // log roll result
  // console.log(rollResult);

  if (die1Result <= 3) {
    skill = 1;
  } else if (die1Result == 4 || die1Result == 5) {
    skill = 2;
  } else if (die1Result == 6) {
    skill = 3;
  }

  $(".rookie-skill .skill").text(skill);
}

function getAge() {
  // run dice() function
  die3();
  // log roll result
  // console.log(rollResult);

  age = die3Result;

  $(".player-age .age").text(age);
}

function getRookieAge() {
  age = 1;
  $(".rookie-age .age").text(age);
}

// when Generate Player button clicked
$("#generateplayer").on("click", function () {
  // run playerName() function
  getPlayerName();

  // run age() function
  getAge();

  // run skill() function
  getSkill();

  // run calculateSalary() function
  calculateSalary();
});

// when Generate Rookie button clicked
$("#generaterookie").on("click", function () {
  // run playerName() function
  getRookieName();

  // run age() function
  getRookieAge();

  // run skill() function
  getRookieSkill();

  // run calculateSalary() function
  calculateRookieSalary();
});
