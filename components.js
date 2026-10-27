/* ===================================================
   IRONJAW — COMPONENTS.JS
   Shared navbar, footer, dark/RTL toggles, utilities
   Boxing Gym & Training Center
   =================================================== */

// Immediate Theme & Direction Initialization (prevents theme flash)
(function() {
    try {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        const savedDark = localStorage.getItem('ij-dark');
        if (savedDark === '1') {
            document.documentElement.classList.add('dark');
        } else if (savedDark === '0') {
            document.documentElement.classList.remove('dark');
        }
        const savedDir = localStorage.getItem('ij-rtl');
        if (savedDir === '1') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else if (savedDir === '0') {
            document.documentElement.setAttribute('dir', 'ltr');
        }
    } catch (e) {}
})();

/* ---- LOGO SVG ---- */
const LOGO_SVG = `<svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#84CC16"/>
      <stop offset="100%" stop-color="#4D7C0F"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="url(#logoBg)"/>
  <!-- Glove Cuff -->
  <rect x="36" y="73" width="28" height="12" rx="3.5" fill="#0D0D14"/>
  <rect x="39" y="76.5" width="22" height="5" rx="2" fill="#FFFFFF"/>
  <!-- Glove Body -->
  <path d="M39 73 C36 66 32 60 31 54 C23 54 18 46 19 38 C20 31 26 27 33 30 C35 31 37 34 38 37 C40 28 46 20 56 19 C68 18 79 26 80 39 C81 50 74 61 65 67 L61 73 Z" fill="#0D0D14"/>
  <!-- Knuckle Seam Accent -->
  <path d="M49 26 C60 25 71 29 73 40 C74 48 70 56 64 62" stroke="#84CC16" stroke-width="3" stroke-linecap="round" fill="none"/>
  <!-- Thumb Seam Accent -->
  <path d="M37 36 C34 42 35 48 40 53" stroke="#84CC16" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <!-- Strike Lines -->
  <path d="M85 26 C89 31 91 38 90 45" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none"/>
  <path d="M76 13 L82 9" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
</svg>`;

/* ---- FontAwesome Icon Helper ---- */
const ICONS = {
    sun: '<i class="fas fa-sun"></i>',
    moon: '<i class="fas fa-moon"></i>',
    menu: '<i class="fas fa-bars"></i>',
    x: '<i class="fas fa-xmark"></i>',
    chevronDown: '<i class="fas fa-chevron-down"></i>',
    facebook: '<i class="fab fa-facebook-f"></i>',
    instagram: '<i class="fab fa-instagram"></i>',
    linkedin: '<i class="fab fa-linkedin-in"></i>',
    twitter: '<i class="fab fa-x-twitter"></i>',
    eye: '<i class="fas fa-eye"></i>',
    eyeOff: '<i class="fas fa-eye-slash"></i>',
};

