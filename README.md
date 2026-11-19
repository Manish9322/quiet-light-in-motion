# Quiet Light in Motion

A sophisticated, minimalistic, black-and-white digital experience featuring an animated horizontal light-beam background across an atmospheric monochromatic canvas.

Subtle, independently moving horizontal light beams glide continuously across the dark viewport, gradually illuminating, lingering in soft focus, and dissolving into darkness without synchronized resets.

---

## Overview

**Quiet Light in Motion** is a frontend digital experience built with Next.js, React, and TypeScript. Rather than relying on heavy third-party animation libraries or high-overhead canvas rendering, the application harnesses pure, hardware-accelerated CSS keyframe animations and multi-layered optical depth to create an organic, atmospheric illumination effect.

The composition is structured into three clean, intentional sections:
1. **Introduction Section**: A calm editorial header with refined typography presenting the project thesis.
2. **Main Section**: The primary visual stage featuring 28 independent horizontal light beams distributed across three optical depth planes (diffused ambient ribbons, soft-focus mid-plane silver beams, and sharp incandescent core filaments).
3. **Footer Section**: An understated closing statement maintaining quiet visual consistency with the header.

---

## Features & Experience

- **Multi-Planar Optical Depth**: Features 28 independently moving beams categorized into three discrete visual planes—wide ambient ribbons, mid-plane halo beams, and delicate high-contrast core filaments.
- **Asynchronous Staggered Flow**: Beams use non-repeating, coprime-like cycle durations (ranging from 11.3s to 43.1s) and negative delay offsets, eliminating noticeable animation resets or repetitive synchronization.
- **Dynamic Illumination Curves**: Individual beams follow unique illumination profiles (`early`, `center`, `late`, `shimmer`), gradually brightening as they traverse the canvas, intensifying at peak focus, and fading softly into the obsidian backdrop.
- **Pure CSS Hardware Acceleration**: Built entirely with compositor-only properties (`transform: translate3d` and `opacity`) and CSS pseudo-element blur halos, maintaining smooth 60fps performance without triggering DOM reflows or React state re-renders.
- **Strictly Monochromatic Aesthetic**: Minimalist neutral palette utilizing pure black (`#050505`), charcoal gradients, silver halftones, and balanced off-white highlights—completely free of neon saturations or artificial color casts.
- **Full Responsive Adaptation**: Dynamically adjusts beam lengths, horizontal offsets, glow spreads, and density across mobile, tablet, and desktop viewports while strictly preventing horizontal scrollbars.
- **Accessibility & Motion Preferences**: Fully respects `prefers-reduced-motion` media queries, automatically settling into a balanced, static monochromatic lighting composition.

---

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation Engine**: Native CSS3 Keyframes & Compositor Hardware Transforms
- **Typography**: Outfit & Plus Jakarta Sans (`next/font/google`)
- **Icons**: Lucide React

---

## Getting Started

### Prerequisites

- Node.js 18.17+ or 20+
- npm, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/manishwebdeveloper76/quiet-light-in-motion.git
   cd quiet-light-in-motion
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Scripts

- `npm run dev`: Runs the local development server on port 3000.
- `npm run build`: Generates an optimized production build.
- `npm run start`: Starts the Next.js production server.
- `npm run lint`: Runs ESLint to verify syntax and code quality.

---

## Copyright Notice

**Quiet Light in Motion**

Copyright © 2026 Manish Sonawane. All rights reserved.

This project and its animated visual components are designed and maintained by Manish Sonawane as an open-source digital experience.

---

## License Information

This project is licensed under the terms of the MIT License. See the [LICENSE](LICENSE) file in the root directory for the complete license terms and conditions.

---

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## Trademarks

All trademarks, service marks, logos, brand names, and company emblems referenced or displayed in this repository are the property of their respective owners. Their inclusion in this repository is solely for descriptive and identification purposes and does not imply endorsement, affiliation, or sponsorship.
