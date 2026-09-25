# Dr Sagar's Holistic Homeopathy site

This repository holds the source of a single-page website for Dr Sagar's pediatric homeopathy practice. The site introduces the doctor to parents looking for homeopathic care for their children: it describes his background as a practising pediatrician, his education and licence, the conditions he treats (such as ADHD, asthma, eczema, ear infections and growth issues), how first and follow-up consultations work, fees and payment, and what homeopathy is. Parents can fill in an appointment request with their own and their child's details, and the site turns it into a pre-filled email, SMS or WhatsApp message to the practice, so there is no backend or database. It is a static React 18 and TypeScript app built with Vite 4 and animated with Framer Motion, and the production build is committed to `docs/`.

> Not actively maintained. Last updated December 2023.

**Live site:** https://homeopathyforkids.online

The committed build in `docs/` includes a `CNAME` for `homeopathyforkids.online`. That domain currently serves this site from Netlify; GitHub Pages is not enabled for this repository.

## Features

- One scrolling page with anchor navigation: My Journey, Education & License, Conditions Treated, First Consultation, Follow Up Consultations, Appointment, Fees & Payment, What is Homeopathy
- Appointment form (parent and child details plus a message). The form stores nothing: it opens a pre-filled email, SMS or WhatsApp message to the practice
- Scroll progress bar at the top of the page (Framer Motion `useScroll`)
- Open Graph and description meta tags for link previews, plus a Google Analytics tag in `index.html`
- Self-hosted fonts (Sacramento and Tenor Sans) under `public/fonts/`

## Tech stack

React 18 · TypeScript · Vite 4 · Framer Motion · ESLint

## Getting started

Prerequisites: Node.js and npm.

```bash
npm install
npm run dev       # Vite dev server (exposed on the local network via --host)
npm run build     # type-check with tsc, then build to dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint over src/
```

The built site is committed in `docs/`, together with `CNAME` and `robots.txt`. After a build, copy `dist/` into `docs/` to publish. No script does this for you.

## Project structure

```text
index.html           HTML shell with meta tags and the analytics tag
src/App.tsx          page composition: progress bar, menu, then each section in order
src/fragment/        one folder per page section (banner, journey, education,
                     conditions-treated, appointment, fee-payment, ...)
src/fragment/components/  shared Page and P layout components
public/              favicon, fonts, CNAME, robots.txt
docs/                committed production build
```
