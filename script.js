let lastvalidimg = "default.png";

window.onload = function() {
    const id = document.getElementById("Id").value.substring(0, 6);
    document.getElementById("Id").value = id;
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

function change() {
    const id = document.getElementById("Id").value.substring(0, 6);
    document.getElementById("Id").value = id;
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
