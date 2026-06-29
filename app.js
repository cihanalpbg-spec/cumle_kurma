// --- Offline Database (50 Words for Offline Mode) ---
const OFFLINE_DB = {
  "develop": {
    "word": "develop",
    "pos": "verb",
    "phonetics": "/dɪˈvel.əp/",
    "meaning": "Gelişmek, geliştirmek, ortaya çıkarmak.",
    "sentences": {
      "simple": [
        { "eng": "Plants develop from seeds.", "tr": "Bitkiler tohumlardan gelişir." },
        { "eng": "I want to develop my English skills.", "tr": "İngilizce becerilerimi geliştirmek istiyorum." }
      ],
      "medium": [
        { "eng": "The company decided to develop a new mobile application.", "tr": "Şirket yeni bir mobil uygulama geliştirmeye karar verdi." },
        { "eng": "It takes time to develop good habits.", "tr": "İyi alışkanlıklar geliştirmek zaman alır." }
      ],
      "academic": [
        { "eng": "Underdeveloped countries must develop strategic infrastructures to accelerate economic growth.", "tr": "Gelişmekte olan ülkeler ekonomik büyümeyi hızlandırmak için stratejik altyapılar geliştirmelidir." },
        { "eng": "Researchers hope to develop a comprehensive theory regarding cognitive development.", "tr": "Araştırmacılar bilişsel gelişimle ilgili kapsamlı bir teori geliştirmeyi umuyorlar." }
      ]
    }
  },
  "academic": {
    "word": "academic",
    "pos": "adjective / noun",
    "phonetics": "/ˌæk.əˈdem.ɪk/",
    "meaning": "Akademik, bilimsel; akademisyen.",
    "sentences": {
      "simple": [
        { "eng": "He has a busy academic life.", "tr": "Onun yoğun bir akademik hayatı var." },
        { "eng": "This is an academic book.", "tr": "Bu akademik bir kitap." }
      ],
      "medium": [
        { "eng": "She received an award for her outstanding academic achievements.", "tr": "Üstün akademik başarılarından dolayı bir ödül aldı." },
        { "eng": "Students are expected to maintain high academic standards.", "tr": "Öğrencilerin yüksek akademik standartları koruması beklenir." }
      ],
      "academic": [
        { "eng": "The symposium provides an academic forum for discussing contemporary pedagogical methodologies.", "tr": "Sempozyum, çağdaş pedagojik metodolojileri tartışmak için akademik bir forum sağlar." },
        { "eng": "Academic freedom is fundamental to the pursuit of objective scientific truth.", "tr": "Akademik özgürlük, objektif bilimsel gerçeğin aranmasında temel bir unsurdur." }
      ]
    }
  },
  "influence": {
    "word": "influence",
    "pos": "verb / noun",
    "phonetics": "/ˈɪn.flu.əns/",
    "meaning": "Etki, etkilemek, nüfuz etmek.",
    "sentences": {
      "simple": [
        { "eng": "Parents have a big influence on their children.", "tr": "Ebeveynlerin çocukları üzerinde büyük bir etkisi vardır." },
        { "eng": "Weather can influence our mood.", "tr": "Hava durumu ruh halimizi etkileyebilir." }
      ],
      "medium": [
        { "eng": "Social media influencers try to influence public opinion.", "tr": "Sosyal medya fenomenleri kamuoyunu etkilemeye çalışır." },
        { "eng": "Several factors combined to influence the outcome of the election.", "tr": "Seçim sonuçlarını etkilemek için birkaç faktör bir araya geldi." }
      ],
      "academic": [
        { "eng": "Socioeconomic conditions profoundly influence cognitive development in early childhood.", "tr": "Sosyoekonomik koşullar, erken çocukluk dönemindeki bilişsel gelişimi derinden etkiler." },
        { "eng": "The philosophical writings of Locke exerted a significant influence on the framers of the Constitution.", "tr": "Locke'un felsefi yazıları, Anayasa'yı hazırlayanlar üzerinde önemli bir etki yarattı." }
      ]
    }
  },
  "essential": {
    "word": "essential",
    "pos": "adjective / noun",
    "phonetics": "/ɪˈsen.ʃəl/",
    "meaning": "Gerekli, zorunlu, temel, esas.",
    "sentences": {
      "simple": [
        { "eng": "Water is essential for life.", "tr": "Su yaşam için gereklidir." },
        { "eng": "Good sleep is essential.", "tr": "İyi uyku şarttır." }
      ],
      "medium": [
        { "eng": "It is essential to wash your hands before eating.", "tr": "Yemek yemeden önce ellerinizi yıkamanız çok önemlidir." },
        { "eng": "Hard work is an essential part of success.", "tr": "Sıkı çalışma, başarının temel bir parçasıdır." }
      ],
      "academic": [
        { "eng": "Reliable data acquisition is essential for verifying empirical hypotheses.", "tr": "Ampirik hipotezlerin doğrulanması için güvenilir veri edinimi şarttır." },
        { "eng": "The preservation of cultural diversity is essential for global harmony.", "tr": "Kültürel çeşitliliğin korunması, küresel uyum için elzemdir." }
      ]
    }
  },
  "analysis": {
    "word": "analysis",
    "pos": "noun",
    "phonetics": "/əˈnæl.ə.sɪs/",
    "meaning": "Analiz, tahlil, çözümleme.",
    "sentences": {
      "simple": [
        { "eng": "We need to do an analysis of the data.", "tr": "Verilerin analizini yapmamız gerekiyor." },
        { "eng": "The blood analysis took two hours.", "tr": "Kan analizi iki saat sürdü." }
      ],
      "medium": [
        { "eng": "A detailed analysis of the market helped the business grow.", "tr": "Piyasanın ayrıntılı bir analizi, işletmenin büyümesine yardımcı oldu." },
        { "eng": "The system provides real-time data analysis.", "tr": "Sistem, gerçek zamanlı veri analizi sağlar." }
      ],
      "academic": [
        { "eng": "A comprehensive statistical analysis was conducted to establish correlation coefficients.", "tr": "Korelasyon katsayılarını belirlemek için kapsamlı bir istatistiksel analiz yapılmıştır." },
        { "eng": "Critical discourse analysis reveals the underlying power relations within the text.", "tr": "Kritik söylem analizi, metnin içindeki temel güç ilişkilerini ortaya çıkarır." }
      ]
    }
  }
};

