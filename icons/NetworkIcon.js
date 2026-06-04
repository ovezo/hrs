export default function NetworkIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="2.25" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="4.5" r="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="19.5" cy="12" r="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="19.5" r="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4.5" cy="12" r="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="6" x2="12" y2="9.75" strokeLinecap="round" />
      <line x1="18" y1="12" x2="14.25" y2="12" strokeLinecap="round" />
      <line x1="12" y1="18" x2="12" y2="14.25" strokeLinecap="round" />
      <line x1="6" y1="12" x2="9.75" y2="12" strokeLinecap="round" />
    </svg>
  );
}
