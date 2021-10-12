// var mObj = [{
//     // name: John,
//     score: 98
//    },{
//     // name: Alice,
//     score: 99
//    },{
//     // name: Johnathan,
//     score: 90
//    }]

//    function asc(val1, val2){
//        if(val1 > val2){
//         return 1
//        } 
//        else if(val1 < val2){
//            return -1
//        }
//        else{
//            return 0;
//        }
//    }
//    console.log(mObj.sort(asc))



// var mArr = [1, 2, 3, 4];
// mArr.concat([5, 6, 7]);
// mArr.concat(8, 9);
// mArr.push(10, 11, 12);
// console.log(mArr);


// var mArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(mArr.splice(2,3,13,14,15))
// console.log(mArr)

// console.log(mArr.splice(mArr.length-3 ,3))
// console.log(mArr)



// 1. Replace 3, 4 and 5 by 13, 14 and 15.
// 2. Remove 7, 8 and 9.


// Find the smallest number from the following array: [13, 40, 10, 5, 1, 12, 24];

// mArray=[13, 40, 10, 5, 1, 12, 24]

// var lessNumber = mArray[0];
// for(var i=0; i<=mArray.length-1; i++){
//     if(mArray[i]<=lessNumber){
//         lessNumber=mArray[i];

//     }
// }
// console.log(lessNumber)



// function greet(firstname, lastname, gender ){
//    var sex=(gender==="m")? "Mr" : "Miss"
//     console.log(`Welcome ${sex} . ${firstname} ${lastname}`)
// }

// greet("Madhu","Tammisetti","m")
// greet("vijaya","durga","f")


// function getSum(num1, num2){
//     var result = num1+num2;
//     console.log(result)
// }

// function outerfunc(){
//     getSum(10,20)
// }

// setTimeout(outerfunc,5000);


// function outerfunc(){
//     console.log(i)
// }

// for(var i=0; i<5; i++){
//     setTimeout(outerfunc,2000)
// }


//CountDownTimer

//  var timecounter= document.getElementById("counter")
// timecounter.style.fontSize= "150px";
// var body = document.getElementById("bodyid")
// var newpara = document.createElement('p')
// newpara.innerHTML="Timer!!!"
// body.appendChild(newpara)
// newpara.style.fontSize="24px";
// newpara.style.textAlign="center";



// function printTIme(){
//     if(timecounter.innerText>0){
//         timecounter.innerText-=1
//         console.log(timecounter.innerText)
//         body.style.backgroundColor=colorize() 
//         newpara.innerHTML="Timer Has Started!!!"
//     }
//     else{
//         newpara.innerHTML="Timer End"
//     }
// }



// function colorize(){
//        const r= Math.floor(Math.random()*255);
//        const g = Math.floor(Math.random()*255);
//         const b = Math.floor(Math.random()*255);
//          return `rgb(${r},${g}, ${b})`;
//      }



// setInterval(colorize,1000)
// setInterval(printTIme,1000)


// //VideoGrid using javascript..
// var body = document.getElementById("bodyid")
// var header = document.createElement("h1");
// header.innerHTML="Video Grid Using JavaScript";
// body.appendChild(header);
// header.style.fontFamily =  'Poppins', sans-serif;
// header.style.color="green"

// var videocard = document.createElement('')

/// check weather the given number is prime or not .

// const isPrime =n=>{
//     if(n<2){
//         return console.log("Entered NUmber is Not a Prime Number")
//     }
//     for(let i=2 ; i<n ;i++){
//         if(n % i === 0){                       // it will check for every number upto n , so if any one divisibe by any number is 0 then it says it has 3 factors , so it is composite number .
//             return console.log(`${n} is a composite Number `)
//         }
//     }
//     return console.log(`${n} is a Prime NUmber`)
// }

// console.log(isPrime(587))

// print prime numbers between 2 to 20 

// let primeNumbers = (startIndex , endIndex)=>{
//     for(let i=startIndex; i<endIndex; i++){
//         if(i%2===0){
//             return console.log(`Composite numbers are ${i}`)
//         }
//     }
//     return console.log(`primeNumbers are ${i}`)
// }
// console.log(primeNumbers(2,20));

// write a function to check wheather number is palindrone or not ..


// function isPalindrone(data){
//     let newData = data.toString().split("");
//     let reverseData = newData.revese().join("");
//     return newData == reverseData;
// }
// console.log(isPalindrone(121));


// //How do you find the missing number in a given integer array of 1 to 100?
// let marray =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

// function missingNum(arr){
//    var missArray=[];
//     var minNum = Math.min(...arr);
//     var maxNum = Math.max(...arr);

//     for(i=minNum ; i<maxNum ; i++){
//         if(arr.indexOf(i)<0){
//             missArray.push(i)
//         }      
//     }
//     return missArray;
    

// }

// console.log(missingNum([1,2,3,5,6,7,10,15]));
// console.log(missArray)



// // How do you find the duplicate number on a given integer array?

// var array=[1,2,3,4,6,4,6];  
// let num = [];
// let duplicatenumbers =[];

