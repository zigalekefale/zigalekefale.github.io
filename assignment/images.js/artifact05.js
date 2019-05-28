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
   pic.src="img/lion.jpg";
   current = "l";
  }else if(current == "l"){
   pic.src="img/bear.jpg";
   current = "b";
  }else if(current == "b"){
   pic.src="img/fifa.jpg";
   current = "f";
  }
  else{
   pic.src="img/elephant.jpg";
   current = "e";
  }
 }
