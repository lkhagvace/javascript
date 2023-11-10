// // 1 to 100
// for (let too = 1; too <= 100; too++){
//     console.log(`${too}`)
// }

// // even number sum
//  let niilber = 0;
// for (let Ntoo = 1; Ntoo < 6; Ntoo++){
//     if (Ntoo % 2 == 0){
//         niilber += Ntoo;
//     }
// }
// console.log(`${niilber}`)

// // n number sum
// let sum = 0;
// for (let num = 1; num <= 3; num++){
//     sum += num;
// }
// console.log(`${sum}`)


// // number pow

// let n = 8;
// let urjwer = 0;
// let zereg = 0;
// if (n == 0 || n > 1000){
//     console.log("bljmgui")
// } else {
//     while (urjwer < 1000){
//         zereg++;
//         urjwer = n ** zereg
//     } console.log(n, "toonii",zereg, "ni 1000 aas ih baina")
// }

// // bubble sort

// let bubbleSort = [6, 3, 8, 9, 3];
// let x;
// for (let i = 0; i < bubbleSort.length; i++){
//     for (let j = 0; j < bubbleSort.length; j++){
//         if (bubbleSort[j] > bubbleSort[j + 1]){
//             x = bubbleSort[j];
//             bubbleSort[j] = bubbleSort[j + 1];
//             bubbleSort[j + 1] = x;
//         }
//     }
// }
// console.log(bubbleSort)

// // max - min

// let numbers = [1, 3, 5, 22];
// let min = numbers[0];
// let max = numbers[0];
// for(let i = 0; i < numbers.length; i++) {
//     if(min > numbers[i]){
//         min = numbers[i];
//     } 
//     if (max < numbers[i]){
//         max = numbers[i]; 
//     }
// }
// console.log(max - min);


// // left pyramid pattern
// let n = 5;
// let container = "";
// for (let i = 1; i <= n; i++){

//     container += "*";
//     console.log(container)
// }

// // min operation

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// let dundaj = 0;
// let numberOfUildel1 = 0;
// let numberOfUildel2 = 0;
// let sumOfUildel = 0;
// let l = numbers.length

// for (let i = 0; i < l; i++){
//     sum += numbers[i]; 
// }
// dundaj = sum / numbers.length;


// for (let j = 0; j < dundaj; j++){
//     numberOfUildel1++
// }
// for (let k = numbers.length; k >= dundaj; k--){
//     numberOfUildel2++
// }
// sumOfUildel = numberOfUildel1 + numberOfUildel2;

// console.log(sumOfUildel)


// // fibonacci series
// let fiboLen = 10;
// let fiboNumbers = [0,];
// let n = 0;
// let m = 1;
// let sum = 0;

// for(let i = 1; i < fiboLen; i++){
//     sum = n + m;
//     n = m;
//     m = sum
//     fiboNumbers.push(n)
// } 
// console.log(fiboNumbers)





// // is primeNumber
// let primeNumberChecker = 18;
// let sum = 0;
// for (let i = 2; i < ((primeNumberChecker / 2) + 0.5); i++){
    // if (primeNumberChecker % i == 0){
        // for (let j = 0; j < ((primeNumberChecker / 2) + 0.5); j++){
            // if ( primeNumberChecker % j == 0){
            //  sum += j
            // }
        //  }
        // console.log(primeNumberChecker, 'is not PN and sum of dividable numbers of this number is:',sum);
        // break;
    // }
    // if (primeNumberChecker % i != 0){
        // console.log(primeNumberChecker, 'is PN')
    // }
// }



// // palindrom string
// const string = 'momomoom'
// const len = string.length;
// 
// for (let i = 0; i < len / 2; i++) {
// 
    // if (string[i] !== string[len - 1 - i]) {
        // console.log("its not palindrom")
        // break
    // }
// }


// // chess board

// let chessNumber = 9;
// let underLine = '_';
// let chagt = '#';
// let oneLineContainer = ''
// let d = '';

// for (let i = 0; i < chessNumber; i++){
//     for (let j = 1; j <= chessNumber; j++){
//         if (i % 2 == 0 && j % 2 != 0){
//             oneLineContainer += underLine
//         }
//         if (i % 2 == 0 && j % 2 == 0){
//             oneLineContainer += chagt
//         }
//         if (i % 2 != 0 && j % 2 == 0){
//             oneLineContainer += underLine
//         }
//         if (i % 2 != 0 && j % 2 != 0){
//             oneLineContainer += chagt
//         }
        
//     }
//     console.log(oneLineContainer)
//     oneLineContainer ="";
// }