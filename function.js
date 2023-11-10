// // toonii 3n zereg



// let cube = (x) => {
//     return Math.pow(x, 3)
// }
// console.log(cube(2))



// // area of triangle



// let areaOfTriangle = (a, b, c) => {
//     let perimeter = 0;
//     let area = 0;
//     perimeter = (a + b + c)/2;
//     area = Math.pow((perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c)), 0.5);
//     return area
// }
// console.log(areaOfTriangle(3, 4, 5))






// // x^2 + 5x + 6


// let func = (x) => {
//     return x ** 2 + 5 * x + 6
// }
// console.log(func(2))






// // medium

// 10 9 2 5 3 7 101 18
// increasing array 2 3 5 7 101
// 0 1 0
// 0 1
// subsequence without changing element order


// // find the long
// 1 -2 3 0;
// 1 - 2 + 3 = 2;
// 3 + 4 - 1 + 2 + 1 = 9
// 


// let longestWord = (string) => {
//     let stringg = string.split(" ");
//     let longest = 0;
//     let longest_word = null;
//     for (let i = 0; i < stringg.length; i++) {
//   if (longest < stringg[i].length) {
//     longest = stringg[i].length;
//     longest_word = stringg[i];
//   }
//     }
//     return longest_word;
//   };
   
//   console.log(longestWord("Hello guys this is me"));


// // mini calculator

// let niilber = (a, b) => {
//     let sum = 0;
//     sum = a + b;
//     return  sum
// }
// let ylgawar = (a, b) => {
//     let ylgawar = 0;
//     ylgawar = a - b;
//     return ylgawar
// }
// console.log(niilber(1, 2))
// console.log(ylgawar(1, 2))


// // palindrom

// var stringReverser = (str) => {
//     var ReversedWordContainer = "";
//     for (var i = str.length - 1; i >= 0; i--){
//         ReversedWordContainer += str[i]
//     }
//     return ReversedWordContainer;
// }

// let IsItPalindrom = (string) => {
//     var reservedWord = "";
//     reservedWord = stringReverser(string);
//     console.log(reservedWord)
//     if (reservedWord == string){
//         return "true"
//     } else {
//         return "false"
//     }
// }
// console.log(IsItPalindrom("mum"))




// // remove dawhtsal
erase("aaaaabbbcccd")
function erase(string) {
  const array = string.split("");
  let l = array.length ;
  for (let i = 0; i <= l; i++) {
    for (let j = 0; j <= l; j++) {
      if (array[i] == array[j]) {
        if(i == j){
          continue;
        }
        array.splice(j, 1)
     }
    }
   }
console.log(array);
return array;
}



// find the number


// let findANumber = (x) => {
//     return array.indexOf(x)
// }


// const x = 9
// let number = 0;
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// number += findANumber(x);
// console.log(number)

// factorial


// let factorial = (x) => {
//     let result = 1;
//     if (x > 0){
//         for (let i = 1; i <= x; i++){
//             result *= i
//         }
//     }
//     return result
// }


// let n = 6;
// if (n > 0){
//     let hariu = factorial(n);
//     console.log(hariu)
// }

// function remVowel(str) 
// { 
//     let vowels = [ 'a', 'e', 'i', 'o', 'u', 
//                'A', 'E', 'I', 'O', 'U' ]; 
//     let result = ""; 
      
//     for(let i = 0; i < str.length; i++)  
//     { 
          
//         if (!vowels.includes(str[i])) 
//         { 
//             result += str[i]; 
//         } 
//     } 
//     return result; 
// } 
// console.log(remVowel("hi it is me"))




// // recursive tree sum

// let treeSum = {
//     value: 1,
//     children: 
//     [
//          { 
//             value: 2, children: [ { value: 3 }, { value: 4 }, ], 
//          }, 
//          {
//              value: 5, children: 
//              [
//                  { value: 6 },
//                   { value: 7, children: 
//                     [
//                          { value: 8 }, { value: 9 }, 
//                     ],
//                   }, 
//              ], 
//         } 
//     ]
// }

// let flattedArray = treeSum.children.flat();
// console.log(flattedArray)