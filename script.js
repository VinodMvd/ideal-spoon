f1();
function f1(){
f2();
}

function f2(){
var xhr = new XMLHttpRequest();
xhr.open("GET" , "https://raw.githubusercontent.com/VinodMvd/ideal-spoon/master/myfile.json", true);
xhr.onreadystatechange = function(){
if(xhr.readyState == 4 && xhr.status == 200){
c1();
}
else{
document.write("error in execution"+ "<br/>");
c2();
}
};
xhr.send();
};

function c1(){
document.write("F2 is executed using call AJAX and is ready, send via function c1"+ "<br/>");
};

function c2(){
document.write("There is error in the program"+ "<br/>");
}

