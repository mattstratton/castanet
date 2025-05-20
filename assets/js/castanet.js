document.addEventListener('DOMContentLoaded', function () {
  // Check for :has() support (Tailwind v4 uses it for some features)
  if (!window.CSS || !CSS.supports('selector(:has(*))')) {
    var banner = document.createElement('div');
    banner.setAttribute('role', 'alert');
    banner.style.cssText = [
      'width:100vw',
      'position:fixed',
      'top:0',
      'left:0',
      'z-index:9999',
      'background:#fef3c7', // Tailwind yellow-100
      'color:#92400e',      // Tailwind yellow-800
      'border-bottom:2px solid #f59e42', // Tailwind yellow-400
      'box-shadow:0 2px 8px rgba(0,0,0,0.05)',
      'padding:0.75rem 2.5rem 0.75rem 1.5rem',
      'font-weight:500',
      'font-size:1rem',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'gap:0.75rem',
      'border-radius:0 0 0.5rem 0.5rem',
    ].join(';');

    // Warning icon SVG
    var icon = document.createElement('span');
    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M21 19a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14z"/></svg>';
    icon.style.marginRight = '0.5rem';
    icon.style.color = '#f59e42'; // Tailwind yellow-400

    // Banner text
    var text = document.createElement('span');
    text.innerText = 'Your browser may not be fully supported. For the best experience, please use a modern browser.';

    // Dismiss button
    var close = document.createElement('button');
    close.setAttribute('aria-label', 'Dismiss alert');
    close.innerHTML = '&times;';
    close.style.cssText = [
      'position:absolute',
      'top:0.5rem',
      'right:1rem',
      'background:none',
      'border:none',
      'color:#92400e',
      'font-size:1.5rem',
      'cursor:pointer',
      'line-height:1',
      'padding:0',
    ].join(';');
    close.onclick = function() {
      banner.remove();
      document.body.style.marginTop = '';
    };

    banner.appendChild(icon);
    banner.appendChild(text);
    banner.appendChild(close);

    // Insert at the top of the body
    document.body.insertBefore(banner, document.body.firstChild);

    // Add margin to body so content is not hidden
    document.body.style.marginTop = '3rem';
  }
});

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