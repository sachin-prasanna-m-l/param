function validateHexadecimal(input){
    let pattern = new RegExp(/0x([0-9][a-z][A-Z])*/);
    if(pattern.test(input) && input.length==34){
        document.getElementById('output').innerHTML='Valid';
        document.getElementById('output').style.backgroundColor= "#38923f";
        document.getElementById('output').style.color="white";
    }else{
        document.getElementById('output').innerHTML='Invalid';
        document.getElementById('output').style.backgroundColor= "#a03333";
        document.getElementById('output').style.color="white";
    }
}
function validateEmail(input){
    let pattern = new RegExp(/^[a-z0-9]+@[a-z0-9]+[.][a-z]{2,3}/);
    if(pattern.test(input)){
        document.getElementById('output').innerHTML='Valid';
        document.getElementById('output').style.backgroundColor= "#38923f";
        document.getElementById('output').style.color="white";
    }else{
        document.getElementById('output').innerHTML='Invalid';
        document.getElementById('output').style.backgroundColor= "#a03333";
        document.getElementById('output').style.color="white";
    }
}
//0x5AB1A81CDB8B279D62F3A3B405B51DBC