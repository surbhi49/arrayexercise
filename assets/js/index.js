//  Declare an empty array

const arr=[]
console.log(arr) //[]

//Declare an array with more than 5 number of elements

 const num=[1,2,3,4,5]
 console.log(num) //[1,2,3,4,5]
  

 // Find the length of your array 
 const leng=[10,3,5,6.8,9,66,78]
 console.log(leng.length) // 7

 
 // Get the first item, the middle item and the last item of the array

 const items=['sakshi','bala','gattuu']
 firstitem=items[0]
 console.log(firstitem) // sakshi

 seconditem=items[1]
 console.log(seconditem)// bala

 thirditem=items[2]
 console.log(thirditem)//gattuu

 /*Declare an array called mixedDataTypes, put different data types in the array and find the length of 
the array. The array size should be greater than 5 */

const  array=['surbhi',20,null,true,{},a='']
console.log(array.length)
console.log(array)

/*Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, 
Apple, IBM, Oracle and Amazon */
 
const itCompanies=['Facebook, Google, Microsoft, Apple, IBM, Oracle,Amazon' ]
console.log(itCompanies)

//Print the array using console.log()
console.log(array)

// Print the number of companies in the array 

const companies=['Facebook, Google, Microsoft,Apple,IBM, Oracle,Amazon']
console.log(companies.length)

// Print the first company, middle and last company

const company=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon' ]
firstcompany=company[0]
console.log(company[0])
middlecopmpany=company[3]
console.log(company[3])
lastcompany=(company[6])
console.log(company[6])

const comp=['Facebook', 'Google', 'Microsoft']
firstcompany=company[0]
console.log(company[0])
middlecopmpany=company[1]
console.log(company[1])
lastcompany=(company[2])
console.log(company[2])

//Print out each company 
firstcompany=company[0]
console.log(company[0])


secondcopmpany=company[1]
console.log(company[1])

thirdcompany=(company[2])
console.log(company[2])

forthcompany=company[3]
console.log(company[3])

fifthcompany=company[4]
console.log(company[4])

sixthcompany=company[5]
console.log(company[5])

seventhcompany=company[6]
console.log(company[6])

//Change each company name to uppercase one by one and print them out 

firstcompany=company[0]
console.log(company[0])
company[0].toUpperCase

secondcopmpany=company[1]
console.log(company[1])
company[1].toUpperCase

thirdcompany=(company[2])
console.log(company[2])
company[2].toUpperCase

forthcompany=company[3]
console.log(company[3])
company[3].toUpperCase

fifthcompany=company[4]
console.log(company[4])
company[4].toUpperCase

sixthcompany=company[5]
console.log(company[5])
company[5].toUpperCase

seventhcompany=company[6]
console.log(company[6])
company[6].toUpperCase

/* Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big 
IT companies. */

const sentence=['Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.']
console.log(sentence)

/*Check if a certain company exists in the itCompanies array. If it exist return the company else return a 
company is not found */

// Filter out companies which have more than one 'o' without the filter method 
companies.includes('o')
console.log(companies.includes())

//Sort the array using sort() method 

const arre= [ 
    'divya', 'surbhi', '', 'sourabh', 'vinay', 'darshna', 'vishal' ] 
   arre.sort() 
   console.log(arre)  

//Reverse the array using reverse() method 
arre.reverse()
console.log(arre)

//Slice out the first 3 companies from the array 
// Slice out the last 3 companies from the array 
////slice out the middle IT company or companies from the array
const array1=['Facebook' ,'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
console.log(array1.slice(3,array1.length))
console.log(array1.slice(4,array1.length))
console.log(array1.slice(3,4,array1.length))

//Remove the first IT company from the array 
//Remove the last IT company from the array
// Remove all IT companies

array1.shift() 
console.log(0,array1)

array1.pop()
console.log(1,array1)


console.log(array1.slice(7,array1.length))

/* First remove all the punctuations and change the string to array and count the number of words in the 
array 
*/
let text = ['I love teaching and empowering people I teach HTML, CSS, JS, React, Python' ]
console.log(text) 
console.log(text.length) 

let words=["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", 
"React", "Python"] 
console.log(words.length)

/*In the following shopping cart add, remove, edit items 
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'] 
o add 'Meat' in the beginning of your shopping cart if it has not been already added 
o add Sugar at the end of you shopping cart if it has not been already added 
o remove 'Honey' if you are allergic to honey 
o modify Tea to 'Green Tea' */

const shoppingcart=['Milk', 'Coffee', 'Tea', 'Honey'] 

shoppingcart.unshift('meat')
console.log(shoppingcart)

shoppingcart.push('sugar')
console.log(shoppingcart)


console.log(shoppingcart.slice(0,4,0,6,shoppingcart.lenght))

/*In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist 
add to the countries list. */

const countries = [ 
    'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'India', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya' 
   ]

   countries.includes('Ethiopia')
console.log(countries.includes())
console.log(countries.toUpperCase)

