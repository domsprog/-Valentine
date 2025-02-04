const messages = [
  "Are you sure?",
  "Really sure??😥😥",
  "Are you positive?",
  "Pretty please with a cherry on top... 🍒✨",
  "Just think about it, okay? 🥺💭",
  "If you say no, my heart will break into tiny pieces... 💔",
  "I'll be super duper sad... 😢",
  "I'll be the saddest little bean ever... 😭",
  "Okay, okay... I’ll stop asking... 😔",
  "Just kidding! Say yes, pretty please! 🥰💕"
];


let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
