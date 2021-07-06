const home = document.querySelector(".home");
const homeH2 = home.querySelector("h2");
const homeP = home.querySelector("p");
const changeBus = document.querySelector("header.intro img");

homeH2.addEventListener(
  "mouseover",
  (e) =>
    (homeH2.textContent = "The Fun Bus is a sham, do not believe their lies!")
);

homeP.addEventListener(
  "mouseover",
  (e) =>
    (homeP.textContent =
      "I like to drink redbull in the morning and also at midnight and also have a puff of the juul because it's good for my health and contributes heavily to my health. I swear by this statement and there's nothing that can be done to stop me.")
);

changeBus.addEventListener(
  "click",
  (e) => (changeBus.src = "https://picsum.photos/800/240")
);
