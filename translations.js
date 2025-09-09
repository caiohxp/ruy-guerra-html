import { pt } from './translations.pt.js';
import { en } from './translations.en.js';
import { fr } from './translations.fr.js';

const translations = { pt, en, fr };

const langSwitchers = [document.getElementById('lang-switcher'), document.getElementById('lang-switcher-mobile')];
const translatableElements = document.querySelectorAll('[data-lang-key]');

export function setLanguage(lang) {
    translatableElements.forEach(el => {
        const key = el.dataset.langKey;
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.documentElement.lang = lang.startsWith('pt') ? 'pt-BR' : lang;
}

langSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function (e) {
        if (e.target.tagName === 'IMG') {
            const lang = e.target.dataset.lang;
            setLanguage(lang);
        }
    });
});
