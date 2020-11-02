function validate(){
    let promise = new Promise((resolve,reject)=>{
        var emailID = document.getElementById('email').value;
        if(emailID.includes('@') && (emailID.includes('.com') || emailID.includes('.in') || emailID.includes('.co.in') || emailID.includes('.network'))){
            resolve('Valid');
        }else{
            reject('Invalid');
        }
    })
    promise.then(message=>{
        document.getElementById('outputScreen').innerHTML = message;
    }).catch(message=>{
        document.getElementById('outputScreen').innerHTML = message;
    })
}