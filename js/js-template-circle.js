function nav() {
    var x = document.getElementById('menu-links')
    if (x.style.transform === "none") {
        x.style.transform = "translateX(100vw)";
      } else {
        x.style.transform = "none";
      };
}
function navbottom() {
    var x = document.getElementById('menu-links')
    if (x.style.height === "400px") {
        x.style.height = "0px";
      } else {
        x.style.height = "400px";
      };
}