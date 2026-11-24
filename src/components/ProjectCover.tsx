import type { JSX } from "react";
import type { CoverKind } from "../data/projects";

/**
 * Illustrated project covers (not screenshots). Each one sketches what the
 * project does, in the site's palette. Colours come from CSS variables so
 * they follow light/dark mode.
 */
const ink = "var(--c-plum)";
const lav = "var(--c-lav)";
const pink = "var(--c-pink)";
const paper = "var(--c-surface)";

function TextCover() {
  // comments flowing into four labelled buckets
  return (
    <>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${28 + i * 10} ${26 + i * 34})`}>
          <rect width="128" height="24" rx="12" fill={paper} stroke={ink} strokeWidth="2" />
          <rect x="12" y="9" width={70 - i * 14} height="6" rx="3" fill={i === 1 ? pink : lav} />
          <path d="M18 24l-4 8 12-8" fill={paper} stroke={ink} strokeWidth="2" strokeLinejoin="round" />
        </g>
      ))}
      <path d="M180 80h26" stroke={ink} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 7" />
      <path d="M200 74l8 6-8 6" fill="none" stroke={ink} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {[pink, lav, pink, lav].map((c, i) => (
        <g key={i} transform={`translate(${220 + (i % 2) * 44} ${34 + Math.floor(i / 2) * 50})`}>
          <rect width="36" height="40" rx="10" fill={c} stroke={ink} strokeWidth="2" />
          <text x="18" y="26" textAnchor="middle" fontSize="15" fontWeight="700" fill={ink} fontFamily="Fraunces, serif">
            {i + 1}
          </text>
        </g>
      ))}
    </>
  );
}

function McqCover() {
  const opts = ["A", "B", "C", "D", "E"];
  const ranked = [2, 0, 4]; // illustrative top-3 highlight
  return (
    <>
      <rect x="26" y="22" width="270" height="30" rx="15" fill={paper} stroke={ink} strokeWidth="2" />
      <text x="44" y="42" fontSize="14" fontWeight="700" fill={ink} fontFamily="Fraunces, serif">Q.</text>
      <rect x="70" y="33" width="150" height="7" rx="3.5" fill={lav} />
      {opts.map((o, i) => {
        const r = ranked.indexOf(i);
        return (
          <g key={o} transform={`translate(${34 + i * 54} 78)`}>
            <circle cx="20" cy="20" r="20" fill={r === 0 ? ink : r > 0 ? pink : paper} stroke={ink} strokeWidth="2" />
            <text x="20" y="26" textAnchor="middle" fontSize="16" fontWeight="700" fill={r === 0 ? paper : ink} fontFamily="Fraunces, serif">
              {o}
            </text>
            {r >= 0 && (
              <text x="20" y="62" textAnchor="middle" fontSize="11" fontWeight="600" fill={ink} fontFamily="DM Sans, sans-serif">
                #{r + 1}
              </text>
            )}
          </g>
        );
      })}
    </>
  );
}

function DataCover() {
  const bars = [38, 62, 46, 80, 56, 70];
  return (
    <>
      <rect x="30" y="20" width="170" height="120" rx="14" fill={paper} stroke={ink} strokeWidth="2" />
      {bars.map((h, i) => (
        <rect key={i} x={46 + i * 24} y={124 - h} width="16" height={h} rx="5" fill={i % 2 ? lav : pink} stroke={ink} strokeWidth="1.5" />
      ))}
      <circle cx="232" cy="66" r="30" fill="none" stroke={ink} strokeWidth="5" />
      <circle cx="232" cy="66" r="24" fill={pink} opacity="0.35" />
      <path d="M254 88l26 26" stroke={ink} strokeWidth="8" strokeLinecap="round" />
      <g transform="translate(222 112)">
        <rect width="78" height="30" rx="15" fill={lav} stroke={ink} strokeWidth="2" />
        <circle cx="22" cy="15" r="3" fill={ink} />
        <circle cx="39" cy="15" r="3" fill={ink} />
        <circle cx="56" cy="15" r="3" fill={ink} />
      </g>
    </>
  );
}

function TrekCover() {
  return (
    <>
      <circle cx="250" cy="44" r="18" fill={pink} stroke={ink} strokeWidth="2" />
      <path d="M20 140l70-86 40 46 34-34 60 74Z" fill={lav} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M90 54l-14 18 10-3 4 8 6-10 8 6Z" fill={paper} stroke={ink} strokeWidth="2" strokeLinejoin="round" />
      <path d="M44 132c30-12 50-6 70-20s40-12 60-8" fill="none" stroke={paper} strokeWidth="3" strokeLinecap="round" strokeDasharray="1 8" />
      <g transform="translate(212 92)">
        <rect width="88" height="50" rx="10" fill={paper} stroke={ink} strokeWidth="2" />
        <rect x="10" y="10" width="40" height="6" rx="3" fill={lav} />
        <rect x="10" y="22" width="64" height="6" rx="3" fill={pink} />
        <rect x="10" y="34" width="28" height="6" rx="3" fill={lav} />
      </g>
    </>
  );
}

function ParkingCover() {
  return (
    <>
      <rect x="24" y="22" width="190" height="118" rx="14" fill={paper} stroke={ink} strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <path d={`M${44 + i * 42} 34v40M${44 + i * 42} 88v40`} stroke={lav} strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}
      {[
        [52, 42, pink],
        [136, 96, lav],
      ].map(([x, y, c], i) => (
        <rect key={i} x={x as number} y={y as number} width="26" height="26" rx="7" fill={c as string} stroke={ink} strokeWidth="2" />
      ))}
      <g transform="translate(232 40)">
        <rect width="66" height="66" rx="16" fill={ink} />
        <text x="33" y="47" textAnchor="middle" fontSize="40" fontWeight="800" fill={paper} fontFamily="Fraunces, serif">P</text>
      </g>
      <path d="M265 106v34" stroke={ink} strokeWidth="5" strokeLinecap="round" />
    </>
  );
}

const covers: Record<CoverKind, () => JSX.Element> = {
  text: TextCover,
  mcq: McqCover,
  data: DataCover,
  trek: TrekCover,
  parking: ParkingCover,
};

export function ProjectCover({ kind, className = "" }: { kind: CoverKind; className?: string }) {
  const Art = covers[kind];
  return (
    <svg viewBox="0 0 320 160" className={className} aria-hidden role="presentation">
      <Art />
    </svg>
  );
}
