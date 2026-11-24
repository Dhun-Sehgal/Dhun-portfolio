import { ImageOff } from "lucide-react";
import { profile } from "../data/profile";
import { Heart, Sparkle, Star } from "./Doodles";

/**
 * Circular portrait frame inspired by the illustrated resume.
 * Shows `profile.avatar` if set, otherwise a clearly-labelled placeholder.
 */
export function Avatar() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      {/* hand-drawn orbit arc */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full text-lav" aria-hidden>
        <path
          d="M60 300C10 220 30 110 120 60c70-38 170-30 225 40"
          fill="none"
          stroke="currentColor"
          strokeWidth={5}
          strokeLinecap="round"
          className="animate-draw"
        />
        <path d="M352 112l-4 18-14-12" fill="none" stroke="currentColor" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="52" cy="318" r="6" fill="var(--c-pink)" />
      </svg>

      {/* portrait ring */}
      <div className="absolute inset-[11%] rounded-full border-[10px] border-surface bg-pink-soft shadow-[0_20px_60px_-20px_rgba(118,85,143,0.5)] ring-2 ring-line">
        <div className="relative size-full overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_40%,var(--c-pink-soft),var(--c-lav-soft))]">
          {profile.avatar ? (
            <img src={profile.avatar} alt={`Portrait of ${profile.name}`} className="size-full object-cover" width={420} height={420} />
          ) : (
            <div className="flex size-full flex-col items-center justify-center gap-3 p-8 text-center">
              {/* simple placeholder doodle: a laptop with a sparkle */}
              <svg viewBox="0 0 120 90" className="w-28 text-plum" aria-hidden>
                <rect x="20" y="12" width="80" height="52" rx="8" fill="var(--c-surface)" stroke="currentColor" strokeWidth="3" />
                <path d="M8 72h104l-6 8H14l-6-8Z" fill="var(--c-lav)" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                <path d="M36 46l10-12 10 8 12-16 12 10" fill="none" stroke="var(--c-lav)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="44" cy="30" r="2.5" fill="currentColor" />
                <circle cx="76" cy="30" r="2.5" fill="currentColor" />
              </svg>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-plum/60 bg-surface/80 px-3 py-1 text-xs font-semibold text-plum">
                <ImageOff className="size-3.5" />
                Avatar placeholder
              </span>
              <span className="max-w-[16ch] text-xs text-muted">Illustrated portrait or photo goes here</span>
            </div>
          )}
        </div>
      </div>

      {/* floating decorations */}
      <Sparkle className="animate-twinkle absolute top-[6%] right-[14%] size-7 text-plum" />
      <Sparkle className="animate-twinkle absolute top-[20%] right-[4%] size-4 text-lav [animation-delay:1s]" />
      <Star className="animate-float absolute bottom-[12%] left-[2%] size-6 text-pink [--r:-12deg]" />
      <Heart className="animate-wiggle absolute right-[6%] bottom-[18%] size-8 text-plum/80" />
    </div>
  );
}
