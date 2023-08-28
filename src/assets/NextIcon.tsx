const NextIcon: React.FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 12H7M17 12L13 8M17 12L13 16"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NextIcon;
