var  countdownElement = document.getElementById('countdown');

var bgImageElement = document.getElementById('bg-image');

var initialcountValue = countdownElement.innerHTML;


setInterval(function() {
     initialcountValue = initialcountValue > 0 ? initialcountValue - 1 : 0; 

     countdownElement.innerHTML = initialcountValue;

     var bgImgPth = initialcountValue % 2 === 0 ? '' : 
     '';

     bgImageElement.src = bgImgPth;

},1000);
