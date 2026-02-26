export function DixaLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 4C26.2091 4 28 5.79086 28 8V18C28 20.2091 26.2091 22 24 22H16L8 28V22H8C5.79086 22 4 20.2091 4 18V8C4 5.79086 5.79086 4 8 4H24Z"
          fill="white"
        />
        <circle cx="12" cy="13" r="1.5" fill="#2a2a2a" />
        <circle cx="20" cy="13" r="1.5" fill="#2a2a2a" />
        <path
          d="M12 16C12 16 13.5 18 16 18C18.5 18 20 16 20 16"
          stroke="#2a2a2a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-2xl font-bold text-white">dixa</span>
    </div>
  );
}
