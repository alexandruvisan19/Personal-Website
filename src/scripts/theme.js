const theme = (() => {
  if (typeof document !== 'undefined') {
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('theme='));

    if (cookie) {
      return cookie.split('=')[1];
    }
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
})();

if (theme === 'light') {
  document.documentElement.classList.remove('dark');
} else {
  document.documentElement.classList.add('dark');
}
