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
    document.querySelector("html").style.backgroundColor = speechToText;
  };
};

// text to speech
function speak() {
  var message = document.getElementById("input").value;
  var msg = new SpeechSynthesisUtterance(message);
  // var voices = window.speechSynthesis.getVoices();
  // msg.voice = voices[1];
  var select = document.getElementById("selectLan").value;
  switch (select) {
    case "en-US":
      msg.lang = "en-US";
      window.speechSynthesis.speak(msg);
      break;

    case "ja-JP":
      msg.lang = "ja-JP";
      window.speechSynthesis.speak(msg);
      break;

    case "en-GB":
      msg.lang = "en-GB";
      window.speechSynthesis.speak(msg);
      break;

    case "en-AU":
      msg.lang = "en-AU";
      window.speechSynthesis.speak(msg);
      break;

    case "pt-BR":
      msg.lang = "pt-BR";
      window.speechSynthesis.speak(msg);
      break;

    case "zh-CN":
      msg.lang = "zh-CN";
      window.speechSynthesis.speak(msg);
      break;

    case "ko-KR":
      msg.lang = "ko-KR";
      window.speechSynthesis.speak(msg);
      break;

    default:
  }
  // msg.lang = "ja-JP";
  // window.speechSynthesis.speak(msg);
}

var textInput = document.getElementById("input").value;

var btnSpeak = document.getElementById("btn-speak");
btnSpeak.addEventListener("click", speak);
