import type { SVGProps } from "react";

const base = "w-4 h-4";

function cx(...parts: (string | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function FacebookIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cx(base, className)} aria-hidden {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.24-1.46 1.5-1.46H16.5V4.4c-.3-.04-1.35-.13-2.57-.13-2.54 0-4.28 1.55-4.28 4.4v2.33H7v3h2.65V21h3.85z" />
    </svg>
  );
}

export function InstagramIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cx(base, className)} aria-hidden {...props}>
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.42 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.26 1.8-.42 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.8-.26-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.05-.42-2.22C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.06-1.17.26-1.8.42-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.74.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.26.82-.38.38-.62.75-.82 1.26-.15.39-.33.97-.38 2.04C2.71 8.5 2.7 8.85 2.7 12s.01 3.5.06 4.74c.05 1.07.23 1.65.38 2.04.2.51.44.88.82 1.26.38.38.75.62 1.26.82.39.15.97.33 2.04.38 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.26-.82.38-.38.62-.75.82-1.26.15-.39.33-.97.38-2.04.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.07-.23-1.65-.38-2.04a3.4 3.4 0 0 0-.82-1.26 3.4 3.4 0 0 0-1.26-.82c-.39-.15-.97-.33-2.04-.38C15.5 4.01 15.15 4 12 4zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3zm5.14-2.11a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32z" />
    </svg>
  );
}

export function TwitterIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cx(base, className)} aria-hidden {...props}>
      <path d="M18.24 3H21l-6.6 7.55L22 21h-6.1l-4.8-6.28L5.6 21H3l7.05-8.06L2.4 3h6.24l4.33 5.72L18.24 3zm-1.06 16.2h1.7L7.9 4.7H6.06L17.18 19.2z" />
    </svg>
  );
}

export function GoogleIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cx(base, className)} aria-hidden {...props}>
      <path d="M21.6 12.23c0-.72-.06-1.42-.18-2.09H12v3.96h5.4a4.62 4.62 0 0 1-2 3.03v2.51h3.24c1.9-1.75 3-4.32 3-7.41z" />
      <path d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.24-2.51c-.9.6-2.05.96-3.38.96a5.94 5.94 0 0 1-5.6-4.13H3.06v2.6A9.98 9.98 0 0 0 12 22z" opacity=".85" />
      <path d="M6.4 13.89a5.97 5.97 0 0 1 0-3.78V7.5H3.06a9.98 9.98 0 0 0 0 9l3.34-2.61z" opacity=".7" />
      <path d="M12 6.09c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.55 9.55 0 0 0 12 2 9.98 9.98 0 0 0 3.06 7.5l3.34 2.61A5.94 5.94 0 0 1 12 6.09z" opacity=".55" />
    </svg>
  );
}

export function TripAdvisorIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cx(base, className)} aria-hidden {...props}>
      <path d="M12 6.5c-3 0-5.9 1-8.4 2.6H1l1.7 1.9a5.1 5.1 0 1 0 7.2 7.2l2.1 2.3 2.1-2.3a5.1 5.1 0 1 0 7.2-7.2L23 9.1h-2.6A15.4 15.4 0 0 0 12 6.5zM6.8 17.5a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm10.4 0a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zM6.8 12.6a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2zm10.4 0a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
    </svg>
  );
}

export function YelpIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cx(base, className)} aria-hidden {...props}>
      <path d="M14.2 12.5l4.6-1.5c.7-.2 1 .6 1 1.2v3.6c0 .8-.9 1.2-1.5.7l-4.4-2.9c-.6-.4-.4-1 .3-1.1zm-1.7 3.4l3.1 3.5c.5.6 0 1.4-.7 1.3l-3.5-.5c-.7-.1-1-.9-.6-1.5l1.7-2.8c.4-.6 1.3-.5 2 0zM11 20.4l-3.5.5c-.8.1-1.2-.7-.7-1.3l3.1-3.5c.7-.5 1.6-.6 2 0l1.7 2.8c.4.6.1 1.4-.6 1.5l-2 .1zM6.2 15.5c-.6.5-1.5.1-1.5-.7v-3.6c0-.6.3-1.4 1-1.2l4.6 1.5c.7.1.9.7.3 1.1l-4.4 2.9zM10.5 3.9c.4-.7 1.5-.4 1.5.4v6.4c0 .8-1 1.2-1.5.5L7.8 6.7c-.2-.3-.1-.7.1-1L10.5 3.9z" />
    </svg>
  );
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="inline-block w-4 h-4 ml-1" aria-hidden {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
