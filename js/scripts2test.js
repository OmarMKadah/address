//write a for loop that prints "hello" 10 times
function testLoop1() {
  for (i=0; i<10; i+=2){
  console.log("Hello")
  }
}
//write a for loop that prints "hello" user inputted times;
function testLoop2(userInput) {
  var result = 0
  for (var i = 0; i < userInput; i+=1) {
    result += 1;
    console.log(result);
  }
  return result;
}
//write a for loop that counts from 0 - 100 evens only and prints to console.
function testLoop3(){
  for (i=0; i<=100; i+=2){
    console.log(i);
  }
}
//write a for loop that counts from 100 -> 0 by 5's

function testLoop4() {
  for (i=100; i>=0; i-=5){
    console.log(i);
  }
}

var testArray = ["Hello", 2, "this is an array", false];



function testLoop5 (userInput) {
  for (i=0; i<userInput.length; i+=1) {
    console.log(testArray[i])
  }
}

testLoop5(testArray);

//write a for loop that prints each index of an array

// testLoop1;
// testLoop1();

// testLoop2(2);
// testLoop2(6); //expect hello x 16;

// testLoop4();
