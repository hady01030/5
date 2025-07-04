function hady(){
var x=document.getElementById("hady");
x.style.color="blue";
x.style.backgroundColor="red";
x.style.padding="10px";
x.style.margin="10px";
    
}
// function  {
//     constructor(parameters) {
        
//     }
function classs(){
    var y=document.getElementsByClassName("two");
    y[0].style.color="green";
    y[0].style.backgroundColor="blue";
    y[0].style.padding="10px"
    y[0].style.margin="10px"
}
function classss(){
    var y=document.getElementsByClassName("two");
    y[1].style.color="red";
    y[1].style.backgroundColor="yellow";
    y[1].style.padding="10px"
    y[1].style.margin="10px"
}
function classsss(){
    var y=document.getElementsByClassName("two");
    y[2].style.color="blue";
    y[2].style.backgroundColor="green";
    y[2].style.padding="10px"
    y[2].style.margin="10px"
}
function classssss(){
     var y=document.getElementsByClassName("two");
     y[3].style.color="white";
     y[3].style.backgroundColor="black";
     y[3].style.padding="10px"
     y[3].style.margin="10px"

}
function link (){
    var x=document.getElementById("link");
    x.href=("href", "https://www.google.com/")
x.innerText="https://www.google.com/"
}
function getlink(){
    var z=document.getElementById("link");
    var w=z.getAttribute("href");
    alert(w)
}
function removelink(){
    var d=document.getElementById("link");
    d.remove("href");
}