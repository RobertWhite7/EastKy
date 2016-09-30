var myBtn = document.getElementById('my-button');
var tipElem = document.getElementById("tip");
var totalElem = document.getElementById("total");
var tipElem2 = document.getElementById("tip2");
var totalElem2 = document.getElementById("total2");
var tipElem3 = document.getElementById("tip3");
var totalElem3 = document.getElementById("total3");



//the event object is passed to this automatically - I'm assigning it to "e"
function calc(e) {
  

  var input = document.getElementById('bill');
  
  var bill = parseFloat(input.value);
  var tip = bill * 0.10;
  var tip2 = bill * 0.15;
  var tip3 = bill * 0.20;
  var total = bill + tip;
  var total2 = bill + tip2;
  var total3 = bill + tip3;

  
  tipElem.textContent = "$"+(tip).toFixed(2);
  totalElem.textContent = "$"+(total).toFixed(2);  
    tipElem2.textContent = "$"+(tip2).toFixed(2);
  totalElem2.textContent = "$"+(total2).toFixed(2); 
    tipElem3.textContent = "$"+(tip3).toFixed(2);
  totalElem3.textContent = "$"+(total3).toFixed(2); 
}

myBtn.addEventListener('click', calc);

function divideBy() 
{ 
        bill = document.getElementById("bill").value;
        
document.getElementById("result").innerHTML = bill / bill;
}