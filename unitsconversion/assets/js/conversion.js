function calculate() {
    "use strict";

  
    let form = $( "#myform" );

    if (form.valid()) {}
      

    
async function CalculateResult(operand1, operator, operand2) {
    "use strict;"
        
        
        let myURL = "https://brucebauer.info/assets/ITEC3650/ajaxcalculator.php";

        myURL = myURL + "?FromValue=" + encodeURIComponent(FromValue) + "&=" + encodeURIComponent(operator) + "&Operand2=" + encodeURIComponent(operand2);

        
        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand1Msg").innerHTML = "";
    document.getElementById("AddOperator").checked = false;
    document.getElementById("SubtractOperator").checked = false;
    document.getElementById("MultiplyOperator").checked = false;
    document.getElementById("DivideOperator").checked = false;
    document.getElementById("OperatorMsg").innerHTML = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand2Msg").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});
}