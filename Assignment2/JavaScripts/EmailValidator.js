function validate(){
    var emailID = ""+document.getElementById('email').value;
    if(emailID.includes('@') && (emailID.includes('.com') || emailID.includes('.in') || emailID.includes('.co.in') || emailID.includes('.network'))){
        document.getElementById('outputScreen').innerHTML = "Valid";
    }else{
        document.getElementById('outputScreen').innerHTML = "Invalid";
    }
}