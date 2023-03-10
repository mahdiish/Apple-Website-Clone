"use strict";

// Header
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
const searchBox = document.querySelector(".searchBox");
const searchBoxImg = document.querySelector(".searchBoxImg");
const inputSearch = document.querySelector(".inputSearch");
const clearSearchBox = document.querySelector(".clearSearchBox");
const bottomSection = document.querySelector(".bottomSection");
const quickLinksVerticalMenu = document.querySelector(
  ".quickLinksVerticalMenu"
);
const cancelSearch = document.querySelector(".cancelSearch");

searchIcon.addEventListener("click", (e) => {
  menuElement.forEach((element) => {
    element.classList.add("noneDisplay");
  });
  SearchIconClickResult.classList.add("flexDisplay");
  inputSearchHeader.focus();

  document.addEventListener("keydown", (event) => {
    inputSearchHeader.style.color = "#fafafa";
  });
});

closeSearchHeader.addEventListener("click", (e) => {
  SearchIconClickResult.classList.remove("flexDisplay");
  inputSearchHeader.value="";
  menuElement.forEach((element) => {
    element.classList.remove("noneDisplay");
  });
});

inputSearch.addEventListener("click", (e) => {
  bottomSection.style.display = "none";
  searchBox.style.justifyContent = "space-around";
  searchBoxImg.style.paddingRight = "0";
  clearSearchBox.style.display = "flex";
  quickLinksVerticalMenu.style.display = "flex";
  cancelSearch.style.display = "flex";
  headerMenu.style.display = "none";
  searchBoxRow.style.padding = "7px 4% 7px 4%";

  document.addEventListener("keydown", (event) => {
    inputSearch.style.color = "#f9f9f9";
  });
});

clearSearchBox.addEventListener("click", (e) => {
  inputSearch.value="";
  inputSearch.focus();
})

cancelSearch.addEventListener("click", (e) => {
  searchBox.style.justifyContent = "flex-start";
  searchBoxImg.style.paddingRight = "10px";
  headerMenu.style.display = "flex";
  bottomSection.style.display = "flex";
  clearSearchBox.style.display = "none";
  quickLinksVerticalMenu.style.display = "none";
  cancelSearch.style.display = "none";
  searchBoxRow.style.padding = "0px 4% 15px 4%";
});

