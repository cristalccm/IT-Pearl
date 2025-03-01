function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    let form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        let operand1 = document.getElementById("Operand1").value;

        // Operator
        // Get the value associated with the operator that was checked (+, -, *, or /)
        let operator;
        if (document.getElementById("AddOperator").checked) {
            operator = document.getElementById("AddOperator").value;
        }
        if (document.getElementById("SubtractOperator").checked) {
            operator = document.getElementById("SubtractOperator").value;
        }
        if (document.getElementById("MultiplyOperator").checked) {
            operator = document.getElementById("MultiplyOperator").value;
        }
        if (document.getElementById("DivideOperator").checked) {
            operator = document.getElementById("DivideOperator").value;
        }
        
        // Operand 2
        let operand2 = document.getElementById("Operand2").value;

        CalculateResult(operand1, operator, operand2);
    }
}

async function CalculateResult(operand1, operator, operand2) {
    "use strict;"
        
        // URL and method used with AJAX Call
        let myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        /* AJAX calculator requires Operand1, Operator, and Operand2 */
        myURL = myURL + "?Operand1=" + encodeURIComponent(operand1) + "&Operator=" + encodeURIComponent(operator) + "&Operand2=" + encodeURIComponent(operand2);

        /* fetch the results */
        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand1Msg").innerHTML = "";
    document.getElementById("CentUnit").checked = false;
    document.getElementById("MetUnit").checked = false;
    document.getElementById("KiloUnit").checked = false;
    document.getElementById("InUnit").checked = false;
    document.getElementById("FtUnit").checked = false;
    document.getElementById("YdUnit").checked = false;
    document.getElementById("MiUnit").checked = false;
    document.getElementById("fromunitMsg").innerHTML = "";
    document.getElementById("tounitMsg").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});