function setInitialDarkMode() {
  if (
    localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleDarkMode() {
  const html = document.documentElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  setInitialDarkMode();

  // Attach listeners to all dark mode toggle buttons
  ['dark-mode-toggle', 'dark-mode-toggle-mobile'].forEach(function(id) {
    var btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', toggleDarkMode);
  });
});