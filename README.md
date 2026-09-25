# Dr Sagar's Holistic Homeopathy site

A single-page website for Dr Sagar's pediatric homeopathy practice. It covers the doctor's background, the conditions treated, consultations, fees, and an appointment request form.

> Not actively maintained. Last updated December 2023.

The committed build in `docs/` includes a `CNAME` for `homeopathyforkids.online`. GitHub Pages is not currently enabled for this repository.

## Features

- One scrolling page with anchor navigation: My Journey, Education & License, Conditions Treated, First Consultation, Follow Up Consultations, Appointment, Fees & Payment, What is Homeopathy
- Appointment form (parent and child details plus a message). The form stores nothing: it opens a pre-filled email, SMS or WhatsApp message to the practice
- Scroll progress bar (Framer Motion)
- Google Analytics tag in `index.html`

## Tech stack

React 18 · TypeScript · Vite 4 · Framer Motion

## Development

```bash
npm install
npm run dev       # Vite dev server (exposed on the local network via --host)
npm run build     # type-check and build to dist/
npm run preview
npm run lint
```

The built site is committed in `docs/`, together with `CNAME` and `robots.txt`. After a build, copy `dist/` into `docs/` to publish. No script does this for you.

## Project layout

```
src/App.tsx          page composition
src/fragment/        one folder per page section (banner, journey, appointment, ...)
public/              favicon, fonts, CNAME, robots.txt
docs/                committed production build
```
