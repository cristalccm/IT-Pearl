$("#myform").validate({
    rules: {
        fromvalue: {
            required: true,
            number: true
        }
    }
});

function calculate() {
    "use strict"
    let form = $("#myform");

    if (form.valid()) {
        let Fromvalue = document.getElementById("fromvalue").value;
        let Fromunit = "";

        if (document.getElementById("fromcentimeters").checked) {
            Fromunit = document.getElementById("fromcentimeters").value;
        } else if (document.getElementById("frommeters").checked) {
            Fromunit = document.getElementById("frommeters").value;
        } else if (document.getElementById("fromkilometers").checked) {
            Fromunit = document.getElementById("fromkilometers").value;
        } else if (document.getElementById("frominches").checked) {
            Fromunit = document.getElementById("frominches").value;
        } else if (document.getElementById("fromfeet").checked) {
            Fromunit =document.getElementById("fromfeet").value ;
        } else if (document.getElementById("fromyards").checked) {
            Fromunit =document.getElementById("fromyards").value;
        } else if (document.getElementById("frommiles").checked) {
            Fromunit = document.getElementById("frommiles").value;}

        let Tounit = "";

        if (document.getElementById("tocentimeters").checked) {
            Tounit =document.getElementById("tocentimeters").value ;
        } else if (document.getElementById("tometers").checked) {
            Tounit = document.getElementById("tometers").value;
        } else if (document.getElementById("tokilometers").checked) {
            Tounit =document.getElementById("tokilometers").value;
        } else if (document.getElementById("toinches").checked) {
            Tounit = document.getElementById("toinches").value;
        } else if (document.getElementById("tofeet").checked) {
            Tounit = document.getElementById("tofeet").value;
        } else if (document.getElementById("toyards").checked) {
            Tounit =document.getElementById("toyards").value ;
        } else if (document.getElementById("tomiles").checked) {
            Tounit =document.getElementById("tomiles").value ;
        }

        ConvertUnits(Fromvalue, Fromunit, Tounit);
    }
}

async function ConvertUnits(Fromvalue, Fromunit, Tounit) {
    "use strict";
    let bruceUrl = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
    bruceUrl = bruceUrl + "?FromValue=" + encodeURIComponent(Fromvalue) + "&FromUnit=" + encodeURIComponent(Fromunit) + "&ToUnit=" + encodeURIComponent(Tounit);

    let response = await fetch(bruceUrl);
    let result = await response.text();

   
  
    document.getElementById("tovalue").innerHTML = result;
}

function clearform() {
    "use strict";
    document.getElementById("fromvalue").value = "";

    document.getElementById("fromcentimeters").checked = false;
    document.getElementById("frommeters").checked = false;
    document.getElementById("fromkilometers").checked = false;
    document.getElementById("frominches").checked = false;
    document.getElementById("fromfeet").checked = false;
    document.getElementById("fromyards").checked = false;
    document.getElementById("frommiles").checked = false;

    document.getElementById("tocentimeters").checked = false;
    document.getElementById("tometers").checked = false;
    document.getElementById("tokilometers").checked = false;
    document.getElementById("toinches").checked = false;
    document.getElementById("tofeet").checked = false;
    document.getElementById("toyards").checked = false;
    document.getElementById("tomiles").checked = false;

    document.getElementById("fromvalueMsg").innerHTML = "";
    document.getElementById("fromunitMsg").innerHTML = "";
    document.getElementById("tounitMsg").innerHTML = "";

    document.getElementById("tovalue").innerHTML = "";
}