/* ---- SOCIAL SVGs (for OAuth) ---- */
const GOOGLE_SVG = `<svg width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.9 33.5 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.2-2.7-.4-3.9z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.5 18.8 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.8-3.5-11.3-8.3l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.2-2.7-.4-3.9z"/></svg>`;
const APPLE_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.96 4.41-3.74 4.25z"/></svg>`;
const FACEBOOK_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>`;

/* ---- CURRENT PAGE ---- */
function getCurrentPage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    return path;
}

/* ---- NAVBAR ---- */
function renderNavbar() {
    const page = getCurrentPage();
    const links = [
        { href: 'index.html', label: 'Home' },
        { href: 'home2.html', label: 'Home 2' },
        { href: 'classes.html', label: 'Classes' },
        { href: 'trainers.html', label: 'Trainers' },
        { href: 'pricing.html', label: 'Membership' },
        { href: 'contact.html', label: 'Contact' },
    ];

    const isDark = document.documentElement.classList.contains('dark');
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

    const navLinksHtml = links.map(l => {
        const isActive = page === l.href || (page === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="nav-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const mobLinksHtml = links.map(l => {
        const isActive = page === l.href || (page === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="mob-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const html = `
    <nav class="navbar" id="navbar">
        <div class="nav-inner">
            <!-- Logo -->
            <a href="index.html" class="nav-logo" aria-label="IronJaw Home">
                ${LOGO_SVG}
                <div class="nav-logo-text">
                    <span class="brand-top">Boxing & Training</span>
                    <span class="brand-bottom">IronJaw</span>
                </div>
            </a>

            <!-- Desktop Nav Links -->
            <div class="nav-links">
                ${navLinksHtml}
            </div>

            <!-- Right Actions -->
            <div class="nav-actions">
                <!-- RTL Toggle -->
                <button onclick="toggleDir()" class="nav-icon-btn" id="rtlToggleNav" aria-label="Toggle layout direction / RTL" title="Toggle RTL">
                    <span class="dir-indicator dir-label" style="font-size:0.625rem;font-weight:700;">${isRTL ? 'RTL' : 'LTR'}</span>
                </button>
                <!-- Theme Toggle -->
                <button onclick="toggleTheme()" class="nav-icon-btn" id="darkToggleNav" aria-label="Toggle dark mode" title="Toggle dark mode">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
                <!-- CTAs -->
                <a href="login.html" class="btn btn-primary btn-sm nav-cta-btn">Sign In</a>
                <a href="dashboard.html" class="btn-nav-dashboard ${page === 'dashboard.html' ? 'active' : ''}">Dashboard</a>
                <!-- Mobile Hamburger -->
                <button class="mobile-menu-btn" id="mobileMenuBtn" onclick="toggleMobileMenu(event)" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
                    <span class="mobile-menu-icon">${ICONS.menu}</span>
                </button>
            </div>
        </div>

        <!-- Mobile Backdrop -->
        <div class="mobile-backdrop" id="mobile-backdrop" onclick="toggleMobileMenu(event)"></div>

        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            ${mobLinksHtml}
            <div class="mob-actions">
                <a href="login.html" class="btn btn-primary w-full">Sign In</a>
                <a href="dashboard.html" class="btn btn-secondary w-full">Dashboard</a>
            </div>
            <div class="mob-toggles">
                <button onclick="toggleDir()" class="nav-icon-btn" id="rtlToggleMob" aria-label="Toggle layout direction / RTL" title="Toggle Direction">
                    <span class="dir-indicator dir-label" style="font-size:0.625rem;font-weight:700;">${isRTL ? 'RTL' : 'LTR'}</span>
                </button>
                <button onclick="toggleTheme()" class="nav-icon-btn" id="darkToggleMob" aria-label="Toggle dark mode" title="Toggle Theme">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
            </div>
        </div>
    </nav>
    <div class="navbar-spacer"></div>`;

    const container = document.getElementById('navbar-placeholder') || document.getElementById('main-nav');
    if (container) container.innerHTML = html;
    else document.body.insertAdjacentHTML('afterbegin', html);

    initNavbar();
}

function toggleMobileMenu(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.getElementById('mobileMenuBtn') || document.querySelector('.mobile-menu-btn');
    const iconEl = document.querySelector('.mobile-menu-icon');
    if (!menu) return;

    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (iconEl) iconEl.innerHTML = ICONS.menu;
    } else {
        menu.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
        if (btn) btn.setAttribute('aria-expanded', 'true');
        if (iconEl) iconEl.innerHTML = ICONS.x;
    }
}
window.toggleMobileMenu = toggleMobileMenu;

function initNavbar() {
    const nav = document.getElementById('navbar') || document.getElementById('mainNavbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 15);
        }, { passive: true });
    }

    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.getElementById('mobileMenuBtn') || document.querySelector('.mobile-menu-btn');

    if (menu) {
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                menu.classList.remove('open');
                if (backdrop) backdrop.classList.remove('open');
                const iconEl = document.querySelector('.mobile-menu-icon');
                if (iconEl) iconEl.innerHTML = ICONS.menu;
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    document.addEventListener('click', function(e) {
        if (!menu || !menu.classList.contains('open')) return;
        if (btn && (btn === e.target || btn.contains(e.target))) return;
        if (menu.contains(e.target)) return;
        menu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        const iconEl = document.querySelector('.mobile-menu-icon');
        if (iconEl) iconEl.innerHTML = ICONS.menu;
        if (btn) btn.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
            if (backdrop) backdrop.classList.remove('open');
            const iconEl = document.querySelector('.mobile-menu-icon');
            if (iconEl) iconEl.innerHTML = ICONS.menu;
            if (btn) btn.setAttribute('aria-expanded', 'false');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024 && menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
            if (backdrop) backdrop.classList.remove('open');
            const iconEl = document.querySelector('.mobile-menu-icon');
            if (iconEl) iconEl.innerHTML = ICONS.menu;
            if (btn) btn.setAttribute('aria-expanded', 'false');
        }
    }, { passive: true });

    updateDarkIcons();
    updateRTLIndicators();
}

/* ---- FOOTER ---- */
function renderFooter() {
    const html = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <!-- Column 1: Brand & Socials -->
                <div class="footer-brand">
                    <a href="index.html" class="nav-logo footer-logo" aria-label="IronJaw Home">
                        ${LOGO_SVG}
                        <div class="nav-logo-text">
                            <span class="brand-top">Boxing & Training</span>
                            <span class="brand-bottom">IronJaw</span>
                        </div>
                    </a>
                    <p>Train like a champion at IronJaw Boxing Gym. World-class coaches, elite facilities, and a community built on grit, discipline, and the relentless pursuit of greatness.</p>
                    <div class="footer-socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="Facebook" title="Facebook">${ICONS.facebook}</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="Instagram" title="Instagram">${ICONS.instagram}</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="LinkedIn" title="LinkedIn">${ICONS.linkedin}</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="Twitter / X" title="Twitter / X">${ICONS.twitter}</a>
                    </div>
                </div>

                <!-- Column 2: Quick Links -->
                <div class="footer-col">
                    <h4 class="footer-col-title">QUICK LINKS</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="home2.html">Home 2 — Premium</a></li>
                        <li><a href="classes.html">Classes</a></li>
                        <li><a href="trainers.html">Trainers</a></li>
                        <li><a href="pricing.html">Membership</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>

                <!-- Column 3: Resources -->
                <div class="footer-col">
                    <h4 class="footer-col-title">RESOURCES</h4>
                    <ul class="footer-links">
                        <li><a href="dashboard.html">Dashboard</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                        <li><a href="404.html">404 Page</a></li>
                        <li><a href="login.html">Sign In</a></li>
                        <li><a href="signup.html">Sign Up</a></li>
                    </ul>
                </div>

                <!-- Column 4: Stay Updated Card -->
                <div class="footer-col footer-col-newsletter">
                    <div class="footer-newsletter-card">
                        <h4 class="footer-newsletter-title">Stay Updated</h4>
                        <p class="footer-newsletter-desc">Subscribe for training tips, class schedules, and exclusive member offers delivered to your inbox.</p>
                        <form class="footer-newsletter-form" onsubmit="event.preventDefault(); alert('Thank you! You are now subscribed to IronJaw updates.'); this.reset();">
                            <input type="email" class="footer-newsletter-input" placeholder="your@email.com" aria-label="Email address" required>
                            <button type="submit" class="footer-newsletter-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="footer-bottom">
                <p class="footer-copyright">&copy; ${new Date().getFullYear()} IRONJAW BOXING GYM. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="coming-soon.html">Privacy</a>
                    <a href="coming-soon.html">Terms</a>
                    <a href="coming-soon.html">Cookies</a>
                </div>
            </div>
        </div>
    </footer>`;

    const container = document.getElementById('footer-placeholder');
    if (container) container.innerHTML = html;
    else document.body.insertAdjacentHTML('beforeend', html);
}

