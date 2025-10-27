function toggleMenu(){
    const sideMenu = document.getElementById("side-menu");
    const image = document.getElementById("iconHide");
    const backdrop = document.getElementById("content")
    

    if(sideMenu.style.width == "250px"){
        //close menu
        sideMenu.style.width = "0";
        image.style.display = "block";
        backdrop.style.filter = "none";
    } else {
        //open the menu
        sideMenu.style.width = "250px";
        image.style.display = "none";
        backdrop.style.filter = "blur(5px)";

    }
}

