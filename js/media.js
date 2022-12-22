var i = 0;
function change() {
var doc = document.getElementById("heading");
var colorPicker = ['#FEFCF3','#FBFACD',"#7F669D",'#F7A4A4','#FEBE8C',"#BCE29E",'#B1B2FF','#D0B8A8',"#A7D2CB",'#ECC5FB','#BA94D1',"#FFF5E4",'#CDF0EA','#F9F9F9',"#F675A8",'#AF7AB3','#E4D192',"#AF7AB3",'#6E85B7','#FFB3B3',"#CDF0EA",'#F6C6EA','#F4BFBF',"#D18CE0",'#FFF89A','#FF8AAE',"#F3C5C5",'#E7FBBE','#6867AC',"#D3DEDC",'#B983FF','#99FEFF'];
doc.style.color = colorPicker[i];
i = (i + 1) % colorPicker.length;
}
setInterval(change, 350);