/**
 * MOULISH KUMAR R - MECHANICAL DESIGN ENGINEER PORTFOLIO
 * Page Flow & Interaction Controller:
 * - Snappy Scroll Progress Bar with Radiant Coral Indicator
 * - Staggered Flow Reveal
 * - Active Page Navigation & Staging the Focus
 * - Responsive Fitts's Law Mobile Drawer
 * - Contact Form Dispatcher
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgressBar();
  initFlowReveal();
  initNavigationHighlight();
  initMobileMenu();
  initContactForm();
  initFocusStaging();
});

// Cache restoration reassurance
window.addEventListener('pageshow', () => {
  const main = document.querySelector('main');
  if (main) {
    main.style.opacity = '1';
    main.style.transform = 'none';
  }
});

/* ==========================================================================
   1. Snappy Top Reading Scroll Progress Bar
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
      threshold: 0.08,
      rootMargin: '0px 0px -25px 0px'
    });

    elements.forEach((el, index) => {
      const delay = (index % 4) * 0.05;
      el.style.transitionDelay = `${delay}s`;
      observer.observe(el);
    });
  } else {
    elements.forEach(el => el.classList.add('is-visible'));
  }
}

/* ==========================================================================
   3. Active Navigation Page Highlighting
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
      link.classList.add('text-coral', 'font-semibold', 'border-b-2', 'border-coral');
      link.classList.remove('text-cream-muted', 'text-slate-400');
    } else {
      link.classList.remove('text-coral', 'font-semibold', 'border-b-2', 'border-coral');
      link.classList.add('text-cream-muted');
    }
  });
}

/* ==========================================================================
   4. Responsive Mobile & Tablet Drawer (Fitts's Law Ergonomics)
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-nav-drawer');
  if (!toggleBtn || !mobileMenu) return;

  function setMenuState(open) {
    if (open) {
      mobileMenu.classList.remove('hidden');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.innerHTML = `
        <svg class="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      `;
    } else {
      mobileMenu.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = `
        <svg class="w-6 h-6 text-cream-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      `;
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !mobileMenu.classList.contains('hidden');
    setMenuState(!isOpen);
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !toggleBtn.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
      setMenuState(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      setMenuState(false);
    }
  });
}

/* ==========================================================================
   5. Staging the Focus Interactive Feature
   ========================================================================== */
function initFocusStaging() {
  const stageableCards = document.querySelectorAll('.stage-interactive');
  if (!stageableCards.length) return;

  stageableCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      stageableCards.forEach(c => {
        if (c !== card) c.style.opacity = '0.72';
      });
      card.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
      stageableCards.forEach(c => {
        c.style.opacity = '1';
      });
    });
  });
}

/* ==========================================================================
   6. Contact Form Dispatcher
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('form-feedback-alert');
  if (!form || !alertBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]')?.value || 'Engineering Peer';
    const submitBtn = form.querySelector('button[type="submit"]');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-navy-base" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Sending Message...</span>
      `;
    }

    setTimeout(() => {
      alertBox.classList.remove('hidden');
      alertBox.innerHTML = `
        <div class="p-4 rounded-xl bg-coral/15 border border-coral/30 text-cream-100 flex items-start gap-3">
          <svg class="w-5 h-5 text-coral shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <div class="font-semibold text-coral text-sm">Message Prepared for Dispatch</div>
            <p class="text-xs text-cream-200 mt-0.5">Thank you, ${name}. Direct email link has been prepared. You may also connect immediately via phone at <strong>+91 95975 42596</strong> or email <strong>moulimano0305@gmail.com</strong>.</p>
          </div>
        </div>
      `;
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>Send Engineering Inquiry</span>
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        `;
      }
    }, 450);
  });
}
