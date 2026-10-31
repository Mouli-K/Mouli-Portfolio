/**
 * MOULISH KUMAR R - MECHANICAL DESIGN ENGINEER PORTFOLIO
 * Page Flow Controller: Staggered Scroll Reveal, Scroll Progress, Active Nav Highlighting
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgressBar();
  initFlowReveal();
  initNavigationHighlight();
  initMobileMenu();
  initContactForm();
});

// Ensure page and content are fully visible when restored from back/forward cache (bfcache)
window.addEventListener('pageshow', () => {
  const main = document.querySelector('main');
  if (main) {
    main.style.opacity = '1';
    main.style.transform = 'none';
  }
});

/* ==========================================================================
   1. Subtle Top Reading Scroll Progress Bar
   ========================================================================== */
function initScrollProgressBar() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

/* ==========================================================================
   2. Scroll-Triggered Cascading Flow Reveal
   ========================================================================== */
function initFlowReveal() {
  const elements = document.querySelectorAll('.flow-reveal');
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach((el, index) => {
      // Add subtle stagger delay for sibling cards
      const delay = (index % 4) * 0.08;
      el.style.transitionDelay = `${delay}s`;
      observer.observe(el);
    });
  } else {
    // Fallback if observer not supported
    elements.forEach(el => el.classList.add('is-visible'));
  }
}

/* ==========================================================================
   3. Active Navigation Page Highlighting
   Handles both clean extensionless URLs (/works) and direct files (works.html)
   ========================================================================== */
function initNavigationHighlight() {
  const path = window.location.pathname.split('/').filter(Boolean).pop() || 'index';
  const currentBase = path.replace('.html', '').toLowerCase();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const cleanHref = href.split('/').pop().split('#')[0];
    const linkBase = cleanHref.replace('.html', '').toLowerCase();

    if (linkBase === currentBase || (currentBase === 'index' && (linkBase === 'index' || linkBase === ''))) {
      link.classList.add('text-primary', 'font-semibold', 'border-b-2', 'border-primary');
      link.classList.remove('text-slate-600');
    } else {
      link.classList.remove('text-primary', 'font-semibold', 'border-b-2', 'border-primary');
      link.classList.add('text-slate-600');
    }
  });
}

/* ==========================================================================
   4. Mobile Menu Toggle
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
}

/* ==========================================================================
   5. Contact Form Dispatcher
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('engineering-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('inquiry-name')?.value || '';
    const email = document.getElementById('inquiry-email')?.value || '';
    const org = document.getElementById('inquiry-org')?.value || '';
    const type = document.getElementById('inquiry-type')?.value || 'General Connect';
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
            <h4 class="font-display text-sm font-semibold text-emerald-900">Message Prepared!</h4>
            <p class="text-xs text-emerald-700 mt-0.5">Opening your default mail client to send to <strong>moulimano0305@gmail.com</strong>.</p>
            <a href="${mailtoUrl}" class="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-primary underline">
              Click here to dispatch directly &rarr;
            </a>
          </div>
        </div>
      `;
    }

    window.location.href = mailtoUrl;
  });
}