/* ---- BACK TO TOP ---- */
function renderBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.id = 'backToTop';
    btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    btn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ---- DARK MODE ---- */
let _isDarkToggling = false;
function toggleDark() {
    if (_isDarkToggling) return;
    _isDarkToggling = true;
    setTimeout(() => { _isDarkToggling = false; }, 80);

    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    if (document.body) {
        document.body.classList.toggle('dark', isDark);
    }
    try {
        localStorage.setItem('ij-dark', isDark ? '1' : '0');
    } catch (e) {}
    updateDarkIcons();
}

function updateDarkIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-icon-wrap').forEach(el => {
        el.innerHTML = isDark ? ICONS.sun : ICONS.moon;
    });
    document.querySelectorAll('#darkToggleNav, #darkToggleMob, .auth-dark-toggle, .auth-toggle-btn').forEach(btn => {
        const icon = btn.querySelector('i');
        if (icon && (icon.classList.contains('fa-moon') || icon.classList.contains('fa-sun') || btn.id === 'darkToggleNav' || btn.id === 'darkToggleMob')) {
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        }
        btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        btn.setAttribute('title', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    });
}

function initDark() {
    const saved = localStorage.getItem('ij-dark');
    if (saved === '1') {
        document.documentElement.classList.add('dark');
        if (document.body) document.body.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
        if (document.body) document.body.classList.remove('dark');
    }
    updateDarkIcons();
}

