let a = document.getElementById("stepbl1");
let stpbrd1 = document.getElementById("stepbrdr1");

a.onmouseover = function() {
    stpbrd1.style.borderBottom = "3px solid white";
}
a.onmouseout = function() {
    stpbrd1.style.borderBottom = "3px solid black";
}
