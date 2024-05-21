window.onscroll = function() {
    let scrollElem = document.getElementById("scrollToTop");
    if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
        scrollElem.style.opacity = "1";
    } else {
        scrollElem.style.opacity = "0";
    }
}