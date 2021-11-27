const mass = [
    {
        username: "Jack",
        age:23
    },
    {
        username: "John",
        age:18
    },
    {
        username: "Nurtazim",
        age:40
    }
]

// for (let i = 0; i < mass.length; i++){
//     let text = `Username: ${mass[i].username}\nAge: ${mass[i].age}`
//     console.log(text)
// }



// const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 12, 1, 2, 3]
// // первый цикл
// for(let i = 0; i < arrayOfNumbers.length; i++){
//     console.log("Its first")
//     console.log(i)
//     for(let j=1; j < arrayOfNumbers.length; j++){
//         console.log(arrayOfNumbers[j])
//     }
// }

let i = 0
while(i < mass.length){
    console.log(i)
    i++;
}