// add_emojis.js

const path = require('path');

const emojis = [
  '⚡️',
  '🔥',
  '🐛',
  '✨',
  '🚀',
  '💄',
  '🎉',
  '🔖',
  '🚨',
  '🚧',
  '📌',
  '👷',
  '📈',
  '♻️',
  '🔧',
  '🔨',
  '✏️',
  '📦️',
  '💥',
  '💡',
  '🏗️',
  '📱',
  '📸',
  '🔍️',
  '🌱',
  '🚩',
  '🥅',
  '💫',
  '🗑️',
  '🩹',
  '🧐',
  '🧪',
  '🩺',
];

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

// Set the path to git executable if needed
const gitPath = process.env.PATH_TO_GIT || 'git';
process.env.GIT_EXEC_PATH = path.resolve(gitPath);

// Get all commit messages
const commitMessages = require('child_process')
  .execSync('git log --pretty=%B')
  .toString()
  .split('\n\n');

// Add a random emoji to each commit message
const newCommitMessages = commitMessages.map(
  (message) => `${getRandomEmoji()} ${message.trim()}`
);

// Replace the existing commit messages with the new ones
require('child_process').execSync(
  `git filter-repo --message-callback 'return """${newCommitMessages.join('\n\n')}""'`
);
