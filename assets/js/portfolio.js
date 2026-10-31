/**
 * MOULISH KUMAR R - MECHANICAL DESIGN ENGINEER PORTFOLIO
 * Smooth Scrolling, Active ScrollSpy Navigation, Contact Form & Interactive Features
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollSpy();
  initMobileMenu();
  initContactForm();
  initSmoothScroll();
});

/* ==========================================================================
   1. Active ScrollSpy Navigation Controller
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  function onScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href && (href === `#${sectionId}` || href.endsWith(`#${sectionId}`))) {
            link.classList.add('text-primary', 'font-semibold', 'border-b-2', 'border-primary');
            link.classList.remove('text-slate-600');
          } else {
            link.classList.remove('text-primary', 'font-semibold', 'border-b-2', 'border-primary');
            link.classList.add('text-slate-600');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   2. Mobile Navigation Menu Toggle
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-nav-drawer');
  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      toggleBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      `;
    } else {
      mobileMenu.classList.add('hidden');
      toggleBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      `;
    }
  });

  // Close mobile menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      toggleBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      `;
    });
  });
}

/* ==========================================================================
   3. Contact Form Handler
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('engineering-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('inquiry-name')?.value || '';
    const email = document.getElementById('inquiry-email')?.value || '';
    const org = document.getElementById('inquiry-org')?.value || '';
    const type = document.getElementById('inquiry-type')?.value || 'Message';
    const message = document.getElementById('inquiry-message')?.value || '';

    const subject = encodeURIComponent(`[Portfolio Message] ${type} from ${name}`);
    const body = encodeURIComponent(
      `Hello Moulish,\n\n` +
      `Topic: ${type}\n` +
      `From: ${name} (${email})\n` +
      `Organization: ${org}\n\n` +
      `Message:\n${message}\n\n` +
      `Sent via Moulish Kumar R Web Portfolio.`
    );

    const mailtoUrl = `mailto:moulimano0305@gmail.com?subject=${subject}&body=${body}`;

    const statusBanner = document.getElementById('inquiry-status-banner');
    if (statusBanner) {
      statusBanner.classList.remove('hidden');
      statusBanner.innerHTML = `
        <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-3">
          <svg class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <div>
            <h4 class="font-display text-sm font-semibold text-emerald-900">Message Ready!</h4>
            <p class="text-xs text-emerald-700 mt-0.5">Opening your default mail client to send to <strong>moulimano0305@gmail.com</strong>.</p>
            <a href="${mailtoUrl}" class="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-primary underline">
              Click here to send directly via mail client &rarr;
            </a>
          </div>
        </div>
      `;
    }

    window.location.href = mailtoUrl;
  });
}

/* ==========================================================================
   4. Smooth Anchor Scroll
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