hamburgerIcon.addEventListener("click", (e) => {
  hamburgerBar1.classList.toggle("hamburgerBarMov1");
  hamburgerBar1.style.transition = "0.5s";
  hamburgerBar2.classList.toggle("hamburgerBarMov2");
  hamburgerBar2.style.transition = "0.5s";
  verticalMenu.classList.toggle("visibleClass");
  headerMenu.classList.toggle("blackBackground");
  bagIcon.classList.toggle("hiddenClass");
  window.scrollTo(0, 0);
  document.body.classList.toggle("hiddenOverflow");

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
const firstBannerButton1 = document.querySelector(".firstBannerButton1");
const firstBannerButton2 = document.querySelector(".firstBannerButton2");
const firstBannerButton1Text = document.querySelector(
  ".firstBannerButton1Text"
);
const firstBannerButton2Text = document.querySelector(
  ".firstBannerButton2Text"
);

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

const giftBannerButton = document.querySelector(".giftBannerButton");
const giftBannerButtonText = document.querySelector(".giftBannerButtonText");

giftBannerButton.addEventListener("mouseover", (e) => {
  giftBannerButtonText.style.textDecoration = "underline";
});

giftBannerButton.addEventListener("mouseout", (e) => {
  giftBannerButtonText.style.textDecoration = "none";
});

//Apple Watch 8 Banner
const watchBannerButton1 = document.querySelector(".watchBannerButton1");
const watchBannerButton2 = document.querySelector(".watchBannerButton2");
const watchBannerButton1Text = document.querySelector(
  ".watchBannerButton1Text"
);
const watchBannerButton2Text = document.querySelector(
  ".watchBannerButton2Text"
);

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

//Gift2 & Card Banners
const gift2BannerButton = document.querySelector(".gift2BannerButton");
const gift2BannerButtonText = document.querySelector(".gift2BannerButtonText");
const cardBannerButton1 = document.querySelector(".cardBannerButton1");
const cardBannerButton2 = document.querySelector(".cardBannerButton2");
const cardBannerButton1Text = document.querySelector(".cardBannerButton1Text");
const cardBannerButton2Text = document.querySelector(".cardBannerButton2Text");

gift2BannerButton.addEventListener("mouseover", (e) => {
  gift2BannerButtonText.style.textDecoration = "underline";
});

gift2BannerButton.addEventListener("mouseout", (e) => {
  gift2BannerButtonText.style.textDecoration = "none";
});

cardBannerButton1.addEventListener("mouseover", (e) => {
  cardBannerButton1Text.style.textDecoration = "underline";
});

cardBannerButton1.addEventListener("mouseout", (e) => {
  cardBannerButton1Text.style.textDecoration = "none";
});

cardBannerButton2.addEventListener("mouseover", (e) => {
  cardBannerButton2Text.style.textDecoration = "underline";
});

cardBannerButton2.addEventListener("mouseout", (e) => {
  cardBannerButton2Text.style.textDecoration = "none";
});

//MacBook Pro & HomePod Banners
const macBookProBannerButton1 = document.querySelector(
  ".macBookProBannerButton1"
);
const macBookProBannerButton2 = document.querySelector(
  ".macBookProBannerButton2"
);
const macBookProBannerButton1Text = document.querySelector(
  ".macBookProBannerButton1Text"
);
const macBookProBannerButton2Text = document.querySelector(
  ".macBookProBannerButton2Text"
);
const homePodBannerButton1 = document.querySelector(".homePodBannerButton1");
const homePodBannerButton2 = document.querySelector(".homePodBannerButton2");
const homePodBannerButton1Text = document.querySelector(
  ".homePodBannerButton1Text"
);
const homePodBannerButton2Text = document.querySelector(
  ".homePodBannerButton2Text"
);

macBookProBannerButton1.addEventListener("mouseover", (e) => {
  macBookProBannerButton1Text.style.textDecoration = "underline";
});

macBookProBannerButton1.addEventListener("mouseout", (e) => {
  macBookProBannerButton1Text.style.textDecoration = "none";
});

macBookProBannerButton2.addEventListener("mouseover", (e) => {
  macBookProBannerButton2Text.style.textDecoration = "underline";
});

macBookProBannerButton2.addEventListener("mouseout", (e) => {
  macBookProBannerButton2Text.style.textDecoration = "none";
});

//
homePodBannerButton1.addEventListener("mouseover", (e) => {
  homePodBannerButton1Text.style.textDecoration = "underline";
});

homePodBannerButton1.addEventListener("mouseout", (e) => {
  homePodBannerButton1Text.style.textDecoration = "none";
});

homePodBannerButton2.addEventListener("mouseover", (e) => {
  homePodBannerButton2Text.style.textDecoration = "underline";
});

homePodBannerButton2.addEventListener("mouseout", (e) => {
  homePodBannerButton2Text.style.textDecoration = "none";
});

// Apple TV Plus
//#Adding functionality to pause and play buttons of slider
const pauseButtonSeries = document.querySelector(".pauseButtonSeries");
const playButtonSeries = document.querySelector(".playButtonSeries");
let plusValue = 1;
pauseButtonSeries.addEventListener("click", (e) => {
  pauseButtonSeries.classList.toggle("hiddenClass");
  playButtonSeries.classList.toggle("hiddenClass");
  slideIndexAuto--;
  plusValue = 0;
});

playButtonSeries.addEventListener("click", (e) => {
  playButtonSeries.classList.toggle("hiddenClass");
  pauseButtonSeries.classList.toggle("hiddenClass");
  plusValue = 1;
  slideIndexAuto++;
});

//#Adding functionality to right and left buttons of slider (only visible in small screen size)
const leftButtonSlider = document.querySelector(".leftButtonSlider");
const rightButtonSlider = document.querySelector(".rightButtonSlider");
leftButtonSlider.addEventListener("click", (e) => {
  if (
    pauseButtonSeries.classList[pauseButtonSeries.classList.length - 1] ==
    "hiddenClass"
  ) {
    slideIndexAuto--;
    plusValue = 0;
  } else if (
    pauseButtonSeries.classList[pauseButtonSeries.classList.length - 1] !=
    "hiddenClass"
  ) {
    pauseButtonSeries.classList.add("hiddenClass");
    playButtonSeries.classList.remove("hiddenClass");
    slideIndexAuto = slideIndexAuto - 2;
    plusValue = 0;
  }
});

rightButtonSlider.addEventListener("click", (e) => {
  if (
    pauseButtonSeries.classList[pauseButtonSeries.classList.length - 1] ==
    "hiddenClass"
  ) {
    slideIndexAuto++;
    plusValue = 0;
  } else if (
    pauseButtonSeries.classList[pauseButtonSeries.classList.length - 1] !=
    "hiddenClass"
  ) {
    pauseButtonSeries.classList.add("hiddenClass");
    playButtonSeries.classList.remove("hiddenClass");
    slideIndexAuto = slideIndexAuto;
    plusValue = 0;
  }
});

//#Adding functionality to circles of slider
const firstCircle = document.querySelector(".firstCircle");
const secondCircle = document.querySelector(".secondCircle");
const thirdCircle = document.querySelector(".thirdCircle");
const fourthCircle = document.querySelector(".fourthCircle");
const fifthCircle = document.querySelector(".fifthCircle");
const sixthCircle = document.querySelector(".sixthCircle");
const seventhCircle = document.querySelector(".seventhCircle");
const eighthCircle = document.querySelector(".eighthCircle");
const ninthCircle = document.querySelector(".ninthCircle");
const tenthCircle = document.querySelector(".tenthCircle");

const zerothSeries = document.querySelector(".zerothSeries");
const firstSeries = document.querySelector(".firstSeries");
const secondSeries = document.querySelector(".secondSeries");
const thirdSeries = document.querySelector(".thirdSeries");
const fourthSeries = document.querySelector(".fourthSeries");
const fifthSeries = document.querySelector(".fifthSeries");
const sixthSeries = document.querySelector(".sixthSeries");
const seventhSeries = document.querySelector(".seventhSeries");
const eighthSeries = document.querySelector(".eighthSeries");
const ninthSeries = document.querySelector(".ninthSeries");
const tenthSeries = document.querySelector(".tenthSeries");
const eleventhSeries = document.querySelector(".eleventhSeries");

let seriesItems = [
  zerothSeries,
  firstSeries,
  secondSeries,
  thirdSeries,
  fourthSeries,
  fifthSeries,
  sixthSeries,
  seventhSeries,
  eighthSeries,
  ninthSeries,
  tenthSeries,
  eleventhSeries,
];

let seriesItemsNumbers = {
  zerothSeries: 0,
  firstSeries: 1,
  secondSeries: 2,
  thirdSeries: 3,
  fourthSeries: 4,
  fifthSeries: 5,
  sixthSeries: 6,
  seventhSeries: 7,
  eighthSeries: 8,
  ninthSeries: 9,
  tenthSeries: 10,
  eleventhSeries: 11,
};

let circlesStatusSeries = [
  firstCircle,
  secondCircle,
  thirdCircle,
  fourthCircle,
  fifthCircle,
  sixthCircle,
  seventhCircle,
  eighthCircle,
  ninthCircle,
  tenthCircle,
];

const circlesStatusSeriesNumbers = {
  firstCircle: 1,
  secondCircle: 2,
  thirdCircle: 3,
  fourthCircle: 4,
  fifthCircle: 5,
  sixthCircle: 6,
  seventhCircle: 7,
  eighthCircle: 8,
  ninthCircle: 9,
  tenthCircle: 10,
};

const circlesSection = document.querySelector(".circlesStatusSeries");
const bottomSectionSeries = document.querySelectorAll(".bottomSectionSeries");

let circle;
let slideIndexAuto;
circlesSection.addEventListener("click", (e) => {
  let circleElement = e.target;
  circle = e.target.classList[1];

  circlesStatusSeries.map(function (element) {
    if (circleElement != element) {
      element.classList.remove("selectedCircle");
      element.classList.add("unselectedCircle");
    } else {
      circleElement.classList.remove("unselectedCircle");
      circleElement.classList.add("selectedCircle");
    }
  });

  seriesItems.map(function (element) {
    if (
      seriesItemsNumbers[element.classList[0]] >
        Number([circlesStatusSeriesNumbers[circle]]) + 1 ||
      seriesItemsNumbers[element.classList[0]] <
        Number([circlesStatusSeriesNumbers[circle]]) - 1
    ) {
      element.classList.remove("flexDisplay");
      element.classList.add("noneDisplay");
    } else {
      element.classList.remove("noneDisplay");
      element.classList.add("flexDisplay");
    }

    if (
      seriesItemsNumbers[element.classList[0]] ==
      Number([circlesStatusSeriesNumbers[circle]])
    ) {
      element.classList.remove("slideOpacity");
    } else if (
      seriesItemsNumbers[element.classList[0]] !=
      Number([circlesStatusSeriesNumbers[circle]])
    ) {
      element.classList.add("slideOpacity");
    }
  });
  slideIndexAuto = circlesStatusSeriesNumbers[circle];
  slideShowAuto();
});

//#Adding autoshow property to slider
slideIndexAuto = 1;
slideShowAuto();
function slideShowAuto() {
  seriesItems.map(function (element) {
    if (seriesItemsNumbers[element.classList[0]] == slideIndexAuto) {
      element.classList.remove("slideOpacity");
    } else if (seriesItemsNumbers[element.classList[0]] != slideIndexAuto) {
      element.classList.add("slideOpacity");
    }

    if (
      seriesItemsNumbers[element.classList[0]] > slideIndexAuto + 1 ||
      seriesItemsNumbers[element.classList[0]] < slideIndexAuto - 1
    ) {
      element.classList.remove("flexDisplay");
      element.classList.add("noneDisplay");
    } else {
      element.classList.remove("noneDisplay");
      element.classList.add("flexDisplay");
    }

  });

  circlesStatusSeries.map(function (element) {
    if (circlesStatusSeriesNumbers[element.classList[1]] != slideIndexAuto) {
      element.classList.remove("selectedCircle");
      element.classList.add("unselectedCircle");
    } else {
      element.classList.remove("unselectedCircle");
      element.classList.add("selectedCircle");
    }
  });

  for (let count = 0; count < bottomSectionSeries.length; count++) {
    if (count == slideIndexAuto) {
      bottomSectionSeries[count].classList.remove("noneDisplay");
      bottomSectionSeries[count].classList.add("flexDisplay");
    } else if (count != slideIndexAuto) {
      bottomSectionSeries[count].classList.remove("flexDisplay");
      bottomSectionSeries[count].classList.add("noneDisplay");
    }
  }

  slideIndexAuto = slideIndexAuto + plusValue;
  if (slideIndexAuto > 10) {
    slideIndexAuto = 1;
  } else if (slideIndexAuto < 1) {
    slideIndexAuto = 10;
  }
  setTimeout(slideShowAuto, 4000); // Change image every 2 seconds
}

//#Changing the images of slider in small screen size
const zerothSeriesImg = document.querySelector(".zerothSeriesImg");
const firstSeriesImg = document.querySelector(".firstSeriesImg");
const secondSeriesImg = document.querySelector(".secondSeriesImg");
const thirdSeriesImg = document.querySelector(".thirdSeriesImg");
const fourthSeriesImg = document.querySelector(".fourthSeriesImg");
const fifthSeriesImg = document.querySelector(".fifthSeriesImg");
const sixthSeriesImg = document.querySelector(".sixthSeriesImg");
const seventhSeriesImg = document.querySelector(".seventhSeriesImg");
const eighthSeriesImg = document.querySelector(".eighthSeriesImg");
const ninthSeriesImg = document.querySelector(".ninthSeriesImg");
const tenthSeriesImg = document.querySelector(".tenthSeriesImg");
const eleventhSeriesImg = document.querySelector(".eleventhSeriesImg");

if (window.innerWidth < 718) {
  zerothSeriesImg.src = "Imgs/appleTV+10_small.jpg";
  firstSeriesImg.src = "Imgs/appleTV+1_small.jpg";
  secondSeriesImg.src = "Imgs/appleTV+2_small.jpg";
  thirdSeriesImg.src = "Imgs/appleTV+3_small.jpg";
  fourthSeriesImg.src = "Imgs/appleTV+4_small.jpg";
  fifthSeriesImg.src = "Imgs/appleTV+5_small.jpg";
  sixthSeriesImg.src = "Imgs/appleTV+6_small.jpg";
  seventhSeriesImg.src = "Imgs/appleTV+7_small.jpg";
  eighthSeriesImg.src = "Imgs/appleTV+8_small.jpg";
  ninthSeriesImg.src = "Imgs/appleTV+9_small.jpg";
  tenthSeriesImg.src = "Imgs/appleTV+10_small.jpg";
  eleventhSeriesImg.src = "Imgs/appleTV+1_small.jpg";
} else {
  zerothSeriesImg.src = "Imgs/appleTV+10.jpg";
  firstSeriesImg.src = "Imgs/appleTV+1.jpg";
  secondSeriesImg.src = "Imgs/appleTV+2.jpg";
  thirdSeriesImg.src = "Imgs/appleTV+3.jpg";
  fourthSeriesImg.src = "Imgs/appleTV+4.jpg";
  fifthSeriesImg.src = "Imgs/appleTV+5.jpg";
  sixthSeriesImg.src = "Imgs/appleTV+6.jpg";
  seventhSeriesImg.src = "Imgs/appleTV+7.jpg";
  eighthSeriesImg.src = "Imgs/appleTV+8.jpg";
  ninthSeriesImg.src = "Imgs/appleTV+9.jpg";
  tenthSeriesImg.src = "Imgs/appleTV+10.jpg";
  eleventhSeriesImg.src = "Imgs/appleTV+1.jpg";
}

window.addEventListener("resize", (event) => {
  if (window.innerWidth < 718) {
    zerothSeriesImg.src = "Imgs/appleTV+10_small.jpg";
    firstSeriesImg.src = "Imgs/appleTV+1_small.jpg";
    secondSeriesImg.src = "Imgs/appleTV+2_small.jpg";
    thirdSeriesImg.src = "Imgs/appleTV+3_small.jpg";
    fourthSeriesImg.src = "Imgs/appleTV+4_small.jpg";
    fifthSeriesImg.src = "Imgs/appleTV+5_small.jpg";
    sixthSeriesImg.src = "Imgs/appleTV+6_small.jpg";
    seventhSeriesImg.src = "Imgs/appleTV+7_small.jpg";
    eighthSeriesImg.src = "Imgs/appleTV+8_small.jpg";
    ninthSeriesImg.src = "Imgs/appleTV+9_small.jpg";
    tenthSeriesImg.src = "Imgs/appleTV+10_small.jpg";
    eleventhSeriesImg.src = "Imgs/appleTV+1_small.jpg";
  } else {
    zerothSeriesImg.src = "Imgs/appleTV+10.jpg";
    firstSeriesImg.src = "Imgs/appleTV+1.jpg";
    secondSeriesImg.src = "Imgs/appleTV+2.jpg";
    thirdSeriesImg.src = "Imgs/appleTV+3.jpg";
    fourthSeriesImg.src = "Imgs/appleTV+4.jpg";
    fifthSeriesImg.src = "Imgs/appleTV+5.jpg";
    sixthSeriesImg.src = "Imgs/appleTV+6.jpg";
    seventhSeriesImg.src = "Imgs/appleTV+7.jpg";
    eighthSeriesImg.src = "Imgs/appleTV+8.jpg";
    ninthSeriesImg.src = "Imgs/appleTV+9.jpg";
    tenthSeriesImg.src = "Imgs/appleTV+10.jpg";
    eleventhSeriesImg.src = "Imgs/appleTV+1.jpg";
  }
});

// Footer
const footerCategory = document.querySelectorAll(".footerCategory");
const footerSubtitles = document.querySelectorAll(".footerSubtitles");
const footerTitleOpener = document.querySelectorAll(".footerTitleOpener");

if (window.innerWidth < 833) {
  for (let i = 0; i < footerSubtitles.length; i++) {
    footerSubtitles[i].classList.add("noneDisplay");
    let clickCount = 0;
    footerCategory[i].addEventListener("click", (e) => {
      clickCount++;

      if (clickCount / 2 == Math.round(clickCount / 2)) {
        footerTitleOpener[i].classList.remove("footerTitleOpenerRotate");
        footerTitleOpener[i].classList.add("footerTitleOpenerRotate2");
        footerSubtitles[i].classList.remove("flexDisplayColumn");
        footerSubtitles[i].classList.add("noneDisplay");
      } else if (clickCount / 2 != Math.round(clickCount / 2)) {
        footerTitleOpener[i].classList.remove("footerTitleOpenerRotate2");
        footerTitleOpener[i].classList.add("footerTitleOpenerRotate");
        footerSubtitles[i].classList.remove("noneDisplay");
        footerSubtitles[i].classList.add("flexDisplayColumn");
      }

    });
  }
} else {
  for (let i = 0; i < footerSubtitles.length; i++) {
    footerSubtitles[i].classList.remove("noneDisplay");
    footerSubtitles[i].classList.add("flexDisplayColumn");
  }
}

//

let resizeCount = 0;
window.addEventListener("resize", (event) => {
  if (window.innerWidth > 833) {
    resizeCount = 0;
  }

  if (window.innerWidth < 833) {
    if (resizeCount == 0) {
      for (let i = 0; i < footerSubtitles.length; i++) {
        footerSubtitles[i].classList.add("noneDisplay");
        resizeCount = 1;
      }
    }

    for (let i = 0; i < footerSubtitles.length; i++) {
      let clickCount = 0;
      footerCategory[i].addEventListener("click", (e) => {
        clickCount++;
        if (clickCount / 2 == Math.round(clickCount / 2)) {
          footerTitleOpener[i].classList.remove("footerTitleOpenerRotate");
          footerTitleOpener[i].classList.add("footerTitleOpenerRotate2");
          footerSubtitles[i].classList.remove("flexDisplayColumn");
          footerSubtitles[i].classList.add("noneDisplay");
        } else if (clickCount / 2 != Math.round(clickCount / 2)) {
          footerTitleOpener[i].classList.remove("footerTitleOpenerRotate2");
          footerTitleOpener[i].classList.add("footerTitleOpenerRotate");
          footerSubtitles[i].classList.remove("noneDisplay");
          footerSubtitles[i].classList.add("flexDisplayColumn");
        }

      });
    }
  } else {
    for (let i = 0; i < footerSubtitles.length; i++) {
      footerSubtitles[i].classList.remove("noneDisplay");
      footerSubtitles[i].classList.add("flexDisplayColumn");
    }
  }
});
