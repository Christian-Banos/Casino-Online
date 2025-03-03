/* === DARK MODE === */
const toggleButton = document.getElementById('darkModeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  moonIcon.style.display = moonIcon.style.display === 'none' ? 'block' : 'none';
  sunIcon.style.display = sunIcon.style.display === 'none' ? 'block' : 'none';
});

/* Header */
function blurHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/* === CAROUSEL === */
const images = document.querySelector('.carousel-images');
const totalSlides = images.children.length;
let index = 0;
const indicatorsContainer = document.querySelector('.carousel-indicators');

for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (i === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => moveToSlide(i));
    indicatorsContainer.appendChild(indicator);
}

const indicators = document.querySelectorAll('.indicator');
function updateIndicators() {
    indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === index);
    });
}

function moveToSlide(n) {
    index = (n + totalSlides) % totalSlides;
    images.style.transform = `translateX(${-index * 100}%)`;
    updateIndicators();
}

document.getElementById('prev').addEventListener('click', () => moveToSlide(index - 1));
document.getElementById('next').addEventListener('click', () => moveToSlide(index + 1));

function autoSlide() {
    moveToSlide(index + 1);
}
let interval = setInterval(autoSlide, 5000);

document.querySelector('.carousel').addEventListener('mouseenter', () => clearInterval(interval));
document.querySelector('.carousel').addEventListener('mouseleave', () => interval = setInterval(autoSlide, 5000));

    

/* === MODAL === */
let currentStep = 1;

function openModal() {
  document.getElementById("registerModal").style.display = "flex";
  showStep(1);
}

function closeModal() {
  document.getElementById("registerModal").style.display = "none";
  modal.style.display = "none";
  currentStep = 1; // Reinicia el paso actual
}

function nextStep(step) {
  currentStep = step;
  showStep(step);
}

function showStep(step) {
  // Oculta todos los pasos
  document.querySelectorAll(".step").forEach((el) => {
    el.style.display = "none";
    el.classList.remove("active");
  });
    // Muestra el paso actual
    const currentStepElement = document.querySelector(`.step-${step}`);
    if (currentStepElement) {
      currentStepElement.style.display = "block";
      currentStepElement.classList.add("active");
    };
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("registerModal");
  if (modal) {
    modal.style.display = "none";
  }
});

/* === CHANGE LENGUAGES === */
const translations = {
  en: {
    casino: "Casino",
    casinoOnline: "Casino Online",
    playOnline: "Play Online",
    playNow: "Play Now",
    joinNow: "Join Now",
    explore: "Explore",
    registerFree: "Register for free here",
    register: "REGISTER",
    createAccount: "CREATE YOUR ACCOUNT",
    deposit: "DEPOSIT",
    welcome: "WELCOME!",
    accountCreated: "Your account has been successfully created.",
    startPlaying: "Start Playing",
    playHere: "PLAY HERE",
    joinPoker: "Join our poker entertainment",
    aboutLeon: "ABOUT LEON211",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    responsibleGaming: "Responsible Gaming",
    navLinks: "Navigation Links",
    home: "Home",
    games: "Games",
    promotions: "Promotions",
    contactUs: "Contact Us",
    paymentMethods: "Payment Methods"
  },
  pt: {
    casino: "Cassino",
    casinoOnline: "Cassino Online",
    playOnline: "Jogar Online",
    playNow: "Jogue Agora",
    moreGames: "mais de 4.500 jogos à escolha",
    joinNow: "Junte-se Agora",
    bonus: "Ganhe um bónus de 100% até 750€",
    explore: "Explorar",
    registerFree: "Registre-se gratuitamente aqui",
    register: "REGISTRAR",
    createAccount: "CRIE SUA CONTA",
    mail: "Insira o seu e-mail",
    password: "Introduza a sua senha", 
    continue: "continuar",
    deposit: "DEPÓSITO",
    amount: "Insira o valor",
    welcome: "BEM-VINDO!",
    accountCreated: "Sua conta foi criada com sucesso.",
    startPlaying: "Começar a Jogar",
    playHere: "JOGUE AQUI",
    joinPoker: "Junte-se ao nosso entretenimento de poker",
    aboutLeon: "SOBRE LEON211",
    terms: "Termos e Condições",
    privacy: "Política de Privacidade",
    responsibleGaming: "Jogo Responsável",
    only18: "Apenas maiores de 18 anos | Jogue com responsabilidade",
    navLinks: "Links de Navegação",
    home: "Início",
    games: "Jogos",
    promotions: "Promoções",
    contactUs: "Contate-nos",
    paymentMethods: "Métodos de Pagamento",
    reserver: "© 2025 Christian de Paul. Todos os direitos reservados",
  }
};

// Función para cambiar el idioma
//Function to change the language
function changeLanguage(lang) {
  // Guardar el idioma seleccionado
  localStorage.setItem('selectedLanguage', lang);
  
  // Actualizar todos los textos
  //Save the selected language
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'PLACEHOLDER') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
}

// Manejadores de eventos para los botones de idioma
//Event handlers for language buttons
document.querySelector('.porgues').addEventListener('click', () => changeLanguage('pt'));
document.querySelector('.english').addEventListener('click', () => changeLanguage('en'));

// Cargar el idioma guardado al iniciar
// Load the saved language on startup
document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  changeLanguage(savedLanguage);
});