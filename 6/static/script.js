
var d = new Date();

var i = 0;
function timefunc() {
    document.getElementById("time").innerHTML = d.getSeconds();
    i+=90;
    document.getElementById("rotate-btn").style = "transform: rotate("+i+"deg)";
}







