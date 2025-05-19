# 🧭 TeamSpark Landing Page – Style Guide

A consistent design reference for building the TeamSpark responsive landing page.

---

## 🎨 Colors

| Role              | Color Hex     | Usage                         |
|-------------------|---------------|-------------------------------|
| Primary           | `#1E3A8A`      | Buttons, CTA, Headings       |
| Accent            | `#3B82F6`      | Hover states, highlights     |
| Light Gray        | `#F3F4F6`      | Background sections          |
| Text (Dark)       | `#111827`      | Main body text               |
| Text (Muted)      | `#6B7280`      | Subtext and captions         |
| White             | `#FFFFFF`      | Background and containers    |

---

## 🖋️ Typography

| Element          | Font              | Size (px) | Weight   |
|------------------|-------------------|-----------|----------|
| Headings (h1–h2) | Inter, sans-serif | 32–40     | 700      |
| Subheadings      | Inter, sans-serif | 24        | 600      |
| Body Text        | Inter, sans-serif | 16        | 400      |
| Captions         | Inter, sans-serif | 14        | 400      |

**Fallback Fonts:**  
`'Segoe UI', Roboto, Helvetica, Arial, sans-serif`

---

## 📐 Layout & Spacing

- **Container Widths:**
  - Mobile: `100%`
  - Tablet: `90%`
  - Desktop: `1200px max-width`

- **Spacing Scale:**
  - `0.5rem` – XS  
  - `1rem` – S  
  - `1.5rem` – M  
  - `2rem` – L  
  - `3rem` – XL  

- **Section Spacing:**  
  Use `padding: 4rem 1rem` for vertical padding in sections.

---

## 📱 Responsive Breakpoints

| Device Type | Width Range     |
|-------------|------------------|
| Mobile      | ≤ 480px          |
| Tablet      | 481px – 768px    |
| Desktop     | ≥ 769px          |

---

## 🔘 Buttons

**Primary Button:**

```css
background-color: #1E3A8A;
color: #FFFFFF;
padding: 0.75rem 1.5rem;
border-radius: 0.375rem;
font-weight: 600;
transition: background 0.3s ease;

**On Hover:**
background-color: #3B82F6;