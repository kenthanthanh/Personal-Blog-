function validate(){
    var yourcake = document.myForm.cakename.value;
    var yourname = document.myForm.name.value;
    var yourmessage = document.myForm.message.value;
    var yourdate = document.myForm.deliver.value;
    var yourtitle = document.myForm.messagecontent.value;
    var yourcall = document.myForm.callbefore.value;

    var status = false;
    
        if(yourcake == "Select cake") {
            document.getElementById("cakename").innerHTML = "Please select our product.";
            //notice +="\n Please select our product.";
            status = false;
        } else {
            document.getElementById("cakename").innerHTML = "";
            status= true;
        }

        if(yourname < 1) {
            document.getElementById("name").innerHTML = " Please fill your name. ";
            //notice +="\n Please fill out the address.";
            status= false;
        }
        else if(yourname.length > 100) {
            document.getElementById("name").innerHTML="Your name should not exceed 100 characters.";
            //notice +="\n Address should not exceed 500 characters.";
            status= false;
        } else {
            document.getElementById("name").innerHTML = "";
            status= true;
        }

        if(yourmessage.length > 30) {
            document.getElementById("message").innerHTML="Message should not exceed 30 characters.";
            //notice +="\n Message should not exceed 30 characters.";
            status = false;
        } else {
            document.getElementById("message").innerHTML = "";
            status= true;
        }
    
        if(yourdate =="" ) {
            document.getElementById("deliver").innerHTML=" Please fill out the deliver date.";
            //notice +="\n Please fill out the deliver date.";
            status = false;
        }
        //else if (deliverdate < date){
           // notice +="\n Please choose date in the future.";
        //}
        else {
            document.getElementById("deliver").innerHTML = "";
            status= true;
        }
        
        
        if(yourtitle < 1) {
            document.getElementById("message-content").innerHTML = " Please fill out the address. ";
            //notice +="\n Please fill out the address.";
            status= false;
        }
        else if(yourtitle.length > 500) {
            document.getElementById("message-content").innerHTML="Address should not exceed 500 characters.";
            //notice +="\n Address should not exceed 500 characters.";
            status= false;
        } else {
            document.getElementById("message-content").innerHTML = "";
            status= true;
        }
        if(yourcall =="") {
            //notice +="\n Message should not exceed 30 characters.";
        return yourcall== "No";
       
        }
        
        
        
     
        return status;
    }