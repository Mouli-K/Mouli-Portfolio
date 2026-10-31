/**
 * MOULISH KUMAR R - MECHANICAL DESIGN ENGINEER PORTFOLIO
 * Minimal Apple-Style 'hello' Intro, Navigation, and Interactive Engineering Tools
 */

document.addEventListener('DOMContentLoaded', () => {
  initAppleIntro();
  initNavigation();
  initMobileMenu();
  initToleranceCalculator();
  initFastenerCalculator();
  initContactForm();
  initSmoothScroll();
});

/* ==========================================================================
   1. Minimal Apple-Style 'hello.' Intro Screen
   ========================================================================== */
function initAppleIntro() {
  const introOverlay = document.getElementById('apple-intro-overlay');
  if (!introOverlay) return;

  const skipBtn = document.getElementById('skip-intro-btn');
  const replayBtns = document.querySelectorAll('.replay-intro-trigger');
  let autoDismissTimer = null;

  function runIntro(forced = false) {
    if (!forced && sessionStorage.getItem('mouli_intro_shown') === 'true') {
      introOverlay.classList.add('dismissed');
      introOverlay.style.display = 'none';
      return;
    }

    introOverlay.style.display = 'flex';
    introOverlay.classList.remove('dismissed');
    document.body.style.overflow = 'hidden';

    // Reset SVG cursive handwriting animation
    const path = introOverlay.querySelector('.apple-hello-svg path');
    if (path) {
      path.style.animation = 'none';
      path.offsetHeight; /* trigger reflow */
      path.style.animation = 'drawHello 1.8s cubic-bezier(0.25, 1, 0.35, 1) forwards';
    }

    // Auto-dismiss cleanly after 2.2 seconds
    if (autoDismissTimer) clearTimeout(autoDismissTimer);
    autoDismissTimer = setTimeout(() => {
      dismissIntro();
    }, 2200);
  }

  function dismissIntro() {
    if (autoDismissTimer) clearTimeout(autoDismissTimer);
    introOverlay.classList.add('dismissed');
    document.body.style.overflow = '';
    sessionStorage.setItem('mouli_intro_shown', 'true');
    setTimeout(() => {
      introOverlay.style.display = 'none';
    }, 600);
  }

  // Dismiss on click anywhere on the overlay
  introOverlay.addEventListener('click', dismissIntro);

  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dismissIntro();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!introOverlay.classList.contains('dismissed')) {
      dismissIntro();
    }
  });

  replayBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      runIntro(true);
    });
  });

  runIntro(false);
}

/* ==========================================================================
   2. Active Navigation Controller
   ========================================================================== */
function initNavigation() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const cleanHref = href.split('/').pop().split('#')[0];

    if (cleanHref === currentPath || (currentPath === '' && cleanHref === 'index.html')) {
      link.classList.add('text-primary', 'font-semibold', 'border-b-2', 'border-primary');
      link.classList.remove('text-slate-600');
    } else {
      link.classList.remove('text-primary', 'font-semibold', 'border-b-2', 'border-primary');
      link.classList.add('text-slate-600');
    }
  });
}

/* ==========================================================================
   3. Mobile Navigation Menu Toggle
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
   4. Interactive Mechanical Tolerance Stack-up Demo
   ========================================================================== */
function initToleranceCalculator() {
  const nominalInput = document.getElementById('calc-nominal-dia');
  const holeDevInput = document.getElementById('calc-hole-dev');
  const shaftDevInput = document.getElementById('calc-shaft-dev');

  if (!nominalInput) return;

  function recalculate() {
    const D = parseFloat(nominalInput.value) || 25.0;
    const holeDev = parseFloat(holeDevInput ? holeDevInput.value : 0.021);
    const shaftDev = parseFloat(shaftDevInput ? shaftDevInput.value : -0.007);

    const maxHole = D + holeDev;
    const minHole = D;
    const maxShaft = D + shaftDev;
    const minShaft = D + (shaftDev - 0.013);

    const maxClearance = maxHole - minShaft;
    const minClearance = minHole - maxShaft;

    const resMaxClr = document.getElementById('res-max-clearance');
    const resMinClr = document.getElementById('res-min-clearance');
    const resFitType = document.getElementById('res-fit-type');

    if (resMaxClr) resMaxClr.textContent = `+${(maxClearance * 1000).toFixed(1)} µm (${maxClearance.toFixed(3)} mm)`;
    if (resMinClr) resMinClr.textContent = `${minClearance >= 0 ? '+' : ''}${(minClearance * 1000).toFixed(1)} µm (${minClearance.toFixed(3)} mm)`;

    if (resFitType) {
      if (minClearance > 0) {
        resFitType.textContent = 'CLEARANCE FIT (Running / Sliding ISO H7/g6)';
        resFitType.className = 'font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 inline-block';
      } else if (maxClearance < 0) {
        resFitType.textContent = 'INTERFERENCE FIT (Press / Shrink ISO H7/p6)';
        resFitType.className = 'font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 inline-block';
      } else {
        resFitType.textContent = 'TRANSITION FIT (Locating / Keyed ISO H7/k6)';
        resFitType.className = 'font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 inline-block';
      }
    }
  }

  [nominalInput, holeDevInput, shaftDevInput].forEach(inp => {
    if (inp) inp.addEventListener('input', recalculate);
  });

  recalculate();
}

