function toggleMenu(){
    const sideMenu = document.getElementById("side-menu");
    const image = document.getElementById("iconHide");

    if(sideMenu.style.width == "250px"){
        //close menu
        sideMenu.style.width = "0";
        image.style.display = "block";
        sideMenu.style.backdropFilter = "blur(5px)";
    } else {
        //open the menu
        sideMenu.style.width = "250px";
        image.style.display = "none";
        sideMenu.style.backdropFilter = "none";

    }
}

