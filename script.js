function getFormvalue() {
    //Write your code here

	var firstName = document.getElementByClassName("form1").elements.namedItem("fname").value;
    var lastName = document.getElementById("form1").elements.namedItem("lname").value;

    // Check if both fields are not empty
    if (firstName.trim() !== "" && lastName.trim() !== "") {
        // Display an alert with the user's first and last name
        alert(firstName +" "+ lastName);
    } else {
        
        alert("Please fill in both First Name and Last Name fields.");
    }

    
    return false;
	
	
	

	

}
