/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum= function(num1,num2){
    if(num1== num2)
    return 3*num1
    else
    return num1+num2
}
//console.log(sum(7,7));
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const checkTwoNumbers= function(num1,num2){
    if(num1==50 || num2 == 50 || num1+num2 == 50)
    return true
    else 
    return false
}
//console.log(checkTwoNumbers(49,80));
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const removeChar= function(str,pos){
    const newStr= str.replace(str[pos] , '')
    return newStr
// for(let i=0;i<str.length;i++){
//     if(i==pos)
    
// }
}
//console.log(removeChar("Ankit",0));
/*

4)
 Create a function to find the largest of three given integers.
*/
function max_of_three(x, y, z) 
 {
   let max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}
//console.log(max_of_three(12,13,45));
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const checkRange= function(num1, num2){
 if(num1 > 40 && num1< 61 && num2 > 70 && num2 <101) 
return 'They are in range'
else
return 'They are not in range!!'
}
//console.log(checkRange(100,71));
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
const str= 'HELLO There!'
 const copyString = function(num){
console.log(str.repeat(num));
 }
 //copyString(7)
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const cityName= function(str){
    if(str.startsWith('Los') || str.startsWith('New'))
    return str
    else 
    return ''
}
//console.log(cityName(' Angeles'));
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const sumArray= function(){
    const arr= [23,34,45]
let sumAll =0;
for(let i=0;i<arr.length;i++){
    sumAll =sumAll + arr[i]
    
}
return sumAll
}
//console.log(sumArray());
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const checkArray= function (){
    const arr1=[1,3]
    for(let i=0;i<arr1.length;i++){
        if(arr1.includes(1) && arr1.includes(3))
        return true
        else
        return false
    }

}
//console.log(checkArray());
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
const checkArray1= function (){
   
    for(let i=0;i<arr1.length;i++){
        if(arr1.some(1) && arr1.some(3))
        return true
        else
        return false
    }

}
//console.log(checkArray());
/*
11)

Create a function to find the longest string from a given array of strings.
*/
const longestString= function(){
    let number=0
    let num=0;
    const arrayOfStrings=['This','is', 'the', 'beginning' ]
    for(let i=0;i<arrayOfStrings.length;i++){
       number=arrayOfStrings[i].length
       
    }
    
}
longestString()




/*
12)


Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

15)

Create a function to check from two given integers, whether one is positive and another one is negative.

16)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

17)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

18)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/