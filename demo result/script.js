function showResult() {
    var pin = document.getElementById("pin").value;
    var sem = document.getElementById("semester").value;

    if(pin === "" || sem === "") {
        alert("Please enter PIN and select semester");
        return;
    }

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";
}

function goBack() {
    document.getElementById("resultPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}
