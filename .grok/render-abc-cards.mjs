import { chromium } from "playwright";
import { readFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";

const FONT_BOLD = readFileSync("/workspace/.grok/fonts/Fredoka-Bold.ttf").toString("base64");
const FONT_MED = readFileSync("/workspace/.grok/fonts/Fredoka-Medium.ttf").toString("base64");
const CHROME =
  "/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell";

function calopsita({ body = "#D8D0C4", wing = "#B9B2A6", face = "#F3EBDD", cheek = "#E85D4C" } = {}) {
  return `
<svg viewBox="0 0 140 140" aria-hidden="true">
  <ellipse cx="44" cy="108" rx="18" ry="7" fill="#2B2118" opacity="0.12"/>
  <path d="M28 86c-10 8-14 22-6 30 10 2 18-4 22-12" fill="${wing}" stroke="#2B2118" stroke-width="3.5" stroke-linejoin="round"/>
  <ellipse cx="58" cy="88" rx="34" ry="30" fill="${body}" stroke="#2B2118" stroke-width="3.5"/>
  <ellipse cx="50" cy="92" rx="18" ry="16" fill="${wing}" stroke="#2B2118" stroke-width="3"/>
  <path d="M26 92c-8 2-16 14-8 24" fill="none" stroke="#2B2118" stroke-width="3.5" stroke-linecap="round"/>
  <circle cx="88" cy="54" r="26" fill="${face}" stroke="#2B2118" stroke-width="3.5"/>
  <path d="M74 38c-2-16 8-28 16-18l-4 18z" fill="#F5C542" stroke="#2B2118" stroke-width="3" stroke-linejoin="round"/>
  <path d="M86 32c2-20 16-28 20-14l-10 18z" fill="#EE9B0F" stroke="#2B2118" stroke-width="3" stroke-linejoin="round"/>
  <path d="M98 36c10-16 24-14 22 0l-14 12z" fill="#F5C542" stroke="#2B2118" stroke-width="3" stroke-linejoin="round"/>
  <ellipse cx="98" cy="62" rx="9" ry="8" fill="${cheek}"/>
  <circle cx="96" cy="50" r="5" fill="#2B2118"/>
  <circle cx="97.6" cy="48.4" r="1.6" fill="#FFF4E0"/>
  <path d="M112 56l16 6-16 7z" fill="#EE9B0F" stroke="#2B2118" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M50 116c6 4 14 4 20 0" fill="none" stroke="#EE9B0F" stroke-width="3.5" stroke-linecap="round"/>
</svg>`;
}

const greyBird = calopsita({});
const lutinoBird = calopsita({
  body: "#F6E7B8",
  wing: "#E8D07A",
  face: "#FFF6E4",
  cheek: "#E85D4C",
});
const tealBird = calopsita({
  body: "#D8D0C4",
  wing: "#C4BDB0",
  face: "#F3EBDD",
  cheek: "#EE9B0F",
});

const mango = `
<svg viewBox="0 0 120 120" aria-hidden="true">
  <path d="M70 22c8-10 22-8 24 4" fill="none" stroke="#2BA86A" stroke-width="5" stroke-linecap="round"/>
  <ellipse cx="58" cy="70" rx="32" ry="38" fill="#EE9B0F" stroke="#2B2118" stroke-width="3"/>
  <ellipse cx="46" cy="62" rx="10" ry="16" fill="#FFD56A" opacity="0.7"/>
  <path d="M78 20c-8 8-10 18-8 24" fill="#2BA86A" stroke="#2B2118" stroke-width="2"/>
</svg>`;

const flor = `
<svg viewBox="0 0 120 120" aria-hidden="true">
  <ellipse cx="60" cy="38" rx="12" ry="20" fill="#E85D4C" stroke="#2B2118" stroke-width="2" transform="rotate(0 60 60)"/>
  <ellipse cx="60" cy="38" rx="12" ry="20" fill="#E85D4C" stroke="#2B2118" stroke-width="2" transform="rotate(72 60 60)"/>
  <ellipse cx="60" cy="38" rx="12" ry="20" fill="#E85D4C" stroke="#2B2118" stroke-width="2" transform="rotate(144 60 60)"/>
  <ellipse cx="60" cy="38" rx="12" ry="20" fill="#E85D4C" stroke="#2B2118" stroke-width="2" transform="rotate(216 60 60)"/>
  <ellipse cx="60" cy="38" rx="12" ry="20" fill="#E85D4C" stroke="#2B2118" stroke-width="2" transform="rotate(288 60 60)"/>
  <circle cx="60" cy="60" r="14" fill="#FFD56A" stroke="#2B2118" stroke-width="2.5"/>
  <path d="M60 86v22" stroke="#2BA86A" stroke-width="5" stroke-linecap="round"/>
</svg>`;

const sun = `
<svg viewBox="0 0 120 120" aria-hidden="true">
  <circle cx="60" cy="60" r="22" fill="#FFD56A" stroke="#2B2118" stroke-width="3"/>
  ${[0, 45, 90, 135, 180, 225, 270, 315]
    .map((deg) => {
      const a = (deg * Math.PI) / 180;
      const x1 = 60 + Math.cos(a) * 30;
      const y1 = 60 + Math.sin(a) * 30;
      const x2 = 60 + Math.cos(a) * 46;
      const y2 = 60 + Math.sin(a) * 46;
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#EE9B0F" stroke-width="6" stroke-linecap="round"/>`;
    })
    .join("")}
  <circle cx="52" cy="56" r="3.5" fill="#2B2118"/>
  <circle cx="68" cy="56" r="3.5" fill="#2B2118"/>
  <path d="M50 70c6 8 14 8 20 0" fill="none" stroke="#2B2118" stroke-width="3" stroke-linecap="round"/>
