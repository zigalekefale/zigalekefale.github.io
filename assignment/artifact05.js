/*image lists
var i = 0
images[0] = 'https://i2.wp.com/www.desktopanimated.com/wp-content/uploads/2013/08/Green_Fields_1.jpg?resize=150%2C150';
images[1] = 'https://www.99inspiration.com/wp-content/uploads/2017/03/Beautiful-Nature-Landscape-Photography-77-198x145.jpg';
images[2] = 'http://www.fulldose.net/wp-content/themes/Fulldose/scripts/timthumb.php?src=http://www.fulldose.net/wp-content/uploads/2016/01/Autumn-at-Lake-Dock-Thousand-Islands-Canada.jpg&w=162&h=162'; 
*/
function changeImage(){
  var intervalId;
  function startSlideShow(){
    intervalId = setInterval(changeImage, 500);
  }
  function stopSlideShow(){
    clearInterval(intervalId)
  }
  function changeImage(){
    var imageSrc = document.getElementById("image").getAttribute("src");
    var currentImageNumeber = imageSrc.substing(imageSrc.lastIndexOf("/") + 1, imageSrc.lastIndexOf("/") + 2);
    if (currentImageNumber == 8)
      {
        currentImageNumber = 0;
      }
  }
 
  document.getElementById("image").setattribute("src", "/Images/" + (Number(currentImageNumber) + 1) + ".jpg");
}
