import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plus, i as Settings2, n as Volume2, o as ArrowLeft, t as VolumeX } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BplHRc9s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Svg({ className, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 120 120",
		className,
		role: title ? "img" : "presentation",
		"aria-label": title,
		children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: title }) : null, children]
	});
}
function BeeArt({ className, variant = "sol" }) {
	const body = variant === "luna" ? "#F4C14A" : "#F5C542";
	const scarf = variant === "luna" ? "#E85D4C" : "#148F8A";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Abejita",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "78",
				cy: "42",
				rx: "22",
				ry: "12",
				fill: "#F7FBFF",
				opacity: "0.9",
				transform: "rotate(-18 78 42)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "86",
				cy: "52",
				rx: "18",
				ry: "10",
				fill: "#E8F4FF",
				opacity: "0.85",
				transform: "rotate(12 86 52)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "56",
				cy: "68",
				rx: "32",
				ry: "28",
				fill: body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "56",
				cy: "68",
				rx: "32",
				ry: "28",
				fill: "none",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M28 62h56",
				stroke: "#2B2118",
				strokeWidth: "7",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M30 76h52",
				stroke: "#2B2118",
				strokeWidth: "7",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "44",
				cy: "50",
				r: "16",
				fill: body,
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "39",
				cy: "48",
				r: "3.2",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "48",
				r: "3.2",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "38.2",
				cy: "47",
				r: "1",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "49.2",
				cy: "47",
				r: "1",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 55c3 3 8 3 11 0",
				fill: "none",
				stroke: "#2B2118",
				strokeWidth: "2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M34 36c-2-12 6-18 12-14",
				fill: "none",
				stroke: "#2B2118",
				strokeWidth: "3",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M46 34c2-12 10-16 14-10",
				fill: "none",
				stroke: "#2B2118",
				strokeWidth: "3",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "22",
				r: "4",
				fill: scarf,
				stroke: "#2B2118",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "20",
				r: "4",
				fill: scarf,
				stroke: "#2B2118",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M86 74c10 4 14 14 8 20",
				fill: "none",
				stroke: "#2B2118",
				strokeWidth: "3",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "56",
				cy: "88",
				rx: "10",
				ry: "5",
				fill: scarf,
				stroke: "#2B2118",
				strokeWidth: "2"
			})
		]
	});
}
function SunArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Sol",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "60",
				r: "22",
				fill: "#FFD56A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			Array.from({ length: 8 }).map((_, i) => {
				const a = i * Math.PI / 4;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: 60 + Math.cos(a) * 30,
					y1: 60 + Math.sin(a) * 30,
					x2: 60 + Math.cos(a) * 46,
					y2: 60 + Math.sin(a) * 46,
					stroke: "#EE9B0F",
					strokeWidth: "6",
					strokeLinecap: "round"
				}, i);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "52",
				cy: "56",
				r: "3.5",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "68",
				cy: "56",
				r: "3.5",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M50 70c6 8 14 8 20 0",
				fill: "none",
				stroke: "#2B2118",
				strokeWidth: "3",
				strokeLinecap: "round"
			})
		]
	});
}
function StarArt({ className, fill = "#FFD56A" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		className,
		title: "Estrella",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "60,10 72,44 108,46 80,70 90,104 60,84 30,104 40,70 12,46 48,44",
			fill,
			stroke: "#2B2118",
			strokeWidth: "3",
			strokeLinejoin: "round"
		})
	});
}
function MangoArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Mango",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M70 22c8-10 22-8 24 4",
				fill: "none",
				stroke: "#2BA86A",
				strokeWidth: "5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "58",
				cy: "70",
				rx: "32",
				ry: "38",
				fill: "#EE9B0F",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "46",
				cy: "62",
				rx: "10",
				ry: "16",
				fill: "#FFD56A",
				opacity: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M78 20c-8 8-10 18-8 24",
				fill: "#2BA86A",
				stroke: "#2B2118",
				strokeWidth: "2"
			})
		]
	});
}
function AuyamaArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Auyama",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "70",
				rx: "40",
				ry: "32",
				fill: "#EE9B0F",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 46c0 28 4 48 4 48M60 40v56M80 46c0 28-4 48-4 48",
				fill: "none",
				stroke: "#C46A08",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "54",
				y: "24",
				width: "12",
				height: "18",
				rx: "4",
				fill: "#2BA86A",
				stroke: "#2B2118",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M66 28c10-2 14 6 10 12",
				fill: "#2BA86A",
				stroke: "#2B2118",
				strokeWidth: "2"
			})
		]
	});
}
function ArepaArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Arepa",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "64",
				rx: "42",
				ry: "30",
				fill: "#F4C14A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "64",
				rx: "28",
				ry: "18",
				fill: "#FFE08A"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "48",
				cy: "60",
				r: "3",
				fill: "#C46A08"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "70",
				cy: "70",
				r: "2.5",
				fill: "#C46A08"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "62",
				cy: "54",
				r: "2",
				fill: "#C46A08"
			})
		]
	});
}
function UvaArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Uva",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 18c2 10 8 16 16 18",
				fill: "none",
				stroke: "#2BA86A",
				strokeWidth: "4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "48",
				cy: "54",
				r: "14",
				fill: "#7B4BB4",
				stroke: "#2B2118",
				strokeWidth: "2.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "72",
				cy: "54",
				r: "14",
				fill: "#8E5CC8",
				stroke: "#2B2118",
				strokeWidth: "2.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "72",
				r: "14",
				fill: "#6A3DA0",
				stroke: "#2B2118",
				strokeWidth: "2.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "42",
				cy: "76",
				r: "12",
				fill: "#7B4BB4",
				stroke: "#2B2118",
				strokeWidth: "2.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "78",
				cy: "76",
				r: "12",
				fill: "#8E5CC8",
				stroke: "#2B2118",
				strokeWidth: "2.5"
			})
		]
	});
}
function FlorArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Flor",
		children: [
			[
				0,
				72,
				144,
				216,
				288
			].map((deg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "38",
				rx: "12",
				ry: "20",
				fill: "#E85D4C",
				stroke: "#2B2118",
				strokeWidth: "2",
				transform: `rotate(${deg} 60 60)`
			}, deg)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "60",
				r: "14",
				fill: "#FFD56A",
				stroke: "#2B2118",
				strokeWidth: "2.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 86v22",
				stroke: "#2BA86A",
				strokeWidth: "5",
				strokeLinecap: "round"
			})
		]
	});
}
function CotorraArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Cotorra",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "58",
				cy: "70",
				rx: "28",
				ry: "32",
				fill: "#2BA86A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 70c-16 4-22 22-10 30",
				fill: "#148F8A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "72",
				cy: "48",
				r: "20",
				fill: "#3DCC8A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "78",
				cy: "44",
				r: "4",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "79.5",
				cy: "43",
				r: "1.3",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M90 50c12 2 14 12 4 16l-12-4z",
				fill: "#EE9B0F",
				stroke: "#2B2118",
				strokeWidth: "2.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M44 36c-2-16 10-26 22-18",
				fill: "#E85D4C",
				stroke: "#2B2118",
				strokeWidth: "3"
			})
		]
	});
}
function AraraArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Arara",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "54",
				cy: "72",
				rx: "26",
				ry: "30",
				fill: "#4AADDC",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M36 68c-18 10-16 32 2 34",
				fill: "#E85D4C",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "74",
				cy: "50",
				r: "20",
				fill: "#EE9B0F",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "80",
				cy: "46",
				r: "4",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M92 52c14 0 16 12 4 16l-14-2z",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 32c0-16 18-22 26-10",
				fill: "#4AADDC",
				stroke: "#2B2118",
				strokeWidth: "3"
			})
		]
	});
}
function AraguatoArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Araguato",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "78",
				rx: "30",
				ry: "26",
				fill: "#C46A08",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "48",
				r: "24",
				fill: "#E08A3C",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "38",
				cy: "46",
				r: "12",
				fill: "#E08A3C",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "82",
				cy: "46",
				r: "12",
				fill: "#E08A3C",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "58",
				rx: "12",
				ry: "10",
				fill: "#F4C14A"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "52",
				cy: "44",
				r: "3.2",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "68",
				cy: "44",
				r: "3.2",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M84 86c16 8 22 2 24-8",
				fill: "none",
				stroke: "#C46A08",
				strokeWidth: "6",
				strokeLinecap: "round"
			})
		]
	});
}
function LapaArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Lapa",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "78",
				rx: "34",
				ry: "22",
				fill: "#8B6914",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "78",
				cy: "54",
				rx: "22",
				ry: "18",
				fill: "#C9A27A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "86",
				cy: "50",
				r: "3",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M98 56c8 2 8 8 2 10",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "42",
				cy: "70",
				r: "8",
				fill: "#5C4310"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "66",
				r: "8",
				fill: "#5C4310"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "54",
				cy: "84",
				r: "7",
				fill: "#5C4310"
			})
		]
	});
}
function LeaoArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Leão",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "62",
				r: "38",
				fill: "#EE9B0F",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "64",
				r: "24",
				fill: "#FFD56A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "60",
				r: "3.4",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "70",
				cy: "60",
				r: "3.4",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "72",
				rx: "6",
				ry: "4",
				fill: "#E85D4C"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M54 78c4 4 8 4 12 0",
				fill: "none",
				stroke: "#2B2118",
				strokeWidth: "2.5"
			})
		]
	});
}
function GatoArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Gato",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32 44l10-24 12 20z",
				fill: "#F4C14A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M66 40l12-24 10 24z",
				fill: "#F4C14A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "70",
				rx: "32",
				ry: "28",
				fill: "#FFD56A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "48",
				cy: "66",
				r: "4",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "72",
				cy: "66",
				r: "4",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 72v8",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M48 84c8 8 16 8 24 0",
				fill: "none",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M22 70h20M78 70h20",
				stroke: "#2B2118",
				strokeWidth: "2"
			})
		]
	});
}
function PerroArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Perro",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "72",
				rx: "34",
				ry: "28",
				fill: "#C9A27A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "32",
				cy: "58",
				rx: "12",
				ry: "18",
				fill: "#8B6914",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "88",
				cy: "58",
				rx: "12",
				ry: "18",
				fill: "#8B6914",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "70",
				r: "3.4",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "70",
				cy: "70",
				r: "3.4",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "82",
				rx: "7",
				ry: "5",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "92",
				cy: "92",
				r: "8",
				fill: "#C9A27A",
				stroke: "#2B2118",
				strokeWidth: "3"
			})
		]
	});
}
function PatoArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Pato",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "56",
				cy: "74",
				rx: "34",
				ry: "24",
				fill: "#FFD56A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "84",
				cy: "50",
				r: "18",
				fill: "#FFD56A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "90",
				cy: "46",
				r: "3",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M100 52c14 2 16 12 2 14l-16-4z",
				fill: "#EE9B0F",
				stroke: "#2B2118",
				strokeWidth: "2.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "40",
				cy: "98",
				rx: "12",
				ry: "6",
				fill: "#EE9B0F",
				stroke: "#2B2118",
				strokeWidth: "2"
			})
		]
	});
}
function TucanArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Tucán",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "48",
				cy: "70",
				rx: "26",
				ry: "30",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "70",
				cy: "50",
				r: "18",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "76",
				cy: "46",
				r: "4",
				fill: "#FFD56A"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "76",
				cy: "46",
				r: "2",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M86 52c28-4 34 16 8 22l-22-6z",
				fill: "#EE9B0F",
				stroke: "#2B2118",
				strokeWidth: "2.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M86 58h22",
				stroke: "#E85D4C",
				strokeWidth: "6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "40",
				cy: "78",
				rx: "10",
				ry: "14",
				fill: "#4AADDC"
			})
		]
	});
}
function MonoArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Mono",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "38",
				cy: "48",
				r: "16",
				fill: "#8B6914",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "82",
				cy: "48",
				r: "16",
				fill: "#8B6914",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "62",
				r: "28",
				fill: "#C9A27A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "70",
				rx: "16",
				ry: "14",
				fill: "#F4C14A"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "56",
				r: "3.2",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "70",
				cy: "56",
				r: "3.2",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M52 78c6 6 12 6 16 0",
				fill: "none",
				stroke: "#2B2118",
				strokeWidth: "3"
			})
		]
	});
}
function OsoArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Oso",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "34",
				cy: "40",
				r: "16",
				fill: "#8B6914",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "86",
				cy: "40",
				r: "16",
				fill: "#8B6914",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "66",
				r: "34",
				fill: "#A07038",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "76",
				rx: "16",
				ry: "12",
				fill: "#E8C99A"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "48",
				cy: "60",
				r: "4",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "72",
				cy: "60",
				r: "4",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "72",
				rx: "6",
				ry: "4",
				fill: "#2B2118"
			})
		]
	});
}
function OvelhaArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Ovelha",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "64",
				r: "18",
				fill: "#FFF6E8",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "80",
				cy: "64",
				r: "18",
				fill: "#FFF6E8",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "50",
				r: "20",
				fill: "#FFF6E8",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "78",
				r: "20",
				fill: "#FFF6E8",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "92",
				cy: "50",
				r: "14",
				fill: "#F4C14A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "96",
				cy: "46",
				r: "2.4",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "108",
				cy: "52",
				rx: "8",
				ry: "5",
				fill: "#2B2118"
			})
		]
	});
}
function SapoArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Sapo",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "74",
				rx: "38",
				ry: "26",
				fill: "#2BA86A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "42",
				cy: "50",
				r: "14",
				fill: "#3DCC8A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "78",
				cy: "50",
				r: "14",
				fill: "#3DCC8A",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "42",
				cy: "50",
				r: "5",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "78",
				cy: "50",
				r: "5",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M48 82c8 8 16 8 24 0",
				fill: "none",
				stroke: "#2B2118",
				strokeWidth: "3"
			})
		]
	});
}
function VacaArt({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		className,
		title: "Vaca",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "72",
				rx: "36",
				ry: "28",
				fill: "#FFF6E8",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "62",
				r: "12",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "78",
				cy: "80",
				r: "10",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "86",
				cy: "48",
				r: "16",
				fill: "#FFF6E8",
				stroke: "#2B2118",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M76 36l-6-16 12 8M96 38l8-16 2 14",
				fill: "#F4C14A",
				stroke: "#2B2118",
				strokeWidth: "2.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "82",
				cy: "46",
				r: "2.6",
				fill: "#2B2118"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "98",
				cy: "52",
				rx: "8",
				ry: "5",
				fill: "#E85D4C",
				stroke: "#2B2118",
				strokeWidth: "2"
			})
		]
	});
}
var ART = {
	bee: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeeArt, { ...p }),
	sol: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SunArt, { ...p }),
	estrella: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarArt, { ...p }),
	mango: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MangoArt, { ...p }),
	auyama: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuyamaArt, { ...p }),
	arepa: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArepaArt, { ...p }),
	uva: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UvaArt, { ...p }),
	flor: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlorArt, { ...p }),
	cotorra: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CotorraArt, { ...p }),
	arara: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AraraArt, { ...p }),
	araguato: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AraguatoArt, { ...p }),
	lapa: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LapaArt, { ...p }),
	leao: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaoArt, { ...p }),
	gato: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GatoArt, { ...p }),
	perro: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PerroArt, { ...p }),
	pato: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatoArt, { ...p }),
	tucan: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TucanArt, { ...p }),
	mono: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonoArt, { ...p }),
	oso: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OsoArt, { ...p }),
	ovelha: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OvelhaArt, { ...p }),
	sapo: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SapoArt, { ...p }),
	vaca: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VacaArt, { ...p })
};
function ArtById({ id, className }) {
	const Comp = ART[id] ?? StarArt;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, { className });
}
function ShapeArt({ id, className }) {
	const fill = id === "circle" ? "#E85D4C" : id === "square" ? "#148F8A" : id === "triangle" ? "#EE9B0F" : id === "rectangle" ? "#2BA86A" : "#4AADDC";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 120 120",
		className,
		role: "img",
		"aria-label": id,
		children: [
			id === "circle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "60",
				r: "38",
				fill,
				stroke: "#2B2118",
				strokeWidth: "4"
			}),
			id === "square" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "24",
				y: "24",
				width: "72",
				height: "72",
				rx: "8",
				fill,
				stroke: "#2B2118",
				strokeWidth: "4"
			}),
			id === "triangle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "60,18 106,98 14,98",
				fill,
				stroke: "#2B2118",
				strokeWidth: "4",
				strokeLinejoin: "round"
			}),
			id === "rectangle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "14",
				y: "34",
				width: "92",
				height: "52",
				rx: "10",
				fill,
				stroke: "#2B2118",
				strokeWidth: "4"
			}),
			id === "star" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "60,12 72,44 108,46 80,70 90,104 60,84 30,104 40,70 12,46 48,44",
				fill,
				stroke: "#2B2118",
				strokeWidth: "4",
				strokeLinejoin: "round"
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid() {
	return crypto.randomUUID?.() ?? `id-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
function todayKey() {
	const d = /* @__PURE__ */ new Date();
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function shuffle(arr) {
	const a = [...arr];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
function clamp(n, min, max) {
	return Math.max(min, Math.min(max, n));
}
function formatMinutes(sec) {
	const m = Math.floor(sec / 60);
	const s = sec % 60;
	return `${m}:${String(s).padStart(2, "0")}`;
}
/** Strip diacritics and keep A–Z / Ñ for letter games. */
function lettersOfName(name) {
	const chars = [...name.toUpperCase().normalize("NFD").replace(/N\u0303/g, "Ñ").replace(/\p{M}/gu, "").replace(/Ç/g, "C").replace(/[^A-ZÑ]/g, "")];
	const VOWELS = /* @__PURE__ */ new Set([
		"A",
		"E",
		"I",
		"O",
		"U"
	]);
	return {
		display: name.trim(),
		letters: chars,
		unique: [...new Set(chars)],
		vowels: chars.filter((c) => VOWELS.has(c)),
		consonants: chars.filter((c) => !VOWELS.has(c)),
		isVowel: (c) => VOWELS.has(c)
	};
}
var tones = {
	primary: "bg-primary text-foam",
	accent: "bg-accent text-ink",
	cream: "bg-foam text-ink",
	coral: "bg-coral text-foam",
	leaf: "bg-leaf text-foam",
	sky: "bg-sky text-ink",
	ink: "bg-ink text-foam"
};
function KidButton({ tone = "primary", className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: cn("inline-flex min-h-14 items-center justify-center gap-2 rounded-[22px] px-6", "font-display text-xl font-semibold tracking-tight", "shadow-[0_6px_0_color-mix(in_oklab,var(--color-ink)_18%,transparent)]", "transition-transform duration-150 ease-out", "active:not-disabled:translate-y-[3px] active:not-disabled:scale-[0.98] active:not-disabled:shadow-none", "disabled:opacity-50", "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink", tones[tone], className),
		...props,
		children
	});
}
var dict = {
	"es-VE": {
		appName: "Abejita",
		tagline: "Aprende jugando, chamo y chama",
		chooseLang: "¿Cómo quieres jugar?",
		spanish: "Español de Venezuela",
		portuguese: "Português",
		continue: "¡Vamos!",
		newChild: "Niño o niña nuevo",
		whoPlays: "¿Quién va a jugar?",
		parental: "Ajustes parentales",
		greeting: "¡Naguará, bienvenido!",
		whatsYourName: "¿Cómo te llamas?",
		namePlaceholder: "Tu nombre",
		iAm: "Yo soy…",
		boy: "Niño",
		girl: "Niña",
		yourLanguage: "Idioma",
		startPlaying: "¡A jugar!",
		helloName: "¡Hola, {name}!",
		hiNameBoy: "¡Hola chamo {name}!",
		hiNameGirl: "¡Hola chama {name}!",
		pickGame: "Elige un juego",
		memory: "Memoria",
		memoryHint: "Encuentra las parejas",
		counting: "Conteo de números",
		countingHint: "Cuenta del 1 al 10",
		letters: "Mi nombre y las letras",
		lettersHint: "Las letras de tu nombre",
		shapes: "Figuras geométricas",
		shapesHint: "Círculo, estrella y más",
		animals: "Animales y su letra",
		animalsHint: "¿Con qué letra empieza?",
		progress: "Progreso",
		medals: "Medallas",
		average: "Promedio",
		findPairs: "Encuentra las parejas",
		almost: "Casi… ¡inténtalo otra vez!",
		roundN: "Ronda {n}",
		howMany: "¿Cuántos hay?",
		countThem: "Toca cada uno para contar",
		tapObjects: "¡Cuenta tocando!",
		lettersOfYourName: "Las letras de {name}",
		vowels: "Vocales",
		consonants: "Consonantes",
		buildYourName: "Arma tu nombre",
		tapLetter: "Toca una letra, luego el huequito",
		vowelOf: "{letter} es vocal",
		consonantOf: "{letter} es consonante",
		letterWord: "{letter} de {word}",
		putVowels: "Pon las vocales aquí",
		putConsonants: "Pon las consonantes aquí",
		next: "Siguiente",
		tapTheShape: "Toca el {shape}",
		findThe: "¿Cuál es el {shape}?",
		circle: "círculo",
		square: "cuadrado",
		triangle: "triángulo",
		rectangle: "rectángulo",
		star: "estrella",
		whatLetter: "¿Con qué letra empieza?",
		letterOf: "{letter} de {name}",
		parentalTitle: "Zona de mamá y papá",
		unlockQ: "¿Cuánto es {a} + {b}?",
		unlockHint: "Resuelve la suma para entrar",
		screenTime: "Tiempo de pantalla",
		minutes: "{n} min",
		unlimited: "Sin límite",
		language: "Idioma del juego",
		progressTitle: "Progreso de {name}",
		playTime: "Tiempo jugado",
		sessions: "Sesiones",
		switchChild: "Cambiar de niño o niña",
		close: "Cerrar",
		restEyes: "¡A descansar la vista!",
		timeToRest: "El tiempito de pantalla se acabó. Estira el cuerpo, mira por la ventana y vuelve luego.",
		okParent: "Abrir ajustes",
		resetToday: "Reiniciar el tiempo de hoy",
		back: "Volver",
		wellDone: "¡Muy bien!",
		naguara: "¡Naguará!",
		chevere: "¡Qué chévere!",
		playAgain: "Jugar otra vez",
		locked: "Bloqueado",
		mute: "Silencio",
		unmute: "Sonido",
		deleteProfile: "Quitar perfil",
		confirmDelete: "¿Quitar a {name} de este aparato?",
		cancel: "Cancelar",
		save: "Guardar",
		noProfiles: "Todavía no hay perfiles. ¡Crea el primero!",
		praise1: "¡Naguará, {name}!",
		praise2: "¡Qué chévere, {kid}!",
		praise3: "¡Eso es, campeón!",
		praise3g: "¡Eso es, campeona!",
		praise4: "¡Bravo!",
		praise5: "¡Lo lograste!",
		tryAgain: "Casi, {kid}. Prueba otra vez.",
		match: "¡Pareja!",
		complete: "¡Módulo completado!",
		firstPlayMedal: "Primera partida",
		nameSpelledMedal: "Armé mi nombre",
		memoryStarMedal: "Memoria de oro",
		counterMedal: "Cuento hasta 10",
		shaperMedal: "Maestro de figuras",
		animalFriendMedal: "Amigo de los animales",
		explorerMedal: "Explorador",
		allRounderMedal: "Abejita estrella",
		wrongSum: "Esa no es. Intenta otra suma.",
		dailyTime: "Hoy",
		remaining: "Quedan {n} min",
		speakOn: "Voz encendida",
		stepLetters: "Conoce tus letras",
		stepSort: "Vocales y consonantes",
		stepBuild: "Arma tu nombre",
		emptySlot: "aquí",
		of10: "{n} de 10",
		objects: "objetos"
	},
	pt: {
		appName: "Abejita",
		tagline: "Aprende brincando, menino e menina",
		chooseLang: "Como você quer jogar?",
		spanish: "Español de Venezuela",
		portuguese: "Português",
		continue: "Vamos!",
		newChild: "Novo menino ou menina",
		whoPlays: "Quem vai jogar?",
		parental: "Ajustes dos pais",
		greeting: "Olá, bem-vindo!",
		whatsYourName: "Como você se chama?",
		namePlaceholder: "Seu nome",
		iAm: "Eu sou…",
		boy: "Menino",
		girl: "Menina",
		yourLanguage: "Idioma",
		startPlaying: "Jogar!",
		helloName: "Olá, {name}!",
		hiNameBoy: "Olá menino {name}!",
		hiNameGirl: "Olá menina {name}!",
		pickGame: "Escolha um jogo",
		memory: "Memória",
		memoryHint: "Encontre os pares",
		counting: "Contagem de números",
		countingHint: "Conte de 1 a 10",
		letters: "Meu nome e as letras",
		lettersHint: "As letras do seu nome",
		shapes: "Formas geométricas",
		shapesHint: "Círculo, estrela e mais",
		animals: "Animais e a letra",
		animalsHint: "Com qual letra começa?",
		progress: "Progresso",
		medals: "Medalhas",
		average: "Média",
		findPairs: "Encontre os pares",
		almost: "Quase… tenta de novo!",
		roundN: "Rodada {n}",
		howMany: "Quantos tem?",
		countThem: "Toque em cada um para contar",
		tapObjects: "Conte tocando!",
		lettersOfYourName: "As letras de {name}",
		vowels: "Vogais",
		consonants: "Consoantes",
		buildYourName: "Monte o seu nome",
		tapLetter: "Toque numa letra e depois no espaço",
		vowelOf: "{letter} é vogal",
		consonantOf: "{letter} é consoante",
		letterWord: "{letter} de {word}",
		putVowels: "Coloque as vogais aqui",
		putConsonants: "Coloque as consoantes aqui",
		next: "Seguinte",
		tapTheShape: "Toque no {shape}",
		findThe: "Qual é o {shape}?",
		circle: "círculo",
		square: "quadrado",
		triangle: "triângulo",
		rectangle: "retângulo",
		star: "estrela",
		whatLetter: "Com qual letra começa?",
		letterOf: "{letter} de {name}",
		parentalTitle: "Área da mamãe e do papai",
		unlockQ: "Quanto é {a} + {b}?",
		unlockHint: "Resolva a soma para entrar",
		screenTime: "Tempo de tela",
		minutes: "{n} min",
		unlimited: "Sem limite",
		language: "Idioma do jogo",
		progressTitle: "Progresso de {name}",
		playTime: "Tempo jogado",
		sessions: "Sessões",
		switchChild: "Trocar de criança",
		close: "Fechar",
		restEyes: "Hora de descansar os olhos!",
		timeToRest: "O tempinho de tela acabou. Alongue o corpo, olhe pela janela e volte depois.",
		okParent: "Abrir ajustes",
		resetToday: "Reiniciar o tempo de hoje",
		back: "Voltar",
		wellDone: "Muito bem!",
		naguara: "Muito bem!",
		chevere: "Que legal!",
		playAgain: "Jogar de novo",
		locked: "Bloqueado",
		mute: "Silêncio",
		unmute: "Som",
		deleteProfile: "Remover perfil",
		confirmDelete: "Remover {name} deste aparelho?",
		cancel: "Cancelar",
		save: "Salvar",
		noProfiles: "Ainda não há perfis. Crie o primeiro!",
		praise1: "Muito bem, {name}!",
		praise2: "Isso aí, {kid}!",
		praise3: "Mandou bem, campeão!",
		praise3g: "Mandou bem, campeã!",
		praise4: "Bravo!",
		praise5: "Você conseguiu!",
		tryAgain: "Quase, {kid}. Tenta de novo.",
		match: "Par!",
		complete: "Módulo completo!",
		firstPlayMedal: "Primeira partida",
		nameSpelledMedal: "Montei o meu nome",
		memoryStarMedal: "Memória de ouro",
		counterMedal: "Conto até 10",
		shaperMedal: "Mestre das formas",
		animalFriendMedal: "Amigo dos animais",
		explorerMedal: "Explorador",
		allRounderMedal: "Abejita estrela",
		wrongSum: "Essa não é. Tente outra soma.",
		dailyTime: "Hoje",
		remaining: "Restam {n} min",
		speakOn: "Voz ligada",
		stepLetters: "Conheça suas letras",
		stepSort: "Vogais e consoantes",
		stepBuild: "Monte o seu nome",
		emptySlot: "aqui",
		of10: "{n} de 10",
		objects: "objetos"
	}
};
function t(lang, key, vars) {
	let s = dict[lang][key] ?? dict["es-VE"][key] ?? key;
	if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
	return s;
}
function kidWord(lang, gender) {
	if (lang === "pt") return gender === "boy" ? "menino" : "menina";
	return gender === "boy" ? "chamo" : "chama";
}
function hiName(lang, gender, name) {
	return t(lang, gender === "boy" ? "hiNameBoy" : "hiNameGirl", { name });
}
var MEDAL_LABEL = {
	"first-play": "firstPlayMedal",
	"name-spelled": "nameSpelledMedal",
	"memory-star": "memoryStarMedal",
	counter: "counterMedal",
	shaper: "shaperMedal",
	"animal-friend": "animalFriendMedal",
	explorer: "explorerMedal",
	"all-rounder": "allRounderMedal"
};
var MODULE_LABEL = {
	memory: "memory",
	counting: "counting",
	letters: "letters",
	shapes: "shapes",
	animals: "animals"
};
var PRAISE_KEYS = [
	"praise1",
	"praise2",
	"naguara",
	"chevere",
	"praise4",
	"praise5",
	"wellDone"
];
function randomPraise(lang, name, gender) {
	const key = PRAISE_KEYS[Math.floor(Math.random() * PRAISE_KEYS.length)];
	return t(lang, key, {
		name,
		kid: kidWord(lang, gender)
	});
}
var SPEECH_LANG = {
	"es-VE": "es-VE",
	pt: "pt-BR"
};
var MODULES = [
	"memory",
	"counting",
	"letters",
	"shapes",
	"animals"
];
var EMPTY_PROGRESS = {
	memory: 0,
	counting: 0,
	letters: 0,
	shapes: 0,
	animals: 0
};
var EMPTY_ROUNDS = {
	memory: 0,
	counting: 0,
	letters: 0,
	shapes: 0,
	animals: 0
};
var SAVE_KEY = "abejita-save-v1";
var defaultPersisted = () => ({
	version: 1,
	lang: "es-VE",
	profiles: [],
	activeId: null,
	screenLimitMin: 20,
	dayKey: todayKey(),
	dayUsedSec: 0,
	muted: false
});
function migrate(raw) {
	const base = defaultPersisted();
	if (!raw || typeof raw !== "object") return base;
	const s = raw;
	const day = s.dayKey === todayKey() ? s.dayUsedSec ?? 0 : 0;
	return {
		...base,
		...s,
		version: 1,
		lang: s.lang === "pt" ? "pt" : "es-VE",
		profiles: Array.isArray(s.profiles) ? s.profiles.map((p) => ({
			...p,
			progress: {
				...EMPTY_PROGRESS,
				...p.progress
			},
			rounds: {
				...EMPTY_ROUNDS,
				...p.rounds
			},
			medals: p.medals ?? [],
			sessions: p.sessions ?? [],
			playTimeSec: p.playTimeSec ?? 0
		})) : [],
		screenLimitMin: typeof s.screenLimitMin === "number" ? s.screenLimitMin : 20,
		dayKey: todayKey(),
		dayUsedSec: day,
		muted: Boolean(s.muted)
	};
}
function loadPersisted() {
	if (typeof window === "undefined") return defaultPersisted();
	try {
		const raw = localStorage.getItem(SAVE_KEY);
		if (!raw) return defaultPersisted();
		return migrate(JSON.parse(raw));
	} catch {
		return defaultPersisted();
	}
}
function savePersisted(state) {
	if (typeof window === "undefined") return;
	try {
		const prev = localStorage.getItem(SAVE_KEY);
		if (prev) localStorage.setItem(`${SAVE_KEY}-bak`, prev);
		localStorage.setItem(SAVE_KEY, JSON.stringify(state));
	} catch {}
}
function persistSlice(s) {
	return {
		version: s.version,
		lang: s.lang,
		profiles: s.profiles,
		activeId: s.activeId,
		screenLimitMin: s.screenLimitMin,
		dayKey: s.dayKey,
		dayUsedSec: s.dayUsedSec,
		muted: s.muted
	};
}
var useApp = create((set, get) => ({
	...loadPersisted(),
	screen: "welcome",
	hydrated: false,
	timeLocked: false,
	parentalOpen: false,
	hydrate: () => {
		const loaded = loadPersisted();
		const day = loaded.dayKey === todayKey() ? loaded.dayUsedSec : 0;
		const locked = loaded.screenLimitMin > 0 && day >= loaded.screenLimitMin * 60;
		const hasProfiles = loaded.profiles.length > 0;
		set({
			...loaded,
			dayKey: todayKey(),
			dayUsedSec: day,
			hydrated: true,
			timeLocked: locked,
			screen: hasProfiles ? "profiles" : "welcome"
		});
	},
	persist: () => savePersisted(persistSlice(get())),
	setLang: (lang) => {
		const activeId = get().activeId;
		set((s) => ({
			lang,
			profiles: s.profiles.map((p) => p.id === activeId ? {
				...p,
				lang
			} : p)
		}));
		get().persist();
	},
	setMuted: (muted) => {
		set({ muted });
		get().persist();
	},
	setScreen: (screen) => set({
		screen,
		parentalOpen: screen === "parental" ? true : get().parentalOpen
	}),
	setScreenLimit: (min) => {
		set({
			screenLimitMin: min,
			timeLocked: min > 0 && get().dayUsedSec >= min * 60
		});
		get().persist();
	},
	createProfile: (name, gender, lang) => {
		const profile = {
			id: uid(),
			name: name.trim(),
			gender,
			lang,
			createdAt: Date.now(),
			playTimeSec: 0,
			progress: { ...EMPTY_PROGRESS },
			medals: [],
			sessions: [],
			rounds: { ...EMPTY_ROUNDS }
		};
		set((s) => ({
			profiles: [...s.profiles, profile],
			activeId: profile.id,
			lang,
			screen: "home"
		}));
		get().persist();
		return profile;
	},
	selectProfile: (id) => {
		const p = get().profiles.find((x) => x.id === id);
		if (!p) return;
		set({
			activeId: id,
			lang: p.lang,
			screen: "home"
		});
		get().persist();
	},
	deleteProfile: (id) => {
		set((s) => {
			const profiles = s.profiles.filter((p) => p.id !== id);
			return {
				profiles,
				activeId: s.activeId === id ? profiles[0]?.id ?? null : s.activeId,
				screen: profiles.length ? "profiles" : "welcome"
			};
		});
		get().persist();
	},
	active: () => {
		const { profiles, activeId } = get();
		return profiles.find((p) => p.id === activeId) ?? null;
	},
	addProgress: (module, amount) => {
		const id = get().activeId;
		if (!id) return;
		set((s) => ({ profiles: s.profiles.map((p) => {
			if (p.id !== id) return p;
			const progress = {
				...p.progress,
				[module]: clamp(p.progress[module] + amount, 0, 100)
			};
			const medals = [...p.medals];
			if (!medals.includes("first-play")) medals.push("first-play");
			if (progress[module] >= 100) {
				const m = {
					memory: "memory-star",
					counting: "counter",
					letters: "name-spelled",
					shapes: "shaper",
					animals: "animal-friend"
				}[module];
				if (m && !medals.includes(m)) medals.push(m);
			}
			if (MODULES.filter((m) => progress[m] >= 50).length >= 3 && !medals.includes("explorer")) medals.push("explorer");
			if (MODULES.every((m) => progress[m] >= 100) && !medals.includes("all-rounder")) medals.push("all-rounder");
			return {
				...p,
				progress,
				medals
			};
		}) }));
		get().persist();
	},
	completeRound: (module) => {
		const id = get().activeId;
		if (!id) return;
		set((s) => ({ profiles: s.profiles.map((p) => p.id === id ? {
			...p,
			rounds: {
				...p.rounds,
				[module]: (p.rounds[module] ?? 0) + 1
			}
		} : p) }));
		get().addProgress(module, 20);
	},
	awardMedal: (medal) => {
		const id = get().activeId;
		if (!id) return;
		set((s) => ({ profiles: s.profiles.map((p) => p.id === id && !p.medals.includes(medal) ? {
			...p,
			medals: [...p.medals, medal]
		} : p) }));
		get().persist();
	},
	logSession: (module, durationSec) => {
		const id = get().activeId;
		if (!id || durationSec < 2) return;
		set((s) => ({ profiles: s.profiles.map((p) => p.id === id ? {
			...p,
			playTimeSec: p.playTimeSec + durationSec,
			sessions: [{
				at: Date.now(),
				durationSec,
				module
			}, ...p.sessions].slice(0, 20)
		} : p) }));
		get().persist();
	},
	tickSecond: () => {
		const s = get();
		if (s.timeLocked) return;
		if (![
			"home",
			"memory",
			"counting",
			"letters",
			"shapes",
			"animals"
		].includes(s.screen)) return;
		const next = s.dayUsedSec + 1;
		const locked = s.screenLimitMin > 0 && next >= s.screenLimitMin * 60;
		const id = s.activeId;
		set({
			dayUsedSec: next,
			timeLocked: locked,
			profiles: s.profiles.map((p) => p.id === id ? {
				...p,
				playTimeSec: p.playTimeSec + 1
			} : p)
		});
		if (next % 15 === 0) get().persist();
	},
	unlockTime: () => {
		set({
			timeLocked: false,
			dayUsedSec: 0,
			dayKey: todayKey()
		});
		get().persist();
	},
	setParentalOpen: (open) => set({
		parentalOpen: open,
		screen: open ? "parental" : get().activeId ? "home" : "welcome"
	})
}));
var ctx = null;
var master = null;
var unlocked = false;
function ensureCtx() {
	if (typeof window === "undefined") return null;
	const AC = window.AudioContext || window.webkitAudioContext;
	if (!AC) return null;
	if (!ctx) {
		ctx = new AC({ latencyHint: "interactive" });
		master = ctx.createGain();
		master.gain.value = .35;
		master.connect(ctx.destination);
	}
	return ctx;
}
function unlockAudio() {
	const c = ensureCtx();
	if (!c) return;
	if (c.state === "suspended") c.resume();
	unlocked = true;
}
function setMuted(muted) {
	if (!master) ensureCtx();
	if (master) master.gain.setTargetAtTime(muted ? 0 : .35, ctx?.currentTime ?? 0, .02);
}
function beep(freq, dur, type = "sine", gain = .2, when = 0) {
	const c = ensureCtx();
	if (!c || !master) return;
	const t0 = c.currentTime + when;
	const osc = c.createOscillator();
	const g = c.createGain();
	osc.type = type;
	osc.frequency.setValueAtTime(freq, t0);
	g.gain.setValueAtTime(1e-4, t0);
	g.gain.exponentialRampToValueAtTime(gain, t0 + .012);
	g.gain.exponentialRampToValueAtTime(1e-4, t0 + dur);
	osc.connect(g);
	g.connect(master);
	osc.start(t0);
	osc.stop(t0 + dur + .02);
}
var sfx = {
	tap() {
		if (!unlocked) return;
		beep(720 + Math.random() * 40, .08, "triangle", .12);
	},
	flip() {
		if (!unlocked) return;
		beep(420, .1, "square", .08);
		beep(640, .12, "sine", .1, .04);
	},
	match() {
		if (!unlocked) return;
		beep(523, .12, "sine", .16);
		beep(659, .14, "sine", .16, .08);
		beep(784, .2, "sine", .16, .16);
	},
	wrong() {
		if (!unlocked) return;
		beep(220, .16, "triangle", .12);
		beep(180, .2, "sine", .1, .08);
	},
	win() {
		if (!unlocked) return;
		[
			523,
			659,
			784,
			1046
		].forEach((f, i) => beep(f, .18, "sine", .18, i * .1));
	},
	pop() {
		if (!unlocked) return;
		beep(880 + Math.random() * 80, .07, "sine", .1);
	}
};
function speak(text, lang, muted) {
	if (muted || typeof window === "undefined" || !window.speechSynthesis) return;
	const u = new SpeechSynthesisUtterance(text);
	u.lang = SPEECH_LANG[lang];
	u.rate = .92;
	u.pitch = 1.15;
	const voices = window.speechSynthesis.getVoices();
	const codes = lang === "pt" ? [
		"pt-BR",
		"pt-PT",
		"pt"
	] : [
		"es-VE",
		"es-US",
		"es-MX",
		"es-ES",
		"es"
	];
	for (const code of codes) {
		const v = voices.find((voice) => voice.lang.toLowerCase().startsWith(code.toLowerCase()));
		if (v) {
			u.voice = v;
			break;
		}
	}
	window.speechSynthesis.cancel();
	u.onend = () => {};
	window.speechSynthesis.speak(u);
}
if (typeof window !== "undefined") document.addEventListener("visibilitychange", () => {
	if (document.visibilityState === "visible") {
		const c = ctx;
		if (c?.state === "suspended") c.resume();
	}
});
function Scene({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("scene-bg relative min-h-dvh overflow-x-hidden", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-28 hill-band" }), children]
	});
}
function TopBar({ title, onBack, showParent = true }) {
	const lang = useApp((s) => s.lang);
	const muted = useApp((s) => s.muted);
	const setMuted$1 = useApp((s) => s.setMuted);
	const setScreen = useApp((s) => s.setScreen);
	const variant = useApp((s) => s.profiles.find((p) => p.id === s.activeId))?.gender === "girl" ? "luna" : "sol";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex items-center gap-2 px-3 pt-3 pb-1 sm:px-5",
		children: [
			onBack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onBack,
				className: "grid size-12 shrink-0 place-items-center rounded-full bg-foam text-ink shadow-[0_4px_0_color-mix(in_oklab,var(--color-ink)_14%,transparent)] active:translate-y-0.5",
				"aria-label": t(lang, "back"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-6" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeeArt, {
				className: "size-12 anim-float",
				variant
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 flex-1",
				children: title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "truncate font-display text-2xl font-semibold leading-tight",
					children: title
				}) : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-12 place-items-center rounded-full bg-foam text-ink shadow-[0_4px_0_color-mix(in_oklab,var(--color-ink)_14%,transparent)]",
				"aria-label": muted ? t(lang, "unmute") : t(lang, "mute"),
				onClick: () => {
					unlockAudio();
					setMuted$1(!muted);
					setMuted(!muted);
				},
				children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-6" })
			}),
			showParent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-12 place-items-center rounded-full bg-foam text-ink shadow-[0_4px_0_color-mix(in_oklab,var(--color-ink)_14%,transparent)]",
				"aria-label": t(lang, "parental"),
				onClick: () => {
					unlockAudio();
					setScreen("parental");
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "size-6" })
			}) : null
		]
	});
}
function ProgressBar({ value, tone = "primary" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-3 w-full overflow-hidden rounded-full bg-ink/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-full rounded-full transition-[width] duration-500 ease-out", {
				primary: "bg-primary",
				accent: "bg-accent",
				coral: "bg-coral",
				leaf: "bg-leaf",
				sky: "bg-sky"
			}[tone]),
			style: { width: `${Math.min(100, Math.max(0, value))}%` }
		})
	});
}
function BigLetter({ letter, active, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("grid size-16 place-items-center rounded-[18px] font-display text-3xl font-semibold sm:size-20 sm:text-4xl", "shadow-[0_5px_0_color-mix(in_oklab,var(--color-ink)_16%,transparent)]", "transition-transform duration-150 active:scale-[0.96]", active ? "bg-accent text-ink" : "bg-foam text-ink"),
		children: letter
	});
}
function SpeechBubble({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative mx-auto max-w-md rounded-[24px] bg-foam px-5 py-3 text-center font-display text-lg font-medium text-ink shadow-[0_6px_0_color-mix(in_oklab,var(--color-ink)_10%,transparent)]",
		children: text
	});
}
function WinBanner({ title, onAgain, onHome, againLabel, homeLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "anim-pop kid-card mx-auto mt-4 max-w-md p-6 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-3xl font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex flex-col gap-3 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KidButton, {
				className: "flex-1",
				onClick: onAgain,
				children: againLabel
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KidButton, {
				tone: "cream",
				className: "flex-1",
				onClick: onHome,
				children: homeLabel
			})]
		})]
	});
}
function WelcomeScreen() {
	const lang = useApp((s) => s.lang);
	const setLang = useApp((s) => s.setLang);
	const setScreen = useApp((s) => s.setScreen);
	const profiles = useApp((s) => s.profiles);
	const muted = useApp((s) => s.muted);
	const pick = (next) => {
		unlockAudio();
		setLang(next);
		speak(t(next, "greeting"), next, muted);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh max-w-lg flex-col items-center px-5 pb-10 pt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeeArt, { className: "size-36 anim-float sm:size-44" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl",
				children: t(lang, "appName")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-center text-lg text-muted",
				children: t(lang, "tagline")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 font-display text-xl font-medium",
				children: t(lang, "chooseLang")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid w-full gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangCard, {
					active: lang === "es-VE",
					flag: [
						"#FFD100",
						"#0038A8",
						"#CF142B"
					],
					label: t(lang, "spanish"),
					onClick: () => pick("es-VE")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangCard, {
					active: lang === "pt",
					flag: [
						"#009C3B",
						"#FFDF00",
						"#002776"
					],
					label: t(lang, "portuguese"),
					onClick: () => pick("pt")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KidButton, {
				className: "mt-8 w-full",
				onClick: () => {
					unlockAudio();
					setScreen(profiles.length ? "profiles" : "onboarding");
				},
				children: t(lang, "continue")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-4 min-h-12 text-base font-semibold text-muted underline-offset-4 hover:underline",
				onClick: () => {
					unlockAudio();
					setScreen("parental");
				},
				children: t(lang, "parental")
			})
		]
	}) });
}
function LangCard({ active, flag, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("flex min-h-20 items-center gap-4 rounded-[24px] bg-foam px-4 text-left", "shadow-[0_6px_0_color-mix(in_oklab,var(--color-ink)_12%,transparent)]", "transition-transform duration-150 active:scale-[0.98]", active && "ring-4 ring-primary"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex h-12 w-16 overflow-hidden rounded-[12px] shadow-sm",
			children: flag.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "h-full flex-1",
				style: { background: c }
			}, c))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-2xl font-semibold",
			children: label
		})]
	});
}
function OnboardingScreen() {
	const lang = useApp((s) => s.lang);
	const setLang = useApp((s) => s.setLang);
	const setScreen = useApp((s) => s.setScreen);
	const createProfile = useApp((s) => s.createProfile);
	const muted = useApp((s) => s.muted);
	const profiles = useApp((s) => s.profiles);
	const [name, setName] = (0, import_react.useState)("");
	const [gender, setGender] = (0, import_react.useState)("boy");
	const canGo = name.trim().length >= 2;
	const start = () => {
		if (!canGo) return;
		unlockAudio();
		const p = createProfile(name, gender, lang);
		speak(t(lang, gender === "boy" ? "hiNameBoy" : "hiNameGirl", { name: p.name }), lang, muted);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
		title: t(lang, "newChild"),
		onBack: () => setScreen(profiles.length ? "profiles" : "welcome"),
		showParent: false
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-5 pb-12 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeeArt, {
				className: "mx-auto size-28 anim-float",
				variant: gender === "girl" ? "luna" : "sol"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "mt-4 block font-display text-2xl font-semibold",
				htmlFor: "kid-name",
				children: t(lang, "whatsYourName")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "kid-name",
				autoComplete: "off",
				value: name,
				onChange: (e) => setName(e.target.value.slice(0, 18)),
				placeholder: t(lang, "namePlaceholder"),
				className: "mt-3 h-16 w-full rounded-[22px] border-0 bg-foam px-5 font-display text-2xl font-semibold text-ink shadow-[0_6px_0_color-mix(in_oklab,var(--color-ink)_12%,transparent)] outline-none placeholder:text-muted focus:ring-4 focus:ring-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-7 font-display text-2xl font-semibold",
				children: t(lang, "iAm")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenderCard, {
					label: t(lang, "boy"),
					active: gender === "boy",
					variant: "sol",
					onClick: () => setGender("boy")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenderCard, {
					label: t(lang, "girl"),
					active: gender === "girl",
					variant: "luna",
					onClick: () => setGender("girl")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-7 font-display text-2xl font-semibold",
				children: t(lang, "yourLanguage")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangMini, {
					active: lang === "es-VE",
					label: "ES",
					onClick: () => setLang("es-VE")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangMini, {
					active: lang === "pt",
					label: "PT",
					onClick: () => setLang("pt")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KidButton, {
				className: "mt-8 w-full",
				disabled: !canGo,
				onClick: start,
				children: t(lang, "startPlaying")
			})
		]
	})] });
}
function GenderCard({ label, active, variant, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("flex min-h-28 flex-col items-center justify-center gap-1 rounded-[24px] bg-foam p-3", "shadow-[0_6px_0_color-mix(in_oklab,var(--color-ink)_12%,transparent)]", "transition-transform duration-150 active:scale-[0.98]", active && "ring-4 ring-primary"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeeArt, {
			className: "size-16",
			variant
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-xl font-semibold",
			children: label
		})]
	});
}
function LangMini({ active, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("min-h-14 rounded-[22px] bg-foam font-display text-xl font-semibold", "shadow-[0_5px_0_color-mix(in_oklab,var(--color-ink)_12%,transparent)]", active && "ring-4 ring-primary"),
		children: label
	});
}
function ProfilesScreen() {
	const lang = useApp((s) => s.lang);
	const profiles = useApp((s) => s.profiles);
	const selectProfile = useApp((s) => s.selectProfile);
	const setScreen = useApp((s) => s.setScreen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
		title: t(lang, "whoPlays"),
		onBack: () => setScreen("welcome")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-5 pb-12 pt-4",
		children: [profiles.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-center text-lg text-muted",
			children: t(lang, "noProfiles")
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3",
			children: profiles.map((p) => {
				const avg = Math.round(MODULES.reduce((a, m) => a + p.progress[m], 0) / MODULES.length);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						unlockAudio();
						selectProfile(p.id);
					},
					className: "flex w-full min-h-20 items-center gap-4 rounded-[24px] bg-foam px-4 text-left shadow-[0_6px_0_color-mix(in_oklab,var(--color-ink)_12%,transparent)] transition-transform duration-150 active:scale-[0.98]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeeArt, {
						className: "size-14",
						variant: p.gender === "girl" ? "luna" : "sol"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate font-display text-2xl font-semibold",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-muted",
							children: [
								t(p.lang, "average"),
								" ",
								avg,
								"%"
							]
						})]
					})]
				}) }, p.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KidButton, {
			tone: "accent",
			className: "mt-6 w-full",
			onClick: () => {
				unlockAudio();
				setScreen("onboarding");
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-6" }), t(lang, "newChild")]
		})]
	})] });
}
var AREAS = [
	{
		id: "memory",
		tone: "primary",
		hint: "memoryHint"
	},
	{
		id: "counting",
		tone: "accent",
		hint: "countingHint"
	},
	{
		id: "letters",
		tone: "coral",
		hint: "lettersHint"
	},
	{
		id: "shapes",
		tone: "leaf",
		hint: "shapesHint"
	},
	{
		id: "animals",
		tone: "sky",
		hint: "animalsHint"
	}
];
function HomeScreen() {
	const lang = useApp((s) => s.lang);
	const setScreen = useApp((s) => s.setScreen);
	const muted = useApp((s) => s.muted);
	const profile = useApp((s) => s.profiles.find((p) => p.id === s.activeId));
	(0, import_react.useEffect)(() => {
		if (!profile) return;
		speak(hiName(profile.lang, profile.gender, profile.name), profile.lang, muted);
	}, [profile?.id]);
	if (!profile) return null;
	const avg = Math.round(MODULES.reduce((a, m) => a + profile.progress[m], 0) / MODULES.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 pb-16 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeeArt, {
					className: "size-20 anim-float",
					variant: profile.gender === "girl" ? "luna" : "sol"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold leading-tight",
					children: hiName(lang, profile.gender, profile.name)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted",
					children: [
						t(lang, "average"),
						" ",
						avg,
						"% · ",
						profile.medals.length,
						" ",
						t(lang, "medals").toLowerCase()
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeechBubble, { text: t(lang, "pickGame") })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-3 sm:grid-cols-2",
				children: AREAS.map((area, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						unlockAudio();
						setScreen(area.id);
					},
					className: cn("anim-pop kid-card min-h-32 p-4 text-left transition-transform duration-150 active:scale-[0.98]", i === 0 && "sm:col-span-2"),
					style: { animationDelay: `${i * 70}ms` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-semibold",
							children: t(lang, area.id)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted",
							children: t(lang, area.hint)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
								value: profile.progress[area.id],
								tone: area.tone
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-right font-display text-sm tabular-nums text-muted",
							children: [profile.progress[area.id], "%"]
						})
					]
				}, area.id))
			})
		]
	})] });
}
var COLORS = [
	"#EE9B0F",
	"#148F8A",
	"#E85D4C",
	"#2BA86A",
	"#4AADDC",
	"#FFD56A"
];
function Confetti({ burstKey }) {
	const [pieces, setPieces] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		if (!burstKey) return;
		const next = Array.from({ length: 28 }, (_, i) => ({
			id: burstKey * 100 + i,
			left: Math.random() * 100,
			delay: Math.random() * .25,
			color: COLORS[i % COLORS.length],
			size: 8 + Math.random() * 10,
			dx: (Math.random() - .5) * 160,
			round: i % 3 === 0
		}));
		setPieces(next);
		const t = window.setTimeout(() => setPieces([]), 1400);
		return () => window.clearTimeout(t);
	}, [burstKey]);
	if (!pieces.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-50 overflow-hidden",
		"aria-hidden": "true",
		children: pieces.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute top-0",
			style: {
				left: `${p.left}%`,
				width: p.size,
				height: p.round ? p.size : p.size * .6,
				borderRadius: p.round ? 999 : 4,
				background: p.color,
				animation: `confetti-fall 1.2s ease-in ${p.delay}s both`,
				["--dx"]: `${p.dx}px`
			}
		}, p.id))
	});
}
var ANIMALS = [
	{
		id: "araguato",
		letter: "A",
		es: "Araguato",
		pt: "Bugio"
	},
	{
		id: "arara",
		letter: "A",
		es: "Guacamaya",
		pt: "Arara"
	},
	{
		id: "cotorra",
		letter: "C",
		es: "Cotorra",
		pt: "Caturrita"
	},
	{
		id: "lapa",
		letter: "L",
		es: "Lapa",
		pt: "Paca"
	},
	{
		id: "leao",
		letter: "L",
		es: "León",
		pt: "Leão"
	},
	{
		id: "gato",
		letter: "G",
		es: "Gato",
		pt: "Gato"
	},
	{
		id: "perro",
		letter: "P",
		es: "Perro",
		pt: "Cachorro"
	},
	{
		id: "pato",
		letter: "P",
		es: "Pato",
		pt: "Pato"
	},
	{
		id: "tucan",
		letter: "T",
		es: "Tucán",
		pt: "Tucano"
	},
	{
		id: "mono",
		letter: "M",
		es: "Mono",
		pt: "Macaco"
	},
	{
		id: "oso",
		letter: "O",
		es: "Oso",
		pt: "Urso"
	},
	{
		id: "ovelha",
		letter: "O",
		es: "Oveja",
		pt: "Ovelha"
	},
	{
		id: "sapo",
		letter: "S",
		es: "Sapo",
		pt: "Sapo"
	},
	{
		id: "vaca",
		letter: "V",
		es: "Vaca",
		pt: "Vaca"
	}
];
var ANIMALS_BY_LANG = {
	"es-VE": ANIMALS.filter((a) => [
		"araguato",
		"cotorra",
		"lapa",
		"gato",
		"perro",
		"tucan",
		"mono",
		"oso",
		"sapo",
		"vaca"
	].includes(a.id)),
	pt: ANIMALS.filter((a) => [
		"arara",
		"leao",
		"gato",
		"pato",
		"tucan",
		"mono",
		"ovelha",
		"sapo",
		"vaca",
		"oso"
	].includes(a.id))
};
var ALPHABET = {
	"es-VE": {
		A: "Auyama",
		B: "Banana",
		C: "Cotorra",
		D: "Danta",
		E: "Estrella",
		F: "Flor",
		G: "Gato",
		H: "Helado",
		I: "Iguana",
		J: "Jirafa",
		K: "Koala",
		L: "Lapa",
		M: "Mango",
		N: "Nube",
		Ñ: "Ñoño",
		O: "Oso",
		P: "Perro",
		Q: "Queso",
		R: "Rana",
		S: "Sol",
		T: "Tucán",
		U: "Uva",
		V: "Vaca",
		W: "Waffle",
		X: "Xilófono",
		Y: "Yoyo",
		Z: "Zapato"
	},
	pt: {
		A: "Abacaxi",
		B: "Bola",
		C: "Casa",
		D: "Dedo",
		E: "Elefante",
		F: "Flor",
		G: "Gato",
		H: "Hipopótamo",
		I: "Igreja",
		J: "Jacaré",
		K: "Kiwi",
		L: "Leão",
		M: "Macaco",
		N: "Navio",
		Ñ: "Nhoque",
		O: "Ovelha",
		P: "Pato",
		Q: "Queijo",
		R: "Rato",
		S: "Sapo",
		T: "Tucano",
		U: "Urso",
		V: "Vaca",
		W: "Waffle",
		X: "Xícara",
		Y: "Ioiô",
		Z: "Zebra"
	}
};
var MEMORY_DECK = [
	{
		id: "mango",
		es: "Mango",
		pt: "Manga"
	},
	{
		id: "auyama",
		es: "Auyama",
		pt: "Abóbora"
	},
	{
		id: "arepa",
		es: "Arepa",
		pt: "Pão"
	},
	{
		id: "cotorra",
		es: "Cotorra",
		pt: "Arara"
	},
	{
		id: "sol",
		es: "Sol",
		pt: "Sol"
	},
	{
		id: "estrella",
		es: "Estrella",
		pt: "Estrela"
	},
	{
		id: "uva",
		es: "Uva",
		pt: "Uva"
	},
	{
		id: "flor",
		es: "Flor",
		pt: "Flor"
	}
];
var SHAPES = [
	"circle",
	"square",
	"triangle",
	"rectangle",
	"star"
];
var COUNT_OBJECTS = [
	"mango",
	"bee",
	"star",
	"flor",
	"uva"
];
function makeRound$1(n) {
	return shuffle(shuffle(MEMORY_DECK).slice(0, n).flatMap((it) => [{
		uid: `${it.id}-a`,
		id: it.id,
		flipped: false,
		matched: false
	}, {
		uid: `${it.id}-b`,
		id: it.id,
		flipped: false,
		matched: false
	}]));
}
function MemoryScreen() {
	const lang = useApp((s) => s.lang);
	const muted = useApp((s) => s.muted);
	const setScreen = useApp((s) => s.setScreen);
	const completeRound = useApp((s) => s.completeRound);
	const logSession = useApp((s) => s.logSession);
	const profile = useApp((s) => s.profiles.find((p) => p.id === s.activeId));
	const [round, setRound] = (0, import_react.useState)(1);
	const pairCount = Math.min(3 + round, 6);
	const [cards, setCards] = (0, import_react.useState)(() => makeRound$1(pairCount));
	const [picked, setPicked] = (0, import_react.useState)([]);
	const [lock, setLock] = (0, import_react.useState)(false);
	const [won, setWon] = (0, import_react.useState)(false);
	const [burst, setBurst] = (0, import_react.useState)(0);
	const started = (0, import_react.useRef)(Date.now());
	const busy = (0, import_react.useRef)(false);
	const reset = (r = round) => {
		setCards(makeRound$1(Math.min(3 + r, 6)));
		setPicked([]);
		setLock(false);
		setWon(false);
		busy.current = false;
	};
	(0, import_react.useEffect)(() => {
		speak(t(lang, "findPairs"), lang, muted);
		started.current = Date.now();
		return () => logSession("memory", Math.round((Date.now() - started.current) / 1e3));
	}, []);
	const label = (0, import_react.useMemo)(() => {
		return Object.fromEntries(MEMORY_DECK.map((d) => [d.id, lang === "pt" ? d.pt : d.es]));
	}, [lang]);
	const onCard = (uid) => {
		if (lock || won || busy.current) return;
		const card = cards.find((c) => c.uid === uid);
		if (!card || card.flipped || card.matched) return;
		unlockAudio();
		sfx.flip();
		const nextPicked = [...picked, uid];
		setCards((cs) => cs.map((c) => c.uid === uid ? {
			...c,
			flipped: true
		} : c));
		setPicked(nextPicked);
		if (nextPicked.length < 2) return;
		const [a, b] = nextPicked.map((id) => cards.find((c) => c.uid === id) ?? card);
		const bCard = cards.find((c) => c.uid === nextPicked[1]) ?? card;
		const aCard = cards.find((c) => c.uid === nextPicked[0]) ?? card;
		busy.current = true;
		setLock(true);
		const match = aCard.id === bCard.id;
		window.setTimeout(() => {
			if (match) {
				sfx.match();
				setBurst((n) => n + 1);
				if (profile) speak(t(lang, "match"), lang, muted);
				setCards((cs) => {
					const next = cs.map((c) => c.id === aCard.id ? {
						...c,
						matched: true,
						flipped: true
					} : c);
					if (next.every((c) => c.matched)) {
						sfx.win();
						setWon(true);
						completeRound("memory");
						if (profile) speak(randomPraise(lang, profile.name, profile.gender), lang, muted);
					}
					return next;
				});
			} else {
				sfx.wrong();
				setCards((cs) => cs.map((c) => c.uid === aCard.uid || c.uid === bCard.uid ? {
					...c,
					flipped: false
				} : c));
			}
			setPicked([]);
			setLock(false);
			busy.current = false;
		}, match ? 420 : 780);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, { burstKey: burst }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			title: t(lang, "memory"),
			onBack: () => setScreen("home")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg px-4 pb-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-center font-display text-lg text-muted",
				children: t(lang, "roundN", { n: round })
			}), won ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinBanner, {
				title: t(lang, "wellDone"),
				againLabel: t(lang, "playAgain"),
				homeLabel: t(lang, "back"),
				onAgain: () => {
					const next = Math.min(round + 1, 5);
					setRound(next);
					reset(next);
				},
				onHome: () => setScreen("home")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("grid gap-3", pairCount <= 4 ? "grid-cols-4" : "grid-cols-4 sm:grid-cols-4"),
				children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": c.flipped || c.matched ? label[c.id] : t(lang, "memory"),
					onClick: () => onCard(c.uid),
					className: "[perspective:800px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("flip-inner relative aspect-square w-full", (c.flipped || c.matched) && "is-flipped"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flip-face absolute inset-0 grid place-items-center rounded-[20px] bg-primary shadow-[0_5px_0_color-mix(in_oklab,var(--color-ink)_18%,transparent)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl font-semibold text-foam",
								children: "?"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flip-face flip-back absolute inset-0 grid place-items-center rounded-[20px] bg-foam p-2 shadow-[0_5px_0_color-mix(in_oklab,var(--color-ink)_12%,transparent)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtById, {
								id: c.id,
								className: "size-[85%]"
							})
						})]
					})
				}, c.uid))
			})]
		})
	] });
}
function artId(kind) {
	if (kind === "bee") return "bee";
	if (kind === "star") return "estrella";
	return kind;
}
function CountingScreen() {
	const lang = useApp((s) => s.lang);
	const muted = useApp((s) => s.muted);
	const setScreen = useApp((s) => s.setScreen);
	const completeRound = useApp((s) => s.completeRound);
	const logSession = useApp((s) => s.logSession);
	const profile = useApp((s) => s.profiles.find((p) => p.id === s.activeId));
	const [n, setN] = (0, import_react.useState)(2);
	const [kind, setKind] = (0, import_react.useState)("mango");
	const [choices, setChoices] = (0, import_react.useState)([
		1,
		2,
		3
	]);
	const [marks, setMarks] = (0, import_react.useState)([]);
	const [done, setDone] = (0, import_react.useState)(false);
	const [burst, setBurst] = (0, import_react.useState)(0);
	const [score, setScore] = (0, import_react.useState)(0);
	const started = (0, import_react.useRef)(Date.now());
	const deal = (count) => {
		const obj = COUNT_OBJECTS[Math.floor(Math.random() * COUNT_OBJECTS.length)];
		const wrong = shuffle([count, ...shuffle([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10
		].filter((x) => x !== count)).slice(0, 2)]);
		setN(count);
		setKind(obj);
		setChoices(wrong);
		setMarks(Array.from({ length: count }, () => null));
	};
	(0, import_react.useEffect)(() => {
		deal(2);
		speak(t(lang, "howMany"), lang, muted);
		started.current = Date.now();
		return () => logSession("counting", Math.round((Date.now() - started.current) / 1e3));
	}, []);
	const tapItem = (i) => {
		if (marks[i] != null || done) return;
		unlockAudio();
		sfx.pop();
		const order = marks.filter((x) => x != null).length + 1;
		setMarks((arr) => {
			const next = [...arr];
			next[i] = order;
			return next;
		});
		speak(String(order), lang, muted);
	};
	const pick = (value) => {
		if (done) return;
		unlockAudio();
		if (value === n) {
			sfx.match();
			setBurst((b) => b + 1);
			const nextScore = score + 1;
			setScore(nextScore);
			completeRound("counting");
			if (profile) speak(randomPraise(lang, profile.name, profile.gender), lang, muted);
			if (nextScore >= 5) {
				setDone(true);
				sfx.win();
			} else window.setTimeout(() => deal(Math.min(10, n + 1)), 900);
		} else {
			sfx.wrong();
			if (profile) speak(t(lang, "tryAgain", { kid: kidWord(lang, profile.gender) }), lang, muted);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, { burstKey: burst }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			title: t(lang, "counting"),
			onBack: () => setScreen("home")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg px-4 pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center font-display text-xl",
					children: t(lang, "howMany")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-center text-muted",
					children: t(lang, "countThem")
				}),
				done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinBanner, {
					title: t(lang, "wellDone"),
					againLabel: t(lang, "playAgain"),
					homeLabel: t(lang, "back"),
					onAgain: () => {
						setScore(0);
						setDone(false);
						deal(1);
					},
					onHome: () => setScreen("home")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-5 gap-2",
					children: marks.map((mark, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => tapItem(i),
						className: cn("relative aspect-square rounded-[18px] bg-foam p-1 shadow-[0_4px_0_color-mix(in_oklab,var(--color-ink)_12%,transparent)]", mark != null && "ring-4 ring-leaf"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtById, {
							id: artId(kind),
							className: "size-full"
						}), mark != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -right-1 -top-1 grid size-7 place-items-center rounded-full bg-leaf font-display text-sm font-semibold text-foam",
							children: mark
						}) : null]
					}, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-3 gap-3",
					children: choices.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => pick(c),
						className: "min-h-20 rounded-[24px] bg-accent font-display text-4xl font-semibold text-ink shadow-[0_6px_0_color-mix(in_oklab,var(--color-ink)_16%,transparent)] transition-transform active:scale-[0.96]",
						children: c
					}, c))
				})] })
			]
		})
	] });
}
function LettersScreen() {
	const lang = useApp((s) => s.lang);
	const muted = useApp((s) => s.muted);
	const setScreen = useApp((s) => s.setScreen);
	const completeRound = useApp((s) => s.completeRound);
	const addProgress = useApp((s) => s.addProgress);
	const awardMedal = useApp((s) => s.awardMedal);
	const logSession = useApp((s) => s.logSession);
	const profile = useApp((s) => s.profiles.find((p) => p.id === s.activeId));
	const parsed = (0, import_react.useMemo)(() => lettersOfName(profile?.name ?? "Ana"), [profile?.name]);
	const [step, setStep] = (0, import_react.useState)("learn");
	const [learnIndex, setLearnIndex] = (0, import_react.useState)(0);
	const [sortPlaced, setSortPlaced] = (0, import_react.useState)({});
	const [sortSel, setSortSel] = (0, import_react.useState)(null);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [build, setBuild] = (0, import_react.useState)(() => parsed.letters.map(() => null));
	const [pool, setPool] = (0, import_react.useState)(() => parsed.letters.map((_, i) => i));
	const [burst, setBurst] = (0, import_react.useState)(0);
	const [won, setWon] = (0, import_react.useState)(false);
	const started = (0, import_react.useRef)(Date.now());
	(0, import_react.useEffect)(() => {
		speak(t(lang, "lettersOfYourName", { name: parsed.display }), lang, muted);
		started.current = Date.now();
		return () => logSession("letters", Math.round((Date.now() - started.current) / 1e3));
	}, []);
	if (!profile) return null;
	const letter = parsed.letters[learnIndex] ?? parsed.letters[0] ?? "A";
	const example = ALPHABET[lang][letter] ?? letter;
	const isVowel = parsed.isVowel(letter);
	const speakLetter = (L) => {
		const word = ALPHABET[lang][L] ?? L;
		speak(t(lang, "letterWord", {
			letter: L,
			word
		}), lang, muted);
	};
	const placeSort = (bucket) => {
		if (sortSel === null) return;
		unlockAudio();
		const L = parsed.letters[sortSel];
		if (!(parsed.isVowel(L) && bucket === "vowel" || !parsed.isVowel(L) && bucket === "consonant")) {
			sfx.wrong();
			setSortSel(null);
			return;
		}
		sfx.pop();
		const next = {
			...sortPlaced,
			[sortSel]: bucket
		};
		setSortPlaced(next);
		setSortSel(null);
		speakLetter(L);
		if (parsed.letters.every((_, idx) => next[idx])) {
			sfx.match();
			setBurst((b) => b + 1);
		}
	};
	const onSlotTap = (slot) => {
		if (selected === null) return;
		unlockAudio();
		if (parsed.letters[selected] !== parsed.letters[slot] || build[slot] !== null) {
			sfx.wrong();
			setSelected(null);
			return;
		}
		sfx.pop();
		const next = [...build];
		next[slot] = selected;
		setBuild(next);
		setPool((p) => p.filter((x) => x !== selected));
		setSelected(null);
		if (next.every((v) => v !== null)) {
			sfx.win();
			setBurst((b) => b + 1);
			setWon(true);
			completeRound("letters");
			addProgress("letters", 80);
			awardMedal("name-spelled");
			speak(t(lang, "wellDone"), lang, muted);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, { burstKey: burst }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			title: t(lang, "letters"),
			onBack: () => setScreen("home")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg px-4 pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeeArt, {
					className: "mx-auto size-20 anim-float",
					variant: profile.gender === "girl" ? "luna" : "sol"
				}),
				step === "learn" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeechBubble, { text: t(lang, "stepLetters") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								unlockAudio();
								speakLetter(letter);
							},
							className: "mx-auto mt-5 grid size-32 place-items-center rounded-[32px] bg-accent font-display text-7xl font-semibold text-ink shadow-[0_8px_0_color-mix(in_oklab,var(--color-ink)_16%,transparent)] anim-pulse",
							children: letter
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-2xl",
							children: t(lang, "letterWord", {
								letter,
								word: example
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted",
							children: isVowel ? t(lang, "vowelOf", { letter }) : t(lang, "consonantOf", { letter })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KidButton, {
							className: "mt-6 w-full",
							onClick: () => {
								unlockAudio();
								if (learnIndex < parsed.letters.length - 1) setLearnIndex((i) => i + 1);
								else setStep("sort");
							},
							children: t(lang, "next")
						})
					]
				}),
				step === "sort" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeechBubble, { text: t(lang, "stepSort") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap justify-center gap-2",
							children: parsed.letters.map((L, i) => sortPlaced[i] ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigLetter, {
								letter: L,
								active: sortSel === i,
								onClick: () => setSortSel(i)
							}, `${L}-${i}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => placeSort("vowel"),
								className: "min-h-36 rounded-[24px] bg-coral/20 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-semibold",
									children: t(lang, "vowels")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex flex-wrap justify-center gap-1",
									children: parsed.letters.map((L, i) => sortPlaced[i] === "vowel" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-10 place-items-center rounded-[12px] bg-foam font-display text-xl",
										children: L
									}, i) : null)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => placeSort("consonant"),
								className: "min-h-36 rounded-[24px] bg-primary/20 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-semibold",
									children: t(lang, "consonants")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex flex-wrap justify-center gap-1",
									children: parsed.letters.map((L, i) => sortPlaced[i] === "consonant" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-10 place-items-center rounded-[12px] bg-foam font-display text-xl",
										children: L
									}, i) : null)
								})]
							})]
						}),
						parsed.letters.every((_, i) => sortPlaced[i]) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KidButton, {
							className: "mt-5 w-full",
							onClick: () => {
								unlockAudio();
								setBuild(parsed.letters.map(() => null));
								setPool(parsed.letters.map((_, i) => i));
								setStep("build");
							},
							children: t(lang, "next")
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-center text-sm text-muted",
							children: t(lang, "tapLetter")
						})
					]
				}),
				step === "build" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeechBubble, { text: t(lang, "buildYourName") }), won ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinBanner, {
						title: `${parsed.display}!`,
						againLabel: t(lang, "playAgain"),
						homeLabel: t(lang, "back"),
						onAgain: () => {
							setWon(false);
							setLearnIndex(0);
							setSortPlaced({});
							setBuild(parsed.letters.map(() => null));
							setPool(parsed.letters.map((_, i) => i));
							setStep("learn");
						},
						onHome: () => setScreen("home")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap justify-center gap-2",
							children: parsed.letters.map((L, slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onSlotTap(slot),
								className: cn("grid size-14 place-items-center rounded-[16px] font-display text-2xl font-semibold", build[slot] !== null ? "bg-leaf text-foam" : "border-4 border-dashed border-ink/30 bg-foam/60 text-muted"),
								children: build[slot] !== null ? L : "·"
							}, `slot-${slot}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap justify-center gap-2",
							children: pool.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigLetter, {
								letter: parsed.letters[i],
								active: selected === i,
								onClick: () => {
									unlockAudio();
									sfx.tap();
									setSelected(i);
								}
							}, `pool-${i}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: t(lang, "tapLetter")
						})
					] })]
				})
			]
		})
	] });
}
var LABEL = {
	circle: "circle",
	square: "square",
	triangle: "triangle",
	rectangle: "rectangle",
	star: "star"
};
function ShapesScreen() {
	const lang = useApp((s) => s.lang);
	const muted = useApp((s) => s.muted);
	const setScreen = useApp((s) => s.setScreen);
	const completeRound = useApp((s) => s.completeRound);
	const logSession = useApp((s) => s.logSession);
	const profile = useApp((s) => s.profiles.find((p) => p.id === s.activeId));
	const [target, setTarget] = (0, import_react.useState)("circle");
	const [opts, setOpts] = (0, import_react.useState)(SHAPES.slice(0, 3));
	const [score, setScore] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const [burst, setBurst] = (0, import_react.useState)(0);
	const started = (0, import_react.useRef)(Date.now());
	const deal = () => {
		const next = SHAPES[Math.floor(Math.random() * SHAPES.length)];
		const others = shuffle(SHAPES.filter((s) => s !== next)).slice(0, 2);
		setTarget(next);
		setOpts(shuffle([next, ...others]));
		speak(t(lang, "tapTheShape", { shape: t(lang, LABEL[next]) }), lang, muted);
	};
	(0, import_react.useEffect)(() => {
		deal();
		started.current = Date.now();
		return () => logSession("shapes", Math.round((Date.now() - started.current) / 1e3));
	}, []);
	const pick = (id) => {
		if (done) return;
		unlockAudio();
		if (id === target) {
			sfx.match();
			setBurst((b) => b + 1);
			const next = score + 1;
			setScore(next);
			completeRound("shapes");
			if (profile) speak(randomPraise(lang, profile.name, profile.gender), lang, muted);
			if (next >= 5) {
				setDone(true);
				sfx.win();
			} else window.setTimeout(deal, 700);
		} else {
			sfx.wrong();
			speak(t(lang, "almost"), lang, muted);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, { burstKey: burst }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			title: t(lang, "shapes"),
			onBack: () => setScreen("home")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg px-4 pb-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeechBubble, { text: t(lang, "tapTheShape", { shape: t(lang, LABEL[target]) }) }), done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinBanner, {
				title: t(lang, "wellDone"),
				againLabel: t(lang, "playAgain"),
				homeLabel: t(lang, "back"),
				onAgain: () => {
					setScore(0);
					setDone(false);
					deal();
				},
				onHome: () => setScreen("home")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3",
				children: opts.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => pick(id),
					className: "kid-card grid min-h-36 place-items-center p-4 transition-transform active:scale-[0.96]",
					"aria-label": t(lang, LABEL[id]),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShapeArt, {
						id,
						className: "size-28"
					})
				}, id))
			})]
		})
	] });
}
function makeRound(deck, avoid) {
	const pool = avoid ? deck.filter((a) => a.id !== avoid) : deck;
	const animal = (pool.length ? pool : deck)[Math.floor(Math.random() * (pool.length || deck.length))];
	const distractors = shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").filter((l) => l !== animal.letter)).slice(0, 2);
	return {
		animal,
		opts: shuffle([animal.letter, ...distractors])
	};
}
function AnimalsScreen() {
	const lang = useApp((s) => s.lang);
	const muted = useApp((s) => s.muted);
	const setScreen = useApp((s) => s.setScreen);
	const completeRound = useApp((s) => s.completeRound);
	const logSession = useApp((s) => s.logSession);
	const profile = useApp((s) => s.profiles.find((p) => p.id === s.activeId));
	const deck = ANIMALS_BY_LANG[lang];
	const [round, setRound] = (0, import_react.useState)(() => makeRound(deck));
	const [score, setScore] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const [burst, setBurst] = (0, import_react.useState)(0);
	const started = (0, import_react.useRef)(Date.now());
	const mutedRef = (0, import_react.useRef)(muted);
	mutedRef.current = muted;
	const nameOf = (a) => lang === "pt" ? a.pt : a.es;
	const deal = (prevId) => {
		const next = makeRound(ANIMALS_BY_LANG[lang], prevId);
		setRound(next);
		speak(t(lang, "whatLetter"), lang, mutedRef.current);
	};
	(0, import_react.useEffect)(() => {
		deal();
		started.current = Date.now();
		return () => logSession("animals", Math.round((Date.now() - started.current) / 1e3));
	}, [lang]);
	const pick = (letter) => {
		if (done) return;
		unlockAudio();
		if (letter === round.animal.letter) {
			sfx.match();
			setBurst((b) => b + 1);
			speak(t(lang, "letterOf", {
				letter,
				name: nameOf(round.animal)
			}), lang, muted);
			const next = score + 1;
			setScore(next);
			completeRound("animals");
			if (next >= 5) {
				setDone(true);
				sfx.win();
				if (profile) speak(randomPraise(lang, profile.name, profile.gender), lang, muted);
			} else window.setTimeout(() => deal(round.animal.id), 900);
		} else {
			sfx.wrong();
			speak(t(lang, "almost"), lang, muted);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, { burstKey: burst }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			title: t(lang, "animals"),
			onBack: () => setScreen("home")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg px-4 pb-12 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeechBubble, { text: t(lang, "whatLetter") }), done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinBanner, {
				title: t(lang, "wellDone"),
				againLabel: t(lang, "playAgain"),
				homeLabel: t(lang, "back"),
				onAgain: () => {
					setScore(0);
					setDone(false);
					deal();
				},
				onHome: () => setScreen("home")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "kid-card mx-auto mt-5 max-w-xs p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtById, {
					id: round.animal.id,
					className: "mx-auto size-36"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-2xl font-semibold",
					children: nameOf(round.animal)
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-3 gap-3",
				children: round.opts.map((L) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => pick(L),
					className: "min-h-20 rounded-[24px] bg-sky font-display text-4xl font-semibold text-ink shadow-[0_6px_0_color-mix(in_oklab,var(--color-ink)_16%,transparent)] transition-transform active:scale-[0.96]",
					children: L
				}, L))
			})] })]
		})
	] });
}
function newSum() {
	const a = 1 + Math.floor(Math.random() * 8);
	const b = 1 + Math.floor(Math.random() * 8);
	return {
		a,
		b,
		ans: a + b
	};
}
function ParentalScreen() {
	const lang = useApp((s) => s.lang);
	const setLang = useApp((s) => s.setLang);
	const setScreen = useApp((s) => s.setScreen);
	const setScreenLimit = useApp((s) => s.setScreenLimit);
	const screenLimitMin = useApp((s) => s.screenLimitMin);
	const dayUsedSec = useApp((s) => s.dayUsedSec);
	const profiles = useApp((s) => s.profiles);
	const activeId = useApp((s) => s.activeId);
	const deleteProfile = useApp((s) => s.deleteProfile);
	const unlockTime = useApp((s) => s.unlockTime);
	const [gate, setGate] = (0, import_react.useState)(newSum);
	const [guess, setGuess] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(false);
	const profile = profiles.find((p) => p.id === activeId);
	const avg = (0, import_react.useMemo)(() => {
		if (!profile) return 0;
		return Math.round(MODULES.reduce((a, m) => a + profile.progress[m], 0) / MODULES.length);
	}, [profile]);
	const submit = () => {
		if (Number(guess) === gate.ans) {
			setOpen(true);
			setErr(false);
		} else {
			setErr(true);
			setGate(newSum());
			setGuess("");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
		title: t(lang, "parentalTitle"),
		onBack: () => setScreen(activeId ? "home" : profiles.length ? "profiles" : "welcome"),
		showParent: false
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-lg px-4 pb-16",
		children: !open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "kid-card mt-4 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-muted",
					children: t(lang, "unlockHint")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center font-display text-3xl font-semibold",
					children: t(lang, "unlockQ", {
						a: gate.a,
						b: gate.b
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					inputMode: "numeric",
					value: guess,
					onChange: (e) => setGuess(e.target.value.replace(/\D/g, "").slice(0, 2)),
					className: "mt-4 h-16 w-full rounded-[22px] bg-cream px-4 text-center font-display text-3xl font-semibold outline-none ring-4 ring-transparent focus:ring-primary",
					"aria-label": t(lang, "unlockHint")
				}),
				err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-coral",
					children: t(lang, "wrongSum")
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KidButton, {
					className: "mt-4 w-full",
					onClick: submit,
					children: t(lang, "continue")
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "kid-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold",
						children: t(lang, "language")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KidButton, {
							tone: lang === "es-VE" ? "primary" : "cream",
							onClick: () => setLang("es-VE"),
							children: "ES"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KidButton, {
							tone: lang === "pt" ? "primary" : "cream",
							onClick: () => setLang("pt"),
							children: "PT"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "kid-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold",
							children: t(lang, "screenTime")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								t(lang, "dailyTime"),
								": ",
								formatMinutes(dayUsedSec)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid grid-cols-4 gap-2",
							children: [
								0,
								10,
								20,
								30
							].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setScreenLimit(m),
								className: cn("min-h-12 rounded-[16px] font-display text-sm font-semibold", screenLimitMin === m ? "bg-primary text-foam" : "bg-cream text-ink"),
								children: m === 0 ? t(lang, "unlimited") : t(lang, "minutes", { n: m })
							}, m))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KidButton, {
							tone: "accent",
							className: "mt-3 w-full",
							onClick: unlockTime,
							children: t(lang, "resetToday")
						})
					]
				}),
				profile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "kid-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold",
							children: t(lang, "progressTitle", { name: profile.name })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-muted",
							children: [
								t(lang, "average"),
								" ",
								avg,
								"% · ",
								t(lang, "playTime"),
								" ",
								formatMinutes(profile.playTimeSec)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 grid gap-2",
							children: MODULES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex justify-between font-display text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(lang, MODULE_LABEL[m]) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums",
									children: [profile.progress[m], "%"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, { value: profile.progress[m] })] }, m))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-lg font-semibold",
							children: t(lang, "medals")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 flex flex-wrap gap-2",
							children: profile.medals.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm text-muted",
								children: "—"
							}) : profile.medals.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full bg-sun px-3 py-1 font-display text-sm font-semibold",
								children: t(lang, MEDAL_LABEL[m])
							}, m))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-lg font-semibold",
							children: t(lang, "sessions")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 max-h-40 space-y-1 overflow-auto text-sm text-muted",
							children: profile.sessions.slice(0, 8).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								new Date(s.at).toLocaleString(lang === "pt" ? "pt-BR" : "es-VE"),
								" · ",
								t(lang, MODULE_LABEL[s.module]),
								" ·",
								" ",
								formatMinutes(s.durationSec)
							] }, s.at))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KidButton, {
							tone: "coral",
							className: "mt-4 w-full",
							onClick: () => deleteProfile(profile.id),
							children: t(lang, "deleteProfile")
						})
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KidButton, {
					tone: "cream",
					onClick: () => setScreen(profiles.length ? "profiles" : "welcome"),
					children: t(lang, "switchChild")
				})
			]
		})
	})] });
}
function TimeUpOverlay() {
	const lang = useApp((s) => s.lang);
	const setScreen = useApp((s) => s.setScreen);
	const profile = useApp((s) => s.profiles.find((p) => p.id === s.activeId));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 grid place-items-center bg-ink/55 px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "kid-card w-full max-w-md p-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeeArt, {
					className: "mx-auto size-24 anim-float",
					variant: profile?.gender === "girl" ? "luna" : "sol"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-semibold",
					children: t(lang, "restEyes")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: t(lang, "timeToRest")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KidButton, {
					className: "mt-6 w-full",
					onClick: () => setScreen("parental"),
					children: t(lang, "okParent")
				})
			]
		})
	});
}
function AbejitaApp() {
	const hydrate = useApp((s) => s.hydrate);
	const hydrated = useApp((s) => s.hydrated);
	const screen = useApp((s) => s.screen);
	const timeLocked = useApp((s) => s.timeLocked);
	const tickSecond = useApp((s) => s.tickSecond);
	const persist = useApp((s) => s.persist);
	const muted = useApp((s) => s.muted);
	const profile = useApp((s) => s.profiles.find((p) => p.id === s.activeId));
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		setMuted(muted);
	}, [muted]);
	(0, import_react.useEffect)(() => {
		const theme = profile?.gender === "girl" ? "luna" : "sol";
		document.documentElement.dataset.theme = theme;
		document.documentElement.lang = useApp.getState().lang === "pt" ? "pt" : "es";
	}, [profile?.gender, screen]);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => tickSecond(), 1e3);
		const onHide = () => {
			if (document.visibilityState === "hidden") persist();
		};
		document.addEventListener("visibilitychange", onHide);
		window.addEventListener("pagehide", persist);
		const unlock = () => unlockAudio();
		window.addEventListener("pointerdown", unlock, { once: true });
		window.addEventListener("keydown", unlock, { once: true });
		return () => {
			window.clearInterval(id);
			document.removeEventListener("visibilitychange", onHide);
			window.removeEventListener("pagehide", persist);
		};
	}, [tickSecond, persist]);
	const view = !hydrated ? "welcome" : screen;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		view === "welcome" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WelcomeScreen, {}),
		view === "profiles" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfilesScreen, {}),
		view === "onboarding" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OnboardingScreen, {}),
		view === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {}),
		view === "memory" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoryScreen, {}),
		view === "counting" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountingScreen, {}),
		view === "letters" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LettersScreen, {}),
		view === "shapes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShapesScreen, {}),
		view === "animals" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimalsScreen, {}),
		view === "parental" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParentalScreen, {}),
		timeLocked && view !== "parental" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeUpOverlay, {}) : null
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AbejitaApp, {});
}
//#endregion
export { Home as component };
