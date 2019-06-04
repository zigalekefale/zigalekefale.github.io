function ValidateForm(){
  var validFirstname = false;
  var validLastname = false;
  var validEmail = false;
  var validUsername = false;
  var validUserPassword = false;
  var validPhone = false;
  var validAddress = false;
  var validCity = false;
  var validCountry = false;
  var validZipcode = false;
  
 
  var letters = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;
   
  var errorMessages =""; //All the error Messages are going to stay in this variable
   /***********VALIDATES USERNAEM ******** */
   //Required filed
   //This syntax is using name-of-form.name-of-filed.value
   //you can also use document .getElementById("id-of-filed").value

   /***********VALIDATES USERNAEM ******** */
   //Required. Maximum 12 characters.
   if (myContact.username.value.length > 12 ||
     myContact.username.value===null || 
     myContact.username.value==="")
          errorMessages += "<p>The username must be less than 12 characters and is required</P>";
   else 
       validUsername =true;

   //console.log(validUsername);
  
  /***********VALIDATES FIRSTNAME ******** */
      if (myContact.firstname.value==null ||
          myContact.firstname.value=== "" || 
          myContact.firstname.value.length >20 ||
          !myContact.firstname.value.match(letters))
      errorMessages += "<p>The firstname must be less than 20 characters and it is required. only letters and numbers are accepted</P>";
      else 
      validFirstName =true;

  /***************VALIDATES LASTNAME********/
   if (document.getElementById("lastname").value.length > 0 &&
    document.getElementById("lastname").value.length <= 50)
    validLastname = true;
  else
    errorMessages += "<p> The lastname must be less than or equal to 50 characters";

     
  /***********VALIDATES PASSWORD ******** */
      if (myContact.password.value==null || 
          myContact.password.value=== "" ||
          myContact.password.value.length > 7){
      errorMessages += "<p>The password must be less than 7 characters and it is required</P>";}
      else 
         validUserPassword =true;

     
      /***********VALIDATES PHONE NUMBER ******** */
      if (myContact.phone.value==null ||
          myContact.phone.value=== "" ||
          myContact.phone.value.length >15 || 
          !myContact.phone.value.match(numbers))
      errorMessages += "<p>The phone number must be less than 15 characters and it is required. only numbers are accepted</P>";
      else 
      validPhone =true;
  
  /*****               ******/
    if (myContact.address.value == null ||
    myContact.address.value === "")
    errorMessages += "<p> An Address is required</p>";
    else
    validAddress = true;
  
  /*************/
  
   if (myContact.city.value == null ||
    myContact.city.value === "")
    errorMessages += "<p> A City is required</p>";
  else
    validCity = true;
  /**************************/
  
   if (myContact.countries.value == null ||
    myContact.countries.value === "")
    errorMessages += "<p> A Country is required</p>";
  else
    validCountry = true;
  
  /*****************************/

  if (myContact.countries.value == 3)
    if (myContact.zipcode.value.length === 5)
      validZipcode = true
    else
      errorMessages += "<p>A Zip Code is required if the chosen country is USA.</p>";
  
      document.getElementById("errorMessages").innerHTML = errorMessages;
      //make sure you return all the boolean variable that are checking each filed
      return (validFirstname && validLastname && validEmail && validUsername && validUserpassword && validPhone && validAddress && validCity && validZipcode);
    }
