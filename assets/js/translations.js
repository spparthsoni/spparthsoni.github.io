// Multi-language support for portfolio
const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_research: "Research",
    nav_techstack: "Tech Stack",
    nav_references: "References",
    
    // Home Page
    home_greeting: "Hi",
    home_intro: "I'm",
    home_description: "I am into",
    home_role: "Frontend Mobile Apps Development",
    
    // Projects Page
    projects_title: "My",
    projects_subtitle: "Projects",
    projects_description: "I specialize in developing mobile applications using both native <b>Android</b> and <b>Flutter</b> hybrid app development platforms. My projects leverage a wide range of modern tools and frameworks to build high-performance, user-friendly apps. I have strong experience experiences and delivering scalable solutions that perform well across devices. My projects makes use of vast variety of latest technology tools.",
    
    // Contact Form
    contact_title: "Get in Touch",
    contact_name_placeholder: "Your Name",
    contact_email_placeholder: "Email Address",
    contact_message_placeholder: "Type your Message",
    contact_send_button: "Send",
    contact_sending: "Sending",
    contact_sent: "SENT",
    contact_success: "Success!",
    contact_success_msg: "Your message has been sent successfully!",
    contact_error: "Error!",
    contact_error_msg: "There was a problem sending your message. Please try again.",
    contact_error_name: "Please enter a valid name!",
    contact_error_email: "Please enter a valid email!",
    contact_error_message: "Please enter a valid message!",
    
    // Footer
    footer_made_with: "Made with",
    footer_by: "by",
  },
  
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_projects: "Projets",
    nav_experience: "Expérience",
    nav_education: "Éducation",
    nav_research: "Recherche",
    nav_techstack: "Technologies",
    nav_references: "Références",
    
    // Home Page
    home_greeting: "Salut",
    home_intro: "Je suis",
    home_description: "Je suis dans",
    home_role: "Développement d'applications mobiles Frontend",
    
    // Projects Page
    projects_title: "Mes",
    projects_subtitle: "Projets",
    projects_description: "Je me spécialise dans le développement d'applications mobiles en utilisant à la fois les plateformes de développement d'applications hybrides natives <b>Android</b> et <b>Flutter</b>. Mes projets exploitent une large gamme d'outils et de frameworks modernes pour créer des applications performantes et conviviales. J'ai une solide expérience dans la fourniture de solutions évolutives qui fonctionnent bien sur tous les appareils. Mes projets utilisent une grande variété d'outils technologiques de pointe.",
    
    // Contact Form
    contact_title: "Contactez-moi",
    contact_name_placeholder: "Votre nom",
    contact_email_placeholder: "Adresse e-mail",
    contact_message_placeholder: "Tapez votre message",
    contact_send_button: "Envoyer",
    contact_sending: "Envoi en cours",
    contact_sent: "ENVOYÉ",
    contact_success: "Succès!",
    contact_success_msg: "Votre message a été envoyé avec succès!",
    contact_error: "Erreur!",
    contact_error_msg: "Un problème est survenu lors de l'envoi de votre message. Veuillez réessayer.",
    contact_error_name: "Veuillez entrer un nom valide!",
    contact_error_email: "Veuillez entrer un e-mail valide!",
    contact_error_message: "Veuillez entrer un message valide!",
    
    // Footer
    footer_made_with: "Fait avec",
    footer_by: "par",
  },
  
  ru: {
    // Navigation
    nav_home: "Главная",
    nav_projects: "Проекты",
    nav_experience: "Опыт",
    nav_education: "Образование",
    nav_research: "Исследования",
    nav_techstack: "Технологии",
    nav_references: "Отзывы",
    
    // Home Page
    home_greeting: "Привет",
    home_intro: "Я",
    home_description: "Я занимаюсь",
    home_role: "Разработка мобильных приложений Frontend",
    
    // Projects Page
    projects_title: "Мои",
    projects_subtitle: "Проекты",
    projects_description: "Я специализируюсь на разработке мобильных приложений с использованием как нативных платформ разработки <b>Android</b>, так и гибридных приложений <b>Flutter</b>. Мои проекты используют широкий спектр современных инструментов и фреймворков для создания высокопроизводительных и удобных приложений. У меня большой опыт в предоставлении масштабируемых решений, которые хорошо работают на всех устройствах. В моих проектах используется широкий спектр новейших технологических инструментов.",
    
    // Contact Form
    contact_title: "Связаться со мной",
    contact_name_placeholder: "Ваше имя",
    contact_email_placeholder: "Адрес электронной почты",
    contact_message_placeholder: "Введите ваше сообщение",
    contact_send_button: "Отправить",
    contact_sending: "Отправка",
    contact_sent: "ОТПРАВЛЕНО",
    contact_success: "Успех!",
    contact_success_msg: "Ваше сообщение было успешно отправлено!",
    contact_error: "Ошибка!",
    contact_error_msg: "Возникла проблема при отправке вашего сообщения. Пожалуйста, попробуйте еще раз.",
    contact_error_name: "Пожалуйста, введите правильное имя!",
    contact_error_email: "Пожалуйста, введите правильный адрес электронной почты!",
    contact_error_message: "Пожалуйста, введите правильное сообщение!",
    
    // Footer
    footer_made_with: "Сделано с",
    footer_by: "от",
  }
};

// Language management
class LanguageManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
    this.init();
  }

  init() {
    // Set initial language
    this.setLanguage(this.currentLanguage);
    
    // Add click handlers to language buttons
    this.setupLanguageButtons();
    
    // Listen for language change events
    document.addEventListener('languageChanged', (e) => {
      this.setLanguage(e.detail.language);
    });
  }

  setupLanguageButtons() {
    // Wait for navbar to be loaded
    setTimeout(() => {
      document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
          e.preventDefault();
          const lang = option.getAttribute('data-lang');
          this.setLanguage(lang);
          // Close dropdown after selection
          if (window.bootstrap) {
            const dropdown = bootstrap.Dropdown.getInstance(document.getElementById('languageDropdown'));
            if (dropdown) dropdown.hide();
          }
        });
      });
      
      // Set initial active state
      this.updateLanguageSwitcher();
    }, 100);
  }

  setLanguage(lang) {
    if (!translations[lang]) {
      console.warn(`Language ${lang} not found, defaulting to English`);
      lang = 'en';
    }
    
    this.currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.setAttribute('lang', lang);
    
    // Update all translatable elements
    this.translatePage();
    
    // Update active language in switcher
    this.updateLanguageSwitcher();
  }

  translatePage() {
    const lang = this.currentLanguage;
    const trans = translations[lang];
    
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (trans[key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = trans[key];
        } else {
          element.innerHTML = trans[key];
        }
      }
    });
  }

  updateLanguageSwitcher() {
    // Update dropdown items to show active state
    document.querySelectorAll('.lang-option').forEach(option => {
      const lang = option.getAttribute('data-lang');
      if (lang === this.currentLanguage) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
    
    // Update the current flag icon in navbar
    const flagIcon = document.getElementById('current-lang-flag');
    if (flagIcon) {
      const flagMap = {
        'en': '🇬🇧',
        'fr': '🇫🇷',
        'ru': '🇷🇺'
      };
      flagIcon.textContent = flagMap[this.currentLanguage] || '🌐';
    }
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  translate(key) {
    return translations[this.currentLanguage][key] || translations['en'][key] || key;
  }
}

// Initialize language manager when DOM is ready
let languageManager;
document.addEventListener('DOMContentLoaded', () => {
  languageManager = new LanguageManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations, LanguageManager };
}

