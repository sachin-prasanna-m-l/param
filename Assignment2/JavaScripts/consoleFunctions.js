function wordFrequency(){
    var text = document.getElementById('inputString').value.toString();
    var words = text.split(" ");
    var count = 0;
    for(var i=0;i<words.length;i++){
        var word = words[i].toLowerCase();
        if((word.localeCompare("param"))==0 ||(word.localeCompare("param."))==0){
            count++;
        }
    }
    document.getElementById('outputCount').innerHTML=  count.toString();
    count=0;
}
function sum(){
    var text = document.getElementById('inputString').value.toString();
    var words = text.split(" ");
    var sum=0;
    for(var i=0;i<words.length;i++){
        var number = parseInt(words[i]);
        if(Number.isInteger(number)){
            sum+=number;
        }
    }
    document.getElementById('outputCount').innerHTML=  sum.toString();
    sum=0;
}