// for(let i=0;i<array.length;i++){
//     if(num.indexOf(array[i]) === -1){
//         num.push(array[i])
//     }
//     else{
//         duplicatenumbers.push(array[i])
//     }
// }
// console.log(num);                 // print numbers without duplicates
// console.log(duplicatenumbers);    // prints duplicates.

// // How do you find the largest and smallest number in an unsorted integer array?

// var array=[1,2,3,4,6,4,6,8,9,13,20];
// var maxNum =array[0];
// var minNum = array[0]

// for(let i=0 ; i<array.length; i++){
//     if(array[i]>=maxNum){
//         maxNum = array[i]
//     }
//     else if(array[i]<=minNum){
//         minNum = array[i]
//     }
// }
// console.log(maxNum)
// console.log(minNum)

// //How do you find all pairs of an integer array whose sum is equal to a given number in js

// function twoSum(arr, target) {
//     let res = [];
//     let indexes = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (target === arr[i] + arr[j] && !indexes.includes(i) && !indexes.includes(j)) {
//                 res.push([arr[i], arr[j]]);
//                 indexes.push(i);
//                 indexes.push(j);
//             }
//         }
//     }
//     return res;
// }
// console.log('Result - ',
//     twoSum([1,2,3,4,5,6,6,6,6,6,6,6,6,6,7,8,9,10], 12)
// );


//How do you reverse an array in place in JavaScript? In place means you cannot create a new array. You have to update the original array.

// const reverse = (arr)=>{
//     let result = []
//     for(let elem of arr){
//         result.unshift(elem)
//     }
//     return result
// }

// const arr =[1,2,3,4,5,6,7,8,9,10]
// console.log(reverse(arr))

// using for loop code video in utube , adam coder , 9.20 video .

// //How do you print duplicate characters from a string?
// function duplicatefromString(str){
//     var unique = "";
//     var dup=""
//     for(const char of str){
//         if(unique.includes(char) === false){
//             unique += char;
//         }
//         else{
//             dup += char;
//         }
//     }
//     return unique
// }
// console.log(duplicatefromString("madhua"))


//How do you print the first non-repeated character from a string in javascript?

// function nonrepeating(str){
//     const obj = {};
//     for(let elem of str){
//         if(obj[elem]){
//             obj[elem] = obj[elem] + 1;
//         }
//         else{
//             obj[elem] =1;
//         }
//     }

//     for(let elem in obj){
//         if(obj[elem]===1){
//             return elem;
//         }
//     }
//     return -1;
// }

// const str ="1122233444566677899" ;
// console.log(nonrepeating(str))         //here 5 and 8 are not repeating and sinse first non repeating value is 5 , output is 5

// //How can a given string be reversed using recursion?

// function reversestr(str){
//     if(!str){
//         return "";
//     }
//     return reversestr(str.substring(1)) + str.charAt(0);
// }
// console.log(reversestr('youtube'))


// //How do you check if a string contains only digits?
// const digits_only = string => [...string].every(c => '0123456789'.includes(c));

// console.log(digits_only('123')); // true
// console.log(digits_only('+123')); // false
// console.log(digits_only('-123')); // false
// console.log(digits_only('123.')); // false


// //How do you count a number of vowels and consonants in a given string?

// function vowelCount(str){
//     var count = 0;
//     var vowels = "aeiou";

//     for(var i=0; i<str.length;i++){
//         if(vowels.indexOf(str[i]) > -1){
//             count++;
//         }
//     }
//     return count
// }

// console.log(vowelCount("Hello all my iam madhu"))


// // How do you count the occurrence of a given character in a string?

// function countOccurenceinstg(string){
//  const histogram = {};
//     for(let i=0;i<string.length;i++){
//         const ch = string[i];
//         if(!histogram[ch]){
//             histogram[ch] = 0;
//         }
//         histogram[ch]++;
//     }
//     return histogram
// }

// console.log(countOccurenceinstg("hello World"));


// // How do you find all permutations of a string?

// let str = "madhu";
// let permu = (str , result)=>{
//     if(str.length == 0){
//         console.log(result);
//     }
//     for(let i=0 ; i<str.length;i++){
//         let rest = str.substring(0,i)+ str.substring(i+1)
//         permu(rest,result+str[i])
//     }
// }
// permu(str,"")


// // How do you reverse words in a given sentence without using any in-built method  javascript

// const str = "javascript is cool";
// function reverseStr(str){
//     let output=""
//     for(let i=str.length-1; i>=0;i--){
//         output = output+str[i]
//     }
//     return output
// }
// console.log(reverseStr(str))

// //How do you check if two strings are a rotation of each other?
// function areRotEq (str1, str2) {
//     if (str1 === str2) return true;
//     if (str1.length !== str2.length) return false;
    
//     var start2 = str2.indexOf(str1[0]);
//     if (start2 === -1) return false;

//     return str1 === str2.slice(start2) + str2.slice(0, start2)
// }

// console.log(
//   areRotEq("abcd", "abcd"),
//   areRotEq("abcd", "acdb"),
//   areRotEq("abcd", "dabc"),
//   areRotEq("dcab", "abdc")
// );