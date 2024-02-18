function getFormvalue(ev) {

  var Name = document.querySelectorAll("#form1>input");
  var firstName = Name[0];
  var lastName = Name[1];
  console.log(Name[0].value);


  if (firstName.value == "" || lastName.value == "") {
    
    alert("Please fill in both First Name and Last Name fields.");

  } else {
    alert(firstName.value + " " + lastName.value);


  }
  ev.preventDefault();


}
