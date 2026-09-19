import { chromium } from "playwright";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";

const FONT_BOLD = readFileSync("/workspace/.grok/fonts/Fredoka-Bold.ttf").toString("base64");
const FONT_MED = readFileSync("/workspace/.grok/fonts/Fredoka-Medium.ttf").toString("base64");
const CHROME =
  "/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell";

const bee = `
<svg viewBox="0 0 120 120" aria-hidden="true">
  <ellipse cx="78" cy="42" rx="22" ry="12" fill="#F7FBFF" opacity="0.9" transform="rotate(-18 78 42)"/>
  <ellipse cx="86" cy="52" rx="18" ry="10" fill="#E8F4FF" opacity="0.85" transform="rotate(12 86 52)"/>
  <ellipse cx="56" cy="68" rx="32" ry="28" fill="#F5C542"/>
  <ellipse cx="56" cy="68" rx="32" ry="28" fill="none" stroke="#2B2118" stroke-width="3"/>
  <path d="M28 62h56" stroke="#2B2118" stroke-width="7" stroke-linecap="round"/>
  <path d="M30 76h52" stroke="#2B2118" stroke-width="7" stroke-linecap="round"/>
  <circle cx="44" cy="50" r="16" fill="#F5C542" stroke="#2B2118" stroke-width="3"/>
  <circle cx="39" cy="48" r="3.2" fill="#2B2118"/>
  <circle cx="50" cy="48" r="3.2" fill="#2B2118"/>
  <circle cx="38.2" cy="47" r="1" fill="#fff"/>
  <circle cx="49.2" cy="47" r="1" fill="#fff"/>
  <path d="M40 55c3 3 8 3 11 0" fill="none" stroke="#2B2118" stroke-width="2" stroke-linecap="round"/>
  <path d="M34 36c-2-12 6-18 12-14" fill="none" stroke="#2B2118" stroke-width="3" stroke-linecap="round"/>
  <path d="M46 34c2-12 10-16 14-10" fill="none" stroke="#2B2118" stroke-width="3" stroke-linecap="round"/>
  <circle cx="32" cy="22" r="4" fill="#148F8A" stroke="#2B2118" stroke-width="2"/>
  <circle cx="60" cy="20" r="4" fill="#148F8A" stroke="#2B2118" stroke-width="2"/>
  <path d="M86 74c10 4 14 14 8 20" fill="none" stroke="#2B2118" stroke-width="3" stroke-linecap="round"/>
  <ellipse cx="56" cy="88" rx="10" ry="5" fill="#148F8A" stroke="#2B2118" stroke-width="2"/>
</svg>`;

const mango = `
<svg viewBox="0 0 120 120" aria-hidden="true">
  <path d="M70 22c8-10 22-8 24 4" fill="none" stroke="#2BA86A" stroke-width="5" stroke-linecap="round"/>
  <ellipse cx="58" cy="70" rx="32" ry="38" fill="#EE9B0F" stroke="#2B2118" stroke-width="3"/>
  <ellipse cx="46" cy="62" rx="10" ry="16" fill="#FFD56A" opacity="0.7"/>
  <path d="M78 20c-8 8-10 18-8 24" fill="#2BA86A" stroke="#2B2118" stroke-width="2"/>
</svg>`;

const auyama = `
<svg viewBox="0 0 120 120" aria-hidden="true">
  <ellipse cx="60" cy="70" rx="40" ry="32" fill="#EE9B0F" stroke="#2B2118" stroke-width="3"/>
  <path d="M40 46c0 28 4 48 4 48M60 40v56M80 46c0 28-4 48-4 48" fill="none" stroke="#C46A08" stroke-width="3"/>
  <rect x="54" y="24" width="12" height="18" rx="4" fill="#2BA86A" stroke="#2B2118" stroke-width="2"/>
  <path d="M66 28c10-2 14 6 10 12" fill="#2BA86A" stroke="#2B2118" stroke-width="2"/>
</svg>`;

const arepa = `
<svg viewBox="0 0 120 120" aria-hidden="true">
  <ellipse cx="60" cy="64" rx="42" ry="30" fill="#F4C14A" stroke="#2B2118" stroke-width="3"/>
  <ellipse cx="60" cy="64" rx="28" ry="18" fill="#FFE08A"/>
  <circle cx="48" cy="60" r="3" fill="#C46A08"/>
  <circle cx="70" cy="70" r="2.5" fill="#C46A08"/>
  <circle cx="62" cy="54" r="2" fill="#C46A08"/>
</svg>`;

