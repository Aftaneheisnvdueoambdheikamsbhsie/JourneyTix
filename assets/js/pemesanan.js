document.addEventListener('DOMContentLoaded', function () {
  const modeButtons = document.querySelectorAll('.mode-switch button');
  const transportField = document.getElementById('mode_transportasi');

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedMode = btn.getAttribute('data-mode');
      transportField.value = selectedMode;

      // Ganti file CSS
      const link = document.querySelector('link[href*="assets/css/"]');
      link.href = `assets/css/${selectedMode}.css`;
    });
  });
});
