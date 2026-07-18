// ====================================================================
// CODDY MASTER — MAIN APP RENDERER
// ====================================================================

(function() {
    'use strict';

    // ----- STATE -----
    let state = {
        lang: localStorage.getItem('cm-lang') || 'en',
        theme: localStorage.getItem('cm-theme') || 'dark'
    };

    const t = (obj) => typeof obj === 'object' && obj !== null ? (obj[state.lang] || obj.en || '') : obj;

    // ====================================================================
    // ICON LIBRARY
    // ====================================================================
    const icons = {
        sun: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
        moon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
        lang: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
        menu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
        whatsapp: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>',
        phone: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
        plus: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
        // Service icons
        ledger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 3h-4a2 2 0 0 0-2 2v14a2 2 0 0 1-2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM5 7h6M5 11h6M5 15h6"/></svg>',
        erp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
        cfo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
        // Industry icons (generic)
        industry: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 20h20M5 20V8l5 4V8l5 4V8l4 4v8"/></svg>',
        // Social
        linkedin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
        facebook: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>',
        instagram: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>'
    };

    // ====================================================================
    // RENDERERS — each section is built from CONFIG
    // ====================================================================
function renderHeader() {
    const navItems = CONFIG.nav.map(item =>
        `<li><a href="#${item.id}">${t(item)}</a></li>`
    ).join('');

    return `
    <header class="site-header">
        <div class="container nav-wrap">
            <a href="#home" class="brand">
                <span class="brand-mark">
                    <img src="assets/dark-logo-nobg.png" alt="Coddy Master Logo" style="width: 100%; height: 100%; object-fit: contain;">
                </span>
                Coddy Master
            </a>
            <nav class="main-nav" id="mainNav">
                <ul>${navItems}</ul>
            </nav>
            <div class="nav-actions">
                <button class="icon-btn" id="langToggle" title="Language" aria-label="Toggle language">
                    ${icons.lang}<span style="margin-${state.lang === 'ar' ? 'right' : 'left'}: 4px; font-size: 0.75rem; font-family: var(--font-mono);">${state.lang === 'en' ? 'AR' : 'EN'}</span>
                </button>
                <button class="icon-btn" id="themeToggle" title="Theme" aria-label="Toggle theme">
                    ${state.theme === 'dark' ? icons.sun : icons.moon}
                </button>
                <a href="#contact" class="btn btn-primary btn-arrow" style="padding: 0.5rem 1rem; font-size: 0.8125rem;">
                    ${t({en: 'Free Consult', ar: 'استشارة مجانية'})}
                </a>
                <button class="icon-btn menu-toggle" id="menuToggle" aria-label="Menu">${icons.menu}</button>
            </div>
        </div>
    </header>`;
}
    function renderHero() {
        const h = CONFIG.hero;
        const stats = h.stats.map(s => `
            <div class="stat">
                <span class="stat-value">${s.value}</span>
                <span class="stat-label">${t(s.label)}</span>
            </div>`).join('');

        return `
        <section id="home" class="hero">
            <div class="grid-bg"></div>
            <div class="hero-bg"></div>
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text reveal visible">
                        <div class="hero-badge">
                            <span class="dot"></span>
                            <span>${t(h.badge)}</span>
                        </div>
                        <h1>${t(h.titlePre)} <span class="accent">${t(h.titleAccent)}</span> ${t(h.titleMid)} ${t(h.titleEnd)}</h1>
                        <p class="lead">${t(h.subtitle)}</p>
                        <div class="hero-ctas">
                            <a href="#contact" class="btn btn-primary btn-arrow">${t(h.ctas.primary)}</a>
                            <a href="#contact" class="btn btn-ghost">${t(h.ctas.secondary)}</a>
                        </div>
                        <div class="hero-stats">${stats}</div>
                    </div>
                    <div class="hero-viz reveal visible">
                        ${renderHeroAnimation()}
                    </div>
                </div>
            </div>
        </section>`;
    }

    function renderHeroAnimation() {
        return `
        <div class="viz-frame">
            <span class="viz-corner tl"></span>
            <span class="viz-corner tr"></span>
            <span class="viz-corner bl"></span>
            <span class="viz-corner br"></span>

            <svg class="viz-flow" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path class="flow-path" d="M 30 50 Q 50 30 70 50" />
                <path class="flow-path" d="M 30 50 Q 50 70 70 50" />
                <circle class="flow-particle" r="1.2">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 30 50 Q 50 30 70 50"/>
                </circle>
                <circle class="flow-particle" r="1.2">
                    <animateMotion dur="2.5s" repeatCount="indefinite" begin="1s" path="M 70 50 Q 50 70 30 50"/>
                </circle>
            </svg>

            <div class="viz-logos">
                <div class="viz-logo cm">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M8 4 L4 12 L8 20 M14 12 L20 4 M14 12 L20 20" stroke="#F97316" stroke-width="3" stroke-linecap="round"/></svg>
                </div>
                <div class="viz-logo odoo">odoo</div>
            </div>

            <div class="viz-widget w1">
                <div class="w-label">Revenue</div>
                <div class="w-value">EGP 2.4M</div>
                <div class="w-trend up">12.4%</div>
            </div>
            <div class="viz-widget w2">
                <div class="w-label">Cash Flow</div>
                <div class="w-value">+580K</div>
                <div class="mini-bars"><span></span><span></span><span></span><span></span><span></span></div>
            </div>
            <div class="viz-widget w3">
                <div class="w-label">Open Invoices</div>
                <div class="w-value">23</div>
                <div class="w-trend down">3 overdue</div>
            </div>
            <div class="viz-widget w4">
                <div class="w-label">Margin</div>
                <div class="w-value">34.2%</div>
                <div class="w-trend up">2.1%</div>
            </div>
        </div>`;
    }

    function renderTrusted() {
        const logos = [...CONFIG.trusted.logos, ...CONFIG.trusted.logos]
            .map(name => `<div class="marquee-item">${name}</div>`).join('');
        return `
        <section class="trusted">
            <div class="container">
                <div class="trusted-label">${t(CONFIG.trusted.label)}</div>
                <div class="marquee">
                    <div class="marquee-track">${logos}</div>
                </div>
            </div>
        </section>`;
    }

    function renderProblems() {
        const p = CONFIG.problems;
        const items = p.items.map(item => `
            <div class="problem-card reveal">
                <div class="problem-num">${item.num}</div>
                <h4>${t(item.title)}</h4>
                <p>${t(item.desc)}</p>
            </div>`).join('');
        return `
        <section id="about">
            <div class="container">
                <div class="section-head reveal">
                    <div class="eyebrow">${t(p.eyebrow)}</div>
                    <h2>${t(p.title)}</h2>
                    <p class="lead">${t(p.subtitle)}</p>
                </div>
                <div class="problems-grid">${items}</div>
            </div>
        </section>`;
    }

    function renderServices() {
        const s = CONFIG.services;
        const items = s.items.map(item => `
            <div class="service-card reveal">
                <div class="service-icon">${icons[item.icon]}</div>
                <h3>${t(item.title)}</h3>
                <p class="service-desc">${t(item.desc)}</p>
                <ul class="service-features">
                    ${item.features.map(f => `<li>${t(f)}</li>`).join('')}
                </ul>
                <a href="#contact" class="service-link btn-arrow">${t({en: 'Talk to us', ar: 'تواصل معنا'})}</a>
            </div>`).join('');
        return `
        <section id="services">
            <div class="container">
                <div class="section-head reveal">
                    <div class="eyebrow">${t(s.eyebrow)}</div>
                    <h2>${t(s.title)}</h2>
                    <p class="lead">${t(s.subtitle)}</p>
                </div>
                <div class="services-grid">${items}</div>
            </div>
        </section>`;
    }

    function renderIndustries() {
        const i = CONFIG.industries;
        const items = i.items.map(item => `
            <div class="industry-cell reveal">
                <div class="industry-icon" style="font-size: 1.75rem;">${item.icon}</div>
                <h4>${t(item.name)}</h4>
            </div>`).join('');
        return `
        <section id="industries">
            <div class="container">
                <div class="section-head reveal">
                    <div class="eyebrow">${t(i.eyebrow)}</div>
                    <h2>${t(i.title)}</h2>
                    <p class="lead">${t(i.subtitle)}</p>
                </div>
                <div class="industries-grid">${items}</div>
            </div>
        </section>`;
    }

    function renderWhyOdoo() {
        const w = CONFIG.whyOdoo;
        const reasons = w.reasons.map(r => `
            <div class="why-item reveal">
                <span class="why-num">${r.num}</span>
                <div class="why-text">
                    <h4>${t(r.title)}</h4>
                    <p>${t(r.desc)}</p>
                </div>
            </div>`).join('');
        const modules = w.modules.map(m => `
            <div class="odoo-module">
                <span class="m-icon">${m.icon}</span>
                <span class="m-name">${m.name}</span>
            </div>`).join('');
        return `
        <section id="odoo" class="why-odoo">
            <div class="container">
                <div class="section-head reveal">
                    <div class="eyebrow">${t(w.eyebrow)}</div>
                    <h2>${t(w.title)}</h2>
                    <p class="lead">${t(w.subtitle)}</p>
                </div>
                <div class="why-grid">
                    <div class="why-list">${reasons}</div>
                    <div class="odoo-modules reveal">${modules}</div>
                </div>
            </div>
        </section>`;
    }

    function renderProcess() {
        const p = CONFIG.process;
        const steps = p.steps.map(s => `
            <div class="timeline-step reveal">
                <div class="timeline-marker">${s.num}</div>
                <div class="timeline-content">
                    <div class="timeline-duration">${t(s.duration)}</div>
                    <h4>${t(s.title)}</h4>
                    <p>${t(s.desc)}</p>
                </div>
            </div>`).join('');
        return `
        <section>
            <div class="container">
                <div class="section-head reveal">
                    <div class="eyebrow">${t(p.eyebrow)}</div>
                    <h2>${t(p.title)}</h2>
                    <p class="lead">${t(p.subtitle)}</p>
                </div>
                <div class="timeline">${steps}</div>
            </div>
        </section>`;
    }

    function renderShowcase() {
        const s = CONFIG.showcase;
        return `
        <section class="showcase">
            <div class="container">
                <div class="section-head reveal" style="text-align: center; margin-left: auto; margin-right: auto;">
                    <div class="eyebrow">${t(s.eyebrow)}</div>
                    <h2>${t(s.title)}</h2>
                    <p class="lead" style="margin-left: auto; margin-right: auto;">${t(s.subtitle)}</p>
                </div>
                <div class="dashboard-mock reveal">
                    <div class="dashboard-bar">
                        <div class="dot-row"><span></span><span></span><span></span></div>
                        <div class="url-bar">app.coddymaster.com/dashboard</div>
                    </div>
                    <div class="dashboard-grid">
                        <aside class="dashboard-side">
                            <div class="side-item active">📊 Dashboard</div>
                            <div class="side-item">💰 Revenue</div>
                            <div class="side-item">📦 Inventory</div>
                            <div class="side-item">👥 Customers</div>
                            <div class="side-item">📋 Reports</div>
                            <div class="side-item">⚙️ Settings</div>
                        </aside>
                        <main class="dashboard-main">
                            <div class="kpi-card">
                                <div class="kpi-label">Revenue MTD</div>
                                <div class="kpi-value">2.4M</div>
                                <div class="kpi-trend">▲ 12.4%</div>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-label">Net Profit</div>
                                <div class="kpi-value">580K</div>
                                <div class="kpi-trend">▲ 8.1%</div>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-label">AR Outstanding</div>
                                <div class="kpi-value">1.1M</div>
                                <div class="kpi-trend">▼ 5.3%</div>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-label">Cash Position</div>
                                <div class="kpi-value">3.2M</div>
                                <div class="kpi-trend">▲ 4.2%</div>
                            </div>
                            <div class="chart-card">
                                <h5>Revenue Trend — Last 12 Months</h5>
                                ${renderMiniChart()}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </section>`;
    }

    function renderMiniChart() {
        const data = [40, 55, 48, 62, 70, 58, 75, 82, 78, 88, 92, 100];
        const max = Math.max(...data);
        const points = data.map((v, i) => {
            const x = (i / (data.length - 1)) * 100;
            const y = 100 - (v / max) * 90;
            return `${x},${y}`;
        }).join(' ');
        const area = `0,100 ${points} 100,100`;
        return `
        <svg class="chart-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
                <linearGradient id="gradFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#F97316" stop-opacity="0.4"/>
                    <stop offset="100%" stop-color="#F97316" stop-opacity="0"/>
                </linearGradient>
            </defs>
            <polygon points="${area}" fill="url(#gradFill)"/>
            <polyline points="${points}" fill="none" stroke="#F97316" stroke-width="1.5" vector-effect="non-scaling-stroke"/>
            ${data.map((v, i) => {
                const x = (i / (data.length - 1)) * 100;
                const y = 100 - (v / max) * 90;
                return `<circle cx="${x}" cy="${y}" r="0.8" fill="#F97316"/>`;
            }).join('')}
        </svg>`;
    }

    function renderFounders() {
        const f = CONFIG.founders;
        const items = f.items.map(item => `
            <div class="founder-card reveal">
                <img class="founder-photo" src="${item.photo}" alt="${t(item.name)}" onerror="this.style.display='none'">
                <div class="founder-info">
                    <h3>${t(item.name)}</h3>
                    <div class="founder-role">${t(item.role)}</div>
                    <p class="founder-bio">${t(item.bio)}</p>
                    <div class="founder-social">
                        <a href="${item.linkedin}" aria-label="LinkedIn">${icons.linkedin}</a>
                    </div>
                </div>
            </div>`).join('');
        return `
        <section>
            <div class="container">
                <div class="section-head reveal">
                    <div class="eyebrow">${t(f.eyebrow)}</div>
                    <h2>${t(f.title)}</h2>
                    <p class="lead">${t(f.subtitle)}</p>
                </div>
                <div class="founders-grid">${items}</div>
            </div>
        </section>`;
    }
function renderTeam() {
    const tm = CONFIG.team;
    const items = tm.members.map(m => `
        <div class="team-card reveal">
            <div class="team-photo">
                ${m.photo ? `<img src="${m.photo}" alt="${m.name}" style="width:100%; height:100%; object-fit:cover;">` : m.initials}
            </div>
            <div class="team-name">${m.name}</div>
            <div class="team-role">${t(m.role)}</div>
        </div>`).join('');
    return `
        <section id="team" class="why-odoo">
            <div class="container">
                <div class="section-head reveal">
                    <div class="eyebrow">${t(tm.eyebrow)}</div>
                    <h2>${t(tm.title)}</h2>
                    <p class="lead">${t(tm.subtitle)}</p>
                </div>
                <div class="team-grid">${items}</div>
            </div>
        </section>`;
}

    function renderCases() {
        const c = CONFIG.cases;
        const items = c.items.map(item => `
            <div class="case-card reveal">
                <div class="case-industry">${t(item.industry)}</div>
                <h4>${t(item.title)}</h4>
                <p>${t(item.desc)}</p>
                <div class="case-metrics">
                    ${item.metrics.map(m => `
                        <div class="case-metric">
                            <span class="m-value">${m.value}</span>
                            <span class="m-label">${t(m.label)}</span>
                        </div>`).join('')}
                </div>
            </div>`).join('');
        return `
        <section id="cases">
            <div class="container">
                <div class="section-head reveal">
                    <div class="eyebrow">${t(c.eyebrow)}</div>
                    <h2>${t(c.title)}</h2>
                    <p class="lead">${t(c.subtitle)}</p>
                </div>
                <div class="cases-grid">${items}</div>
            </div>
        </section>`;
    }

    function renderTestimonials() {
        const tt = CONFIG.testimonials;
        const items = tt.items.map(item => `
            <div class="testimonial-card reveal">
                <span class="testimonial-quote">"</span>
                <p>${t(item.quote)}</p>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">${item.initials}</div>
                    <div>
                        <div class="a-name">${item.name}</div>
                        <div class="a-role">${t(item.role)}</div>
                    </div>
                </div>
            </div>`).join('');
        return `
        <section>
            <div class="container">
                <div class="section-head reveal">
                    <div class="eyebrow">${t(tt.eyebrow)}</div>
                    <h2>${t(tt.title)}</h2>
                </div>
                <div class="testimonials-grid">${items}</div>
            </div>
        </section>`;
    }

    function renderBlog() {
        const b = CONFIG.blog;
        const items = b.posts.map(p => `
            <article class="blog-card reveal">
                <div class="blog-thumb">
                    <span class="blog-thumb-label">${t(p.category)}</span>
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span>${p.date}</span>
                        <span>•</span>
                        <span>${t(p.readTime)}</span>
                    </div>
                    <h4>${t(p.title)}</h4>
                    <p>${t(p.excerpt)}</p>
                </div>
            </article>`).join('');
        return `
        <section id="blog" class="why-odoo">
            <div class="container">
                <div class="section-head reveal">
                    <div class="eyebrow">${t(b.eyebrow)}</div>
                    <h2>${t(b.title)}</h2>
                    <p class="lead">${t(b.subtitle)}</p>
                </div>
                <div class="blog-grid">${items}</div>
            </div>
        </section>`;
    }

    function renderVideos() {
        const v = CONFIG.videos;
        const items = v.items.map(item => `
            <div class="video-card reveal">
                <div class="video-embed">
                    <iframe src="https://www.youtube.com/embed/${item.youtubeId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-info">
                    <h4>${t(item.title)}</h4>
                    <p>${t(item.desc)}</p>
                </div>
            </div>`).join('');
        return `
        <section id="videos">
            <div class="container">
                <div class="section-head reveal">
                    <div class="eyebrow">${t(v.eyebrow)}</div>
                    <h2>${t(v.title)}</h2>
                    <p class="lead">${t(v.subtitle)}</p>
                </div>
                <div class="videos-grid">${items}</div>
            </div>
        </section>`;
    }

    function renderResources() {
        const r = CONFIG.resources;
        const items = r.items.map(item => `
            <div class="resource-card reveal">
                <div class="resource-icon" style="font-size: 1.5rem;">${item.icon}</div>
                <h4>${t(item.title)}</h4>
                <p>${t(item.desc)}</p>
                <a href="#contact" class="resource-link btn-arrow">${t({en: 'Get it', ar: 'حملها'})}</a>
            </div>`).join('');
        return `
        <section id="resources" class="why-odoo">
            <div class="container">
                <div class="section-head reveal">
                    <div class="eyebrow">${t(r.eyebrow)}</div>
                    <h2>${t(r.title)}</h2>
                    <p class="lead">${t(r.subtitle)}</p>
                </div>
                <div class="resources-grid">${items}</div>
            </div>
        </section>`;
    }

    function renderFAQ() {
        const f = CONFIG.faq;
        const items = f.items.map((item, idx) => `
            <div class="faq-item reveal" data-faq="${idx}">
                <button class="faq-question" aria-expanded="false">
                    <span>${t(item.q)}</span>
                    <span class="faq-toggle">${icons.plus}</span>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-inner">${t(item.a)}</div>
                </div>
            </div>`).join('');
        return `
        <section id="faq">
            <div class="container">
                <div class="section-head reveal" style="text-align: center; margin-left: auto; margin-right: auto;">
                    <div class="eyebrow">${t(f.eyebrow)}</div>
                    <h2>${t(f.title)}</h2>
                </div>
                <div class="faq-list">${items}</div>
            </div>
        </section>`;
    }

    function renderContact() {
        const c = CONFIG.contact;
        const f = c.form;
        const items = c.items.map(item => {
            const val = typeof item.value === 'object' ? t(item.value) : item.value;
            return `
            <div class="contact-item">
                <div class="contact-icon" style="font-size: 1.25rem;">${item.icon}</div>
                <div class="contact-detail">
                    <h4>${t(item.title)}</h4>
                    ${item.link ? `<a href="${item.link}">${val}</a>` : `<p>${val}</p>`}
                </div>
            </div>`;
        }).join('');

        return `
        <section id="contact" class="contact">
            <div class="container">
                <div class="section-head reveal">
                    <div class="eyebrow">${t(c.eyebrow)}</div>
                    <h2>${t(c.title)}</h2>
                    <p class="lead">${t(c.subtitle)}</p>
                </div>
                <div class="contact-grid">
                    <div class="contact-info reveal">${items}</div>
                    <form class="contact-form reveal" id="contactForm">
                        <div class="form-row">
                            <div class="form-field">
                                <label>${t(f.name)}</label>
                                <input type="text" name="name" required>
                            </div>
                            <div class="form-field">
                                <label>${t(f.email)}</label>
                                <input type="email" name="email" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-field">
                                <label>${t(f.phone)}</label>
                                <input type="tel" name="phone" required>
                            </div>
                            <div class="form-field">
                                <label>${t(f.company)}</label>
                                <input type="text" name="company">
                            </div>
                        </div>
                        <div class="form-field">
                            <label>${t(f.service)}</label>
                            <select name="service">
                                <option>${t({en: 'Outsourced Accounting', ar: 'محاسبة خارجية'})}</option>
                                <option>${t({en: 'Odoo Implementation', ar: 'تركيب أودو'})}</option>
                                <option>${t({en: 'Virtual CFO', ar: 'مدير مالي افتراضي'})}</option>
                                <option>${t({en: 'Not sure — need consultation', ar: 'مش متأكد — محتاج استشارة'})}</option>
                            </select>
                        </div>
                        <div class="form-field">
                            <label>${t(f.message)}</label>
                            <textarea name="message" rows="4"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-arrow" style="width: 100%; justify-content: center;">
                            ${t(f.submit)}
                        </button>
                        <div class="form-status" id="formStatus"></div>
                    </form>
                </div>
            </div>
        </section>`;
    }

    function renderFooter() {
        const f = CONFIG.footer;
        const cols = f.cols.map(col => `
            <div class="footer-col">
                <h5>${t(col.title)}</h5>
                <ul>
                    ${col.links.map(l => `<li><a href="${l.href}">${t({en: l.en, ar: l.ar})}</a></li>`).join('')}
                </ul>
            </div>`).join('');
        return `
        <footer class="site-footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <a href="#home" class="brand">
                            <span class="brand-mark">
                                <svg viewBox="0 0 24 24" fill="none"><path d="M8 4 L4 12 L8 20 M14 12 L20 4 M14 12 L20 20" stroke="#000" stroke-width="3" stroke-linecap="round"/></svg>
                            </span>
                            Coddy Master
                        </a>
                        <p>${t(f.about)}</p>
                        <div class="footer-socials">
                            <a href="${CONFIG.company.social.linkedin}" class="icon-btn" aria-label="LinkedIn">${icons.linkedin}</a>
                            <a href="${CONFIG.company.social.facebook}" class="icon-btn" aria-label="Facebook">${icons.facebook}</a>
                            <a href="${CONFIG.company.social.instagram}" class="icon-btn" aria-label="Instagram">${icons.instagram}</a>
                        </div>
                    </div>
                    ${cols}
                </div>
                <div class="footer-bottom">
                    <div>${t(f.copyright)}</div>
                    <div>${CONFIG.company.email} · ${CONFIG.company.phoneDisplay}</div>
                </div>
            </div>
        </footer>`;
    }

    function renderFloating() {
        return `
        <div class="floating-actions">
            <a href="https://wa.me/${CONFIG.company.phone.replace(/[^0-9]/g, '')}" class="fab whatsapp" target="_blank" aria-label="WhatsApp">${icons.whatsapp}</a>
            <a href="tel:${CONFIG.company.phone}" class="fab call" aria-label="Call">${icons.phone}</a>
        </div>`;
    }

    // ====================================================================
    // MAIN RENDER
    // ====================================================================
    function render() {
        document.documentElement.lang = state.lang;
        document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dataset.theme = state.theme;

        const app = document.getElementById('app-root');
        app.innerHTML = `
            ${renderHeader()}
            <main>
                ${renderHero()}
                ${renderTrusted()}
                ${renderProblems()}
                ${renderServices()}
                ${renderIndustries()}
                ${renderWhyOdoo()}
                ${renderProcess()}
                ${renderShowcase()}
                ${renderFounders()}
                ${renderTeam()}
                ${renderCases()}
                ${renderTestimonials()}
                ${renderBlog()}
                ${renderVideos()}
                ${renderResources()}
                ${renderFAQ()}
                ${renderContact()}
            </main>
            ${renderFooter()}
            ${renderFloating()}
        `;

        attachEvents();
        observeReveal();
    }

    // ====================================================================
    // EVENTS
    // ====================================================================
    function attachEvents() {
        // Language toggle
        document.getElementById('langToggle').addEventListener('click', () => {
            state.lang = state.lang === 'en' ? 'ar' : 'en';
            localStorage.setItem('cm-lang', state.lang);
            render();
        });

        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('cm-theme', state.theme);
            render();
        });

        // Mobile menu
        const menuToggle = document.getElementById('menuToggle');
        const mainNav = document.getElementById('mainNav');
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                mainNav.classList.toggle('open');
            });
        }

        // Close mobile menu on nav click
        document.querySelectorAll('.main-nav a').forEach(a => {
            a.addEventListener('click', () => mainNav.classList.remove('open'));
        });

        // FAQ accordion
        document.querySelectorAll('.faq-question').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = btn.closest('.faq-item');
                const wasActive = item.classList.contains('active');
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                if (!wasActive) item.classList.add('active');
            });
        });

        // Contact form (n8n webhook)
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const status = document.getElementById('formStatus');
                const data = Object.fromEntries(new FormData(form));
                data.timestamp = new Date().toISOString();
                data.source = 'coddymaster.com';

                try {
                    const res = await fetch(CONFIG.contact.form.webhook, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                    });
                    if (!res.ok) throw new Error('Failed');
                    status.className = 'form-status success';
                    status.textContent = t(CONFIG.contact.form.success);
                    form.reset();
                } catch (err) {
                    status.className = 'form-status error';
                    status.textContent = t(CONFIG.contact.form.error);
                }
            });
        }

        // Active nav link tracking on scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.main-nav a');
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(sec => {
                const rect = sec.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) current = sec.id;
            });
            navLinks.forEach(a => {
                a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
            });
        }, { passive: true });
    }

    // ====================================================================
    // SCROLL REVEAL
    // ====================================================================
    function observeReveal() {
        const els = document.querySelectorAll('.reveal:not(.visible)');
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
        els.forEach(el => obs.observe(el));
    }

    // ====================================================================
    // INIT
    // ====================================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', render);
    } else {
        render();
    }

})();