// Add fallback values for 45 more words to ensure offline experience is rich
const extraWords = ["achieve", "focus", "dynamic", "generate", "structure", "alternative", "compound", "complex", "evaluate", "context", "feature", "function", "standard", "design", "framework", "establish", "theory", "definition", "logic", "variable", "primary", "constant", "range", "status", "progress", "visual", "premium", "response", "system", "query", "target", "active", "passive", "custom", "guide", "task", "plan", "goal", "review", "feedback", "client", "host", "net", "resource", "method"];
extraWords.forEach(w => {
  if (!OFFLINE_DB[w]) {
    OFFLINE_DB[w] = {
      "word": w,
      "pos": "noun / verb",
      "phonetics": `/${w}/`,
      "meaning": `İngilizce '${w}' kelimesi. (Çevrimdışı Mod)`,
      "sentences": {
        "simple": [
          { "eng": `I understand the word ${w}.`, "tr": `'${w}' kelimesini anlıyorum.` },
          { "eng": `Please write down the word ${w}.`, "tr": `Lütfen '${w}' kelimesini yazın.` }
        ],
        "medium": [
          { "eng": `It is important to understand the concept of ${w} in daily life.`, "tr": `Günlük yaşamda '${w}' kavramını anlamak önemlidir.` },
          { "eng": `They designed a new system that manages this ${w} easily.`, "tr": `Bu '${w}' durumunu kolayca yöneten yeni bir sistem tasarladılar.` }
        ],
        "academic": [
          { "eng": `A systematic investigation was initiated to evaluate the parameters of ${w}.`, "tr": `'${w}' parametrelerini değerlendirmek amacıyla sistematik bir araştırma başlatılmıştır.` },
          { "eng": `The empirical evidence supports the theoretical model related to the structural function of ${w}.`, "tr": `Ampirik kanıtlar, '${w}' yapısal işleviyle ilgili teorik modeli desteklemektedir.` }
        ]
      }
    };
  }
});

// --- State Variables ---
let appState = {
  activeWord: '',
  wordInfo: null,
  sentences: [],
  history: [],
  settings: {
    voiceIndex: 0,
    voiceSpeed: 1.0,
    geminiEnabled: false,
    geminiKey: ''
  },
  availableVoices: []
};

// --- DOM Cache ---
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const clearSearchBtn = document.getElementById('clear-search-btn');
const modeDictionaryBtn = document.getElementById('mode-dictionary-btn');
const modeConversationBtn = document.getElementById('mode-conversation-btn');
const dictionaryView = document.getElementById('dictionary-view');
const conversationView = document.getElementById('conversation-view');
const convPhrasesList = document.getElementById('conv-phrases-list');
const wordInfoCard = document.getElementById('word-info-card');
const infoWordName = document.getElementById('info-word-name');
const infoWordPos = document.getElementById('info-word-pos');
const infoWordPhonetics = document.getElementById('info-word-phonetics');
const infoWordTrPhonetics = document.getElementById('info-word-tr-phonetics');
const infoWordMeaning = document.getElementById('info-word-meaning');
const infoWordUsage = document.getElementById('info-word-usage');
const infoWordUsageWrapper = document.getElementById('info-word-usage-wrapper');
const pronounceWordBtn = document.getElementById('pronounce-word-btn');
const historyList = document.getElementById('history-list');

const resultsHeader = document.getElementById('results-header');
const welcomeHeader = document.getElementById('welcome-header');
const welcomeScreen = document.getElementById('welcome-screen');
const sentencesLoader = document.getElementById('sentences-loader');
const activeWordTitle = document.getElementById('active-word-title');
const sentencesCount = document.getElementById('sentences-count');

const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');
const simpleList = document.getElementById('simple-list');
const mediumList = document.getElementById('medium-list');
const academicList = document.getElementById('academic-list');

