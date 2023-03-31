//this will change the color of the heading on the media page
let i = 0;
let colorPicker = ['#FEFCF3','#FBFACD',"#7F669D",'#F7A4A4','#FEBE8C',"#BCE29E",'#B1B2FF','#D0B8A8',"#A7D2CB",'#ECC5FB','#BA94D1',"#FFF5E4",'#CDF0EA','#F9F9F9',"#F675A8",'#AF7AB3','#E4D192',"#AF7AB3",'#6E85B7','#FFB3B3',"#CDF0EA",'#F6C6EA','#F4BFBF',"#D18CE0",'#FFF89A','#FF8AAE',"#F3C5C5",'#E7FBBE','#6867AC',"#D3DEDC",'#B983FF','#99FEFF'];
function change() {
document.documentElement.style.setProperty('--shadow', colorPicker[i]);
i = (i + 1) % colorPicker.length;
}
setInterval(change, 350);


 // get all video elements on the page
 var videos = document.getElementsByTagName('video');
 var currentVideoIndex = 0;

 function loadNextVideo() {
   // increment the current video index
   currentVideoIndex++;

   // check if there are any videos left to load
   if (currentVideoIndex < videos.length) {
     // load the next video
     videos[currentVideoIndex].load();
     console.group("1");
   }
 }

 // add event listeners to each video
 for (var j = 0; j < videos.length; j++) {
   videos[j].addEventListener('canplaythrough', function() {
     if (currentVideoIndex < videos.length - 1) {
       // if this isn't the last video, load the next one
       loadNextVideo();
       console.group("test");
     }
   });
 }

 // load the first video
 videos[0].load();