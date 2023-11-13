function validate() {
    var yourname = document.myForm.name.value;
    var youremail = document.myForm.email.value;
    var yoursubject = document.myForm.subject.value;
    var yourmessage = document.myForm.message.value;
    var status = false;
//let notice ="";
if(yourname < 1 ) {
    //notice += "\n Please fill out your name.";
    document.getElementById("name").innerHTML = "Please fill out your name.";
    status = false;
}
else if(yourname.length > 100) {
    //notice += "\n Your name should not exceed 100 characters.";
    document.getElementById("name").innerHTML = "Your name should not exceed 100 characters.";
    status = false;
}else {
    document.getElementById("name").innerHTML = "";
    status = true;
}
if(youremail < 1) {
    //notice += "\n Please fill out your email.";
    document.getElementById("email").innerHTML = "Please fill out your email.";
    status = false;
}
else if(youremail.length > 100) {
    //notice += "\n Your email should not exceed 100 characters.";
    document.getElementById("email").innerHTML = "Your email should not exceed 100 characters.";
    status = false;
}else {
    document.getElementById("email").innerHTML = "";
    status = true;
}
if(yoursubject < 1) {
    //notice += "\n Please fill out the subject.";
    document.getElementById("subject").innerHTML = "Please fill out the subject.";
    status = false;
}
else if(yoursubject.length < 50) {
    //notice += "\n Subject should not shorter than 50 characters.";
    document.getElementById("subject").innerHTML = "Subject should not shorter than 50 characters.";
    status = false;
}
else if(yoursubject.length > 250) {
    //notice += "\n Subject should not exceed 250 characters.";
    document.getElementById("subject").innerHTML = "Subject should not exceed 250 characters.";
    status = false;
}else {
    document.getElementById("subject").innerHTML = "";
    status = true;
}
if(yourmessage < 1) {
    //notice += "\n Please fill out the message.";
    document.getElementById("message").innerHTML = "Please fill out the message.";
    status = false;
}
else if(yourmessage.length > 500) {
    //notice += "\n Message should not exceed 500 characters.";
    document.getElementById("message").innerHTML = "Message should not exceed 500 characters.";
    status = false;
}else {
    document.getElementById("message").innerHTML = "";
    status = true;
}
return status;
//if(notice !== ""){
  //  alert(notice);
//}
//else if (notice ===""){
  //  alert("We have received your information!");
//}

}