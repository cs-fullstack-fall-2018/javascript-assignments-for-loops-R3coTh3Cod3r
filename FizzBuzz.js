function fizzBuzz() {

} // This function is empty so no point having it
for (var x =1; x<=100; x++){

    if (x % 3 == 0 && x % 5==0){
        console.log('FizzBuzz');
    }
    else if (x % 3 == 0){
        console.log('Fizz');
    }
    else if (x % 5 == 0){


    }
  else {
        console.log(x)

    }
  }

fizzBuzz();

/*

    KEY: Works! Excellent Job!

    
    Didn't prompt for end value though...
    
    The fizzBuzz() function was unecessary as it has an empty body.

    The code still works though from outside of the body.

*/