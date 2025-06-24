const translations = {
  id: {
    judulBrand: "JourneyTix",
    subBrand: "Transportasi Masa Kini – Nyaman, Cepat, dan Terpercaya",
    ctaPesan: "Pesan Tiket Sekarang",
    marquee: "🚨 Promo Spesial: Tiket Diskon hingga 20% hari ini! 🚨 | Hubungi Kami: +62 812-3456-7890 | JourneyTix kini melayani Tiket perjalanan lebih dari 30 kota besar di Indonesia",
    kenapa: "Kenapa Memilih JourneyTix?",
    fitur1: "Kenyamanan",
    desc1: "Kabin bersih, tempat duduk empuk, dan perjalanan bebas khawatir.",
    fitur2: "Cepat & Tepat",
    desc2: "Keberangkatan dan kedatangan sesuai jadwal tanpa keterlambatan.",
    fitur3: "Pesan Online Mudah",
    desc3: "Tanpa antri, cukup klik dan tiket langsung dikirim ke email kamu.",
    ctaTitle: "Dapatkan Tiketmu Hari Ini",
    ctaSub: "Nikmati perjalanan aman dan nyaman bersama JourneyTix",
    ctaBtn: "Pesan Tiket",
    ulasan: "Ulasan Pengguna",
    namaUlasan: "Nama Pengguna",
    tulisUlasan: "Tulis ulasan kamu di bawah",
    placeholderKomentar: "Tulis komentar kamu di sini...",
    kirimUlasan: "Kirim Ulasan",
    komentar1: "Bus nyaman banget, staff ramah, perjalanan tepat waktu. Mantap JourneyTix!",
    komentar2: "Lumayan oke. Tapi mungkin jadwal bisa ditambah untuk rute malam hari."
  },
  en: {
    judulBrand: "JourneyTix",
    subBrand: "Modern Transportation – Comfortable, Fast, and Reliable",
    ctaPesan: "Book Ticket Now",
    marquee: "🚨 Special Promo: Up to 20% Discount Today! 🚨 | Contact Us: +62 812-3456-7890 | JourneyTix now serves over 30 major cities in Indonesia",
    kenapa: "Why Choose JourneyTix?",
    fitur1: "Comfort",
    desc1: "Clean cabin, soft seats, and worry-free travel.",
    fitur2: "Fast & Punctual",
    desc2: "Departures and arrivals are always on time.",
    fitur3: "Easy Online Booking",
    desc3: "No queues, just click and your ticket is sent to your email.",
    ctaTitle: "Get Your Ticket Today",
    ctaSub: "Enjoy safe and comfortable travel with JourneyTix",
    ctaBtn: "Book Ticket",
    ulasan: "User Reviews",
    namaUlasan: "Username",
    tulisUlasan: "Write your review below",
    placeholderKomentar: "Write your comment here...",
    kirimUlasan: "Submit Review",
    komentar1: "Very comfortable bus, friendly staff, punctual journey. Great job, JourneyTix!",
    komentar2: "Pretty good. Maybe consider adding more night routes."
  },
  jp: {
    judulBrand: "ジャーニーティックス",
    subBrand: "現代の交通手段 – 快適、迅速、信頼性",
    ctaPesan: "今すぐチケットを予約",
    marquee: "🚨 特別プロモーション：本日最大20％割引チケット！ 🚨 | お問い合わせ: +62 812-3456-7890 | JourneyTixは現在、インドネシアの30以上の主要都市でサービスを提供中",
    kenapa: "なぜJourneyTixを選ぶのか？",
    fitur1: "快適さ",
    desc1: "清潔なキャビン、柔らかい座席、心配のない旅行。",
    fitur2: "迅速 & 正確",
    desc2: "出発と到着は常に時間通り。",
    fitur3: "簡単なオンライン予約",
    desc3: "列に並ばず、クリックするだけでチケットがメールに送信されます。",
    ctaTitle: "今日チケットを入手",
    ctaSub: "JourneyTixと一緒に安全で快適な旅を楽しもう",
    ctaBtn: "チケットを予約",
    ulasan: "ユーザーレビュー",
    namaUlasan: "ユーザー名",
    tulisUlasan: "下にレビューを入力してください",
    placeholderKomentar: "ここにコメントを書いてください...",
    kirimUlasan: "レビューを送信",
    komentar1: "とても快適なバス、フレンドリーなスタッフ、時間通りの旅。素晴らしいJourneyTix！",
    komentar2: "まあまあ良かった。夜のルートをもっと増やしてほしいかも。"
  }
};

