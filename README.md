# Mouli-Resume-2026 // Mechanical Design Engineer Web Portfolio

> **Executive Web Portfolio for Moulish Kumar R**  
> *Mechanical Design Engineer | New Product Development (NPD) | Materials & Simulation*  
> *Emerson (Fisher Control Valves) &bull; L&T Technology Services &bull; M.Tech BITS Pilani (84%)*

---

## 📐 Overview

This repository contains the production-grade, responsive light-mode web portfolio for **Moulish Kumar R**, specifically engineered for fast, global edge hosting on **Cloudflare Pages** via Git.

The site embodies the calculated precision of high-reliability mechanical engineering:
- **Apple-Style "hello." Intro Sequence**: Features a fluid cursive vector handwriting animation with CAD crosshairs, telemetry progress loading, and an inspection card displaying Moulish presenting engineering research on materials.
- **Modern Engineered Typography**: Pairs **Plus Jakarta Sans** (clean, geometric display typography) with **Inter** (high-legibility case study body) and **JetBrains Mono** (tabular drafting metrics and ASME drawing callouts).
- **Dedicated Modular Architecture**:
  - `index.html`: Executive Overview, Apple "hello." intro, telemetry counters, featured industrial highlights, and core engineering philosophy.
  - `works.html`: Industrial career at **Emerson (Fisher Control Valves NPD)** and **L&T Technology Services (Automotive Exhaust Design & FEA)**.
  - `projects.html`: Flagship research dissertations—BITS Pilani M.Tech leaf spring multi-domain optimization (75 configurations, -28% mass, +66% stiffness), SASTRA ZE41 Mg laser shock peening (+25.4% UTS), and PLA coir composites.
  - `skills.html`: Software & standards matrix (Siemens NX, Creo, SolidWorks CSWP, ASME B16.34, ASME Y14.5 GD&T, Teamcenter PLM) plus **Two Live Interactive Mechanical Engineering Calculators** (ISO 286 Bore/Shaft Tolerance Stack-up and ISO 898-1 Fastener Clamping Preload & Safety Factor).
  - `education.html`: M.Tech BITS Pilani (84%), B.Tech SASTRA (78%), CSWP certification, ASME Y14.5 certification, and the LTTS OpenHack Employees' Choice Award.
  - `contact.html`: Direct interactive inquiry intake form, contact coordinates in Chennai, phone (+91 95975 42596), email (moulimano0305@gmail.com), LinkedIn, and official downloadable artifacts.

---

## 📂 Repository File Structure

```
Portfolio - 1/
│
├── index.html               # Executive Overview & Apple "hello." Intro
├── works.html               # Industrial NPD & Automotive Works
├── projects.html            # Research Dissertations & Flagship Projects
├── skills.html              # CAD Stack & Interactive Mechanical Calculators
├── education.html           # Academic Degrees, CSWP & ASME GD&T Certs
├── contact.html             # Inquiry Intake, Coordinates & Resume Download
│
├── _headers                 # Cloudflare Pages security & caching headers
├── _redirects               # Cloudflare Pages clean URL routing
├── .gitignore               # Clean git exclusions
├── README.md                # Repository documentation & Cloudflare setup
│
└── assets/
    ├── css/
    │   └── portfolio.css    # Blueprint design tokens & Apple intro keyframes
    ├── js/
    │   └── portfolio.js     # Intro manager, interactive calculators & form
    ├── images/
    │   ├── moulish-presentation.jpg   # Best photo (Hero / Presentation)
    │   └── moulish-profile.jpg        # Profile photo (Emerson polo)
    └── docs/
        ├── Moulish_Kumar_RNPD_Resume_2026.docx
        ├── Leaf_Springs_MultiDomain_Optimization_Dissertation.pdf
        ├── Laser_Shock_Peening_ZE41_Mg_Report.pdf
        └── PLA_Coir_Composite_Stir_Casting_Report.pdf
```

---

## ⚡ Hosting with Cloudflare Pages (Connected to Git)

Deploying this portfolio to Cloudflare Pages is instantaneous:

1. **Push this repository to GitHub**:
   ```bash
   git remote add origin https://github.com/<your-username>/Mouli-Resume-2026.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
   - Navigate to **Workers & Pages** &rarr; **Create application** &rarr; **Pages**.
   - Select **Connect to Git** and choose the `Mouli-Resume-2026` repository.

3. **Configure Build Settings**:
   - **Framework preset**: `None`
   - **Build command**: *(Leave empty)*
   - **Build output directory**: `/` (or leave blank for root)
   - Click **Save and Deploy**.

4. **Live in ~10 seconds**:
   Cloudflare Pages distributes your static files across their ultra-fast global edge network with instant SSL certificates.

---

## 📬 Contact & Inquiries

- **Engineer**: Moulish Kumar R
- **Location**: Chennai, Tamil Nadu, India
- **Phone**: [+91 95975 42596](tel:+919597542596)
- **Email**: [moulimano0305@gmail.com](mailto:moulimano0305@gmail.com)
- **LinkedIn**: [linkedin.com/in/moulish1](https://linkedin.com/in/moulish1)
