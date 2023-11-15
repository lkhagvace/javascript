// // acsending order

// const numbers = {a:13,b:21,c:3};

// const sortable = Object.fromEntries(
//     Object.entries(numbers).sort(([,a],[,b]) => a-b)
// );

// console.log(Object.keys(sortable));




// // array reverse

// const person = {
//     firstName: 'Lkhagvasuren',
//     lastName: 'Orgilsaikhan'
// }
// if (person.firstName === '' || person.lastName === ''){
//     person.firstName = '';
//     person.lastName = '';
// }
// let lastNameContainer = person.lastName.toUpperCase()
// console.log(person.firstName,lastNameContainer)



// // read me

// // 1 and 2
// let checkArray = [1, 2, 3, 4];
// let n = 2;
// let ArrayNumberContainer = '';
// for(let i = 0; i < checkArray.length; i++){
//     if (n == checkArray[i]){
//         console.log("yes", n, "iin too ni ug arraydiin", checkArray.indexOf(checkArray[i]), "deh index bn")
//     }
// }

// let checkArray3 = [1, 2, 3, 4];
// let n3 = 2;
// for (let j = 0; j < n3; j++){
//     checkArray3.pop(checkArray3[j])
// }
// console.log(checkArray3)


// let checkArray4 = [1, 2, 3, 4];
// let n4 = 2;
// for (let j = 0; j < n4; j++){
//     checkArray4.shift(checkArray4[j])
// }
// console.log(checkArray4)

// // 5

// let str1 = 'monstar';
// let str2 = str1.split("");

// str2.pop()
// console.log(str2.toString().replaceAll(',', ''))


// // 6
// let n = 2;
// let array = [1, 2, 3, 4, 5];
// for(let i = 0; i < array.length; i++){
//     if (i == n){
//         console.log(array.toString().replace(i, '').replace(',', '', -1))
//     }
// }


// // 7

// let array1 = [1,2,3,4,5];
// let array2 = [6,7,8,9,10];
// let combinedArray = [];
// combinedArray = array1 + ',' + array2
// console.log(combinedArray)


// // 8

// let array = ['a', 1, 'b', 2];
// let numbersArrey = [];
// let stringsArray = [];
// for (let i = 0; i < array.length; i++){
//     if (array[i] = String){
//         stringsArray.push[array[i]]
//     }
//     if (array[i] = Number){
//         numbersArrey.push[array[i]]
//         console.log(numbersArrey[i])
//     }
//     console.log(stringsArray, numbersArrey)
// }


// let array = [
//     {firstName: 'Lkhagva', lastName: 'Orgil'},
//     {firstName: 'Duk', lastName: 'Orgil'}
// ];
// let newArray = [];
// for (let i = 0; i < array.length; i++){
//     newArray[i] = array[i].firstName
// }

// console.log(array.map(el => el.firstName))

// console.log(array.filter((el) => el.firstName === 'Lkhagva'))




// map 1

// let array = [2, 3, 4, 5];
// console.log(array.map(function (el){
//     return el * 2
// }))
// console.log(array.map(el => el * 2))

// map 2

// let celcius = [10];
// console.log(array.map(function (el){
//     return el * 1.8 + 32
// }))
// console.log(celcius.map(el => el * 1.8 + 32))

// map 3
// let array = [2, 3, 4, 5];
// console.log(array.map(function (el) {
//     return el ** 2
// }))
// console.log(array.map(el => el ** 2))

// map 4

// let array = ["lkhagva"];
// console.log(array.map(function (el) {
//     return el.toUpperCase()
// }))
// console.log(array.map(el => el.toUpperCase()))

// map 5

// let array = [{firstName: 'Lkhagva', lastName: 'Orgil'}];
// console.log(array.map(function (el) {
//     return el.firstName.charAt(0) + el.lastName.charAt(0)
// }))
// console.log(array.map(el => el.firstName.charAt(0) + el.lastName.charAt(0)))


// filter 1

// let array = [2, 3, 4, 5];
// console.log(array.filter(function (el){
//     return el % 2 === 0
// }))
// console.log(array.filter((el) => el % 2 === 0))

// filter 2

// let array = [-2, 3, -4, 5];
// console.log(array.filter((el){
//     return el > 0
// }))
// console.log(array.filter((el) => el > 0))

// filter 3

// let array = ['monster', 'ride', 'mom'];
// let n = 3;
// console.log(array.filter((el) => el.length > n))
// console.log(array.filter(function(el){
//     return el.length > n 
// }))


// filter 4


const array = [1, 2, 3, 4, 5, 6, 8, 11, 22, 33];
const IsItPrimeNumber = (x) => {
    if (x === 1) return false
    for (let i = 2; i < x; i++){
        if (x % i === 0) return false
    }
    return true;
};
console.log(array.filter(function (el){
    return IsItPrimeNumber(el)
}))
// console.log(array.filter(el => IsItPrimeNumber(el)))


// filter 5

// let array = ['monster', 'ride', 'mom'];
// console.log(array.filter(function (el){
//     return el[0] == "m"
// }))
// console.log(array.filter((el) => el[0] == "m"))