# Bookcase Slider

An accordion-style "bookcase" slider written in plain HTML, CSS and JavaScript. All slides sit side by side like books on a shelf: the active slide expands to fill most of the width, and the others collapse into narrow vertical "spines". Clicking a spine — or using the `<` / `>` buttons — opens that slide.

It was built as an industry showcase for a website, with each slide containing a heading, a short description, a call-to-action button and an embedded Vimeo video.

## Features

- Expanding/collapsing slides: the active slide takes the remaining width and inactive slides shrink to 4% each
- Click any collapsed slide to open it, or move with next/previous controls
- Each slide has a title bar so collapsed slides stay identifiable
- Responsive: below 1024 px wide the slides switch to full-width so it works on mobile
- No libraries or frameworks for the slider logic

## Files

| File | Description |
| --- | --- |
| `index.html` | Markup, styles and slide content |
| `script.js` | Slider logic (`slide_click`, `right`, `left`, width calculations) |

## Usage

Open `index.html` in a browser — no build step needed.

To add a slide, copy one of the `<div class="info" onclick="slide_click(n)">…</div>` blocks in `index.html`, change `n` to its position and update the content. The widths are recalculated automatically from the number of slides.
