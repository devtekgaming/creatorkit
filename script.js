function clean(s) {
  return s.trim() || "your topic";
}


/* =========================
   COPY FUNCTION
========================= */

function copyText(text, button) {

  if (!text || !text.trim()) return;

  navigator.clipboard.writeText(text)
    .then(() => {

      const oldText = button.textContent;

      button.textContent = "✓ Copied!";
      button.classList.add("copied");

      setTimeout(() => {
        button.textContent = oldText;
        button.classList.remove("copied");
      }, 1800);

    })
    .catch(() => {

      const textarea = document.createElement("textarea");

      textarea.value = text;

      document.body.appendChild(textarea);

      textarea.select();

      document.execCommand("copy");

      textarea.remove();

      button.textContent = "✓ Copied!";
      button.classList.add("copied");

      setTimeout(() => {
        button.textContent = "📋 Copy Result";
        button.classList.remove("copied");
      }, 1800);

    });
}


/* =========================
   ADD COPY BUTTON
========================= */

function showCopyButton(result, text) {

  const oldButton = result.querySelector(".copy-btn");

  if (oldButton) {
    oldButton.remove();
  }

  const button = document.createElement("button");

  button.type = "button";
  button.className = "copy-btn";
  button.textContent = "📋 Copy Result";

  button.addEventListener("click", function () {
    copyText(text, button);
  });

  result.appendChild(button);
}


/* =========================
   YOUTUBE TITLE GENERATOR
========================= */

function generateTitles() {

  const t = clean(
    document.getElementById("titleTopic").value
  );

  const arr = [
    `🔥 ${t} — You Won't Believe This!`,
    `${t}: Everything You Need to Know`,
    `I Tried ${t}... Here's What Happened`,
    `The BEST ${t} Guide for Beginners`,
    `Before You Try ${t}, Watch This!`
  ];

  const result =
    document.getElementById("titleResult");

  const text = arr.join("\n");

  result.textContent = text;

  showCopyButton(result, text);
}


/* =========================
   HASHTAG GENERATOR
========================= */

function generateHashtags() {

  const t = clean(
    document.getElementById("hashTopic").value
  ).toLowerCase();

  const words = t
    .replace(/[^a-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean);

  const base = words.join("");

  const tags = [
    "#contentcreator",
    "#creator",
    "#youtube",
    "#instagram",
    "#shorts",
    "#viral",
    "#trending",
    "#reels",
    "#gaming",
    "#creatorlife"
  ];

  const custom = words.map(
    w => "#" + w
  );

  const text = [
    ...new Set([
      ...custom,
      "#" + base,
      ...tags
    ])
  ]
    .slice(0, 15)
    .join(" ");

  const result =
    document.getElementById("hashResult");

  result.textContent = text;

  showCopyButton(result, text);
}


/* =========================
   USERNAME GENERATOR
========================= */

function generateUsernames() {

  const t = clean(
    document.getElementById("userTopic").value
  )
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  const arr = [
    t + "hq",
    t + "official",
    t + "x",
    "its" + t,
    t + "studio",
    t + "hub",
    t + "verse",
    "the" + t,
    t + "plays",
    t + "zone"
  ];

  const text = arr.join("\n");

  const result =
    document.getElementById("userResult");

  result.textContent = text;

  showCopyButton(result, text);
}


/* =========================
   WORD COUNTER
========================= */

function countWords() {

  const v =
    document.getElementById("wordText").value;

  const words =
    v.trim()
      ? v.trim().split(/\s+/).length
      : 0;

  const text =
    `Words: ${words} · Characters: ${v.length}`;

  const result =
    document.getElementById("wordResult");

  result.textContent = text;

  showCopyButton(result, text);
}

Ab kya karna hai

GitHub → "script.js" → ✏️ Edit → Ctrl+A → upar wala pura code → Commit changes.

Phir website refresh karke:

#1 Title → Generate Titles → 📋 Copy Result

Aana chahiye.

Uske baad #2, #3, #4 bhi check kar lena.
