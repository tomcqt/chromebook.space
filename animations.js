const logoascii =
  " ▄████▄   ██░ ██  ██▀███   ▒█████   ███▄ ▄███▓▓█████  ▄▄▄▄    ▒█" +
  "████   ▒█████   ██ ▄█▀       ██████  ██▓███   ▄▄▄       ▄████▄  " +
  "▓█████ \n▒██▀ ▀█  ▓██░ ██▒▓██ ▒ ██▒▒██▒  ██▒▓██▒▀█▀ ██▒▓█   ▀ ▓█" +
  "████▄ ▒██▒  ██▒▒██▒  ██▒ ██▄█▒      ▒██    ▒ ▓██░  ██▒▒████▄    " +
  "▒██▀ ▀█  ▓█   ▀ \n▒▓█    ▄ ▒██▀▀██░▓██ ░▄█ ▒▒██░  ██▒▓██    ▓██░" +
  "▒███   ▒██▒ ▄██▒██░  ██▒▒██░  ██▒▓███▄░      ░ ▓██▄   ▓██░ ██▓▒▒█" +
  "█  ▀█▄  ▒▓█    ▄ ▒███   \n▒▓▓▄ ▄██▒░▓█ ░██ ▒██▀▀█▄  ▒██   ██░▒██" +
  "    ▒██ ▒▓█  ▄ ▒██░█▀  ▒██   ██░▒██   ██░▓██ █▄        ▒   ██▒▒█" +
  "█▄█▓▒ ▒░██▄▄▄▄██ ▒▓▓▄ ▄██▒▒▓█  ▄ \n▒ ▓███▀ ░░▓█▒░██▓░██▓ ▒██▒░ █" +
  "███▓▒░▒██▒   ░██▒░▒████▒░▓█  ▀█▓░ ████▓▒░░ ████▓▒░▒██▒ █▄ ██▓ ▒█" +
  "█████▒▒▒██▒ ░  ░ ▓█   ▓██▒▒ ▓███▀ ░░▒████▒\n░ ░▒ ▒  ░ ▒ ░░▒░▒░ ▒" +
  "▓ ░▒▓░░ ▒░▒░▒░ ░ ▒░   ░  ░░░ ▒░ ░░▒▓███▀▒░ ▒░▒░▒░ ░ ▒░▒░▒░ ▒ ▒▒ " +
  "▓▒ ▒▓▒ ▒ ▒▓▒ ▒ ░▒▓▒░ ░  ░ ▒▒   ▓▒█░░ ░▒ ▒  ░░░ ▒░ ░\n  ░  ▒    ▒" +
  " ░▒░ ░  ░▒ ░ ▒░  ░ ▒ ▒░ ░  ░      ░ ░ ░  ░▒░▒   ░   ░ ▒ ▒░   ░ ▒" +
  " ▒░ ░ ░▒ ▒░ ░▒  ░ ░▒  ░ ░░▒ ░       ▒   ▒▒ ░  ░  ▒    ░ ░  ░\n░ " +
  "        ░  ░░ ░  ░░   ░ ░ ░ ░ ▒  ░      ░      ░    ░    ░ ░ ░ ░" +
  " ▒  ░ ░ ░ ▒  ░ ░░ ░  ░   ░  ░  ░  ░░         ░   ▒   ░          " +
  " ░   \n░ ░       ░  ░  ░   ░         ░ ░         ░      ░  ░ ░  " +
  "        ░ ░      ░ ░  ░  ░     ░        ░                 ░  ░░ " +
  "░         ░  ░\n░                                               " +
  "           ░                            ░                       " +
  "       ░               ";
// freaking AWESOME animation :OOOOO
// thx geode :DD
document.addEventListener("DOMContentLoaded", () => {
  console.log("[SITE] Loaded! Welcome.");
  console.log("[SITE] Check out tomcat.sh :3");
  console.log("[LOGO] Animating...");
  let parts = [];
  let lines = logoascii.split("\n");
  let i = 0;
  let interval = setInterval(() => {
    if (++i >= lines[0].length) {
      console.log("[LOGO] Done!");
      showScreen("welcome");
      return clearInterval(interval);
    }
    let a = [];
    lines.forEach((x) => a.push(x[i]));
    parts.push(a);
    let ascii = [];
    for (let j = 0; j < parts[0].length; j++) {
      a = "";
      parts.forEach((_, i) => (a += parts[i][j]));
      ascii.push(a);
    }
    ascii = ascii.join("\n");
    document.querySelector("#logo").innerText = ascii;
  }, 5);
  // document.getElementById("logo").innerText = logoascii;
});

function boxGen(text) {
  const characters = ["─", "│", "┌", "┐", "└", "┘"];
  let lines = text.split("\n");
  let width = 0;
  lines.forEach((line) => {
    if (line.length > width) width = line.length;
  });
  let box = "";
  box += characters[2] + characters[0].repeat(width + 2) + characters[3] + "\n";
  lines.forEach((line) => {
    box +=
      characters[1] +
      " " +
      line +
      " ".repeat(width - line.length + 1) +
      characters[1] +
      "\n";
  });
  box += characters[4] + characters[0].repeat(width + 2) + characters[5];
  return box;
}

function animateBox(message) {
  document.getElementById("screen").innerText = "";
  // animate each line appearing
  lines = boxGen(message).split("");
  // filter out everything except for the box characters
  let box = [];
  lines
    .join("")
    .split("\n")
    .forEach((line) => {
      box.push(line.replace(/[^─│┌┐└┘\n]/g, " "));
    });

  let i = 0;
  let rendered = [];
  let interval = setInterval(() => {
    if (i < box.length) {
      rendered.push(box[i] + "\n");
    } else {
      if (rendered.length == box.length) {
        rendered = rendered.join("").split("");
      }
      rendered[i - box.length + box[0].length * 2] =
        lines[i - box.length + box[0].length * 2];
    }
    document.getElementById("screen").innerText = rendered.join("");
    i += 1;
    if (i >= box.length + lines.length - box[0].length * 4) {
      clearInterval(interval);
      document.getElementById("screen").innerHTML = document
        .getElementById("screen")
        .innerText.replace(
          "[ proceed ]",
          '<a onclick="next();">[ proceed ]</a>'
        );
      return;
    }
  }, 5);
}

// Listen to Chromakopia by Tyler, the Creator -tomcat