const settingsToggleBtn = document.getElementById('settings-toggle-btn');
const settingsModal = document.getElementById('settings-modal');
const settingsCloseBtn = document.getElementById('settings-close-btn');
const settingsSaveBtn = document.getElementById('settings-save-btn');
const voiceSelect = document.getElementById('voice-select');
const voiceSpeed = document.getElementById('voice-speed');
const speedVal = document.getElementById('speed-val');
const geminiEnabledCheckbox = document.getElementById('gemini-enabled');
const geminiKeyWrapper = document.getElementById('gemini-key-wrapper');
const geminiKeyInput = document.getElementById('gemini-key');
const offlineBar = document.getElementById('offline-bar');

const quickTags = document.querySelectorAll('.tag-btn');

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
  loadSettings();
  loadHistory();
  initSpeech();
  setupEventListeners();
  checkOnlineStatus();
  
  // Show iOS PWA banner if applicable
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches;
  const iosInstallBanner = document.getElementById('ios-install-banner');
  if (isIOS && !isStandalone && iosInstallBanner) {
    iosInstallBanner.classList.remove('hidden');
  }
  
  // Register service worker for PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registered!', reg))
      .catch(err => console.warn('Service Worker registration failed!', err));
  }
});

// Detect Offline/Online
window.addEventListener('online', checkOnlineStatus);
window.addEventListener('offline', checkOnlineStatus);

function checkOnlineStatus() {
  const isOnline = navigator.onLine;
  if (isOnline) {
    offlineBar.classList.add('hidden');
  } else {
    offlineBar.classList.remove('hidden');
  }
}

// --- LocalStorage & Settings ---
function loadSettings() {
  const saved = localStorage.getItem('cumle_bulucu_settings');
  if (saved) {
    try {
      appState.settings = { ...appState.settings, ...JSON.parse(saved) };
    } catch(e) {
      console.error("Settings load error:", e);
    }
  }
  
  // Apply settings to UI
  voiceSpeed.value = appState.settings.voiceSpeed;
  speedVal.textContent = appState.settings.voiceSpeed.toFixed(1) + 'x';
  
  geminiEnabledCheckbox.checked = appState.settings.geminiEnabled;
  if (appState.settings.geminiEnabled) {
    geminiKeyWrapper.classList.remove('hidden');
  } else {
    geminiKeyWrapper.classList.add('hidden');
  }
  geminiKeyInput.value = appState.settings.geminiKey || '';
}

function saveSettings() {
  appState.settings.voiceSpeed = parseFloat(voiceSpeed.value);
  appState.settings.voiceIndex = voiceSelect.selectedIndex;
  appState.settings.geminiEnabled = geminiEnabledCheckbox.checked;
  appState.settings.geminiKey = geminiKeyInput.value.trim();
  
  localStorage.setItem('cumle_bulucu_settings', JSON.stringify(appState.settings));
}

function loadHistory() {
  const saved = localStorage.getItem('cumle_bulucu_history');
  if (saved) {
    try {
      appState.history = JSON.parse(saved);
    } catch (e) {
      appState.history = [];
    }
  }
  renderHistory();
}

function addToHistory(word) {
  word = word.toLowerCase().trim();
  if (!word) return;
  
  // Remove if exists
  appState.history = appState.history.filter(w => w !== word);
  // Add to top
  appState.history.unshift(word);
  // Limit to 10 entries
  if (appState.history.length > 10) {
    appState.history.pop();
  }
  
  localStorage.setItem('cumle_bulucu_history', JSON.stringify(appState.history));
  renderHistory();
}

function deleteFromHistory(word, event) {
  event.stopPropagation(); // Stop trigger search
  appState.history = appState.history.filter(w => w !== word);
  localStorage.setItem('cumle_bulucu_history', JSON.stringify(appState.history));
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = '';
  if (appState.history.length === 0) {
    historyList.innerHTML = '<li class="history-empty">Henüz arama yapılmadı.</li>';
    return;
  }
  
  appState.history.forEach(word => {
    const li = document.createElement('li');
    li.className = `history-item ${appState.activeWord === word ? 'active' : ''}`;
    li.addEventListener('click', () => {
      searchInput.value = word;
      performSearch(word);
    });
    
    const span = document.createElement('span');
    span.className = 'history-word-name';
    span.textContent = word;
    
    const delBtn = document.createElement('button');
    delBtn.className = 'history-item-delete';
    delBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    delBtn.addEventListener('click', (e) => deleteFromHistory(word, e));
    
    li.appendChild(span);
    li.appendChild(delBtn);
    historyList.appendChild(li);
  });
}

// --- Text To Speech (TTS) ---
function initSpeech() {
  if (!window.speechSynthesis) return;

  const loadVoices = () => {
    appState.availableVoices = window.speechSynthesis.getVoices()
      .filter(voice => voice.lang.startsWith('en')); // English voices
      
    voiceSelect.innerHTML = '';
    
    if (appState.availableVoices.length === 0) {
      voiceSelect.innerHTML = '<option value="">Ses bulunamadı (En)</option>';
      return;
    }

    appState.availableVoices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      if (index === appState.settings.voiceIndex) {
        option.selected = true;
      }
      voiceSelect.appendChild(option);
    });
  };

  loadVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

