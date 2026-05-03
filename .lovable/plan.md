## Plan: Add Showcase Section with 3D Floating Image Frames

Add a new premium "Capabilities Showcase" section between Services and Why-Choose-Us, featuring the three uploaded images displayed in luxury 3D-framed floating cards with relaxed zoom/parallax animations and brief service explanations.

### 1. Asset Setup
Copy the three uploaded images into `src/assets/`:
- `showcase-networking.png` (server room / networking team)
- `showcase-app.png` (mobile + dashboard mockup)
- `showcase-conference.png` (medical/tech conference stage)

### 2. New Component: `src/components/sections/ShowcaseSection.tsx`
A new section titled **"What We Build"** with sub-headline: *"From mobile apps to enterprise platforms — engineered with precision."*

Three large floating image cards arranged in an alternating zig-zag layout (image left / text right, then reversed). Each card includes:

**Card 1 — Mobile Apps & Digital Platforms** (uses `aplication.png`)
- "Native iOS & Android applications, dashboards, and digital products designed for performance and elegance."
- Tags: Mobile Apps · Web Platforms · UI/UX

**Card 2 — Networking & Infrastructure** (uses server-room image)
- "Enterprise networking, secure server architecture, and IT infrastructure built to scale with your business."
- Tags: Network Setup · Server Architecture · Cybersecurity

**Card 3 — Conference & Enterprise Software** (uses conference image)
- "Medical Conference Software, Attendee Registration Management, HIMS (Hospital Info Management) and HRMS — complete enterprise digital ecosystems."
- Tags: Medical Conference SW · Registration Mgmt · HIMS · HRMS · Branding

### 3. 3D Floating Frame Treatment
Each image wrapped in a luxury "3D frame":
- Outer glassmorphism container with sky-blue gradient border ring
- Inner image with rounded corners (`rounded-3xl`), soft inner shadow, and a subtle highlight gloss overlay
- Drop shadow with sky-blue glow (`shadow-[0_30px_80px_-20px_rgba(14,165,233,0.4)]`)
- A floating accent shape (sphere/hexagon/ring from existing `FloatingShape`) tucked behind each frame for depth
- Tilt on hover using framer-motion (`rotateY` ±4°, `rotateX` ±2°, `scale 1.03`) with spring transition
- Continuous gentle float loop (`y: [-8, 8, -8]`, 6s ease-in-out)

### 4. Animations (relaxed luxury feel)
- On scroll into view: image fades + zooms in from `scale: 0.85` to `1` over 1.2s with easeOut
- Text content slides in from opposite side with 0.2s stagger
- Parallax: image moves slower than text using `useScroll` + `useTransform`
- Background ambient orbs and subtle grid pattern matching site theme

### 5. Integration
Update `src/pages/Index.tsx` to insert `<ShowcaseSection />` between `ServicesSection` and `WhyChooseUsSection` inside a new `<section id="showcase">`.

Optionally update `Navbar.tsx` to add a "Showcase" link (only if nav has room).

### Technical notes
- Reuses existing utility classes: `glass-card-elevated`, `sky-gradient`, `text-gradient`, `noise-overlay`, `section-gradient`
- Uses already-installed `framer-motion` — no new dependencies
- Responsive: stacks vertically on mobile, alternating two-column grid on `md:` and up
- Images imported as ES6 modules from `@/assets/` for proper Vite optimization
