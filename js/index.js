// Selector Variables
const nav = document.querySelector(".main-navigation");
const background = document.querySelector("body");

const home = document.querySelector(".home");
const homeH2 = home.querySelector("h2");
const homeP = home.querySelector("p");
const changeBus = document.querySelector("header.intro img");

const topContentH2 = home.querySelector(".content-section h2");
const topContentP = home.querySelector(".content-section p");
const topContentP2 = topContentP.nextElementSibling;
const topImg = home.querySelector("div.img-content img");

const midContentH2 = home.querySelector(".inverse-content h2");
const midContentP = home.querySelector(".inverse-content div.text-content p");
const midContentP2 = midContentP.nextElementSibling;
const midImg = home.querySelector(".inverse-content div.img-content img");

const botImg = document.querySelector("section.content-destination img");
console.log(botImg);

// Event Listeners

// Nav Listeners
document.addEventListener("wheel", () => (nav.style.backgroundColor = "cyan"));

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

// Mid Event Listeners

document.addEventListener("scroll", (e) => {
  background.style.backgroundColor = "salmon";
  e.preventDefault();
});

// Drag & Drop

const dropDiv = document.createElement("div");
dropDiv.style.width = "auto";
dropDiv.style.backgroundColor = "crimson";

botImg.insertAdjacentElement("afterend", dropDiv);

let dragged;

document.addEventListener("drag", (e) => {}, false);
document.addEventListener(
  "dragstart",
  (e) => {
    dragged = e.target;
    e.target.style.opacity = 0.5;
  },
  false
);
document.addEventListener(
  "dragend",
  (e) => {
    e.target.style.opacity = "";
  },
  false
);
document.addEventListener(
  "dragover",
  (e) => {
    e.preventDefault();
  },
  false
);
document.addEventListener(
  "dragenter",
  (e) => {
    e.target.style.backgroundColor = "indigo";
  },
  false
);
document.addEventListener(
  "dragleave",
  (e) => {
    e.target.style.backgroundColor = "";
  },
  false
);

document.addEventListener(
  "drop",
  (e) => {
    e.preventDefault();
    e.target.style.background = "";
    dragged.parentNode.removeChild(dragged);
    e.target.appendChild(dragged);
  },
  false
);