/* ---- RTL ---- */
function updateRTLIndicators() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    document.querySelectorAll('.dir-indicator, .dir-label').forEach(el => {
        el.textContent = isRTL ? 'LTR' : 'RTL';
    });
}

let _isRTLToggling = false;
function toggleRTL() {
    if (_isRTLToggling) return;
    _isRTLToggling = true;
    setTimeout(() => { _isRTLToggling = false; }, 80);

    const html = document.documentElement;
    const isRTL = html.getAttribute('dir') === 'rtl';
    const newDir = isRTL ? 'ltr' : 'rtl';
    html.setAttribute('dir', newDir);
    try {
        localStorage.setItem('ij-rtl', isRTL ? '0' : '1');
    } catch (e) {}
    updateRTLIndicators();
}

function initRTL() {
    if (localStorage.getItem('ij-rtl') === '1') {
        document.documentElement.setAttribute('dir', 'rtl');
    }
    updateRTLIndicators();
}

/* ---- SCROLL ANIMATIONS ---- */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up, .fade-in, .scale-in, .slide-left, .slide-right').forEach(el => {
        observer.observe(el);
    });
}

/* ---- FAQ TOGGLE ---- */
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item.active').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

/* ---- PASSWORD TOGGLE ---- */
function togglePasswordVisibility(inputId, btnEl) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    const pwIcon = btnEl ? btnEl.querySelector('.pw-icon') : null;
    if (pwIcon) {
        const iTag = pwIcon.querySelector('i');
        if (iTag) {
            iTag.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
        } else {
            pwIcon.innerHTML = isPassword
                ? '<i class="fas fa-eye-slash"></i>'
                : '<i class="fas fa-eye"></i>';
        }
        return;
    }
    const icon = btnEl ? btnEl.querySelector('i') : null;
    if (icon) {
        icon.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
    }
}

function initPasswordToggle() {
    document.querySelectorAll('.password-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.closest('.password-wrap, .password-wrapper')?.querySelector('input') || btn.previousElementSibling;
            if (!input) return;
            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
            }
        });
    });
}

/* ---- COUNTER ANIMATION ---- */
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                const suffix = el.dataset.suffix || '';
                const prefix = el.dataset.prefix || '';
                let current = 0;
                const step = Math.max(1, Math.floor(target / 60));
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = prefix + current.toLocaleString() + suffix;
                }, 20);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.3 });
    counters.forEach(c => observer.observe(c));
}

/* ---- COUNTDOWN (coming-soon) ---- */
function initCountdown() {
    const target = new Date();
    target.setDate(target.getDate() + 30);
    target.setHours(target.getHours() + 14);
    target.setMinutes(target.getMinutes() + 25);
    function update() {
        const now = new Date();
        const diff = target - now;
        if (diff <= 0) return;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        const dEl = document.getElementById('cd-days');
        const hEl = document.getElementById('cd-hours');
        const mEl = document.getElementById('cd-mins') || document.getElementById('cd-minutes');
        const sEl = document.getElementById('cd-secs') || document.getElementById('cd-seconds');
        if (dEl) dEl.textContent = String(d).padStart(2, '0');
        if (hEl) hEl.textContent = String(h).padStart(2, '0');
        if (mEl) mEl.textContent = String(m).padStart(2, '0');
        if (sEl) sEl.textContent = String(s).padStart(2, '0');
    }
    update();
    setInterval(update, 1000);
}