const languageTexts = {
  id: {
    pesawat: "Pesawat",
    kereta: "Kereta",
    bus: "Bus",
    kapal: "Kapal",
    lainnya: "Lainnya",
    rental: "Rental Kendaraan",
    akomodasi: "Akomodasi",
    paket: "Paket Wisata",
    reward: "JourneyPoint",
    bantuan: "Bantuan",
    masuk: "Masuk / Daftar",
    jadwal: "Jadwal",
    tentang: "Tentang",
    kontak: "Kontak",
    bahasa: "🌐ID|IDR"
  },
  en: {
    pesawat: "Flight",
    kereta: "Train",
    bus: "Bus",
    kapal: "Ship",
    lainnya: "More",
    rental: "Car Rental",
    akomodasi: "Accommodation",
    paket: "Tour Package",
    reward: "JourneyPoint",
    bantuan: "Help",
    masuk: "Login / Register",
    jadwal: "Schedule",
    tentang: "About",
    kontak: "Contact",
    bahasa: "🌐EN|USD"
  },
  jp: {
    pesawat: "飛行機",
    kereta: "列車",
    bus: "バス",
    kapal: "船",
    lainnya: "その他",
    rental: "レンタカー",
    akomodasi: "宿泊施設",
    paket: "観光パッケージ",
    reward: "ジャーニーポイント",
    bantuan: "ヘルプ",
    masuk: "ログイン / 登録",
    jadwal: "スケジュール",
    tentang: "約",
    kontak: "連絡先",
    bahasa: "🌐JP|JPY"
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const langButtons = document.querySelectorAll(".lang-list li");
  const globeTrigger = document.querySelector(".globe-trigger");
  const modal = document.getElementById("languageCurrencyModal");
  const closeModal = modal.querySelector(".close-modal");

  function applyLanguage(lang) {
  const t = languageTexts[lang];
  const g = translations[lang];

  function safeText(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.innerText = text;
  }

  function safeSetPlaceholder(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.setAttribute("placeholder", text);
  }

  // Update navbar & sidebar
  safeText(".globe-trigger", t.bahasa);
  safeText("a[href*='pesawat.php']", t.pesawat);
  safeText("a[href*='kereta.php']", t.kereta);
  safeText("a[href*='bus.php']", t.bus);
  safeText("a[href*='kapal.php']", t.kapal);
  safeText(".dropdown-toggle", t.lainnya);
  safeText(".dropdown-menu a[href='rental.php']", t.rental);
  safeText(".dropdown-menu a[href='akomodasi.php']", t.akomodasi);
  safeText(".dropdown-menu a[href='paket.php']", t.paket);
  safeText(".dropdown-menu a[href='reward.php']", t.reward);
  safeText(".d-none.d-sm-inline[href='#']:nth-of-type(2)", `❓ ${t.bantuan}`);
  safeText(".btn-outline-light", t.masuk);
  safeText(".sidebar a[href='jadwal.php']", t.jadwal);
  safeText(".sidebar a[href='tentang.php']", t.tentang);
  safeText(".sidebar a[href='kontak.php']", t.kontak);
  safeText(".sidebar a[href='bantuan.php']", t.bantuan);

  // Update data-key
  document.querySelectorAll(".lang").forEach(el => {
    const key = el.getAttribute("data-key");
    if (g[key]) el.innerText = g[key];
  });

  // Update data-placeholder
  document.querySelectorAll("[data-placeholder]").forEach(el => {
    const key = el.getAttribute("data-placeholder");
    if (g[key]) el.setAttribute("placeholder", g[key]);
  });

  localStorage.setItem("lang", lang);
}

  // Cek bahasa tersimpan
  const savedLang = localStorage.getItem("lang") || "id";
  applyLanguage(savedLang);

  // Klik pilihan bahasa
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      applyLanguage(selectedLang);
      modal.style.display = "none";
    });
  });

  // Klik globe untuk buka modal
  globeTrigger.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex";
  });

  // Klik tutup modal
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Tab di dalam modal (opsional)
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");

      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      tabContents.forEach((tab) => {
        tab.classList.toggle("d-none", tab.id !== target);
      });
    });
  });
});
