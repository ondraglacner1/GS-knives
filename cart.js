// ===========================
// PRODUCT DATA
// ===========================
const PRODUCTS = {
    ocean: { id: 'ocean', name: 'Oceán', cat: 'Lovecký nůž', img: 'images/nuz-1-tablet.webp', badge: 'Nový kus', price: 12900, desc: 'Lovecký nůž kovaný z damaškové oceli 1095/15N20 s unikátní stabilizovanou topol. kořenicí s modrým resinem. Měděná záštita a lícní deska ručně tvarovaná a leštěná do zrcadlového lesku. Každý detail vypráví příběh vody a hlubin.', specs: [['Ocel', 'Damašek 1095/15N20'], ['Délka čepele', '130 mm'], ['Celková dokonalost', '265 mm'], ['HRC', '60–62'], ['Hmotnost', '185 g'], ['Rukojeť', 'Stabilizovaný topol, modrý resin']] },
    fiala: { id: 'fiala', name: 'Fialový sen', cat: 'Kuchyňský nůž — Santoku', img: 'images/nuz-2.webp', badge: null, price: 9800, desc: 'Santoku s výrazným damaškovým vzorem ze 67 vrstev oceli. Ergonomická rukojeť z dubu kombinovaná s fialovým resinem. Perfektní pro přesné krájení zeleniny, masa i ryb.', specs: [['Ocel', 'Damašek 67 vrstev'], ['Délka čepele', '170 mm'], ['Celková dokonalost', '305 mm'], ['HRC', '61–63'], ['Hmotnost', '165 g'], ['Rukojeť', 'Dub, fialový resin']] },
    les: { id: 'les', name: 'Temný les', cat: 'Kuchyňský nůž — Gyuto', img: 'images/chef-knife.webp', badge: null, price: 11500, desc: 'Gyuto 210 mm — univerzální šéfkuchařský nůž pro každodenní použití. Stabilizovaná ořechová kořenice s mosaznou záštitou. Vyvážený balanc a ostří, které drží týdny.', specs: [['Ocel', 'Damašek 1084/15N20'], ['Délka čepele', '210 mm'], ['Celková dokonalost', '355 mm'], ['HRC', '60–62'], ['Hmotnost', '210 g'], ['Rukojeť', 'Stabilizovaný ořech, mosaz']] },
    priroda: { id: 'priroda', name: 'Příroda', cat: 'Outdoorový nůž — Bushcraft', img: 'images/bushcraft-knife.webp', badge: 'Limitovaná edice', price: 14200, desc: 'Bushcraft nůž s plným trnem, olivové dřevo se zeleným resinem a měděnými kolíky — limitovaná série 5 kusů.', specs: [['Ocel', 'Damašek 1095/O2'], ['Délka čepele', '115 mm'], ['HRC', '59–61'], ['Hmotnost', '195 g']] },
    yakisugi: { id: 'yakisugi', name: 'Yakisugi', cat: 'Kuchyňský nůž — Nakiri', img: 'images/nakiri-knife.webp', badge: null, price: 8900, desc: 'Nakiri na zeleninu s páleným dubem (yakisugi) a fialovým resinových spacerem — tradiční japonský tvar.', specs: [['Ocel', 'Damašek 67 vrstev'], ['Délka čepele', '165 mm'], ['HRC', '61–63'], ['Hmotnost', '155 g']] },
    javor: { id: 'javor', name: 'Javor', cat: 'EDC — Skládací nůž', img: 'images/edc-knife.webp', badge: null, price: 7200, desc: 'Elegantní skládací nůž pro každodenní nošení — stabilizovaný javorový burl se zlatými kolíky.', specs: [['Ocel', 'Damašek VG-10'], ['Délka čepele', '85 mm'], ['HRC', '60–62'], ['Hmotnost', '95 g']] }
};

function formatPrice(p) {
    return p.toLocaleString('cs-CZ') + '\u00a0K\u010d';
}

function updateCartBadge() {}
function updateBadge() {}

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
    const priceEl = document.getElementById('modal-price');
    if(priceEl) priceEl.textContent = formatPrice(p.price);
    
    const badge = document.getElementById('modal-badge');
    if (badge) {
        if (p.badge) { badge.textContent = p.badge; badge.style.display = 'inline-flex'; }
        else { badge.style.display = 'none'; }
    }
    
    const specsEl = document.getElementById('modal-specs');
    if (specsEl) {
        specsEl.innerHTML = p.specs.map(([l, v]) =>
            `<div><div class="modal-spec-label">${l}</div><div class="modal-spec-value">${v}</div></div>`
        ).join('');
    }
    
    const btnInquiry = document.getElementById('btn-modal-inquiry');
    if (btnInquiry) {
        const formattedPrice = formatPrice(p.price);
        const emailSubject = encodeURIComponent(`Poptávka: Ručně kovaný nůž — ${p.name}`);
        const emailBody = encodeURIComponent(`Dobrý den,\n\nměl(a) bych zájem o ručně kovaný nůž ${p.name} (${p.cat}) v hodnotě ${formattedPrice}.\n\nProsím o informace ohledně dostupnosti či postupu objednávky.\n\nDěkuji.`);
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