function speakText(text) {
  if (!window.speechSynthesis) return;
  
  // Cancel current speech
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Apply settings
  const selectedIdx = voiceSelect.value;
  if (selectedIdx !== "" && appState.availableVoices[selectedIdx]) {
    utterance.voice = appState.availableVoices[selectedIdx];
  }
  
  utterance.rate = appState.settings.voiceSpeed || 1.0;
  window.speechSynthesis.speak(utterance);
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Search actions
  searchBtn.addEventListener('click', () => performSearch(searchInput.value));
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch(searchInput.value);
    }
  });

  searchInput.addEventListener('input', () => {
    if (searchInput.value.trim() !== '') {
      clearSearchBtn.classList.remove('hidden');
    } else {
      clearSearchBtn.classList.add('hidden');
    }
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.classList.add('hidden');
    searchInput.focus();
  });
  
  // Pronounce word card
  pronounceWordBtn.addEventListener('click', () => {
    if (appState.activeWord) {
      speakText(appState.activeWord);
    }
  });
  
  // Quick tags
  quickTags.forEach(btn => {
    btn.addEventListener('click', () => {
      searchInput.value = btn.textContent;
      clearSearchBtn.classList.remove('hidden');
      performSearch(btn.textContent);
    });
  });

  // View mode navigation
  modeDictionaryBtn.addEventListener('click', () => switchViewMode('dictionary'));
  modeConversationBtn.addEventListener('click', () => switchViewMode('conversation'));
  
  // Conversation Category Tabs
  const convCatTabs = document.querySelectorAll('.conv-cat-tab');
  convCatTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      convCatTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-cat');
      renderConversationPhrases(cat);
    });
  });

  // Tabs navigation
  tabLinks.forEach(tab => {
    tab.addEventListener('click', () => {
      tabLinks.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });

  // Settings modal toggles
  const openSettings = () => {
    loadSettings();
    settingsModal.classList.remove('hidden');
  };

  if (settingsToggleBtn) {
    settingsToggleBtn.addEventListener('click', openSettings);
  }

  const settingsToggleBtnMobile = document.getElementById('settings-toggle-btn-mobile');
  if (settingsToggleBtnMobile) {
    settingsToggleBtnMobile.addEventListener('click', openSettings);
  }

  settingsCloseBtn.addEventListener('click', () => {
    settingsModal.classList.add('hidden');
  });

  settingsSaveBtn.addEventListener('click', () => {
    saveSettings();
    settingsModal.classList.add('hidden');
    // Refresh currently loaded data if applicable or announce
  });

  geminiEnabledCheckbox.addEventListener('change', () => {
    if (geminiEnabledCheckbox.checked) {
      geminiKeyWrapper.classList.remove('hidden');
    } else {
      geminiKeyWrapper.classList.add('hidden');
    }
  });

  voiceSpeed.addEventListener('input', () => {
    speedVal.textContent = parseFloat(voiceSpeed.value).toFixed(1) + 'x';
  });

  // Close modal when clicking overlay
  settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
      settingsModal.classList.add('hidden');
    }
  });
}

// --- Main Search Controller ---
async function performSearch(word) {
  word = word.trim().toLowerCase();
  if (!word) return;
  
  appState.activeWord = word;
  addToHistory(word);
  
  // UI Loading State
  welcomeScreen.classList.add('hidden');
  sentencesLoader.classList.remove('hidden');
  resultsHeader.classList.add('hidden');
  welcomeHeader.classList.add('hidden');
  wordInfoCard.classList.add('hidden');
  
  // Clear lists
  simpleList.innerHTML = '';
  mediumList.innerHTML = '';
  academicList.innerHTML = '';
  
  const isOnline = navigator.onLine;

  try {
    // Mode determination
    if (!isOnline) {
      // Offline mode: Load word info and sentences from local DB
      fetchDictionaryInfo(word);
      loadOfflineWord(word);
    } else {
      // Online Mode: always generate via Gemini (which returns both sentences and wordInfo)
      await generateGeminiSentences(word);
    }
  } catch (err) {
    console.error("Search failed:", err);
    
    const isApiKeyError = err.message.includes('API Anahtarı') || err.message.includes('Key');
    
    // Show error state inside lists
    const errorMsg = `<div class="no-results-card">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
      <p style="font-weight:600; margin-bottom:8px; color:#ef4444;">İşlem Başarısız</p>
      <p style="font-size:14px; line-height: 1.5; max-width: 400px; margin: 0 auto;">${err.message || 'Cümleler yüklenirken bir sorun oluştu.'}</p>
      ${isApiKeyError ? '<button onclick="document.getElementById(\'settings-toggle-btn\').click()" style="margin-top:14px; background:var(--primary); border:none; padding:10px 20px; border-radius:8px; color:white; font-family:var(--font-family-title); font-weight:600; cursor:pointer; box-shadow:0 4px 12px var(--primary-glow);">Anahtar Gir / Ayarları Aç</button>' : ''}
    </div>`;
    simpleList.innerHTML = errorMsg;
    mediumList.innerHTML = errorMsg;
    academicList.innerHTML = errorMsg;
  } finally {
    sentencesLoader.classList.add('hidden');
    // Set headers
    resultsHeader.classList.remove('hidden');
    activeWordTitle.textContent = word;
    
    // Count total sentences
    const total = simpleList.querySelectorAll('.sentence-card').length + 
                  mediumList.querySelectorAll('.sentence-card').length + 
                  academicList.querySelectorAll('.sentence-card').length;
    sentencesCount.textContent = `${total} Cümle Yapısı Kuruldu`;
  }
}