const uva = `
<svg viewBox="0 0 120 120" aria-hidden="true">
  <path d="M60 18c2 10 8 16 16 18" fill="none" stroke="#2BA86A" stroke-width="4" stroke-linecap="round"/>
  <circle cx="48" cy="54" r="14" fill="#7B4BB4" stroke="#2B2118" stroke-width="2.5"/>
  <circle cx="72" cy="54" r="14" fill="#8E5CC8" stroke="#2B2118" stroke-width="2.5"/>
  <circle cx="60" cy="72" r="14" fill="#6A3DA0" stroke="#2B2118" stroke-width="2.5"/>
  <circle cx="42" cy="76" r="12" fill="#7B4BB4" stroke="#2B2118" stroke-width="2.5"/>
  <circle cx="78" cy="76" r="12" fill="#8E5CC8" stroke="#2B2118" stroke-width="2.5"/>
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

const cotorra = `
<svg viewBox="0 0 120 120" aria-hidden="true">
  <ellipse cx="58" cy="70" rx="28" ry="32" fill="#2BA86A" stroke="#2B2118" stroke-width="3"/>
  <path d="M40 70c-16 4-22 22-10 30" fill="#148F8A" stroke="#2B2118" stroke-width="3"/>
  <circle cx="72" cy="48" r="20" fill="#3DCC8A" stroke="#2B2118" stroke-width="3"/>
  <circle cx="78" cy="44" r="4" fill="#2B2118"/>
  <circle cx="79.5" cy="43" r="1.3" fill="#fff"/>
  <path d="M90 50c12 2 14 12 4 16l-12-4z" fill="#EE9B0F" stroke="#2B2118" stroke-width="2.5"/>
  <path d="M44 36c-2-16 10-26 22-18" fill="#E85D4C" stroke="#2B2118" stroke-width="3"/>
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
    linear-gradient(180deg, #FFF4E0 0%, #FFE7B8 58%, #D8F0C8 58.4%, #9FD37A 100%);
}
.og { width: 1200px; height: 630px; }
.banner { width: 1200px; height: 264px; background:
    radial-gradient(700px 220px at 28% -20%, #FFD56A 0%, rgba(255,213,106,0) 70%),
    linear-gradient(180deg, #FFF4E0 0%, #FFE7B8 72%, #C8E8A8 72.4%, #8FCB6A 100%);
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
  top: 46%;
  transform: translate(-50%, -54%);
  text-align: center;
  width: 78%;
  z-index: 4;
}
.title {
  margin: 0;
  font-weight: 700;
  font-size: 124px;
  line-height: 0.92;
  letter-spacing: 0.02em;
  color: #EE9B0F;
  -webkit-text-stroke: 10px #2B2118;
  paint-order: stroke fill;
  text-shadow: 0 8px 0 #C46A08;
  padding: 18px 28px 8px;
}
.tag {
  margin: 4px 0 0;
  font-weight: 500;
  font-size: 34px;
  letter-spacing: 0.04em;
  color: #148F8A;
  -webkit-text-stroke: 5px #2B2118;
  paint-order: stroke fill;
}
.bee-hero {
  position: absolute;
  left: 50%;
  top: 54%;
  width: 300px;
  height: 300px;
  transform: translate(-42%, -12%);
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
  left: 48px;
  top: 28px;
  width: 520px;
  z-index: 5;
}
.banner-lockup .title {
  font-size: 78px;
  padding: 0 8px 0 0;
  text-align: left;
  text-shadow: 0 5px 0 #C46A08;
  -webkit-text-stroke: 7px #2B2118;
}
.banner-lockup .tag {
  font-size: 26px;
  margin-top: 2px;
  text-align: left;
  padding-left: 6px;
  -webkit-text-stroke: 4px #2B2118;
}
.banner-bee {
  position: absolute;
  left: 540px;
  top: -8px;
  width: 250px;
  height: 250px;
  z-index: 4;
  filter: drop-shadow(0 6px 0 rgba(43,33,24,0.12));
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
  <div class="prop" style="left:36px;top:18px;width:150px;height:150px;transform:rotate(-18deg)">${leaf}</div>
  <div class="prop" style="left:110px;top:-10px;width:120px;height:120px;transform:rotate(22deg)">${leaf}</div>
  <div class="prop" style="right:20px;top:8px;width:132px;height:132px">${sun}</div>
  <div class="prop" style="right:150px;top:-16px;width:110px;height:110px;transform:rotate(40deg)">${leaf}</div>
  <div class="prop" style="left:70px;top:118px;width:108px;height:108px;transform:rotate(-12deg)">${flor}</div>
  <div class="prop" style="left:210px;top:42px;width:92px;height:92px">${star}</div>
  <div class="prop" style="left:42px;top:250px;width:150px;height:150px;transform:rotate(-8deg)">${mango}</div>
  <div class="prop" style="right:36px;top:118px;width:128px;height:128px">${uva}</div>
  <div class="prop" style="right:28px;top:268px;width:150px;height:150px;transform:rotate(10deg)">${auyama}</div>
  <div class="prop" style="left:28px;top:456px;width:130px;height:130px">${arepa}</div>
  <div class="prop" style="right:170px;top:470px;width:120px;height:120px">${cotorra}</div>
  <div class="prop" style="left:188px;top:430px">${tile("A", "#148F8A")}</div>
  <div class="prop" style="right:248px;top:86px;--rot:8deg">${tile("B", "#E85D4C")}</div>
  <div class="prop" style="right:48px;top:430px;--rot:-10deg">${tile("M", "#2BA86A")}</div>
  <div class="prop" style="left:318px;top:508px;--rot:6deg">${tile("E", "#4AADDC")}</div>
  <div class="lockup">
    <h1 class="title">Abejita</h1>
    <p class="tag">Aprende jugando</p>
  </div>
  <div class="bee-hero">${bee}</div>
</div>
</body></html>`;

const bannerHtml = `<!doctype html>
<html><head><meta charset="utf-8"><style>${css}</style></head>
<body>
<div class="frame banner">
  <div class="hills" style="height:38%">${hillsSvg}</div>
  <div class="prop" style="left:430px;top:-36px;width:90px;height:90px;transform:rotate(-24deg)">${leaf}</div>
  <div class="prop" style="right:24px;top:-18px;width:96px;height:96px">${sun}</div>
  <div class="banner-lockup">
    <h1 class="title">Abejita</h1>
    <p class="tag">Aprende jugando</p>
  </div>
  <div class="banner-bee">${bee}</div>
  <div class="prop" style="left:760px;top:18px;width:92px;height:92px;transform:rotate(-8deg)">${mango}</div>
  <div class="prop" style="left:860px;top:8px;width:80px;height:80px">${flor}</div>
  <div class="prop" style="left:930px;top:86px;width:100px;height:100px">${auyama}</div>
  <div class="prop" style="left:1040px;top:12px;width:86px;height:86px">${uva}</div>
  <div class="prop" style="left:790px;top:148px;--rot:-8deg;transform:scale(0.72)">${tile("A", "#148F8A")}</div>
  <div class="prop" style="left:870px;top:168px;--rot:10deg;transform:scale(0.72)">${tile("B", "#E85D4C")}</div>
  <div class="prop" style="left:1048px;top:150px;--rot:-6deg;transform:scale(0.72)">${tile("M", "#2BA86A")}</div>
  <div class="prop" style="left:1128px;top:70px;width:70px;height:70px">${star}</div>
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
  execFileSync("ffmpeg", [
    "-y",
    "-i",
    png,
    "-vf",
    `scale=${w}:${h}`,
    "-q:v",
    "4",
    "-f",
    "image2",
    jpg,
  ], { stdio: "inherit" });
}

mkdirSync("/workspace/.grok", { recursive: true });
await shot(ogHtml, 1200, 630, "/workspace/.grok/og-raw.png");
toJpg("/workspace/.grok/og-raw.png", "/workspace/.grok/og.jpg.tmp", 1200, 630);
await shot(bannerHtml, 1200, 264, "/workspace/.grok/banner-raw.png");
toJpg("/workspace/.grok/banner-raw.png", "/workspace/.grok/x-banner.jpg.tmp", 1200, 264);
console.log("rendered");
