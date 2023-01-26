let menuList = document.getElementById("menu-list");

menuList.style.maxHeight ="0px";

function menu() {
    if (menuList.style.maxHeight =="0px") {

        menuList.style.maxHeight ="140px";
        
    } else {
        menuList.style.maxHeight ="0px";

    }
    
}
