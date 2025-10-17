export default function Logo({ size = 36 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: '10px', flexShrink: 0 }}
    >
      {/* 淡淡的太极背景 - 只是装饰 */}
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        fill="none"
        stroke="url(#subtleCircle)"
        strokeWidth="0.5"
        opacity="0.15"
      />
      
      {/* 太极S曲线 - 极淡的背景 */}
      <path 
        d="M 50 10
           A 20 20 0 0 1 50 50
           A 20 20 0 0 0 50 90"
        stroke="url(#subtleCurve)"
        strokeWidth="0.3"
        fill="none"
        opacity="0.1"
      />
      
      {/* 主角：字母 L - 粗壮有力 */}
      <path 
        d="M 30 25
           L 30 65
           Q 30 70, 35 70
           L 62 70"
        stroke="url(#mainGradient)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* 第一个 e - 流动的点 */}
      <circle 
        cx="68" 
        cy="38" 
        r="5.5" 
        fill="url(#dotGrad1)"
      />
      <circle 
        cx="68" 
        cy="38" 
        r="2.5" 
        fill="none"
        stroke="url(#dotStroke)"
        strokeWidth="1"
        opacity="0.6"
      />
      
      {/* 第二个 e - 更大更突出 */}
      <circle 
        cx="73" 
        cy="53" 
        r="6.5" 
        fill="url(#dotGrad2)"
      />
      <circle 
        cx="73" 
        cy="53" 
        r="3" 
        fill="none"
        stroke="url(#dotStroke)"
        strokeWidth="1.2"
        opacity="0.6"
      />
      
      {/* 第三个 e - 呼应 */}
      <circle 
        cx="68" 
        cy="70" 
        r="5.5" 
        fill="url(#dotGrad3)"
      />
      <circle 
        cx="68" 
        cy="70" 
        r="2.5" 
        fill="none"
        stroke="url(#dotStroke)"
        strokeWidth="1"
        opacity="0.6"
      />
      
      {/* 艺术性的小点缀 - 太极元素 */}
      <circle cx="50" cy="30" r="2" fill="url(#accentDot)" opacity="0.3" />
      <circle cx="50" cy="70" r="2" fill="url(#accentDot)" opacity="0.3" />
      
      {/* 渐变定义 */}
      <defs>
        {/* 主要渐变 - Leeext 核心 */}
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="50%" stopColor="#4b5563" />
          <stop offset="100%" stopColor="#6b7280" />
        </linearGradient>
        
        {/* 点的渐变1 */}
        <radialGradient id="dotGrad1">
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="100%" stopColor="#9ca3af" />
        </radialGradient>
        
        {/* 点的渐变2 */}
        <radialGradient id="dotGrad2">
          <stop offset="0%" stopColor="#4b5563" />
          <stop offset="100%" stopColor="#6b7280" />
        </radialGradient>
        
        {/* 点的渐变3 */}
        <radialGradient id="dotGrad3">
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="100%" stopColor="#9ca3af" />
        </radialGradient>
        
        {/* 点的描边 */}
        <linearGradient id="dotStroke">
          <stop offset="0%" stopColor="#9ca3af" />
          <stop offset="100%" stopColor="#d1d5db" />
        </linearGradient>
        
        {/* 太极装饰 - 极淡 */}
        <linearGradient id="subtleCircle">
          <stop offset="0%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#e5e7eb" />
        </linearGradient>
        
        <linearGradient id="subtleCurve">
          <stop offset="0%" stopColor="#e5e7eb" />
          <stop offset="100%" stopColor="#d1d5db" />
        </linearGradient>
        
        {/* 装饰点 */}
        <radialGradient id="accentDot">
          <stop offset="0%" stopColor="#9ca3af" />
          <stop offset="100%" stopColor="#d1d5db" />
        </radialGradient>
      </defs>
    </svg>
  );
}

