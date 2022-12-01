window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("roll_back").style.display = "flex";
  } else {
    document.getElementById("roll_back").style.display = "none";
  }
}

/*CARD_SCROLLER*/
document.addEventListener("click", closeAllSelect);
function scrollright() {
  document.getElementById("section3-cards").scrollLeft += 400;
}
function scrollleft() {
  document.getElementById("section3-cards").scrollLeft -= 400;
}
/*CARD_SCROLLERENDS*/
