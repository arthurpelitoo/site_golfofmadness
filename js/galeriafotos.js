
function openFullScreen(img) {
    const fullscreenContainer = document.getElementById("fullscreen-container");
    const fullscreenImg = document.getElementById("fullscreen-img");

    fullscreenImg.src = img.src;
    fullscreenContainer.style.display = "flex";

}

function closeFullScreen(){
    document.getElementById("fullscreen-container").style.display = "none";
}