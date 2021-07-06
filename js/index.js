// Selector Variables
const home = document.querySelector(".home");
const homeH2 = home.querySelector("h2");
const homeP = home.querySelector("p");
const changeBus = document.querySelector("header.intro img");

const topContentH2 = home.querySelector(".content-section h2");
const topContentP = home.querySelector(".content-section p");
const topContentP2 = topContentP.nextElementSibling;
const topImg = home.querySelector("div.img-content img");

console.log(topImg);

// Event Listeners

// Header Listeners
homeH2.addEventListener(
  "mouseover",
  () =>
    (homeH2.textContent = "The Fun Bus is a sham, do not believe their lies!")
);

homeH2.addEventListener(
  "mouseout",
  () => (homeH2.textContent = "Welcome To Fun Bus!")
);

homeP.addEventListener(
  "mouseover",
  () =>
    (homeP.textContent =
      "I like to drink redbull in the morning and also at midnight and also have a puff of the juul because it's good for my health and contributes heavily to my youthful spirit. I swear by this statement and there's nothing that can be done to stop me.")
);

homeP.addEventListener(
  "mouseout",
  () =>
    (homeP.textContent =
      "Traveling expedition modern, clean webdesign blogger clean website theme website modern. Design pretty design, travelblogger adventure WordPress wanderlust theme blogger website expedition theme travelblogger. Adventure fun traveler pretty design website expedition.")
);

changeBus.addEventListener(
  "click",
  () => (changeBus.src = "https://picsum.photos/800/240")
);

// Top Content Listeners
topContentH2.addEventListener(
  "dblclick",
  () =>
    (topContentH2.textContent = "Insane EXP/hr AoE Frost Mage Leveling Guide")
);

topContentP.addEventListener(
  "dblclick",
  () =>
    (topContentP.textContent =
      "What's up YouTube, today we're going to be going over this insane AoE build bringing in about a million exp per second. It's insane guys don't click away, don't forget to like and subscribe, and hit that bell.")
);

topContentP2.addEventListener(
  "dblclick",
  () =>
    (topContentP2.textContent =
      "This is actually a lie you can't get a million exp per second that's actually impossible I'm unsubscribing >:(")
);

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 17) {
    topImg.src = "https://picsum.photos/376/282";
  }
});
