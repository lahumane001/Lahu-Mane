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