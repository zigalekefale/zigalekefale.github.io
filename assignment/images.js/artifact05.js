var intervalId;

  function startSlideShow(){
    intervalId = setInterval(changeImage, 1000);
  }
  function stopSlideShow(){
    clearInterval(intervalId);
  }
  function changeImage(){
    var imageSrc = document.getElementById("image").getAttribute("src");
    var currentImageNumeber = imageSrc.substing(imageSrc.lastIndexOf("/") + 1, imageSrc.lastIndexOf("/") + 2);
    if (currentImageNumber == 5)
      {
        currentImageNumber = 0;
      }
  }
 
  document.getElementById("image").setAttribute("src", "/Images/" + (Number(currentImageNumber) + 1) + ".jpg");
}
