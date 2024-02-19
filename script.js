function getFormvalue(ev) {

  var Name = document.querySelectorAll("#form1>input");
  var firstName = Name[0];
  var lastName = Name[1];
  


  // if (firstName.value == "" || lastName.value == "") {
    
  //   alert("Please fill in both First Name and Last Name fields.");

  // } else {
  //   alert(firstName.value + " " + lastName.value);


  // }
  // ev.preventDefault();
	var fullName = firstName.value + " " + lastName.value;

    
    alert(fullName);


}
