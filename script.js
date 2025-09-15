import { setLanguage } from './translations.js';
import poesias from './poesias.json' with { type: 'json' };
import cronicas from './cronicas.json' with { type: 'json' };
import contos from './contos.json' with { type: 'json' };
import prefacios from './prefacios.json' with { type: 'json' };
import musicas from './musicas.json' with { type: 'json' };

document.addEventListener('DOMContentLoaded', function () {

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
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            if (sectionId) {
                navLinks.forEach(l => l.classList.remove('active'));

                if (this.closest('.dropdown-menu')) {
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

    function setupListPage(array, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    container.querySelectorAll('.list-item').forEach(div => {
        div.onclick = () => {
            const idx = div.dataset.index;
            const item = array[idx];
            if (!item.conteudo) return;
            container.innerHTML = `
                <div class="bg-[#f7f3ee] m-5 p-6 rounded-lg border border-black/20">
                    <h2 class="text-2xl font-bold mb-2">
                        ${item.titulo}
                        ${item.data ? `<span>(${item.data})</span>` : ""}
                    </h2>
                    <div class="mb-2 text-sm text-gray-700">
                        ${item.autor ? `<p><b>Autor:</b> ${item.autor}</p>` : ""}
                        ${item.autores ? `<p><b>Autores:</b> ${item.autores}</p>` : ""}
                        ${item.local ? `<p><b>Local:</b> ${item.local}</p>` : ""}
                        ${item.fonte ? `<p><b>Fonte:</b> ${item.fonte}</p>` : ""}
                    </div>
                    <div class="poema-texto mt-4">${item.conteudo}</div>
                    <button class="mt-6 px-4 py-2 bg-[#d8cbb7] border rounded" id="voltar-lista">Voltar</button>
                </div>
            `;
            container.querySelector('#voltar-lista').onclick = () => {
                container.innerHTML = array.map((item, idx) => `
                    <div class="bg-[#d8cbb7] m-5 p-6 rounded-lg border border-black/20 hover:shadow-lg transition cursor-pointer list-item" data-index="${idx}">
                        <h2 class="text-xl font-bold mb-1">
                            ${item.titulo || ""}
                            ${item.data ? `<span>(${item.data})</span>` : ""}
                        </h2>
                        ${item.autor ? `<p><b>Autor:</b> ${item.autor}</p>` : ""}
                        ${item.autores ? `<p><b>Autores:</b> ${item.autores}</p>` : ""}
                        ${item.local ? `<p><b>Local:</b> ${item.local}</p>` : ""}
                        ${item.fonte ? `<p><b>Fonte:</b> ${item.fonte}</p>` : ""}
                    </div>
                `).join('');
                setupListPage(array, containerSelector);
            };
        };
    });
}

    setupListPage(poesias, '[data-lang-key="poesias_content"]');
    setupListPage(cronicas, '[data-lang-key="chronicles_content"]');
    setupListPage(contos, '[data-lang-key="tales_content"]');
    setupListPage(prefacios, '[data-lang-key="speeches_content"]');
    setupListPage(musicas, '[data-lang-key="songs_content"]');

    // function setupListModal(array, containerSelector) {
    //     const container = document.querySelector(containerSelector);
    //     if (!container) return;
    //     container.querySelectorAll('.list-item').forEach(div => {
    //         div.onclick = () => {
    //             const idx = div.dataset.index;
    //             const item = array[idx];
    //             if (!item.conteudo) return;
    //             const modal = document.createElement('div');
    //             modal.className = 'fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50';
    //             modal.innerHTML = `
    //             <div class="bg-white max-w-lg w-full p-8 rounded shadow-lg relative">
    //                 <button class="absolute top-2 right-2 text-xl" id="close-modal">&times;</button>
    //                 <h2 class="text-2xl font-bold mb-2">${item.titulo}</h2>
    //                 <div class="mb-2 text-sm text-gray-700">
    //                     ${item.autor ? `<span><b>Autor:</b> ${item.autor}</span> &nbsp;|&nbsp;` : ""}
    //                     ${item.data ? `<span><b>Data:</b> ${item.data}</span> &nbsp;|&nbsp;` : ""}
    //                     ${item.local ? `<span><b>Local:</b> ${item.local}</span>` : ""}
    //                     ${item.fonte ? `&nbsp;|&nbsp;<span><b>Fonte:</b> ${item.fonte}</span>` : ""}
    //                 </div>
    //                 <div class="poema-texto mt-4">${item.conteudo}</div>
    //             </div>
    //         `;
    //             document.body.appendChild(modal);
    //             modal.querySelector('#close-modal').onclick = () => modal.remove();
    //             modal.onclick = e => { if (e.target === modal) modal.remove(); };
    //         };
    //     });
    // }

    // setupListModal(poesias, '[data-lang-key="poesias_content"]');
});
