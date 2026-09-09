

let a =5;
let b=6;


console.log(a+b);


//prompt("malware ditachted");



let arr=[2,4,5,6,7,8];

//question 1


function returnsumofelement(element){
let sum =0;
for(let i=0;i<element.length;i++){

sum+=element[i];

}
return sum;

}
console.log(returnsumofelement(arr));


//question 2

function countevenodd(x){
    let evencount =0;
    let oddcount=0;

for(let i=0;i<x.length;i++){

if (x[i]%2==0){

//console.log(x[i]);
//console.log("\n");
evencount++;
//console.log("total even"+evencount);

}
else{

    //console.log(x[i]);
    //console.log("\n");
    oddcount++;
}
}


console.log("total even ="  +evencount);
console.log("total odd ="  +oddcount);

}


countevenodd(arr);

let element = document.getElementById("iamshamsul");
let interval;


function date(element){
let time = new Date ();

 element.innerHTML = "Time: "+time.toLocaleTimeString()+"<br>"+"Date: " +time.toLocaleDateString();

}

function startClock() {
    date(element); // show immediately

    interval = setInterval(function() {
        date(element);
    }, 1000);
}
function stopClock() {
    clearInterval(interval);
    element.innerHTML = "";
}
let count =0;
function switchon(){
count++;
if(count%2==0){
 document.getElementById("myImage1").src = "https://toppng.com/uploads/preview/light-bulb-png-clip-art-incandescent-light-bulb-115629748973gtwxsd7df.png";
}
else{
document.getElementById("myImage1").src = "https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png";
}

}
function login(){
    let pass  = document.getElementById('password');
    let user = document.getElementById('username');

    if(user.value=="iamshamsul"&& pass.value=="world"){
     window.location.href = "my-website.html";

    }
    else{

        document.getElementById("x").innerHTML = " Wrong password or username";
        console.log("wrong password or username");
    }
}



