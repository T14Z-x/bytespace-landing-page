export function SearchIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#8B8E95" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="8.5" cy="8.5" r="6" /><path d="M13 13l5 5" /></svg>
}

export function StarIcon({ color = '#D0D2D6', size = 18 }: { color?: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true"><path d="M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.6 6 20.9l1.3-6.7-5-4.7 6.8-.8z" /></svg>
}

export function LevelIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="#444" aria-hidden="true"><rect x="1" y="7" width="2.6" height="6" rx="1" /><rect x="5.7" y="3" width="2.6" height="10" rx="1" /><rect x="10.4" y="5" width="2.6" height="8" rx="1" /></svg>
}

export function CheckIcon() {
  return <svg width="21" height="21" viewBox="0 0 21 21" aria-hidden="true"><circle cx="10.5" cy="10.5" r="10.5" fill="#003BE2" /><path d="M5.6 10.8l3.3 3.3 6.4-6.7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
