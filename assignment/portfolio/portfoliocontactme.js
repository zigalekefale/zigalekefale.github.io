var el = document.getElementById("date");
var currentDate = new Date();
var month = currentDate.getMonth()+1;
var day = currentDate.getDate();
var year = currentDate.getFullYear();
var hour = currentDate.getHours();
var minute = currentDate.getMinutes();
if(minute < 10)
	el.innerHTML = "Current Date & Time: " + month + "/" + day + "/" + year + " " + hour + ":0" + minute;
else
	el.innerHTML = "Current Date & Time: " + month + "/" + day + "/" + year + " " + hour + ":" + minute;

//global variable for our HTML section for the feedback
var vFeedback = document.getElementById("feedback");

function validateName() {
  var vName = document.getElementById("name").value;
  if (vName === null || vName === "") {
    vFeedback.textContent = "Name is REQUIRED";
    return false;
  }
  else {
    return true;
  }
}

function validateEmail() {
    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
	else {
		return true;
	}
}

function validateMessage() {
  var vMessage = document.getElementById("message").value;
  if (vMessage === null || vMessage === "") {
    vFeedback.textContent = "Message is REQUIRED";
    return false;
  }
  else {
    return true;
  }
}

function validateForm() {
  return validateName() && validateEmail() && validateMessage();
}


