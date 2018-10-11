//assign fizzBuzz30 an arrow function that does not take any inputs.  fizzBuzz30 should output an array of all the numbers from
//1 through 30 replacing numbers divisible by 3 with 'fizz', numbers divisible by 5 with 'buzz' and numbers divisible by 3 and 5 with
//'fizzbuzz'

let fizzBuzz30 = () => {
    for(let i = 1; i <= num; i++){
      console.log((i % 3 === 0 && i % 5 === 0) ?
                    "fizzbuzz" : (i % 5 === 0 ?
                      "buzz" : (i % 3 === 0 ?
                        "fizz" : i)));
    }
  };




module.exports = fizzBuzz30;