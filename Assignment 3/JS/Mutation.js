function validateLogin(input){
    var pattern = /^mutation[\s|\n|\t]+login\(\$email:[\s|\n|\t]+[a-zA-Z0-9]+@[.a-z]+\!\,\$password:[\s|\n|\t]+[a-zA-Z0-9]+\!\)\{[\s|\n|\t]+login\(email:\$email\,password:\$password\)\{[\s|\n|\t]+[a-zA-Z0-9]+[\s|\n|\t]+\}[\s|\t|\n]+\}$/;
    if(input.match(pattern)){
        document.getElementById('output').innerHTML='valid';
        console.log('valid');
    }else{
        document.getElementById('output').innerHTML='invalid';
        console.log('invalid');
    }
}
function validatePO(input){
    var pattern = /^mutation[\s|\t|\n]\{[\s|\n|\t]+createPO\(uid:\"[a-zA-Z0-9]+\"\,document:\{[\s|\n|\t]+data:\"[a-zA-Z0-9]+\"\},txMode:[A-Z]+,isInward:[a-z]+\)[\s|\n|\t]+\}$/;
    if(input.match(pattern)){
        document.getElementById('output').innerHTML='valid';
        console.log('valid');
    }else{
        document.getElementById('output').innerHTML='invalid';
        console.log('invalid');
    }
}
/*mutation login($email: sachin@gmail.com!,$password: asdasdasd!){
login(email:$email,password:$password){
data
}
}*/
/*mutation login($email: sachin@gmail.com!,$password:*/