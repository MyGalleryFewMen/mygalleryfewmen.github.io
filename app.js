function onload() {
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "./image.jpg");
    xhr.responseType = "arraybufer";
    
    xhr.onload = function (e) {
        var blob = new Blob([xhr.response], {type: "image/jpg"});
        var url = URL.createObjectURL(blob);
        
        console.log(url);
        
        var img = document.getElementById("image");
        img.src = url;
    }
    
    xhr.send();
}