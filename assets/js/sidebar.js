document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleSidebarBtn");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("closeSidebar");

  function openSidebar() {
    sidebarOverlay.classList.add("active");
    sidebar.classList.add("active");
    document.body.classList.add("no-scroll");
  }

  function closeSidebar() {
    sidebarOverlay.classList.remove("active");
    sidebar.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }

  toggleBtn.addEventListener("click", openSidebar);
  closeBtn.addEventListener("click", closeSidebar);

  // Tutup jika klik di luar sidebar
  sidebarOverlay.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target)) {
      closeSidebar();
    }


  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link-animate");
    
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });


  const globeBtn = document.querySelector('.globe-trigger'); // tambahkan class ini ke tombol 🌐
  const modal = document.getElementById('languageCurrencyModal');
  const closeBtn = document.querySelector('.close-modal');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  globeBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.tab;
      tabContents.forEach(content => {
        content.classList.add('d-none');
        if (content.id === target) content.classList.remove('d-none');
      });
    });
  });

  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });



  });
});
