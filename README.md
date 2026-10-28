# ProLine Roofing Inc website

A plain HTML, CSS and JavaScript site. No build tools, no frameworks, nothing to install.

## Open it
1. In VS Code: File > Open Folder > choose this `proline-roofing` folder.
2. Install the free **Live Server** extension (Extensions icon > search "Live Server" > Install).
3. Right-click `index.html` > **Open with Live Server**. The page reloads every time you save.

You can also double-click `index.html` to open it in a browser.

## What is in each file
| File | What it controls |
| --- | --- |
| `index.html` | All the text and page sections |
| `styles.css` | Colors, fonts, spacing. Colors are at the top, in the `:root` block |
| `script.js` | Scroll animations, photo gallery, roof and siding color picker |
| `recolor-data.js` | The photo and mask for "Make it yours" (leave this alone unless you change that photo) |
| `images/` | Logo, hero photo and gallery photos |

## Common edits
- **Phone number or address:** in `index.html`, press Ctrl+F (Cmd+F on Mac) and search `260-316-7419` or `Shipshewana`. Change every match. The phone link also needs the digits changed: `tel:+12603167419`.
- **Headline and text:** edit the words in `index.html` between the tags, for example `<h1>Built to protect. Made to last.</h1>`.
- **Gallery photos:** put a new photo in `images/gallery/`, then edit the list near the top of `script.js` (`var GAL=[...]`). Each entry is a caption (`c`), a file (`f`) and which part of the photo shows in the tile (`p`). Keep the chalet entry (number 8) where it is, because the "Where leaks start" section uses it.
- **Hero photo:** replace `images/hero.jpg` with another photo of the same name.
- **Roof and siding colors:** edit the `COLORS` list in `script.js`. Each entry is a name and a hex color, for example `["Barn red","#8f2f2a"]`.
- **Reviews:** edit the three review blocks in `index.html` (search `class="rev"`).
- **Brand blue:** change `--blue` at the top of `styles.css`.

## Put it online for free
Upload the whole folder to Cloudflare Pages, Netlify or GitHub Pages. Each has a free plan and will give you a web address. To use prolineroofing.us, point the domain's DNS at the host (the host shows the exact steps). Keep the old site running until the new one works.

The quote form is a demo. It does not send anything yet. To receive requests by email, connect it to a free form service such as Formspree or Netlify Forms.

## Changing the roof/siding mask yourself

Open `mask-painter.html` by double-clicking it (no install). Your current photo and mask load automatically.

1. Pick **Roof** (red), **Siding** (green) or **Fascia** (blue), then **Outline**: click around the edge of an area and click the first point again (or press Enter) to fill it. Use **Erase** and **Brush** to clean up around trim and windows.
2. To use a different photo, click **Use another photo** (the mask starts empty).
3. Click **Download recolor-data.js** and replace the file with the same name in this folder. Reload `index.html` and test the colors.

Anything not painted (trim, windows, doors, stone) keeps its original color.

