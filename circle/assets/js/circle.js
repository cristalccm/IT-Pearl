"use strict";
$( "#CircleForm" ).validate({
});
function CircleCalculations () {
    if ($("#CircleForm").valid()){  
   let radius;
   let diameter;
   let circumference;
   let radiusfp; 
   let area;
   radius=document.getElementById("radius").value;
   radiusfp= parseFloat(radius);

   diameter = calculateDiameter(radiusfp); 
    document.getElementById("diameter").innerHTML=diameter; 

   circumference = calculateCircumference(radiusfp);
    document.getElementById("circumference").innerHTML = circumference;

   let x=1;

   area = caluclateArea(radiusfp);
   document.getElementById("area").innerHTML = area;
   
  }
}

function calculateDiameter(r){
  return 2 * r;
}

function calculateCircumference(r){
  return Math.PI * r;
}
function caluclateArea(r){
  return Math.PI * Math.pow(r,2);
}