/* ==========================================================================
   5. Interactive Fastener Clamping & Safety Factor Demo
   ========================================================================== */
function initFastenerCalculator() {
  const boltSizeSelect = document.getElementById('calc-bolt-size');
  const gradeSelect = document.getElementById('calc-bolt-grade');
  const loadInput = document.getElementById('calc-bolt-load');

  if (!boltSizeSelect || !loadInput) return;

  const boltData = {
    'M6': { At: 20.1 },
    'M8': { At: 36.6 },
    'M10': { At: 58.0 },
    'M12': { At: 84.3 },
    'M16': { At: 157.0 },
    'M20': { At: 245.0 }
  };

  const gradeData = {
    '8.8': { Sp: 600, Sy: 640 },
    '10.9': { Sp: 830, Sy: 940 },
    '12.9': { Sp: 970, Sy: 1100 },
    'A2-70': { Sp: 450, Sy: 450 }
  };

  function recalculateBolt() {
    const size = boltSizeSelect.value;
    const grade = gradeSelect ? gradeSelect.value : '8.8';
    const appliedLoadkN = parseFloat(loadInput.value) || 12.0;
    const appliedLoadN = appliedLoadkN * 1000;

    const b = boltData[size] || boltData['M10'];
    const g = gradeData[grade] || gradeData['8.8'];

    const preloadN = 0.75 * b.At * g.Sp;
    const preloadkN = preloadN / 1000;

    const stressMPa = appliedLoadN / b.At;
    const safetyFactor = g.Sy / (stressMPa || 1);

    const outPreload = document.getElementById('res-bolt-preload');
    const outStress = document.getElementById('res-bolt-stress');
    const outSafety = document.getElementById('res-bolt-sf');

    if (outPreload) outPreload.textContent = `${preloadkN.toFixed(1)} kN (${Math.round(preloadN)} N)`;
    if (outStress) outStress.textContent = `${stressMPa.toFixed(1)} MPa`;
    if (outSafety) {
      outSafety.textContent = `${safetyFactor.toFixed(2)}x`;
      if (safetyFactor >= 2.0) {
        outSafety.className = 'font-mono text-xl font-bold text-emerald-600';
      } else if (safetyFactor >= 1.2) {
        outSafety.className = 'font-mono text-xl font-bold text-amber-600';
      } else {
        outSafety.className = 'font-mono text-xl font-bold text-rose-600';
      }
    }
  }

  [boltSizeSelect, gradeSelect, loadInput].forEach(inp => {
    if (inp) inp.addEventListener('change', recalculateBolt);
    if (inp) inp.addEventListener('input', recalculateBolt);
  });

  recalculateBolt();
}

/* ==========================================================================
   6. Contact / Recruiter Inquiry Handler
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('engineering-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('inquiry-name')?.value || '';
    const email = document.getElementById('inquiry-email')?.value || '';
    const org = document.getElementById('inquiry-org')?.value || '';
    const type = document.getElementById('inquiry-type')?.value || 'Job Opportunity';
    const message = document.getElementById('inquiry-message')?.value || '';

    const subject = encodeURIComponent(`[Portfolio Contact] ${type} from ${name}`);
    const body = encodeURIComponent(
      `Hello Moulish,\n\n` +
      `Category: ${type}\n` +
      `From: ${name} (${email})\n` +
      `Company / Organization: ${org}\n\n` +
      `Message / Opportunity Details:\n${message}\n\n` +
      `Sent via Moulish Kumar R Portfolio.`
    );

    const mailtoUrl = `mailto:moulimano0305@gmail.com?subject=${subject}&body=${body}`;

    const statusBanner = document.getElementById('inquiry-status-banner');
    if (statusBanner) {
      statusBanner.classList.remove('hidden');
      statusBanner.innerHTML = `
        <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-md flex items-start gap-3">
          <svg class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <div>
            <h4 class="font-display text-sm font-semibold text-emerald-900">Message Ready to Dispatch!</h4>
            <p class="text-xs text-emerald-700 mt-0.5">Opening your default email app to email <strong>moulimano0305@gmail.com</strong>.</p>
            <a href="${mailtoUrl}" class="inline-flex items-center gap-1 mt-2 text-xs font-mono font-semibold text-primary underline">
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
   7. Smooth Anchor Scroll
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
