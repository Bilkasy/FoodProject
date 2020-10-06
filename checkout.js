var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

var submitBtn = document.getElementById("submit");
var totalArea = document.getElementById("total");
var byeMsg = document.getElementById("bye");

submitBtn.addEventListener("click",function(){

    totalArea.style.visibility = "visible";
    totalArea.style.backgroundColor = "rgb(189, 147, 70)";
    totalArea.style.color = "white";
    byeMsg.style.visibility = "visible"
   
});

