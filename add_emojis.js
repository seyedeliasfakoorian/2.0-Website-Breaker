// add_emojis.js

const fs = require("fs");
const path = require("path");

const emojis = [
  "⚡️",
  "🔥",
  "🐛",
  "✨",
  "🚀",
  "💄",
  "🎉",
  "🔖",
  "🚨",
  "🚧",
  "📌",
  "👷",
  "📈",
  "♻️",
  "🔧",
  "🔨",
  "✏️",
  "📦️",
  "💥",
  "💡",
  "🏗️",
  "📱",
  "📸",
  "🔍️",
  "🌱",
  "🚩",
  "🥅",
  "💫",
  "🗑️",
  "🩹",
  "🧐",
  "⚰️",
  "🧪",
  "🩺",
];

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

// Get the commit message file path from command line arguments
const commitMsgFile = process.argv[2];

// Read the commit message from the file
const commitMsg = fs.readFileSync(commitMsgFile, "utf8");

// Add a random emoji to the beginning of the commit message
const modifiedMsg = `${getRandomEmoji()} ${commitMsg}`;

// Write the modified commit message back to the file
fs.writeFileSync(commitMsgFile, modifiedMsg, "utf8");
