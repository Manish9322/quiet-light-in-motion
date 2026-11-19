# Quiet Light in Motion

An interactive, minimalistic monochromatic digital experience featuring an animated horizontal light-beam background across an atmospheric obsidian canvas.

Subtle, independently moving horizontal light beams glide continuously across the dark viewport, gradually illuminating, lingering in soft focus, and dissolving into darkness without synchronized resets.

---

## Overview

Quiet Light in Motion is an ambient visual experience built with Next.js, React, and TypeScript. Rather than relying on heavy JavaScript animation libraries or high-overhead canvas rendering loops, the application utilizes pure, hardware-accelerated CSS keyframe animations and multi-layered optical depth to create an organic, atmospheric illumination effect.

The interface is composed of three balanced, intentional sections:
- **Introduction Section**: A calm editorial header with refined typography presenting the project thesis.
- **Main Section**: The primary visual stage featuring 28 independent horizontal light beams distributed across three optical depth planes (diffused ambient ribbons, soft-focus mid-plane silver beams, and sharp incandescent core filaments).
- **Footer Section**: An understated closing statement maintaining quiet visual consistency with the header.

---

## Features & Experience

- **Multi-Planar Optical Depth**: Renders 28 independently animated beams across three discrete visual planes—wide ambient ribbons, mid-plane halo beams, and sharp, high-contrast core filaments.
- **Asynchronous Staggered Flow**: Beams run on non-repeating cycle durations (ranging from 11.3s to 43.1s) with staggered negative delays, eliminating noticeable resets and preventing repetitive synchronization.
- **Dynamic Illumination Profiles**: Individual beams follow custom illumination curves (`early`, `center`, `late`, `shimmer`), gradually brightening as they traverse the canvas, intensifying at peak focus, and fading softly into the obsidian backdrop.
- **Pure CSS Hardware Acceleration**: Powered entirely by compositor-only properties (`transform: translate3d` and `opacity`) and CSS pseudo-element blur halos, maintaining smooth 60fps performance without triggering layout reflows or React state re-renders.
- **Strictly Monochromatic Aesthetic**: Minimalist neutral palette utilizing pure black (`#050505`), charcoal gradients, silver halftones, and balanced off-white highlights—completely free of neon saturations or artificial color casts.
- **Custom Monochromatic Scrollbar**: Custom-styled browser scrollbar featuring an obsidian track and floating silver-zinc thumb that seamlessly integrates with the dark viewport.
- **Full Responsive Adaptation**: Dynamically adjusts beam spans, horizontal offsets, glow spreads, and density across mobile, tablet, and desktop viewports while strictly preventing horizontal scrollbars.
- **Accessibility & Motion Preferences**: Fully honors `prefers-reduced-motion` settings by transitioning smoothly into a balanced, static monochromatic lighting composition.

---

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Typography**: Outfit & Plus Jakarta Sans (Google Fonts)
- **Icons**: Lucide React

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
