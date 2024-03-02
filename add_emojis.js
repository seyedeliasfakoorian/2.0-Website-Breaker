// add_emojis.js

const execSync = require("child_process").execSync;

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

// Get all commit messages
const commitMessages = execSync("git log --pretty=%B").toString().split("\n\n");

// Add a random emoji to each commit message
const newCommitMessages = commitMessages.map(
  (message) => `${getRandomEmoji()} ${message.trim()}`,
);

// Replace the existing commit messages with the new ones
execSync(
  `git filter-repo --message-callback 'return """${newCommitMessages.join("\n\n")}""'`,
);
