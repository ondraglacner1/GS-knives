// ===========================
// SHOWCASE DATA (prezentace — žádné ceny, žádný e-shop)
// ===========================
const PRODUCTS = {
    ocean: { id: 'ocean', name: 'Oceán', cat: 'Lovecký nůž', img: 'images/ocean-slate.avif', badge: 'Nový kus', desc: 'Lovecký nůž se\u00A0san-mai čepelí s\u00A0vrstvou mědi a\u00A0stabilizovanou kořenicí v\u00A0modrých tónech. Měděná záštita ručně tvarovaná a\u00A0leštěná. Každý detail vypráví příběh vody a\u00A0hlubin.', specs: [['Ocel', 'San-mai s\u00A0mědí'], ['Délka čepele', '130\u00A0mm'], ['Celková délka', '265\u00A0mm'], ['HRC', '60–62'], ['Hmotnost', '185\u00A0g'], ['Rukojeť', 'Stabilizovaná kořenice, modrý odstín']] },
    fiala: { id: 'fiala', name: 'Fialový sen', cat: 'Kuchyňský nůž — Gyuto', img: 'images/gyuto-fialovy-sen.avif', badge: null, desc: 'Gyuto s\u00A0ručně kovaným kurouchi povrchem a\u00A0jasně vybroušeným ostřím. Oktagonální rukojeť z\u00A0wenge s\u00A0prstencem z\u00A0fialového purpleheartu. Perfektní pro\u00A0přesné krájení zeleniny, masa i\u00A0ryb.', specs: [['Ocel', 'Uhlíková ocel, kurouchi'], ['Délka čepele', '210\u00A0mm'], ['Celková délka', '355\u00A0mm'], ['HRC', '61–63'], ['Hmotnost', '165\u00A0g'], ['Rukojeť', 'Wenge, purpleheart']] },
    les: { id: 'les', name: 'Sokolí pero', cat: 'Lovecký nůž — Bowie', img: 'images/bowie-wood.avif', badge: null, desc: 'Bowie s\u00A0čepelí z\u00A0peříčkového damašku – vzoru, který připomíná ptačí pero a\u00A0nikdy se\u00A0nezopakuje. Palisandrová rukojeť s\u00A0mosaznou záštitou, klasická americká silueta v\u00A0ručním provedení.', specs: [['Ocel', 'Peříčkový damašek'], ['Délka čepele', '190\u00A0mm'], ['Celková délka', '330\u00A0mm'], ['HRC', '60–62'], ['Hmotnost', '240\u00A0g'], ['Rukojeť', 'Palisandr, mosaz']] },
    priroda: { id: 'priroda', name: 'Příroda', cat: 'Outdoorový nůž — Bushcraft', img: 'images/bushcraft-priroda.avif', badge: 'Limitovaná edice', desc: 'Bushcraft nůž s\u00A0plným trnem a\u00A0stabilizovanou kořenicí v\u00A0zelenomodrých tónech – limitovaná série 5\u00A0kusů.', specs: [['Ocel', 'Uhlíková ocel, kovaný povrch'], ['Délka čepele', '115\u00A0mm'], ['HRC', '59–61'], ['Hmotnost', '195\u00A0g']] },
    yakisugi: { id: 'yakisugi', name: 'Yakisugi', cat: 'Kuchyňský nůž — Nakiri', img: 'images/nakiri-yakisugi.avif', badge: null, desc: 'Nakiri na\u00A0zeleninu s\u00A0damaškovou čepelí, rukojetí z\u00A0tmavého dřeva a\u00A0fialovým resinovým spacerem – tradiční japonský tvar.', specs: [['Ocel', 'Damašek 67\u00A0vrstev'], ['Délka čepele', '165\u00A0mm'], ['HRC', '61–63'], ['Hmotnost', '155\u00A0g']] },
    javor: { id: 'javor', name: 'Javor', cat: 'EDC — Pevná čepel', img: 'images/edc-javor.avif', badge: null, desc: 'Kompaktní nůž s\u00A0pevnou čepelí pro\u00A0každodenní nošení – rukojeť ze\u00A0světlého dřeva s\u00A0černými kolíky, kovaný hřbet čepele.', specs: [['Ocel', 'Uhlíková ocel'], ['Délka čepele', '85\u00A0mm'], ['HRC', '60–62'], ['Hmotnost', '95\u00A0g']] },
    'damascus-detail': { id: 'damascus-detail', name: 'Peříčkový damašek', cat: 'Detail', img: 'images/damascus-detail.avif', badge: null, desc: 'Makro záběr leptaného peříčkového damašku. Vzor vzniká překládáním a\u00A0sekáním vrstvené oceli – nikdy se\u00A0nezopakuje.', specs: [] },
    'kiritsuke-dark': { id: 'kiritsuke-dark', name: 'Kiritsuke', cat: 'Kuchyňský nůž', img: 'images/kiritsuke-dark.avif', badge: null, desc: 'Kovaná čepel se\u00A0stabilizovanou kořenicí v\u00A0modrozelených tónech na\u00A0tmavém dřevě. Japonský tvar, česká práce.', specs: [] },
    rose: { id: 'rose', name: 'Kované růže', cat: 'Kovářská práce', img: 'images/rose-bouquet.avif', badge: null, desc: 'Kytice růží vykovaná z\u00A0oceli. Kovářské řemeslo nejsou jen\u00A0nože.', specs: [] }
};