// --- Fetch Free Dictionary Info (Definitions) ---
async function fetchDictionaryInfo(word) {
  if (!navigator.onLine) {
    // Use offline database fallback if exists
    if (OFFLINE_DB[word]) {
      displayWordInfo(OFFLINE_DB[word].word, OFFLINE_DB[word].pos, OFFLINE_DB[word].phonetics, OFFLINE_DB[word].meaning);
    }
    return;
  }
  
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!res.ok) throw new Error("Not found");
    const data = await res.json();
    
    const entry = data[0];
    const wordVal = entry.word;
    const pos = entry.meanings[0]?.partOfSpeech || 'n/a';
    const phonetics = entry.phonetic || entry.phonetics[0]?.text || '';
    const def = entry.meanings[0]?.definitions[0]?.definition || '';
    
    // Attempt Turkish translation for the short definition using dictionary api lookup or simple phrasing
    // To keep it offline friendly and API keyless, we display the English definition beautifully
    displayWordInfo(wordVal, pos, phonetics, def);
  } catch(e) {
    // Fail silently, or load offline db if we have it
    if (OFFLINE_DB[word]) {
      displayWordInfo(OFFLINE_DB[word].word, OFFLINE_DB[word].pos, OFFLINE_DB[word].phonetics, OFFLINE_DB[word].meaning);
    } else {
      displayWordInfo(word, 'kelime', '', 'Anlamı internet bağlantısı gerektiriyor.');
    }
  }
}

function displayWordInfo(word, pos, phonetics, definition, trPronunciation = '', usageDifference = '') {
  infoWordName.textContent = word;
  infoWordPos.textContent = pos;
  infoWordPhonetics.textContent = phonetics;
  
  if (trPronunciation) {
    infoWordTrPhonetics.textContent = `[Okunuşu: ${trPronunciation}]`;
    infoWordTrPhonetics.classList.remove('hidden');
  } else {
    infoWordTrPhonetics.classList.add('hidden');
  }
  
  infoWordMeaning.textContent = definition;
  
  if (usageDifference) {
    infoWordUsage.textContent = usageDifference;
    infoWordUsageWrapper.classList.remove('hidden');
  } else {
    infoWordUsageWrapper.classList.add('hidden');
  }
  
  wordInfoCard.classList.remove('hidden');
}

// --- Offline Database Search Loader ---
function loadOfflineWord(word) {
  const data = OFFLINE_DB[word];
  if (data) {
    renderOfflineSentences(data.sentences);
  } else {
    // Not in local DB
    const warningMsg = `<div class="no-results-card">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      <p>'${word}' kelimesi çevrimdışı veritabanında bulunamadı. İnternete bağlandığınızda arayabilirsiniz.</p>
      <p style="font-size: 12px; margin-top:10px;">Çevrimdışı çalışabilen bazı kelimeler: develop, academic, influence, essential, analysis</p>
    </div>`;
    simpleList.innerHTML = warningMsg;
    mediumList.innerHTML = warningMsg;
    academicList.innerHTML = warningMsg;
  }
}

function renderOfflineSentences(sentences) {
  // simple
  if (sentences.simple && sentences.simple.length > 0) {
    sentences.simple.forEach(s => addSentenceCard(simpleList, s.eng, s.tr, 'simple-card'));
  } else {
    showNoResults(simpleList);
  }
  
  // medium
  if (sentences.medium && sentences.medium.length > 0) {
    sentences.medium.forEach(s => addSentenceCard(mediumList, s.eng, s.tr, 'medium-card'));
  } else {
    showNoResults(mediumList);
  }

  // academic
  if (sentences.academic && sentences.academic.length > 0) {
    sentences.academic.forEach(s => addSentenceCard(academicList, s.eng, s.tr, 'academic-card'));
  } else {
    showNoResults(academicList);
  }
}

