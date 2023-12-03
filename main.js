let send =()=> {
    if (localStorage.clicks) {
            localStorage.clicks = Number(localStorage.clicks)+1;
        } else {
            localStorage.clicks = 1;
        } document.getElementById("name_full").innerHTML = "You have clicked the button " + localStorage.clicks + " time(s).";
}




let remove =()=> {
  localStorage.clicks = 0;
document.getElementById("name").value = "";
document.getElementById("player1").value = ""; document.getElementById("set1").value = ""; document.getElementById("set2").value = ""; document.getElementById("set3").value = "";
}







