var myImages =["https://wallpapercave.com/wp/V04eMTk.jpg",
               "http://3.bp.blogspot.com/-RpAX4mUMNH0/T-TKPkySDeI/AAAAAAAAL1U/f3ANt8NQn0k/s1600/nature-wallpaper-19.jpg",
               "http://images.all-free-download.com/images/graphiclarge/natural_beauty_of_hd_picture_1_166092.jpg",
               "https://i.ytimg.com/vi/JGHQHdbnYwo/maxresdefault.jpg",
               "https://i.ytimg.com/vi/soXTGNfI8bo/maxresdefault.jpg"];


var captionImages =["Laugh","Love","Lunch","Happiness","Family"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 
function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}
setInterval(autoSlide,2000); // Next






