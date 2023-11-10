// array easy

// boglogo1

// numbers = [10, 20, 30, 40];
// let sum = 0;
// let avarage;
// for (i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }
// avarage = sum / numbers.length
// console.log(avarage)

//bodlogo2 fibonacci

// let fiboNumbers = [0,];
// let n = 0;
// let m = 1;
// let sum = 0;

// for(let i = 0; i < 100; i++){
//     sum = n + m;
//     n = m;
//     m = sum
//     fiboNumbers.push(n)
//     console.log(i,':',n)
// } console.log(fiboNumbers)



//bodlogo3

// numbers = [10, 20, 30, 40, 50];
// numbers.pop();
// numbers.push(60);
// console.log(numbers)

//bodlogo4

// let numbers = [2, -3, 5, 6, -8, 10];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > 0 && numbers[i] % 2 == 0){
//         sum += numbers[i]
//     }
// } 
// console.log(sum)













//array medium





// chunk

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let arrays = 3;
// const result = [];
// for (let i = 0; i < numbers.length; i += arrays){
//     result.push(numbers.slice(i, i + arrays))
// } console.log(result)


//find max and min

// let numbers = [1, 3, 5, 22, 89, 46, 17, 31];
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
// console.log(max, min);

//sort an array

// const numbers = [5, 100, 3, 2, 1];
// for (let i = 0; i < numbers.length; i++){
//     for (let j = 0; j < numbers.length; j++)
//         if (numbers[i] < numbers[j]){
//             var d = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = d;
//         }
    
// } console.log(numbers)










// array hard




// find special



// const specialNumbers = [1, 2, 4, 7, 8];
// const evenNumbers = [];
// const oddNumbers = [];
// let d = 0;
// for (let i = 0; i < specialNumbers.length; i++)
// {
//     if (specialNumbers[i] % 2 != 0){
//         oddNumbers.push(specialNumbers[i])
//     } 
//     if (specialNumbers[i] % 2 == 0) {
//         evenNumbers.push(specialNumbers[i])
//     }
//     } 
//     if (evenNumbers.length > oddNumbers.length){
//         for (let j = 0; j < specialNumbers.length; j++){
//             if (specialNumbers[j] % 2 != 0){
//                 console.log(specialNumbers.indexOf(specialNumbers[j]))
//             }
//         }
//     } 
//     if (oddNumbers.length > evenNumbers.length) {
//         for (let k = 0; k < specialNumbers.length; k++){
//             if (specialNumbers[k] % 2 == 0){
//                 console.log(specialNumbers.indexOf(specialNumbers[k]))
//             }
//         }
//     }
//     if ( oddNumbers.length == evenNumbers.length){
//         console.log("there is no speacial number")
// }





// check magic cube



// const cubeCheck = [
//     [2, 7, 6],
//     [9, 5, 1],
//     [4, 3, 8],
// ]
// const sum = [0, 0, 0];
// const sum1 = [0, 0, 0];
// let sum3 = 0;
// let sum4 = 0;
// for (let i = 0; i < cubeCheck.length; i++){
//     for (let j = 0; j < cubeCheck.length; j++){
//         sum[i] += cubeCheck[i][j];
//     }
// }
// for (let k = 0; k < cubeCheck.length; k++){
//     for (let m = 0; m < cubeCheck.length; m++){
//         sum1[k] += cubeCheck[m][k]
//     }
// }
// sum4 += cubeCheck[0][2] + cubeCheck[1][1] +cubeCheck[2][0]

// for (let t = 0; t < cubeCheck.length; t++){
//     sum3 += cubeCheck[t][t]
// }
// console.log(sum[0],sum[1],sum[2],sum1[0],sum1[1],sum1[2], sum3 ,sum4)
// for (let f = 0; f < cubeCheck.length; f++){
//     for (let g = 0; g < cubeCheck.length; g++){
//         if(sum[f] == sum1[g] && sum3 == sum4 && sum[f] == sum3 && sum[f] == sum4 && sum1[f] == sum3 && sum1[f] == sum4){
//             var d = "yes"
//         }
//         else d = "no"
//     }
// }
// console.log(d)
// console.log(sum[0],sum[1],sum[2],sum1[0],sum1[1],sum1[2], sum3 ,sum4)