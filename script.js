let currentScreen = "welcome"; // set up current screen and next screens
const screenOrder = ["welcome", "version"];
let screenIndex = 0;

function showScreen(screen) {
  let message;
  switch (screen) {
    case "welcome":
      message = `
welcome to chromebook.space!
every exploit for chromeos, documented and sorted.
programmed by some people
                   [ proceed ]
`;
      break;
    case "version":
      message = `
not yet implemented! check back later :(
      `;
      break;
    default:
      message = `
what :sob: (something went wrong)
`;
      break;
  }
  console.log("[PAGES] Loading screen:", screen);
  animateBox(message);
}

document.addEventListener("DOMContentLoaded", () => {});

function next() {
  screenIndex++;
  if (screenIndex + 1 > screenOrder.length) return;
  console.log("[PAGES] Loading next screen:", screenOrder[screenIndex]);
  currentScreen = screenOrder[screenIndex];
  showScreen(currentScreen);
}
