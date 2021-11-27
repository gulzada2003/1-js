for (i = 1; i<=100; i++){
    if (i%3 === 0){
        console.log('Fizz')
        console.log(i)
    }
    else if (i%5 === 0){
        console.log('Buzz')
        console.log(i)
    }
    else if (i%5===0 && i%3===0){
        console.log('FizzBuzz')
        console.log(i)
    }
    else {
        console.log ('This number cant be divided by 5 or 3')
        console.log(i)
    }
} 