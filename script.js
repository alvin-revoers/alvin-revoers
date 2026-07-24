// ============================================================
//  DATA KENDARAAN (Mobil & Motor Sport)
// ============================================================
const vehicleData = [{
    id: 1,
    name: 'Ferrari F40',
    type: 'Supercar Ikonik',
    shortDesc: 'Legenda dari Maranello, mesin V8 twin-turbo 478 hp.',
    fullStory: 'Ferrari F40 diluncurkan pada tahun 1987 untuk merayakan ulang tahun ke-40 Ferrari. Dirancang oleh Pininfarina, F40 menjadi supercar terakhir yang disetujui langsung oleh Enzo Ferrari. Mengusung mesin V8 2.9 liter twin-turbo dengan tenaga 478 hp, F40 mampu melesat 0-100 km/jam dalam 4,1 detik dan kecepatan tertinggi 324 km/jam. Konstruksi serat karbon dan aluminium membuatnya ringan — hanya 1.100 kg. Hanya 1.315 unit diproduksi, menjadikannya salah satu koleksi paling dicari di dunia.',
    img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop&auto=format'
}, {
    id: 2,
    name: 'Lamborghini Aventador',
    type: 'Bull V12',
    shortDesc: 'V12 6.5 liter, 700 hp, desain agresif khas Italia.',
    fullStory: 'Lamborghini Aventador LP700-4 pertama kali muncul di Geneva Motor Show 2011. Menggantikan Murciélago, Aventador membawa mesin V12 6.5 liter naturally aspirated dengan tenaga 700 hp. Transmisi ISR 7-percepatan dan penggerak semua roda membuatnya melesat 0-100 km/jam dalam 2,9 detik. Desainnya yang tajam dan agresif menjadi ciri khas Lamborghini modern. Nama Aventador diambil dari banteng pertempuran Spanyol yang terkenal. Produksi berakhir pada 2022, digantikan oleh Revuelto.',
    img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop&auto=format'
}, {
    id: 3,
    name: 'Porsche 911 Turbo S',
    type: 'German Engineering',
    shortDesc: 'Flat-6 3.8L twin-turbo, 640 hp, ikon tak tergantikan.',
    fullStory: 'Porsche 911 Turbo S generasi 992 adalah puncak dari evolusi 911. Mesin flat-6 3.8 liter twin-turbo menghasilkan 640 hp dan 800 Nm torsi. Akselerasi 0-100 km/jam hanya 2,6 detik — setara dengan hypercar. Sistem penggerak semua roda dan kemudi roda belakang membuatnya stabil di tikungan. Dengan harga awal sekitar $230,000, 911 Turbo S menawarkan performa supercar dengan kenyamanan sehari-hari. Porsche terus mempertahankan desain ikonik yang tidak pernah lekang oleh waktu.',
    img: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&h=400&fit=crop&auto=format'
}, {
    id: 4,
    name: 'Ducati Panigale V4',
    type: 'Motor Sport Italia',
    shortDesc: 'V4 1.103cc, 214 hp, Desmosedici Stradale.',
    fullStory: 'Ducati Panigale V4 adalah superbike pertama Ducati yang menggunakan mesin V4. Ditenagai Desmosedici Stradale 1.103cc yang menghasilkan 214 hp. Bobot kering hanya 175 kg, rasio power-to-weight yang luar biasa. Desain aerodinamika dengan sayap kecil (winglets) menghasilkan downforce hingga 36 kg pada kecepatan tinggi. Panigale V4 memenangkan berbagai gelar di World Superbike. Harga sekitar $40,000 untuk varian standar, dan model spesial seperti V4 Superleggera bisa mencapai $100,000.',
    img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&h=400&fit=crop&auto=format'
}, {
    id: 5,
    name: 'Kawasaki Ninja H2R',
    type: 'Hyperbike',
    shortDesc: 'Supercharged 998cc, 310 hp, hanya untuk sirkuit.',
    fullStory: 'Kawasaki Ninja H2R adalah versi sirkuit dari H2, dengan tenaga gila 310 hp dari mesin 998cc supercharged. Tidak memiliki lampu depan atau spion karena hanya untuk digunakan di trek. Bobotnya 216 kg, dengan rasio power-to-weight yang membuatnya bisa melaju hingga 400 km/jam. Mesinnya menggunakan supercharger centrifugal yang menghasilkan tekanan tinggi. Harga sekitar $55,000 untuk model non-legal jalan. Ninja H2R adalah bukti teknologi motor tercepat di dunia.',
    img: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=600&h=400&fit=crop&auto=format'
}];

