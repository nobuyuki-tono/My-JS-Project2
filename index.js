window.SpeechRecognition =
  window.webkitSpeechRecognition || window.SpeechRecognition;

const recognition = new SpeechRecognition();
const icon = document.querySelector("i.fas.fa-microphone");

let paragraph = document.createElement("p");
let container = document.querySelector(".text-box");

container.appendChild(paragraph);

const sound = document.querySelector(".sound");

icon.addEventListener("click", function() {
  //sound.play();
  dictate();
});

const dictate = () => {
  recognition.start();
  recognition.onresult = event => {
    const speechToText = event.results[0][0].transcript;
    paragraph.textContent = speechToText;
  };
};

function speak(message) {
  var msg = new SpeechSynthesisUtterance(message);
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[0];
  window.speechSynthesis.speak(msg);
}

var textInput = document.getElementById("input").value;

speak();
