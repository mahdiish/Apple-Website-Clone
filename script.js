"use strict";

const searchIcon = document.querySelector(".searchIcon");
const SearchIconClickResult = document.querySelector(".SearchIconClickResult");
const searchBoxHeader = document.querySelector(".searchBoxHeader");
const closeSearchHeader = document.querySelector(".closeSearchHeader");
const menuElement = document.querySelectorAll(".menuElement");
const quickLinks = document.querySelector(".quickLinks");
const inputSearchHeader = document.querySelector(".inputSearchHeader");
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const hamburgerBar1 = document.querySelector(".hamburgerBar1");
const hamburgerBar2 = document.querySelector(".hamburgerBar2");
const verticalMenu = document.querySelector(".verticalMenu");
const headerMenu = document.querySelector(".headerMenu");
const bagIcon = document.querySelector(".bagIcon");
const searchBoxRow = document.querySelector(".searchBoxRow");
const inputSearch = document.querySelector(".inputSearch");
const bottomSection = document.querySelector(".bottomSection");
const quickLinksVerticalMenu = document.querySelector(
  ".quickLinksVerticalMenu"
);
const cancelSearch = document.querySelector(".cancelSearch");
//
const firstBannerButton1 = document.querySelector(".firstBannerButton1");
const firstBannerButton2 = document.querySelector(".firstBannerButton2");
const firstBannerButton1Text = document.querySelector(
  ".firstBannerButton1Text"
);
const firstBannerButton2Text = document.querySelector(
  ".firstBannerButton2Text"
);
//
const giftBannerButton = document.querySelector(".giftBannerButton");
const giftBannerButtonText = document.querySelector(".giftBannerButtonText");
//
const watchBannerButton1 = document.querySelector(".watchBannerButton1");
const watchBannerButton2 = document.querySelector(".watchBannerButton2");
const watchBannerButton1Text = document.querySelector(
  ".watchBannerButton1Text"
);
const watchBannerButton2Text = document.querySelector(
  ".watchBannerButton2Text"
);

// Header
searchIcon.addEventListener("click", (e) => {
  menuElement.forEach((element) => {
    element.classList.add("noneDisplay");
  });
  SearchIconClickResult.classList.add("flexDisplay");
  inputSearchHeader.focus();

  document.addEventListener("keydown", (event) => {
    if (inputSearchHeader.innerHTML === "Search apple.com") {
      inputSearchHeader.innerHTML = "";
    }
    inputSearchHeader.style.color = "#fafafa";
  });
});

closeSearchHeader.addEventListener("click", (e) => {
  SearchIconClickResult.classList.remove("flexDisplay");
  inputSearchHeader.innerHTML = "Search apple.com";
  menuElement.forEach((element) => {
    element.classList.remove("noneDisplay");
  });
});

inputSearch.addEventListener("click", (e) => {
  bottomSection.style.display = "none";
  quickLinksVerticalMenu.style.display = "flex";
  cancelSearch.style.display = "flex";
  headerMenu.style.display = "none";
  searchBoxRow.style.padding = "7px 4% 7px 4%";

  document.addEventListener("keydown", (event) => {
    if (inputSearch.innerHTML === "Search apple.com") {
      inputSearch.innerHTML = "";
    }
    inputSearch.style.color = "#f9f9f9";
  });
});

cancelSearch.addEventListener("click", (e) => {
  headerMenu.style.display = "flex";
  bottomSection.style.display = "flex";
  quickLinksVerticalMenu.style.display = "none";
  cancelSearch.style.display = "none";
  searchBoxRow.style.padding = "0px 4% 15px 4%";
  inputSearch.innerHTML = "Search apple.com";
  inputSearch.style = "initial";
});

hamburgerIcon.addEventListener("click", (e) => {
  hamburgerBar1.classList.toggle("hamburgerBarMov1");
  hamburgerBar1.style.transition = "0.5s";
  hamburgerBar2.classList.toggle("hamburgerBarMov2");
  hamburgerBar2.style.transition = "0.5s";
  verticalMenu.classList.toggle("visibleClass");
  headerMenu.classList.toggle("blackBackground");
  bagIcon.classList.toggle("hiddenClass");
});

hamburgerIcon.addEventListener("mouseover", (e) => {
  hamburgerBar1.classList.add("hamburgerBarHover");
  hamburgerBar1.style.transition = "0.5s";
  hamburgerBar2.classList.add("hamburgerBarHover");
  hamburgerBar2.style.transition = "0.5s";
});

hamburgerIcon.addEventListener("mouseout", (e) => {
  hamburgerBar1.classList.remove("hamburgerBarHover");
  hamburgerBar1.style.transition = "0.5s";
  hamburgerBar2.classList.remove("hamburgerBarHover");
  hamburgerBar2.style.transition = "0.5s";
});

// First Banner
firstBannerButton1.addEventListener("mouseover", (e) => {
  firstBannerButton1Text.style.textDecoration = "underline";
});

firstBannerButton1.addEventListener("mouseout", (e) => {
  firstBannerButton1Text.style.textDecoration = "none";
});

firstBannerButton2.addEventListener("mouseover", (e) => {
  firstBannerButton2Text.style.textDecoration = "underline";
});

firstBannerButton2.addEventListener("mouseout", (e) => {
  firstBannerButton2Text.style.textDecoration = "none";
});

//Gift Banner
giftBannerButton.addEventListener("mouseover", (e) => {
  giftBannerButtonText.style.textDecoration = "underline";
});

giftBannerButton.addEventListener("mouseout", (e) => {
  giftBannerButtonText.style.textDecoration = "none";
});

//Apple Watch 8 Banner
watchBannerButton1.addEventListener("mouseover", (e) => {
  watchBannerButton1Text.style.textDecoration = "underline";
});

watchBannerButton1.addEventListener("mouseout", (e) => {
  watchBannerButton1Text.style.textDecoration = "none";
});

watchBannerButton2.addEventListener("mouseover", (e) => {
  watchBannerButton2Text.style.textDecoration = "underline";
});

watchBannerButton2.addEventListener("mouseout", (e) => {
  watchBannerButton2Text.style.textDecoration = "none";
});
