var current = "e";
 var SlideId;
 function start(){
  SlideId = setInterval(change,1000);
 }
 function stop(){
  clearInterval(SlideId);
 }
 function change(){
  var pic = document.getElementById("pic");
  if(current=="e"){
   pic.src="img/image1.jpg";
   current = "l";
  }else if(current == "l"){
   pic.src="img/image2.jpg";
   current = "b";
  }else if(current == "b"){
   pic.src="img/image3.jpg";
   current = "f";
   else if(current == "b"){
   pic.src="img/image4.jpg";
   current = "f";
  }
  else{
   pic.src="img/image5.jpg";
   current = "e";
  }
 }