/* ---- HERO SLIDER ---- */
function initHeroSlider() {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.hero-slide');
    const dots = slider.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');
    if (!slides.length) return;

    let currentIndex = 0;
    let timer = null;
    let isPaused = false;
    const duration = 5000;

    function updateSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => {
            const isActive = i === currentIndex;
            slide.classList.toggle('active', isActive);
            slide.setAttribute('aria-hidden', !isActive);
        });
        dots.forEach((dot, i) => {
            const isActive = i === currentIndex;
            dot.classList.toggle('active', isActive);
            const fill = dot.querySelector('.hero-dot-fill');
            if (fill) {
                fill.style.animation = 'none';
                if (isActive) {
                    void fill.offsetWidth;
                    fill.style.animation = `heroProgress ${duration}ms linear forwards`;
                }
            }
        });
    }

    function nextSlide() { updateSlide(currentIndex + 1); }
    function prevSlide() { updateSlide(currentIndex - 1); }

    function startTimer() { stopTimer(); timer = setInterval(() => { if (!isPaused) nextSlide(); }, duration); }
    function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }
    function resetTimer() { startTimer(); }

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetTimer(); });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            if (currentIndex !== i) { updateSlide(i); resetTimer(); }
        });
    });

    slider.addEventListener('mouseenter', () => {
        isPaused = true;
        const activeFill = slider.querySelector('.hero-dot.active .hero-dot-fill');
        if (activeFill) activeFill.style.animationPlayState = 'paused';
    });

    slider.addEventListener('mouseleave', () => {
        isPaused = false;
        const activeFill = slider.querySelector('.hero-dot.active .hero-dot-fill');
        if (activeFill) activeFill.style.animationPlayState = 'running';
    });

    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    slider.addEventListener('touchend', (e) => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 45) {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            diff > 0 ? (isRTL ? prevSlide() : nextSlide()) : (isRTL ? nextSlide() : prevSlide());
            resetTimer();
        }
    }, { passive: true });

    updateSlide(0);
    startTimer();
}

/* ---- HERO 2 SLIDER (HOME 2) ---- */
function initHero2Slider() {
    const slider = document.getElementById('hero2Slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.hero2-slide');
    const dots = slider.querySelectorAll('.hero2-dot');
    const prevBtn = document.getElementById('hero2PrevBtn');
    const nextBtn = document.getElementById('hero2NextBtn');
    if (!slides.length) return;

    let currentIndex = 0;
    let timer = null;
    let isPaused = false;
    const duration = 5000;

    function updateSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => {
            const isActive = i === currentIndex;
            slide.classList.toggle('active', isActive);
            slide.setAttribute('aria-hidden', !isActive);
        });
        dots.forEach((dot, i) => {
            const isActive = i === currentIndex;
            dot.classList.toggle('active', isActive);
            const fill = dot.querySelector('.hero2-dot-fill');
            if (fill) {
                fill.style.animation = 'none';
                if (isActive) {
                    void fill.offsetWidth;
                    fill.style.animation = `hero2Progress ${duration}ms linear forwards`;
                    if (isPaused) {
                        fill.style.animationPlayState = 'paused';
                    }
                }
            }
        });
    }

    function nextSlide() { updateSlide(currentIndex + 1); }
    function prevSlide() { updateSlide(currentIndex - 1); }

    function startTimer() {
        stopTimer();
        timer = setInterval(() => {
            if (!isPaused) nextSlide();
        }, duration);
    }
    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }
    function resetTimer() {
        startTimer();
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetTimer();
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetTimer();
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            if (currentIndex !== i) {
                updateSlide(i);
                resetTimer();
            }
        });
        dot.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (currentIndex !== i) {
                    updateSlide(i);
                    resetTimer();
                }
            }
        });
    });

    slider.addEventListener('mouseenter', () => {
        isPaused = true;
        const activeFill = slider.querySelector('.hero2-dot.active .hero2-dot-fill');
        if (activeFill) activeFill.style.animationPlayState = 'paused';
    });

    slider.addEventListener('mouseleave', () => {
        isPaused = false;
        const activeFill = slider.querySelector('.hero2-dot.active .hero2-dot-fill');
        if (activeFill) activeFill.style.animationPlayState = 'running';
    });

    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 45) {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            diff > 0 ? (isRTL ? prevSlide() : nextSlide()) : (isRTL ? nextSlide() : prevSlide());
            resetTimer();
        }
    }, { passive: true });

    updateSlide(0);
    startTimer();
}