// ============================================================
//  DOM REFS
// ============================================================
const lockScreen = document.getElementById('lockScreen');
const dashboard = document.getElementById('dashboard');
const keyInput = document.getElementById('keyInput');
const unlockBtn = document.getElementById('unlockBtn');
const errorMsg = document.getElementById('errorMsg');
const carGrid = document.getElementById('carGrid');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalType = document.getElementById('modalType');
const modalStory = document.getElementById('modalStory');
const waLink = document.getElementById('waLink');

// ============================================================
//  FETCH KEY DARI GITHUB
// ============================================================
async function fetchValidKey() {
    try {
        const res = await fetch(
            'https://raw.githubusercontent.com/alvin-revoers/alvin-revoers/refs/heads/main/key.txt'
        );
        if (!res.ok) throw new Error('Gagal mengambil key');
        const text = await res.text();
        return text.trim();
    } catch (e) {
        console.warn('Fetch key gagal, pakai key fallback', e);
        return 'alvinrevoersx';
    }
}

// ============================================================
//  RENDER KARTU
// ============================================================
function renderCards() {
    carGrid.innerHTML = '';
    vehicleData.forEach(v => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.setAttribute('data-id', v.id);
        card.innerHTML = `
            <div class="img-wrapper">
                <img src="${v.img}" alt="${v.name}" loading="lazy" 
                     onerror="this.style.display='none'; this.parentNode.innerHTML='<i class=\\'fas fa-car\\'></i>'" />
            </div>
            <h3>${v.name}</h3>
            <div class="subtitle">${v.type}</div>
            <div class="desc-preview">${v.shortDesc}</div>
        `;
        card.addEventListener('click', () => openModal(v.id));
        carGrid.appendChild(card);
    });
}

// ============================================================
//  MODAL
// ============================================================
function openModal(id) {
    const v = vehicleData.find(item => item.id === id);
    if (!v) return;

    modalImg.innerHTML =
        `<img src="${v.img}" alt="${v.name}" onerror="this.style.display='none'; this.parentNode.innerHTML='<i class=\\'fas fa-car\\'></i>'" />`;
    modalTitle.textContent = v.name;
    modalType.textContent = v.type;
    modalStory.textContent = v.fullStory;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ============================================================
//  UNLOCK
// ============================================================
async function handleUnlock() {
    const inputKey = keyInput.value.trim();
    if (!inputKey) {
        errorMsg.style.display = 'block';
        errorMsg.textContent = 'Masukkan kunci akses terlebih dahulu.';
        return;
    }

    const validKey = await fetchValidKey();
    if (inputKey === validKey) {
        errorMsg.style.display = 'none';
        lockScreen.style.display = 'none';
        dashboard.style.display = 'flex';
        renderCards();
    } else {
        errorMsg.style.display = 'block';
        errorMsg.textContent = 'Password salah! Silakan hubungi admin WhatsApp.';
        waLink.href = 'https://wa.me/6287716838388?text=Halo%20saya%20butuh';
    }
}

unlockBtn.addEventListener('click', handleUnlock);
keyInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleUnlock();
});

// ============================================================
//  SET DEFAULT WHATSAPP
// ============================================================
waLink.href = 'https://wa.me/6287716838388?text=Halo%20saya%20butuh%20key';

console.log('🔒 JailbreakAI — Premium Locked');