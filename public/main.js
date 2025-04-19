document.addEventListener('DOMContentLoaded', () => {
  const settingsButton = document.getElementById('settings-button');
  const settingsPanel = document.getElementById('settings-panel');
  const closeSettings = document.getElementById('close-settings');

  const bgSelector = document.getElementById('background-selector');
  const soundVolumeSlider = document.getElementById('sound-volume');
  const musicVolumeSlider = document.getElementById('music-volume');
  const langSelector = document.getElementById('language-selector');

  const buttons = document.querySelectorAll('button');

  const clickSound = new Audio('/sounds/click.mp3');
  const hoverSound = new Audio('/sounds/hover.mp3');

  let currentLang = 'en';

  // Автовыбор языка по стране
  const autoDetectLang = () => {
    const lang = navigator.language || navigator.userLanguage;
    if (lang.startsWith('ru')) currentLang = 'ru';
    else currentLang = 'en';
    langSelector.value = currentLang;
    applyTranslation();
  };

  // Применить перевод
  const applyTranslation = () => {
    const translations = {
      en: {
        play: 'Play',
        createRoom: 'Create Room',
        roomList: 'Room List',
        playersOnline: 'Players Online',
        settings: 'Settings',
        bg: 'Background',
        sound: 'Sound Volume',
        music: 'Music Volume',
        lang: 'Language',
      },
      ru: {
        play: 'Играть',
        createRoom: 'Создать комнату',
        roomList: 'Список комнат',
        playersOnline: 'Игроков онлайн',
        settings: 'Настройки',
        bg: 'Фон',
        sound: 'Громкость звука',
        music: 'Громкость музыки',
        lang: 'Язык',
      }
    };

    const t = translations[currentLang];

    document.getElementById('play-button').innerText = t.play;
    document.getElementById('create-room-button').innerText = t.createRoom;
    document.getElementById('room-list-button').innerText = t.roomList;
    document.getElementById('online-count').innerText = `${t.playersOnline}: 0`;
    settingsButton.innerText = t.settings;

    document.querySelector('label[for="background-selector"]').innerText = t.bg;
    document.querySelector('label[for="sound-volume"]').innerText = t.sound;
    document.querySelector('label[for="music-volume"]').innerText = t.music;
    document.querySelector('label[for="language-selector"]').innerText = t.lang;
  };

  // Загрузить настройки
  const loadSettings = () => {
    const savedBg = localStorage.getItem('bg');
    const savedSound = localStorage.getItem('sound');
    const savedMusic = localStorage.getItem('music');
    const savedLang = localStorage.getItem('lang');

    if (savedBg) {
      document.body.style.backgroundColor = savedBg;
      bgSelector.value = savedBg;
    }

    if (savedSound) {
      soundVolumeSlider.value = savedSound;
      clickSound.volume = savedSound;
      hoverSound.volume = savedSound;
    }

    if (savedMusic) {
      musicVolumeSlider.value = savedMusic;
    }

    if (savedLang) {
      currentLang = savedLang;
      langSelector.value = currentLang;
    }

    applyTranslation();
  };

  // Сохранить настройки
  const saveSettings = () => {
    localStorage.setItem('bg', bgSelector.value);
    localStorage.setItem('sound', soundVolumeSlider.value);
    localStorage.setItem('music', musicVolumeSlider.value);
    localStorage.setItem('lang', langSelector.value);
  };

  // Обработчики
  settingsButton.addEventListener('click', () => {
    settingsPanel.classList.remove('hidden');
  });

  closeSettings.addEventListener('click', () => {
    settingsPanel.classList.add('hidden');
  });

  bgSelector.addEventListener('input', () => {
    document.body.style.backgroundColor = bgSelector.value;
    saveSettings();
  });

  soundVolumeSlider.addEventListener('input', () => {
    clickSound.volume = soundVolumeSlider.value;
    hoverSound.volume = soundVolumeSlider.value;
    saveSettings();
  });

  musicVolumeSlider.addEventListener('input', () => {
    saveSettings();
  });

  langSelector.addEventListener('change', () => {
    currentLang = langSelector.value;
    saveSettings();
    applyTranslation();
  });

  // Эффекты кнопок
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      if (!btn.classList.contains('nickname-button')) hoverSound.play();
    });
    btn.addEventListener('click', () => {
      if (!btn.classList.contains('nickname-button')) clickSound.play();
    });
  });

  autoDetectLang();
  loadSettings();
});