/* ---- TAB FILTERING ---- */
function initTabFilter() {
    const tabs = document.querySelectorAll('.filter-tab');
    const cards = document.querySelectorAll('.filter-card');
    if (!tabs.length || !cards.length) return;

    function updateCenteredCards() {
        const visibleCards = Array.from(cards).filter(c => c.style.display !== 'none');
        cards.forEach(c => c.classList.remove('schedule-card-centered'));
        if (visibleCards.length % 2 !== 0 && visibleCards.length > 1) {
            visibleCards[visibleCards.length - 1].classList.add('schedule-card-centered');
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            const filter = tab.getAttribute('data-filter');
            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    requestAnimationFrame(() => {
                        card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    });
                } else {
                    card.style.display = 'none';
                }
            });
            updateCenteredCards();
        });
    });
    updateCenteredCards();
}

// Global aliases
window.toggleTheme = toggleDark;
window.toggleDark = toggleDark;
window.toggleDir = toggleRTL;
window.toggleRTL = toggleRTL;
window.togglePasswordVisibility = togglePasswordVisibility;
window.initAuthPage = function() { initDark(); initRTL(); };

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
    initDark();
    initRTL();

    // Ensure clean page load starts at top if there's no hash anchor
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    }

    const page = getCurrentPage();
    const authPages = ['login.html', 'signup.html', 'forgot-password.html'];
    const fullscreenPages = ['404.html', 'coming-soon.html'];
    const dashboardPages = ['dashboard.html'];

    if (authPages.includes(page)) {
        // Auth pages handle their own topbar
    } else if (fullscreenPages.includes(page)) {
        // Fullscreen pages handle their own topbar
    } else if (dashboardPages.includes(page)) {
        // Dashboard has its own layout
    } else {
        renderNavbar();
        renderFooter();
        renderBackToTop();
    }

    initScrollAnimations();
    initFAQ();
    initPasswordToggle();
    animateCounters();
    initHeroSlider();
    initHero2Slider();
    initTabFilter();
    initScheduleFilter();
    initMobileScheduleTabs();

    if (page === 'coming-soon.html') initCountdown();
});

/* ---- SCHEDULE LIVE BOARD FILTER ---- */
function initScheduleFilter() {
    const tabs = document.querySelectorAll('.schedule-filter-btn');
    const rows = document.querySelectorAll('.schedule-row-card');
    if (!tabs.length || !rows.length) return;
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.getAttribute('data-time');
            rows.forEach(row => {
                const cat = row.getAttribute('data-time');
                if (filter === 'all' || cat === filter) {
                    row.style.display = 'grid';
                    row.style.opacity = '0';
                    row.style.transform = 'translateY(8px)';
                    requestAnimationFrame(() => {
                        row.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
                        row.style.opacity = '1';
                        row.style.transform = 'translateY(0)';
                    });
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
}

/* ---- MOBILE TIMETABLE DAY TABS ---- */
function initMobileScheduleTabs() {
    const tabs = document.querySelectorAll('.mobile-sched-tab');
    const panels = document.querySelectorAll('.mobile-sched-panel');
    if (!tabs.length || !panels.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
            panels.forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            const day = tab.getAttribute('data-day');
            const target = document.getElementById('day-' + day);
            if (target) {
                target.classList.add('active');
            }
        });
    });
}
