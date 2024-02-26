console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


function printOdds(count){       //const printOdds = (count) =>{
    if(count < 0){               //everything inside
for(let i=0; i>=count; i--){    // }
    if(i%2 !== 0){
       console.log(i);
    }
  }
}else{
    for(let i=1; i<=count; i++){
        if(i%2 !== 0){
            console.log(i);
        }
    }
  }
}
printOdds(-15);
printOdds(15);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen = (`Congrats ${userName}, you are old enough to drive!`);
    let belowSixteen = (`Sorry ${userName}, you have to wait unitl you're 16 to drive and that will be ${16-age} years.`)
  
    if(age >= 16){
    console.log(aboveSixteen);
   }else{
    console.log(belowSixteen);
}
}
checkAge("Gage", 14);
checkAge("Leanne", 39);
checkAge("Jason", 48);

// function rightAge(age, neededAge){
//     return age >= neededAge
// }

// function checkedAge(name, age){
//     let votingAge = rightAge(age, 18);
//     let drinkingAge = rightAge(age, 21);
//     let retiringAge = rightAge(age, 62);

// if(retiringAge){
//     console.log(`${name} you are old enough to retire.`);
// }else if(drinkingAge){
//     console.log(`${name} you are old enough to drink.`);
// }else{
//     console.log(`${name} you are only old enough to vote.`)
// }
// }

// checkedAge("Gage", 19);
// checkedAge("Betty", 80);
// checkedAge("Vanessa", 22);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function cartesianPlane(x,y){
    if(x > 0 && y > 0){
        console.log(`(${x}, ${y}) is in the first quadrant`);
    }
    else if(x < 0 && y > 0){
        console.log(`(${x}, ${y}) is in the second quadrant.`);
    }
     else if(x < 0 && y < 0){
        console.log(`(${x}, ${y}) is in the third quadrant.`);
    }
    else if(x > 0 && y < 0){
        console.log(`(${x}, ${y}) is in the fourth quadrant.`);
    }
    else if( y == 0 && x !==0){
        console.log("This point is on the x axis.");
    }
    else if(x == 0 && y !==0){
        console.log("This point is on the y axis.");
    }else{
        console.log("Origin");
    }
    
}
cartesianPlane(2,1);
cartesianPlane(-2,1);
cartesianPlane(-2,-1);
cartesianPlane(2,-1);
cartesianPlane(0,-1);
cartesianPlane(-1,0);
cartesianPlane(0,0);


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangle(x,y,z){                //const triangle = (x,y,z) => x+y > z && x+z > y && y+z > x;
     return x+y > z && x+z > y && y+z > x   
}
function whatKind(x,y,z,){              //const whatKind = (x,y,z) => {
let realTriangle = triangle(x, y, z);   //everything inside 
    if(realTriangle){                   //}
     if(x == y && y == z){
        return "equilateral triangle";
     }else if(x == y || x == z || y == z){
       return "isoceles triangle";
     }else{
       return "scalene triangle"
     }
    }else{
      return "Not a valid triangle."
    }
}
  console.log(whatKind(2,2,2));
  console.log(whatKind(1,2,2));
  console.log(whatKind(2,3,4));
  console.log(whatKind(1,2,1));
  




// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function phonePlan(planLimit, day, usage){
  let planLength = 30; 
  let avgDailyUse = usage/day;
  let targetMonthlyUse = planLimit; 
  let targetDailyUse = planLimit/planLength;
  let overUnder= planLimit/day;
  
  console.log(`${day} day(s) have been used, which means there are ${planLength-day} day(s) remaining.`)
  console.log(`Average daily use is ${avgDailyUse.toFixed(2)}.`)
  if(avgDailyUse > targetDailyUse){
    console.log(`You are exceeding your target daily average use of ${targetDailyUse.toFixed(2)} GB per day. If you continue at this rate you will exceed your plan by ${overUnder.toFixed(2)} GB this month.To stay below your data plan, use no more than ${targetDailyUse.toFixed(2)} GB per day or ${targetMonthlyUse} GB per month.`)
  }else if(avgDailyUse == targetDailyUse){
    console.log(`You are exactly where you're supposed to be with your data (at or under) ${overUnder} GB per day.`)
  }else{
    console.log(`You are doing great and shouldn't go over as long as you stay at or below ${targetDailyUse.toFixed(2)} GB/day and ${targetMonthlyUse.toFixed(2)} GB per month.`)
  }
}

phonePlan(30, 15, 15)
