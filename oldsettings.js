const translations = {
  en: {
    title: "Firsty World",
    playBtn: "Play",
    rulesBtn: "Rules",
    createRoomBtn: "Create Room",
    settingsBtn: "Settings",
    howToBtn: "How to play?",
    volumeLabel: "Volume",
    languageLabel: "Language:",
    howToText: "Use the Play button to start. Create a room if you want to invite others.",
    nicknamePlaceholder: "Enter your nickname"
  },
  ru: {
    title: "Фирсти Ворлд",
    playBtn: "Играть",
    rulesBtn: "Правила",
    createRoomBtn: "Создать Комнату",
    settingsBtn: "Настройки",
    howToBtn: "Как играть?",
    volumeLabel: "Уменьшить звук:",
    languageLabel: "Язык:",
    howToText: "Нажмите Играть для начала. Создайте комнату, чтобы пригласить других.",
    nicknamePlaceholder: "Введите ник"
  },
  es: {
    title: "Primer Mundo",
    playBtn: "Jugar",
    rulesBtn: "Reglas",
    createRoomBtn: "Crear sala",
    settingsBtn: "Ajustes",
    howToBtn: "¿Cómo jugar?",
    volumeLabel: "Volumen:",
    languageLabel: "Idioma:",
    howToText: "Pulsa Jugar para comenzar. Crea una sala para invitar a otros.",
    nicknamePlaceholder: "Ingresa tu apodo"
  },
  de: {
    title: "Erste Welt",
    playBtn: "Spielen",
    rulesBtn: "Regeln",
    createRoomBtn: "Raum erstellen",
    settingsBtn: "Einstellungen",
    howToBtn: "Wie spielt man?",
    volumeLabel: "Lautstärke:",
    languageLabel: "Sprache:",
    howToText: "Klicke auf Spielen, um zu starten. Erstelle einen Raum, um andere einzuladen.",
    nicknamePlaceholder: "Gib deinen Spitznamen ein"
  }
};

function changeLanguage(lang) {
  const t = translations[lang];
  document.getElementById("title").innerText = t.title;
  document.getElementById("playBtn").innerText = t.playBtn;
  document.getElementById("rulesBtn").innerText = t.rulesBtn;
  document.getElementById("createRoomBtn").innerText = t.createRoomBtn;
  document.getElementById("settingsBtn").innerText = t.settingsBtn;
  document.getElementById("howToBtn").innerText = t.howToBtn;
  document.getElementById("volumeLabel").innerText = t.volumeLabel;
  document.getElementById("languageLabel").innerText = t.languageLabel;
  document.getElementById("howToText").innerText = t.howToText;
  document.getElementById("nickname").placeholder = t.nicknamePlaceholder;
}