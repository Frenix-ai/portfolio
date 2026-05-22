# Spec: About Me Section with Spotify Widget

Documenting the addition of a premium, editorial "About Me" profile card above the projects section on the homepage.

## User Requirements
- **Content:** "I am Hiren Ahlawat, A senior Software Developer and Engineer dedicated to my work and I love building products to solve real-world problems. I'm specialized in building MVP's."
- **Position:** On the homepage (`/`), below the hero fold and above the projects showcase.
- **Design Inspiration:** Highly aesthetic profile layout (avatar, serif typography, social links, descriptive bio, and an interactive Spotify "Now Playing" widget). Not a simple banner, but a curated card.

## Proposed Changes

### Component Design
- **Section Layout:** Add a new section `02 / ABOUT ME` immediately below the tech stack marquee and above the `03 / SELECTED WORK` section.
- **Profile Card:**
  - Styled with container borders and backdrop blur.
  - Profile avatar: Left-aligned, circular with subtle green border.
  - Typographic hierarchy: Name in italic *Melodrama*, subtitle in light *Satoshi* uppercase spacing.
  - Interactive social buttons: GitHub, LinkedIn, Twitter/X.
- **Spotify Status Widget:**
  - Placed at the bottom of the About Me card.
  - Shows simulated "Currently playing" (e.g. "Coding Chill Lofi").
  - Green pulsing indicator and custom HTML/CSS equalizer bars animate dynamically.

### Assets Needed
- `public/avatar.png`: Minimalist professional software engineer avatar illustration.
- `public/spotify-album.png`: Creative lofi/chill album art.

### Implementation Plan
1. Generate `public/avatar.png` and `public/spotify-album.png` using the image generation tool.
2. Edit `src/app/page.tsx` to insert the `02 / ABOUT ME` section containing the profile card and Spotify widget.
3. Update subsequent section numbers (change `02 / SELECTED WORK` to `03 / SELECTED WORK`).
4. Verify the changes load correctly and maintain clean styling.
