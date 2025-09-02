function initChatbot() {
  const robotButton = document.getElementById("robot-button");
  const chatModal = document.getElementById("chat-modal");
  const chatClose = document.getElementById("chat-close");
  const chatSend = document.getElementById("chat-send");
  const chatInput = document.getElementById("chat-input");
  const chatMessages = document.getElementById("chat-messages");

  if (!robotButton || !chatModal) return; // safety check

  // Toggle open
  robotButton.addEventListener("click", () => {
    chatModal.style.display =
      chatModal.style.display === "none" ? "block" : "none";
  });

  // Close modal
  chatClose.addEventListener("click", () => {
    chatModal.style.display = "none";
  });

  // Send message
  chatSend.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const msg = chatInput.value.trim();
    if (!msg) return;
    addMessage("You", msg);
    chatInput.value = "";

    setTimeout(() => {
      addMessage("Bot", getReply(msg));
    }, 600);
  }

  function addMessage(sender, text) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatMessages.appendChild(p);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function getReply(msg) {
    msg = msg.toLowerCase();
    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hey there! 👋 How can I help you?";
    } else if (msg.includes("skills")) {
      return "I’m skilled in HTML, CSS, JavaScript, React, and more!";
    } else if (msg.includes("projects")) {
      return "I’ve worked on portfolio websites, apps, and AI projects 🚀.";
    } else if (msg.includes("contact")) {
      return "You can reach me at: hifzaofpk@email.com 📩";
    } else {
      return "I’m still learning! Try asking about my skills, projects, or contact.";
    }
  }
}