// --- AI Sentence Builder (Gemini integration via serverless/local proxy) ---
async function generateGeminiSentences(word) {
  const safeWord = encodeURIComponent(word);
  const key = appState.settings.geminiKey || '';
  const url = `/api/search?word=${safeWord}&key=${encodeURIComponent(key)}`;
  
  console.log("Generating sentences via Gemini API proxy:", url);
  const response = await fetch(url);
  
  if (response.status === 401) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "API Anahtarı bulunamadı. Lütfen ayarlardan girin.");
  }
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Sunucu hatası: ${response.status}`);
  }
  
  const aiData = await response.json();
  
  // Render Word Info Card from Gemini Metadata (English Searches)
  if (!aiData.isTurkishInput && aiData.wordInfo) {
    displayWordInfo(
      aiData.wordInfo.word || word,
      aiData.wordInfo.pos || '',
      aiData.wordInfo.phonetics || '',
      aiData.wordInfo.trMeaning || '',
      aiData.wordInfo.trPronunciation || '',
      aiData.wordInfo.usageDifference || ''
    );
  }

  // Clear lists first
  simpleList.innerHTML = '';
  mediumList.innerHTML = '';
  academicList.innerHTML = '';
  
  // Render search results based on input language
  if (aiData.isTurkishInput) {
    // Hide the level selection tabs because we are showing context groupings instead
    document.querySelector('.tabs-container').classList.add('hidden');
    
    // Render wordInfo card for the Turkish word
    displayWordInfo(
      word,
      'Türkçe Kelime',
      '',
      `İngilizce Karşılıkları: ${aiData.usages ? aiData.usages.map(u => u.englishWord).join(', ') : ''}`,
      '',
      `"${word}" kelimesinin İngilizce karşılıkları farklı kullanım amaçlarına göre aşağıda gruplandırılmıştır.`
    );
    
    if (aiData.usages && aiData.usages.length > 0) {
      aiData.usages.forEach(usage => {
        const usageCard = document.createElement('div');
        usageCard.className = 'usage-group-card';
        
        const usageHeader = document.createElement('div');
        usageHeader.className = 'usage-group-header';
        usageHeader.innerHTML = `
          <span class="usage-eng-word">${usage.englishWord}</span>
          <span class="usage-tr-context">${usage.contextName}</span>
        `;
        usageCard.appendChild(usageHeader);
        
        const sentencesList = document.createElement('div');
        sentencesList.className = 'usage-sentences-list';
        
        usage.sentences.forEach(s => {
          addSentenceCard(sentencesList, s.eng, s.tr, 'medium-card', s.analysis, s.vocabulary);
        });
        
        usageCard.appendChild(sentencesList);
        simpleList.appendChild(usageCard);
      });
    } else {
      showNoResults(simpleList);
    }
  } else {
    // English input: make sure levels tabs container is visible
    document.querySelector('.tabs-container').classList.remove('hidden');
    
    // Render AI Sentences
    if (aiData.simple && aiData.simple.length > 0) {
      aiData.simple.forEach(s => addSentenceCard(simpleList, s.eng, s.tr, 'simple-card', s.analysis, s.vocabulary));
    } else {
      showNoResults(simpleList);
    }
    
    if (aiData.medium && aiData.medium.length > 0) {
      aiData.medium.forEach(s => addSentenceCard(mediumList, s.eng, s.tr, 'medium-card', s.analysis, s.vocabulary));
    } else {
      showNoResults(mediumList);
    }
    
    if (aiData.academic && aiData.academic.length > 0) {
      aiData.academic.forEach(s => addSentenceCard(academicList, s.eng, s.tr, 'academic-card', s.analysis, s.vocabulary));
    } else {
      showNoResults(academicList);
    }
  }
}

// --- Card Renderer Helpers ---
function addSentenceCard(container, eng, tr, cardClass, analysis = '', vocabulary = []) {
  const card = document.createElement('div');
  card.className = `sentence-card ${cardClass}`;
  
  const engPara = document.createElement('p');
  engPara.className = 'sentence-eng';
  
  // Make words inside sentence clickable
  // Filter punctuation out of individual words for cleaner searching
  const words = eng.split(/\s+/);
  words.forEach((word, index) => {
    const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "");
    const isSearchWord = cleanWord.toLowerCase() === appState.activeWord;
    
    const wordSpan = document.createElement('span');
    wordSpan.className = `clickable-word ${isSearchWord ? 'highlighted-search-word' : ''}`;
    wordSpan.textContent = word + (index < words.length - 1 ? ' ' : '');
    
    wordSpan.addEventListener('click', (e) => {
      e.stopPropagation();
      if (cleanWord) {
        searchInput.value = cleanWord.toLowerCase();
        clearSearchBtn.classList.remove('hidden');
        performSearch(cleanWord);
      }
    });
    
    engPara.appendChild(wordSpan);
  });
  
  const trPara = document.createElement('p');
  trPara.className = 'sentence-tr';
  trPara.textContent = tr;
  
  const actionRow = document.createElement('div');
  actionRow.className = 'sentence-actions';
  
  const playBtn = document.createElement('button');
  playBtn.className = 'icon-action-btn';
  playBtn.title = 'Seslendir';
  playBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
  playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    speakText(eng);
  });
  
  actionRow.appendChild(playBtn);
  
  card.appendChild(engPara);
  card.appendChild(trPara);
  
  // Add AI analysis block if present
  if (analysis) {
    const analysisBlock = document.createElement('div');
    analysisBlock.className = 'sentence-ai-analysis';
    analysisBlock.innerHTML = `<strong>Dil Bilgisi:</strong> ${analysis}`;
    card.appendChild(analysisBlock);
  }
  
  // Add Vocabulary / Phrasal Verbs block if present
  if (vocabulary && vocabulary.length > 0) {
    const vocabBlock = document.createElement('div');
    vocabBlock.className = 'sentence-vocab-block';
    
    let vocabItemsHTML = '';
    vocabulary.forEach(item => {
      vocabItemsHTML += `<span class="vocab-item-tag"><strong>${item.phrase}</strong>: ${item.tr}</span>`;
    });
    
    vocabBlock.innerHTML = `📚 <strong>Kelime & Deyimler:</strong> ${vocabItemsHTML}`;
    card.appendChild(vocabBlock);
  }
  
  card.appendChild(actionRow);
  
  // Tap card to speak as secondary feature on tablets
  card.addEventListener('click', () => {
    speakText(eng);
  });
  
  container.appendChild(card);
}

function showNoResults(container) {
  container.innerHTML = `<div class="no-results-card">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
    <p>Bu seviye için eşleşen örnek cümle bulunamadı.</p>
  </div>`;
}

// --- Everyday Conversation Practice Database ---
const CONVERSATION_DB = {
  greeting: [
    { eng: "How have you been lately?", tr: "Son zamanlarda nasılsın / nasıl gidiyor?" },
    { eng: "It's a pleasure to meet you.", tr: "Sizinle tanışmak bir zevk." },
    { eng: "Long time no see! What's new?", tr: "Görüşmeyeli uzun zaman oldu! Ne haber?" },
    { eng: "Could you tell me a bit about yourself?", tr: "Bana kendinizden biraz bahsedebilir misiniz?" },
    { eng: "I'd like you to meet my friend.", tr: "Sizi arkadaşımla tanıştırmak isterim." },
    { eng: "Let's keep in touch.", tr: "İletişimde kalalım." },
    { eng: "I've heard a lot about you.", tr: "Hakkınızda çok şey duydum." },
    { eng: "What do you do for a living?", tr: "Geçiminizi sağlamak için ne iş yapıyorsunuz?" },
    { eng: "It was nice catching up with you.", tr: "Seninle laflamak / arayı kapatmak güzeldi." },
    { eng: "Have a good one!", tr: "İyi günler! / İyi çalışmalar!" }
  ],
  shopping: [
    { eng: "Could you tell me where the fitting rooms are?", tr: "Kabinlerin nerede olduğunu söyler misiniz?" },
    { eng: "Does this shirt come in a different color?", tr: "Bu gömleğin başka bir rengi var mı?" },
    { eng: "Can I pay by credit card?", tr: "Kredi kartıyla ödeyebilir miyim?" },
    { eng: "Is this item on sale?", tr: "Bu ürün indirimde mi?" },
    { eng: "I'm just browsing, thank you.", tr: "Sadece bakınıyorum, teşekkürler." },
    { eng: "Can I return this if it doesn't fit?", tr: "Olmazsa bunu iade edebilir miyim?" },
    { eng: "Do you have this in a size medium?", tr: "Bunun medium bedeni var mı?" },
    { eng: "Keep the change.", tr: "Üstü kalsın." },
    { eng: "Could I get a receipt, please?", tr: "Fiş alabilir miyim lütfen?" },
    { eng: "It's a bit out of my budget.", tr: "Bütçemi biraz aşıyor." }
  ],
  travel: [
    { eng: "Could you tell me which platform the train leaves from?", tr: "Trenin hangi perondan kalktığını söyler misiniz?" },
    { eng: "Is there a shuttle service to the airport?", tr: "Havalimanına servis hizmeti var mı?" },
    { eng: "Check-in for flight TK1920 is now open.", tr: "TK1920 sefer sayılı uçuş için kayıtlar açıldı." },
    { eng: "Could you recommend a good local restaurant nearby?", tr: "Yakınlarda güzel bir yerel restoran önerebilir misiniz?" },
    { eng: "Where can I purchase a ticket?", tr: "Nereden bilet satın alabilirim?" },
    { eng: "Excuse me, how do I get to the city center?", tr: "Affedersiniz, şehir merkezine nasıl giderim?" },
    { eng: "Can you hold my luggage for a few hours?", tr: "Bagajımı birkaç saatliğine tutabilir misiniz?" },
    { eng: "A single/return ticket to London, please.", tr: "Londra'ya tek yön/gidiş-dönüş bir bilet lütfen." },
    { eng: "Is the breakfast included in the room rate?", tr: "Kahvaltı oda fiyatına dahil mi?" },
    { eng: "Excuse me, is this seat taken?", tr: "Affedersiniz, bu koltuk boş mu?" }
  ],
  school: [
    { eng: "When is the deadline for this assignment?", tr: "Bu ödevin son teslim tarihi ne zaman?" },
    { eng: "Could you explain this topic one more time, please?", tr: "Bu konuyu bir kez daha açıklayabilir misiniz lütfen?" },
    { eng: "Are we allowed to use our notes during the test?", tr: "Sınav sırasında notlarimizi kullanmamıza izin var mı?" },
    { eng: "Who is presenting their project today?", tr: "Bugün projesini kim sunuyor?" },
    { eng: "I need to catch up on my classes.", tr: "Derslerimi yakalamam/telafi etmem gerekiyor." },
    { eng: "Let's form a study group for the final exam.", tr: "Final sınavı için bir çalışma grubu kuralım." },
    { eng: "Could I borrow your pen for a moment?", tr: "Kalemini bir anlığına ödünç alabilir miyim?" },
    { eng: "I didn't quite get that part.", tr: "O kısmı pek anlayamadım." },
    { eng: "He passed the course with flying colors.", tr: "Dersi üstün başarıyla (yüksek notla) geçti." },
    { eng: "Is attendance mandatory for this lecture?", tr: "Bu ders için katılım zorunlu mu?" }
  ],
  work: [
    { eng: "Let's schedule a meeting to discuss the details.", tr: "Detayları tartışmak için bir toplantı planlayalım." },
    { eng: "I am currently working on the budget report.", tr: "Şu anda bütçe raporu üzerinde çalışıyorum." },
    { eng: "Could you give me some feedback on this draft?", tr: "Bu taslak hakkında bana geri bildirim verebilir misiniz?" },
    { eng: "We need to meet the deadline by Friday.", tr: "Cuma gününe kadar teslim tarihini yakalamamız gerekiyor." },
    { eng: "I'll follow up on this issue tomorrow morning.", tr: "Bu konuyu yarın sabah takip edeceğim." },
    { eng: "Let's brainstorm some ideas for the project.", tr: "Proje için biraz beyin fırtınası yapalım." },
    { eng: "Can we push the meeting back to 2 PM?", tr: "Toplantıyı öğleden sonra 2'ye erteleyebilir miyiz?" },
    { eng: "I'd like to sign off on this proposal.", tr: "Bu teklifi onaylamak/imzalamak istiyorum." },
    { eng: "Who is in charge of this account?", tr: "Bu hesaptan kim sorumlu?" },
    { eng: "We need to delegate these tasks immediately.", tr: "Bu görevleri hemen delege etmemiz/dağıtmamız gerekiyor." }
  ],
  park: [
    { eng: "It's a beautiful day to go for a jog in the park.", tr: "Parkta koşuya çıkmak için harika bir gün." },
    { eng: "Is it okay if I pet your dog?", tr: "Köpeğinizi sevebilir miyim?" },
    { eng: "Let's find a shady spot to have a picnic.", tr: "Piknik yapmak için gölgelik bir yer bulalım." },
    { eng: "The park is filled with blooming flowers in spring.", tr: "Park, baharda açan çiçeklerle doludur." },
    { eng: "Excuse me, is there a public restroom nearby?", tr: "Affedersiniz, yakınlarda umumi tuvalet var mı?" },
    { eng: "Let's sit on the bench and get some fresh air.", tr: "Bankta oturup biraz temiz hava alalım." },
    { eng: "Watch out! The path is a bit slippery.", tr: "Dikkat et! Yol biraz kaygan." },
    { eng: "The kids are playing on the swings and slides.", tr: "Çocuklar salıncaklarda ve kaydıraklarda oynuyor." },
    { eng: "Do you want to go for a stroll around the lake?", tr: "Gölün etrafında bir yürüyüşe çıkmak ister miydin?" },
    { eng: "It's getting chilly; we should head back.", tr: "Hava soğuyor; geri dönmeliyiz." }
  ]
};

// --- View Switching and Rendering Helpers ---
function switchViewMode(mode) {
  if (mode === 'dictionary') {
    modeDictionaryBtn.classList.add('active');
    modeConversationBtn.classList.remove('active');
    dictionaryView.classList.remove('hidden');
    conversationView.classList.add('hidden');
  } else {
    modeDictionaryBtn.classList.remove('active');
    modeConversationBtn.classList.add('active');
    dictionaryView.classList.add('hidden');
    conversationView.classList.remove('hidden');
    
    // Load active category
    const activeCatTab = document.querySelector('.conv-cat-tab.active');
    const cat = activeCatTab ? activeCatTab.getAttribute('data-cat') : 'greeting';
    renderConversationPhrases(cat);
  }
}

function renderConversationPhrases(category) {
  convPhrasesList.innerHTML = '';
  const phrases = CONVERSATION_DB[category] || [];
  
  if (phrases.length === 0) {
    convPhrasesList.innerHTML = '<p class="history-empty">Bu kategoriye ait cümle bulunamadı.</p>';
    return;
  }
  
  phrases.forEach(p => {
    const card = document.createElement('div');
    card.className = 'conv-phrase-card';
    
    const content = document.createElement('div');
    content.className = 'conv-phrase-content';
    
    const engPara = document.createElement('p');
    engPara.className = 'conv-phrase-eng';
    engPara.textContent = p.eng;
    
    const trPara = document.createElement('p');
    trPara.className = 'conv-phrase-tr';
    trPara.textContent = p.tr;
    
    content.appendChild(engPara);
    content.appendChild(trPara);
    
    const playBtn = document.createElement('button');
    playBtn.className = 'icon-action-btn';
    playBtn.title = 'Seslendir';
    playBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      speakText(p.eng);
    });
    
    card.appendChild(content);
    card.appendChild(playBtn);
    
    // Tap card to speak as secondary feature on tablets
    card.addEventListener('click', () => {
      speakText(p.eng);
    });
    
    convPhrasesList.appendChild(card);
  });
}
