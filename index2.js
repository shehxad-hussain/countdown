var  countdownElement = document.getElementById('countdown');

var bgImageElement = document.getElementById('bg-image');
var bg = document.getElementById('bg');

countdownElement.style.textAlign="center"
countdownElement.style.fontSize="900px"
countdownElement.style.marginTop="20%"

var initialcountValue = 10;
let bgscr="url('images/car-2.jpg')"


 var interval = setInterval(function() {
     initialcountValue = initialcountValue > 0 ? initialcountValue - 1 : 0; 

     countdownElement.innerHTML = initialcountValue;

     countdownElement.style.fontSize = initialcountValue * 100 + "px"

     bg.style.width = initialcountValue * 10 + "%"
    console.log(initialcountValue)
    if(initialcountValue % 2 === 0){
        bg.style.backgroundImage= bgscr;
        console.log("yese")
    }
    else{
        bg.style.backgroundImage= "none";
        bg.style.backgroundColor="red";
    }
    
    
if(initialcountValue <= 0){
    clearInterval(interval);
}

},1000);



localStorage.setItem('myCat', 'Tom');
console.log(localStorage.getItem('myCat'))