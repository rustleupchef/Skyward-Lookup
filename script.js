let lastvalidimg = "default.png";
function change() {
    console.log(document.getElementById("Id").value)
    const id = document.getElementById("Id").value;
    const img = new Image();
    const url = "https://skyward.springbranchisd.com/pictures/" + id + ".jpg";
    img.src = url;
    img.onload = function() {
        document.getElementById("Person").src = url;
        lastvalidimg = url;
    }
    img.onerror = function() {
        document.getElementById("Person").src = lastvalidimg;
    }
}
