var cl = console.log;

let str = "I love javascript";

//length property will gives us no of charater in a given string

let strlength = str.length;

cl(strlength);

str = "I love Angular. Angular is developed by Google and Angular is javascript frmework";

let firstindex = str.indexOf("Angular");
cl(firstindex)

let secindex = str.indexOf("Angular",firstindex + 1);
cl(secindex)

let thirdindex = str.indexOf("Angular",secindex + 1);
cl(thirdindex);

let lastindex = str.lastIndexOf("Angular");
cl(lastindex);

let indexofReact = str.React = str.indexOf("React"); //-1
cl(indexofReact);

let indexofNode = str.indexOf("Node"); //-1
cl(indexofNode);

let indexofGoogle = str.indexOf("Google");
cl(indexofGoogle); //40

let str2 = "Angular is a javascript framework which is developed by Google, Google just launched 15th ver of Angular";

if(str2.indexOf("React") > -1){
    cl(`Yes you are on right track`)
}

if(str2.indexOf("React") >=0 ){
    cl(`Yes you are on right track`)
}

if(str2.indexOf("framework") >= 0){
    cl(`Yes you are on right track`)
}

//includes >> returns boolean

cl(str.includes("framework"))

cl(str.includes("React"))

if(str2.includes("Angular")){
    cl(`Yes you are on right track`)
}

if(str2.includes("React")){
    cl(`Yes you are on right track`)
}

//toUppercase and Lowercase

let str3 = "I love JavaScript";

cl(str3.toLowerCase());

cl(str3.toUpperCase());

cl(str3.includes('javascript'))

cl(str3.toLowerCase().includes('Javascript'))

// trim

let oxygen = "  Javascript  ";
cl(oxygen.length);

cl(oxygen.trim().length);

if(oxygen.trim().length === 10){
    cl(`something happning here`)
}

// Concat

let greet1 = "Hello";

let greet2 = "Javascript";

greet1 = greet1.concat(" ", greet2 );

cl(greet1);


//excrating parts od the string
//slice, subtring ,substr

str =  "Cricket , Chess , Codeing , Cooking";

//slice (startIndex? , endIndex?)
//both parameters / argument are not mandetory
//slice method returns string
//startIndex is included in end result where as endIndex is not included
//it accepts -ve arguments

let r = str.slice(16,23);

cl(r);

//startIndex >> undefined
//falsy values >> 0,undefined,null,false

str.slice();
    cl(r);
r = str.slice(16);
cl(r);

r = str.slice(-16 , -9);
cl(r)

//substring

//string.substring(startIndex , endIndex?) : string
//startIndex is mandetory
//endIndex is optional
//it does not accepts -ve arguments
//stratIndex is included in en result , endIndex is not included in result.

r = str.substring(16,23);
cl(r);

r = str.substring();
cl(r)

r = str.substring(16)
cl(r)

//substr :-

//substr(startIndex,length)
//startIndex is mandetory
//length is optional


str =  "Cricket , Chess , Codeing , Cooking";

r = str.substr(16,7)
cl(r);

r = str.substr(16)
cl(r)

str = 'i love javascript';

cl(str.charAt(7));
cl(str[7]);

str = "  javascript  ";

cl(str.length);
cl(str.trim().length)

if(str.trim().length === 10){
    cl(`qwerty`)
}

//string to array

str = "Cricket, Chess, Coeding, Cooking";

let arr = str.split(", ");
cl(arr)

arr = str.split('');
cl(arr)

//let arr = newArray(10,20,30);
//cl(arr);

let ages = [10,20,30,40,50,60,70,80,90,100];

cl(ages.length);

cl(ages[ages.length - 1])
// pop and push

// pop >> it removes last element of array and returns it (removed element)

let lastelement = ages.pop();
cl(ages);
cl(lastelement);

//push 
//it add/appends a new element at the end of array and returns updated length of array

let updatedlength = ages.push(110,220,300);
cl(ages);
cl(updatedlength);

//shift and unshift 

//shift >> it will remove 1st element of the array and returns it.

let firstEle = ages.shift();
cl(ages);
cl(firstEle);

//unshift >> it will add a new element at the startof the array and returns updated length of array

let newLength = ages.unshift(11);
cl(ages);
cl(newLength);


// for(let i = ages.length; i >= 0;i--){
//     ages.pop()
// }
ages.length = 0;
cl(ages);

// array to string

//to string

let skills = ["HTML5","CSS3","JS","SASS","FLEX","ES6","TS","ANGULAR"]

let Str = skills.toString();
cl(str);

//join(seperator)

str = skills.join(" ");
cl(str);

str = skills.join("*");
cl(str);

str = skills.join(" * ");
cl(str);

str = skills.join(" | ");
cl(str);

str = skills.join();
cl(str);

let skill1 = ["HTML","CSS","JS"];

let skill2 = ["TS","ANGULAR"];

// skill1 = skill1.concat(skill2);
// cl(skill1);

let skill3 = skill1.concat(skill2);
cl(skill3)
