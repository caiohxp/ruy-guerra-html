import { setLanguage } from './translations.js';

document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navLinksContainer = document.getElementById('nav-links-container');
    
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.toggle('active', section.id === sectionId);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            if(sectionId) {
                navLinks.forEach(l => l.classList.remove('active'));
                
                if(this.closest('.dropdown-menu')) {
                    this.closest('.dropdown').querySelector('button').classList.add('active');
                } else {
                    this.classList.add('active');
                }

                showSection(sectionId);
                
                if (window.innerWidth < 768) {
                    navLinksContainer.classList.add('hidden');
                }
            }
        });
    });
    
    mobileMenuButton.addEventListener('click', () => {
        navLinksContainer.classList.toggle('hidden');
    });

    // Galeria
    const galleryItems = document.querySelectorAll('.gallery-item');
    const navContainer = document.querySelector('.gallery-nav');
    let currentIndex = 0;
    let intervalId;
    function updateGallery() {
        galleryItems.forEach((item, i) => {
            item.className = 'gallery-item'; // Reset classes
            const diff = i - currentIndex;
            if (diff === 0) item.classList.add('active');
            else if (diff === -1 || diff === galleryItems.length - 1) item.classList.add('prev-1');
            else if (diff === 1 || diff === -(galleryItems.length - 1)) item.classList.add('next-1');
            else if (diff === -2 || diff === galleryItems.length - 2) item.classList.add('prev-2');
            else if (diff === 2 || diff === -(galleryItems.length - 2)) item.classList.add('next-2');
        });
        document.querySelectorAll('.nav-dot').forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    }
    function setupNav() {
        galleryItems.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'nav-dot';
            dot.textContent = i + 1;
            dot.onclick = () => { currentIndex = i; updateGallery(); resetInterval(); };
            navContainer.appendChild(dot);
        });
    }
    function nextImage() { currentIndex = (currentIndex + 1) % galleryItems.length; updateGallery(); }
    function resetInterval() { clearInterval(intervalId); intervalId = setInterval(nextImage, 4000); }
    if (galleryItems.length > 0) { setupNav(); updateGallery(); resetInterval(); }

    setLanguage('pt');
});
