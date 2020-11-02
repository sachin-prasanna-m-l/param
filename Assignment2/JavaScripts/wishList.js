var itemList = [0,0,0,0,0];
function updateWishList(imageId){
    var index = imageId;
    if(itemList[index]==0){
        itemList[index]=1;
    }else{
        itemList[index]=0;
    }
    showWishList();
}
function showWishList(){
    var items = "";
    for(var i=0;i<5;i++){
        if(itemList[i]==1){
            items+=document.getElementById(i).innerHTML+"<br>"+"<br>";
        }
    }
    document.getElementById('list').innerHTML = items;
}
