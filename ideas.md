# YK_Anas Portfolio — Design Direction

## Three stylistic approaches

### Theme Name: Signal Board
Very brief intro: A dark, high-contrast developer command center with electric accents, mono type, and terminal-like status panels. It feels technical, focused, and built for shipping.
Probability: 0.047

### Theme Name: Soft Utility
Very brief intro: A bright, friendly digital sketchbook that pairs mint paper tones with ink-black typography, playful marker rules, and lightweight editorial spacing. It feels personal, capable, and easy to explore.
Probability: 0.083

### Theme Name: Midnight Archive
Very brief intro: A quiet, cinematic portfolio with deep navy surfaces, archival labels, and restrained copper details. It feels thoughtful, crafted, and slightly mysterious.
Probability: 0.019

## Chosen approach: Soft Utility

### Design Movement
Contemporary editorial brutalism softened by the warmth of a personal sketchbook: bold typography, visible structure, tactile paper cues, and imperfect marker-like details without sacrificing usability.

### Core Principles
1. **Clarity over decoration.** Every section answers one question: who Anas is, what he builds, and where to find his work.
2. **Structured but human.** Use rules, labels, and modular panels, then soften the system with the hand-drawn avatar, rounded sticker accents, and conversational copy.
3. **Mint as atmosphere, ink as authority.** Keep the palette limited and deliberate so code and links remain the visual focus.
4. **Earned motion.** Interactions should feel like paper tabs, cursor nudges, and quick reveal notes—not floating spectacle.

### Color Philosophy
The base is a pale sea-glass mint inspired by the supplied avatar image. It creates an open, friendly field; near-black ink provides decisive contrast for a programmer identity; a coral-red signal color marks action and energy; and a cobalt note color punctuates links and labels. The palette should feel like a technical notebook left open on a bright desk.

### Layout Paradigm
Use a left-anchored editorial rail and an offset main canvas rather than a centered SaaS hero. The header stays compact and navigational; the hero is a two-column composition with text on the left and a framed avatar card on the right; sections flow into an intentional 2/3 + 1/3 rhythm so project cards, skills, and social links feel like pages pinned to a board.

### Signature Elements
- A vertical margin rail with the `YK / 01` mark and section index labels.
- Thin ink rules, corner notches, and small handwritten-style annotation bubbles.
- A mint avatar card with a bold coral frame and a tiny status strip reading `BUILDING / ONLINE`.

### Interaction Philosophy
Links should be obvious and rewarding: hover states slide the coral marker, the project cards lift by a few pixels, and social links reveal platform context. Keyboard focus is always visible as an ink outline. External links open in a new tab with clear accessible labels.

### Animation
Use a 180–260ms snappy ease-out for hover, active, and reveal states. On initial load, stagger only the hero label, headline, description, and avatar card by 50ms each; project cards can reveal with a subtle upward transform. Respect `prefers-reduced-motion` by removing entrance transforms and keeping only color/border state changes.

### Typography System
Use `Space Grotesk` for display and navigation, with strong geometric forms and compact headings. Use `DM Mono` for tags, project metadata, code-like labels, and social handles. Hierarchy: oversized display headline at `clamp(3.6rem, 8vw, 7.4rem)`, section headlines at `clamp(2rem, 4vw, 3.5rem)`, body copy at 1rem–1.1rem, and labels at 0.7rem–0.8rem with generous letter spacing.

### Brand Essence
YK_Anas is a personal maker portfolio for people who value practical code, Discord communities, and small tools that actually work; it is different because it feels like a living build log rather than a corporate résumé.

Personality adjectives: **curious, direct, inventive**.

### Brand Voice
Headlines are concise, active, and a little playful. CTAs sound like invitations to inspect or connect, not sales copy. Microcopy is specific and useful; avoid generic filler.

Example lines:
- “I build the tools communities keep open.”
- “Peek at the code, then say hey.”

### Wordmark & Logo
Use a custom text lockup that pairs `YK_` in a coral square with `ANAS` in condensed ink lettering. The favicon/brand mark should be a simple coral `Y` cut through by a cobalt cursor slash, rendered as a bold symbol rather than default text.

### Signature Brand Color
**Sea-glass mint — `#BCEFE4`**. It is ownable, warm, and directly connected to the visual language of the supplied avatar without competing with the ink and coral accents.

### Implementation reminders
- This design is intentionally light, editorial, and asymmetric. Do not replace it with a generic centered landing page, purple gradient, or dark neon treatment.
- Keep the supplied avatar as the key hero image and avoid adding unrelated stock imagery.
- Every page/component stylesheet should carry a short reminder of this design direction at the top of the file.

## Style Decisions

- **Palette rule:** Sea-glass mint `#BCEFE4` is the dominant brand atmosphere on every page; coral marks action and emphasis, cobalt marks links and labels, and yellow or pink appear only as secondary paper-note surfaces.
- **Wordmark rule:** The header and footer identity use a custom lockup with coral `YK_` and condensed ink `ANAS`, never the full brand name as plain default text.
- **Voice rule:** Service and link copy should sound like a personal maker’s build log — specific, practical, and community-aware — rather than a general freelance or agency menu.
