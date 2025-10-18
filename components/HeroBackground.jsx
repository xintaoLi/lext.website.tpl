import { useEffect, useRef, useState } from 'react'

export default function HeroBackground() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let resizeTimeout
    const isMobile = window.innerWidth < 768

    // 检测深色模式
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    checkDarkMode()

    // 监听主题变化
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    // 设置 canvas 尺寸（使用视口宽度填充左右）
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      const width = window.innerWidth
      const height = rect.height
      
      canvas.width = width * dpr
      canvas.height = height * dpr
      
      ctx.scale(dpr, dpr)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      
      // 重新创建网格点
      dots.length = 0
      for (let x = 0; x < width; x += gridSpacing) {
        for (let y = 0; y < height; y += gridSpacing) {
          dots.push({
            x: x + gridSpacing / 2,
            y: y + gridSpacing / 2,
            baseX: x + gridSpacing / 2,
            baseY: y + gridSpacing / 2,
            scale: 1
          })
        }
      }
    }

    // 创建网格点数据（更密集）
    const gridSpacing = isMobile ? 32 : 24
    const dots = []
    
    resizeCanvas()

    // 鼠标移动处理（监听父容器）
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // 检查是否在 canvas 范围内
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current = { x, y }
      } else {
        mouseRef.current = { x: -1000, y: -1000 }
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    // 绘制函数
    const draw = () => {
      const width = window.innerWidth
      const height = canvas.getBoundingClientRect().height

      ctx.clearRect(0, 0, width, height)

      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y
      const interactionRadius = isMobile ? 0 : 150
      const maxOffset = 15

      // 根据深色模式设置颜色（更淡）
      const dotColor = isDark ? 'rgba(139, 157, 255, 0.15)' : 'rgba(102, 126, 234, 0.12)'
      const glowColor = isDark ? 'rgba(139, 157, 255, 0.3)' : 'rgba(102, 126, 234, 0.25)'
      const connectionColor = isDark ? 'rgba(139, 157, 255, 0.06)' : 'rgba(102, 126, 234, 0.05)'

      dots.forEach(dot => {
        // 计算与鼠标的距离
        const dx = mouseX - dot.baseX
        const dy = mouseY - dot.baseY
        const distance = Math.sqrt(dx * dx + dy * dy)

        // 鼠标附近的点会被"推开"并缩放
        if (distance < interactionRadius && !isMobile) {
          const force = (interactionRadius - distance) / interactionRadius
          const angle = Math.atan2(dy, dx)
          dot.x = dot.baseX - Math.cos(angle) * force * maxOffset
          dot.y = dot.baseY - Math.sin(angle) * force * maxOffset
          // 添加缩放因子
          dot.scale = 1 + force * 0.8
        } else {
          // 平滑回到原位和原大小
          dot.x += (dot.baseX - dot.x) * 0.1
          dot.y += (dot.baseY - dot.y) * 0.1
          dot.scale = dot.scale ? dot.scale + (1 - dot.scale) * 0.1 : 1
        }

        // 绘制点
        const dotDistance = Math.sqrt(
          Math.pow(dot.x - width / 2, 2) + Math.pow(dot.y - height / 2, 2)
        )
        const maxDotDistance = Math.sqrt(width * width + height * height) / 2
        const opacity = 1 - (dotDistance / maxDotDistance) * 0.6

        ctx.globalAlpha = opacity
        ctx.fillStyle = dotColor

        const currentScale = dot.scale || 1

        // 鼠标附近的点会发光和缩放
        if (distance < interactionRadius && !isMobile) {
          const glowIntensity = 1 - distance / interactionRadius
          const baseSize = 1.5
          const size = baseSize * currentScale + glowIntensity * 2

          ctx.save()
          ctx.shadowBlur = 12 * glowIntensity * currentScale
          ctx.shadowColor = glowColor
          ctx.beginPath()
          ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        } else {
          const baseSize = 1.5
          ctx.beginPath()
          ctx.arc(dot.x, dot.y, baseSize * currentScale, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // 绘制连接线（只在距离较近的点之间）
      if (!isMobile) {
        ctx.strokeStyle = connectionColor
        ctx.lineWidth = 1
        const connectionDistance = gridSpacing * 1.5

        for (let i = 0; i < dots.length; i++) {
          for (let j = i + 1; j < dots.length; j++) {
            const dx = dots[i].x - dots[j].x
            const dy = dots[i].y - dots[j].y
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < connectionDistance) {
              const opacity = 1 - dist / connectionDistance
              ctx.globalAlpha = opacity * 0.3
              ctx.beginPath()
              ctx.moveTo(dots[i].x, dots[i].y)
              ctx.lineTo(dots[j].x, dots[j].y)
              ctx.stroke()
            }
          }
        }
      }

      // 绘制鼠标光晕（更淡）
      if (!isMobile && mouseX > 0 && mouseY > 0 && mouseX < width && mouseY < height) {
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 120)
        gradient.addColorStop(0, isDark ? 'rgba(139, 157, 255, 0.08)' : 'rgba(102, 126, 234, 0.06)')
        gradient.addColorStop(0.5, isDark ? 'rgba(139, 157, 255, 0.03)' : 'rgba(102, 126, 234, 0.02)')
        gradient.addColorStop(1, 'rgba(102, 126, 234, 0)')

        ctx.globalAlpha = 1
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    // 开始动画
    draw()

    // 事件监听（监听父容器，因为 canvas 有 pointerEvents: none）
    const parent = canvas.parentElement
    
    if (!isMobile && parent) {
      parent.addEventListener('mousemove', handleMouseMove)
      parent.addEventListener('mouseleave', handleMouseLeave)
    }
    
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resizeCanvas, 200)
    })

    // 清理
    return () => {
      cancelAnimationFrame(animationFrameId)
      if (!isMobile && parent) {
        parent.removeEventListener('mousemove', handleMouseMove)
        parent.removeEventListener('mouseleave', handleMouseLeave)
      }
      window.removeEventListener('resize', resizeCanvas)
      clearTimeout(resizeTimeout)
      observer.disconnect()
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="hero-background"
      style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100vw',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  )
}


