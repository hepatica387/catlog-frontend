const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

function getCurrentTimeLabel() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const period = hours >= 12 ? "오후" : "오전";
  const displayHour = hours % 12 || 12;

  return `${period} ${displayHour}:${minutes}`;
}

function createMessage(text, type) {
  const row = document.createElement("div");
  const stack = document.createElement("div");
  const bubble = document.createElement("div");
  const paragraph = document.createElement("p");
  const time = document.createElement("time");

  row.className = `chat-row ${type}`;
  stack.className = "chat-message-stack";
  bubble.className = "chat-bubble";
  paragraph.textContent = text;
  time.textContent = getCurrentTimeLabel();

  bubble.appendChild(paragraph);
  stack.appendChild(bubble);
  stack.appendChild(time);

  if (type === "bot") {
    const spacer = document.createElement("div");
    spacer.className = "chat-avatar-spacer";
    row.appendChild(spacer);
    row.appendChild(stack);
  } else {
    const avatar = document.createElement("div");
    avatar.className = "chat-user-avatar";
    avatar.setAttribute("aria-hidden", "true");
    row.appendChild(stack);
    row.appendChild(avatar);
  }

  return row;
}

function addMessage(text, type) {
  chatMessages.appendChild(createMessage(text, type));
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = chatInput.value.trim();

  if (!message) return;

  addMessage(message, "user");
  chatInput.value = "";

  setTimeout(() => {
    addMessage(
      "말씀해주신 조건이라면 조용하고 적응력이 좋은 아이 위주로 안내드릴게요.",
      "bot"
    );
  }, 400);
});