// ===========================
// PRODUCT MODAL
// ===========================
const getProductModal = () => document.getElementById('product-modal');
const getModalCard = () => document.getElementById('modal-card');

function openModal(id) {
    const p = PRODUCTS[id];
    if (!p) return;
    const modal = getProductModal();
    if (!modal) return;

    const imgEl = document.getElementById('modal-img');
    if(imgEl) { imgEl.src = p.img; imgEl.alt = p.name; }
    const catEl = document.getElementById('modal-cat');
    if(catEl) catEl.textContent = p.cat;
    const titleEl = document.getElementById('modal-title');
    if(titleEl) titleEl.textContent = p.name;
    const descEl = document.getElementById('modal-desc');
    if(descEl) descEl.textContent = p.desc;

    const badge = document.getElementById('modal-badge');
    if (badge) {
        if (p.badge) { badge.textContent = p.badge; badge.style.display = 'inline-flex'; }
        else { badge.style.display = 'none'; }
    }

    const specsEl = document.getElementById('modal-specs');
    if (specsEl) {
        specsEl.style.display = p.specs.length ? '' : 'none';
        specsEl.innerHTML = p.specs.map(([l, v]) =>
            `<div><div class="modal-spec-label">${l}</div><div class="modal-spec-value">${v}</div></div>`
        ).join('');
    }

    const btnInquiry = document.getElementById('btn-modal-inquiry');
    if (btnInquiry) {
        const emailSubject = encodeURIComponent(`Dotaz: Ručně kovaný nůž — ${p.name}`);
        const emailBody = encodeURIComponent(`Dobrý den,\n\nzaujal mě kus „${p.name}“ (${p.cat}) z vaší prezentace.\n\nRád(a) bych se dozvěděl(a) více — dostupnost, možnosti zakázkové výroby či podobné kusy.\n\nDěkuji.`);
        btnInquiry.href = `mailto:info@gsknives.cz?subject=${emailSubject}&body=${emailBody}`;
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (typeof gsap !== 'undefined') {
        const card = getModalCard();
        if(card) gsap.fromTo(card, { scale: 0.94, opacity: 0, y: 20 }, { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' });
    }
}

function closeModal() {
    const modal = getProductModal();
    if (!modal) return;
    const card = getModalCard();
    if (card && typeof gsap !== 'undefined') {
        gsap.to(card, { scale: 0.94, opacity: 0, y: 16, duration: 0.3, ease: 'power2.in',
            onComplete: () => { modal.classList.remove('open'); document.body.style.overflow = ''; }
        });
    } else {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// ===========================
// INITIALIZATION
// ===========================
function initProductShowcase() {
    try {
        document.querySelectorAll('.product-card').forEach(card => {
            const id = card.dataset.product || card.dataset.id;
            if (id) {
                card.addEventListener('click', () => openModal(id));
                card.addEventListener('keydown', e => {
                    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(id); }
                });
            }
            if (typeof gsap !== 'undefined') {
                card.addEventListener('mouseenter', () => gsap.to(card, { y: -6, duration: 0.4, ease: 'power2.out', overwrite: 'auto' }));
                card.addEventListener('mouseleave', () => gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out', overwrite: 'auto' }));
            }
        });

        const modalClose = document.getElementById('modal-close');
        if (modalClose) modalClose.addEventListener('click', closeModal);

        const modalBackdrop = document.getElementById('modal-backdrop');
        if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                const pModal = getProductModal();
                if (pModal && pModal.classList.contains('open')) closeModal();
            }
        });

        console.log("Product showcase functionality initialized (cart disabled).");
    } catch (err) {
        console.error("Product showcase initialization failed:", err);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductShowcase);
} else {
    initProductShowcase();
}
