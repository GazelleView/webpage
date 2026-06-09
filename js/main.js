// Navbar scroll + mobile menu + AOS init
document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true, offset: 60 });
  if (window.lucide) lucide.createIcons();

  const nav = document.getElementById('site-navbar');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 20) { nav.classList.add('glass-navbar'); nav.classList.remove('py-5'); nav.classList.add('py-3'); }
    else { nav.classList.remove('glass-navbar'); nav.classList.add('py-5'); nav.classList.remove('py-3'); }
  };
  window.addEventListener('scroll', onScroll); onScroll();

  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }

  // Highlight active nav
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.getAttribute('data-nav') === path) a.classList.add('text-primary-c','font-medium');
  });

  // Scroll-to-top
  const stt = document.getElementById('scroll-top');
  if (stt) {
    window.addEventListener('scroll', () => {
      stt.classList.toggle('opacity-0', window.scrollY < 400);
      stt.classList.toggle('pointer-events-none', window.scrollY < 400);
    });
    stt.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
  }
});
