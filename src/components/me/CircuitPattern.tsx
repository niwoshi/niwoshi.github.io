export function CircuitPattern() {
  return (
    <>
      {/* Top left circuit pattern */}
      <svg
        className="absolute top-0 left-0 w-64 h-64 opacity-30 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#00d4ff" strokeWidth="1" fill="none">
          {/* Horizontal traces */}
          <line x1="20" y1="40" x2="80" y2="40" />
          <line x1="120" y1="60" x2="180" y2="60" />
          <line x1="40" y1="100" x2="100" y2="100" />
          
          {/* Vertical traces */}
          <line x1="80" y1="20" x2="80" y2="80" />
          <line x1="120" y1="60" x2="120" y2="120" />
          <line x1="160" y1="40" x2="160" y2="100" />
          
          {/* Nodes */}
          <circle cx="80" cy="40" r="3" fill="#00d4ff" />
          <circle cx="120" cy="60" r="3" fill="#00d4ff" />
          <circle cx="80" cy="80" r="3" fill="#00d4ff" />
          <circle cx="120" cy="120" r="3" fill="#00d4ff" />
          
          {/* IC-like rectangles */}
          <rect x="35" y="95" width="10" height="10" fill="none" stroke="#00d4ff" />
          <rect x="155" y="95" width="10" height="10" fill="none" stroke="#00d4ff" />
        </g>
      </svg>

      {/* Bottom right circuit pattern */}
      <svg
        className="absolute bottom-0 right-0 w-64 h-64 opacity-30 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#00ff88" strokeWidth="1" fill="none">
          {/* Horizontal traces */}
          <line x1="20" y1="140" x2="80" y2="140" />
          <line x1="120" y1="160" x2="180" y2="160" />
          
          {/* Vertical traces */}
          <line x1="80" y1="100" x2="80" y2="160" />
          <line x1="120" y1="120" x2="120" y2="180" />
          
          {/* Nodes */}
          <circle cx="80" cy="140" r="3" fill="#00ff88" />
          <circle cx="120" cy="160" r="3" fill="#00ff88" />
          
          {/* IC-like rectangles */}
          <rect x="75" y="100" width="10" height="10" fill="none" stroke="#00ff88" />
          <rect x="115" y="120" width="10" height="10" fill="none" stroke="#00ff88" />
        </g>
      </svg>
    </>
  );
}
