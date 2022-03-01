function findcapital(){
    var AZ = "Phoenix";
    var CA = "Sacramento";
    var HI = "Honolulu";
    var NY = "Albany";
    var NE = "Lincoln";

    var selectedState = (document.getElementById("state").value);

    if(selectedState == "AZ"){
        document.getElementById("capital").innerHTML = "Capital: "+AZ;
    }
    else if(selectedState == "CA"){
        document.getElementById("capital").innerHTML = "Capital: "+CA;
    }
    else if(selectedState == "HI"){
        document.getElementById("capital").innerHTML = "Capital: "+HI;
    }
    else if(selectedState == "NY"){
        document.getElementById("capital").innerHTML = "Capital: "+NY;
    }
    else if(selectedState == "NE"){
        document.getElementById("capital").innerHTML = "Capital: "+NE;
    }
}