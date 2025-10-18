export default function Logo({ size = 36 }) {
  return (
    <span 
      style={{ 
        fontSize: `${size * 0.6}px`,
        fontWeight: 'bold',
        color: '#4b5563',
        marginRight: '10px',
        flexShrink: 0
      }}
    >
      📚
    </span>
  );
}

