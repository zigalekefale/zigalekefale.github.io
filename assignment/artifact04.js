 var frmvalidator = new Validator("myform");
      frmvalidator.addValidation("FirstName","req","Please enter your First Name");
      frmvalidator.addValidation("FirstName","maxlen=20",
                                 "Max length for FirstName is 20");

      frmvalidator.addValidation("LastName","req");
      frmvalidator.addValidation("LastName","maxlen=20");

      frmvalidator.addValidation("Email","maxlen=50");
      frmvalidator.addValidation("Email","req");
      frmvalidator.addValidation("Email","email");

      frmvalidator.addValidation("Password","maxlen=7");
      frmvalidator.addValidation("Password","req");
    
      frmvalidator.addValidation("Phone","maxlen=15");
      frmvalidator.addValidation("Phone","numeric");
 
     frmvalidator.addValidation("Address","maxlen=50");
     frmvalidator.addValidation("Country","dontselect=000");


      frmvalidator.addValidation("City","maxlen=50");
      frmvalidator.addValidation("City","req");

      frmvalidator.addValidation("Countries","maxlen=50");
      frmvalidator.addValidation("Countries","req");

      frmvalidator.addValidation("States","maxlen=50");
      frmvalidator.addValidation("States","req");

      frmvalidator.addValidation("ZipCode","maxlen=5");
      frmvalidator.addValidation("ZipCode","req");
            
      frmvalidator.addValidation("UserName","maxlen=12");
      frmvalidator.addValidation("UserName","req");
            
     frmvalidator.addValidation("Comment","maxlen=50");
