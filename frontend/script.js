const startBtn = document.getElementById("startBtn");
const inputLang = document.getElementById("inputLang");
const targetLang = document.getElementById("targetLang");
const chatContainer = document.getElementById("chatContainer");
const audioPlayer = document.getElementById("audioPlayer");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.interimResults = false;

startBtn.onclick = () => {
  recognition.lang = inputLang.value;
  recognition.start();
};

recognition.onresult = async (event) => {
  const text = event.results[0][0].transcript;
  addMessage("user", text);

  const target = targetLang.value;

  // Send to backend for translation + TTS
  const response = await fetch("http://127.0.0.1:5000/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, targetLang: target })
  });

  const data = await response.json();
  addMessage("system", data.translatedText);

  const audioBlob = base64ToBlob(data.audioData, "audio/mp3");
  audioPlayer.src = URL.createObjectURL(audioBlob);
  audioPlayer.play();
};

function addMessage(type, text) {
  const msg = document.createElement("div");
  msg.className = `message ${type}`;
  msg.textContent = text;
  chatContainer.appendChild(msg);
  chatContainer.scrollTop = chatContainer.scrollHeight; // auto scroll
}

function base64ToBlob(base64, type) {
  const binary = atob(base64);
  const array = [];
  for (let i = 0; i < binary.length; i++) array.push(binary.charCodeAt(i));
  return new Blob([new Uint8Array(array)], { type });
}
