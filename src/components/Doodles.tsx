import type { SVGProps } from "react";

/**
 * Hand-drawn decorative doodles. All are purely decorative (aria-hidden)
 * and inherit colour from `currentColor`.
 */
type P = SVGProps<SVGSVGElement>;
const base = { "aria-hidden": true, focusable: false } as const;

export function Sparkle(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base} {...props}>
      <path d="M12 1.5c.5 5.2 2.9 8.6 9.9 10.5-7 1.9-9.4 5.3-9.9 10.5-.5-5.2-2.9-8.6-9.9-10.5 7-1.9 9.4-5.3 9.9-10.5Z" />
    </svg>
  );
}

export function Star(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base} {...props}>
      <path d="M12 2.4l2.6 6 6.5.6-4.9 4.3 1.5 6.4L12 16.4l-5.7 3.3 1.5-6.4-4.9-4.3 6.5-.6L12 2.4Z" strokeLinejoin="round" />
    </svg>
  );
}

export function Heart(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...base} {...props}>
      <path d="M12 20.2c-4.6-3-8.7-6.3-8.7-10.6 0-2.7 2-4.6 4.4-4.6 1.9 0 3.3 1.1 4.3 2.6 1-1.5 2.4-2.6 4.3-2.6 2.4 0 4.4 1.9 4.4 4.6 0 4.3-4.1 7.6-8.7 10.6Z" />
      <path d="M7.2 8.6c.3-.9 1-1.5 1.9-1.6" />
    </svg>
  );
}

export function Swirl(props: P) {
  return (
    <svg viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" {...base} {...props}>
      <path d="M4 30c6-14 14-22 20-18 5 3 0 12-5 10-6-3 4-16 14-18 9-2 13 5 9 11-3 4-9 2-7-3 2-6 12-9 22-5" />
    </svg>
  );
}

export function Squiggle(props: P) {
  return (
    <svg viewBox="0 0 120 14" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" {...base} {...props}>
      <path className="animate-draw" d="M3 9c9-6 15-6 21 0s12 6 18 0 12-6 18 0 12 6 18 0 12-6 18 0 12 6 18 0" />
    </svg>
  );
}

export function CurlyArrow(props: P) {
  return (
    <svg viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" {...base} {...props}>
      <path d="M6 10c14-4 30 0 30 12 0 8-10 10-12 4-2-7 10-12 20-6 9 5 14 16 18 28" />
      <path d="M54 44l8 5 2-10" />
    </svg>
  );
}

export function Underline(props: P) {
  return (
    <svg viewBox="0 0 200 18" fill="none" stroke="currentColor" strokeWidth={5} strokeLinecap="round" preserveAspectRatio="none" {...base} {...props}>
      <path className="animate-draw" d="M4 12c40-8 90-10 190-4" />
    </svg>
  );
}

/** A little original cat that peeks over cards. */
export function PeekCat(props: P) {
  return (
    <svg viewBox="0 0 120 70" {...base} {...props}>
      <g stroke="#292431" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
        {/* head */}
        <path
          d="M22 68c-4-18 0-34 10-44l-4-20 16 12c6-2 14-3 22-1l16-12-3 21c9 10 12 26 8 44"
          fill="#ECE4F3"
        />
        {/* paws */}
        <path d="M14 68c0-8 5-12 11-12s9 5 9 12" fill="#ECE4F3" />
        <path d="M80 68c0-8 5-12 11-12s9 5 9 12" fill="#ECE4F3" />
        <path d="M20 62v5M26 61v6M86 62v5M92 61v6" />
        {/* face */}
        <circle cx={44} cy={40} r={3.2} fill="#292431" stroke="none" />
        <circle cx={68} cy={40} r={3.2} fill="#292431" stroke="none" />
        <path d="M52 48c1.5 2 6.5 2 8 0M56 46v2" />
        <path d="M30 46h-10M31 51l-9 3M82 46h10M81 51l9 3" strokeWidth={1.6} />
      </g>
      <ellipse cx={37} cy={49} rx={5} ry={3} fill="#EAC5D5" />
      <ellipse cx={75} cy={49} rx={5} ry={3} fill="#EAC5D5" />
      {/* bow */}
      <path transform="translate(-6 7)" d="M70 15l7-6v11l-7-5Zm0 0l-7-6v11l7-5Z" fill="#EAC5D5" stroke="#292431" strokeWidth={1.8} strokeLinejoin="round" />
    </svg>
  );
}