</svg>`;

const star = `
<svg viewBox="0 0 120 120" aria-hidden="true">
  <polygon points="60,10 72,44 108,46 80,70 90,104 60,84 30,104 40,70 12,46 48,44"
    fill="#FFD56A" stroke="#2B2118" stroke-width="3" stroke-linejoin="round"/>
</svg>`;

const leaf = `
<svg viewBox="0 0 80 120" aria-hidden="true">
  <path d="M40 112 C12 80 8 40 40 8 C72 40 68 80 40 112Z" fill="#2BA86A" stroke="#2B2118" stroke-width="3"/>
  <path d="M40 108 C40 70 40 40 40 16" fill="none" stroke="#1E7A4C" stroke-width="3" stroke-linecap="round"/>
</svg>`;

function tile(letter, bg) {
  return `<div class="tile" style="background:${bg}">${letter}</div>`;
}

const css = `
@font-face {
  font-family: Fredoka;
  src: url(data:font/ttf;base64,${FONT_BOLD}) format("truetype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: Fredoka;
  src: url(data:font/ttf;base64,${FONT_MED}) format("truetype");
  font-weight: 500;
  font-style: normal;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
.frame {
  position: relative;
  overflow: hidden;
  font-family: Fredoka, ui-rounded, system-ui, sans-serif;
  color: #2B2118;
  background:
    radial-gradient(900px 420px at 50% -8%, #FFD56A 0%, rgba(255,213,106,0) 62%),
    linear-gradient(180deg, #FFF4E0 0%, #FFE7B8 56%, #D8F0C8 56.4%, #9FD37A 100%);
}
.og { width: 1200px; height: 630px; }
.banner { width: 1200px; height: 264px; background:
    radial-gradient(700px 220px at 28% -20%, #FFD56A 0%, rgba(255,213,106,0) 70%),
    linear-gradient(180deg, #FFF4E0 0%, #FFE7B8 68%, #C8E8A8 68.4%, #8FCB6A 100%);
}
.hills {
  position: absolute; left: 0; right: 0; bottom: 0; height: 42%;
  pointer-events: none;
}
.hills svg { width: 100%; height: 100%; display: block; }
.prop { position: absolute; line-height: 0; }
.prop svg { width: 100%; height: 100%; display: block; overflow: visible; }
.lockup {
  position: absolute;
  left: 50%;
  top: 44%;
  transform: translate(-50%, -58%);
  text-align: center;
  width: 64%;
  z-index: 6;
}
.title {
  margin: 0;
  font-weight: 700;
  font-size: 118px;
  line-height: 0.92;
  letter-spacing: 0.01em;
  color: #EE9B0F;
  -webkit-text-stroke: 10px #2B2118;
  paint-order: stroke fill;
  text-shadow: 0 8px 0 #C46A08;
  padding: 16px 20px 6px;
}
.tag {
  margin: 2px 0 0;
  font-weight: 500;
  font-size: 32px;
  letter-spacing: 0.06em;
  color: #148F8A;
  -webkit-text-stroke: 5px #2B2118;
  paint-order: stroke fill;
}
.bird {
  position: absolute;
  z-index: 5;
  filter: drop-shadow(0 10px 0 rgba(43,33,24,0.12));
}
.tile {
  width: 86px;
  height: 86px;
  border-radius: 22px;
  border: 4px solid #2B2118;
  color: #FFF4E0;
  font-weight: 700;
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 7px 0 #2B2118;
  transform: rotate(var(--rot, 0deg));
}
.banner-lockup {
  position: absolute;
  left: 44px;
  top: 22px;
  width: 520px;
  z-index: 5;
}
.banner-lockup .title {
  font-size: 72px;
  padding: 0 8px 0 0;
  text-align: left;
  text-shadow: 0 5px 0 #C46A08;
  -webkit-text-stroke: 7px #2B2118;
}
.banner-lockup .tag {
  font-size: 24px;
  margin-top: 0;
  text-align: left;
  padding-left: 6px;
  -webkit-text-stroke: 4px #2B2118;
}
`;

const hillsSvg = `
<svg viewBox="0 0 1200 280" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 110 C160 40 280 150 430 90 C580 30 690 130 840 80 C980 36 1100 100 1200 70 L1200 280 L0 280 Z" fill="#C8E89A"/>
  <path d="M0 168 C180 110 300 200 470 150 C650 96 780 190 960 150 C1080 124 1150 160 1200 148 L1200 280 L0 280 Z" fill="#2BA86A"/>
  <path d="M0 214 C220 176 360 240 560 200 C760 160 920 230 1200 196 L1200 280 L0 280 Z" fill="#148F8A"/>
</svg>`;

const ogHtml = `<!doctype html>
<html><head><meta charset="utf-8"><style>${css}</style></head>
<body>
<div class="frame og">
  <div class="hills">${hillsSvg}</div>
  <div class="prop" style="left:28px;top:10px;width:150px;height:150px;transform:rotate(-18deg)">${leaf}</div>
  <div class="prop" style="left:118px;top:-18px;width:118px;height:118px;transform:rotate(22deg)">${leaf}</div>
  <div class="prop" style="right:18px;top:4px;width:128px;height:128px">${sun}</div>
  <div class="prop" style="right:140px;top:-20px;width:104px;height:104px;transform:rotate(36deg)">${leaf}</div>
  <div class="prop" style="left:46px;top:128px;width:100px;height:100px;transform:rotate(-12deg)">${flor}</div>
  <div class="prop" style="left:196px;top:36px;width:86px;height:86px">${star}</div>
  <div class="prop" style="right:40px;top:122px;width:110px;height:110px">${flor}</div>
  <div class="prop" style="left:24px;top:250px;width:140px;height:140px;transform:rotate(-8deg)">${mango}</div>
  <div class="lockup">
    <h1 class="title">ABC-kids</h1>
    <p class="tag">by SanderVerse</p>
  </div>
  <div class="bird" style="left:40px;top:300px;width:300px;height:300px;transform:scaleX(-1)">${lutinoBird}</div>
  <div class="bird" style="right:18px;top:268px;width:320px;height:320px">${greyBird}</div>
  <div class="prop" style="left:330px;top:500px;--rot:-8deg">${tile("A", "#148F8A")}</div>
  <div class="prop" style="left:430px;top:516px;--rot:6deg">${tile("B", "#E85D4C")}</div>
  <div class="prop" style="left:530px;top:500px;--rot:-4deg">${tile("C", "#2BA86A")}</div>
  <div class="prop" style="right:338px;top:38px;width:72px;height:72px;transform:rotate(18deg)">${star}</div>
</div>
</body></html>`;

const bannerHtml = `<!doctype html>
<html><head><meta charset="utf-8"><style>${css}</style></head>
<body>
<div class="frame banner">
  <div class="hills" style="height:38%">${hillsSvg}</div>
  <div class="prop" style="left:430px;top:-40px;width:86px;height:86px;transform:rotate(-24deg)">${leaf}</div>
  <div class="prop" style="right:16px;top:-22px;width:90px;height:90px">${sun}</div>
  <div class="banner-lockup">
    <h1 class="title">ABC-kids</h1>
    <p class="tag">by SanderVerse</p>
  </div>
  <div class="bird" style="left:560px;top:-6px;width:210px;height:210px">${greyBird}</div>
  <div class="bird" style="left:720px;top:16px;width:180px;height:180px;transform:scaleX(-1)">${lutinoBird}</div>
  <div class="prop" style="left:890px;top:18px;width:78px;height:78px;transform:rotate(-8deg)">${mango}</div>
  <div class="prop" style="left:970px;top:8px;width:70px;height:70px">${flor}</div>
  <div class="prop" style="left:1048px;top:22px;width:64px;height:64px">${star}</div>
  <div class="prop" style="left:890px;top:148px;--rot:-8deg;transform:scale(0.7)">${tile("A", "#148F8A")}</div>
  <div class="prop" style="left:970px;top:164px;--rot:10deg;transform:scale(0.7)">${tile("B", "#E85D4C")}</div>
  <div class="prop" style="left:1054px;top:148px;--rot:-6deg;transform:scale(0.7)">${tile("C", "#2BA86A")}</div>
</div>
</body></html>`;

async function shot(html, width, height, outPng) {
  const browser = await chromium.launch({
    executablePath: CHROME,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 2,
  });
  await page.setContent(html, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(80);
  await page.screenshot({ path: outPng, type: "png", omitBackground: false });
  await browser.close();
}

function toJpg(png, jpg, w, h) {
  execFileSync(
    "ffmpeg",
    ["-y", "-i", png, "-vf", `scale=${w}:${h}`, "-q:v", "4", "-f", "image2", jpg],
    { stdio: "inherit" },
  );
}

mkdirSync("/workspace/.grok", { recursive: true });
await shot(ogHtml, 1200, 630, "/workspace/.grok/og-raw.png");
toJpg("/workspace/.grok/og-raw.png", "/workspace/.grok/og.jpg.tmp", 1200, 630);
await shot(bannerHtml, 1200, 264, "/workspace/.grok/banner-raw.png");
toJpg("/workspace/.grok/banner-raw.png", "/workspace/.grok/x-banner.jpg.tmp", 1200, 264);
console.log("rendered");
