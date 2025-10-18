# 组件说明

## HeroBackground

首页欢迎区域的交互式动态背景组件，参考 [Doks](https://doks.netlify.app/) 设计风格。

### 特性

- ✨ 精致的粒子网格背景
- 🖱️ **丰富的鼠标交互效果**：
  - 鼠标附近的点会被"推开"并发光
  - 点之间动态连接线
  - 鼠标光晕效果
  - 离开时粒子平滑归位
- 🌙 完美适配深色/浅色模式
- 📱 移动端优化（静态显示，节省性能）
- ⚡ 性能优化：
  - 限制最大 DPR 为 2
  - 智能粒子间距（桌面 32px，移动 40px）
  - 使用 requestAnimationFrame 实现 60fps
  - 高效的邻近点连接算法
  - 窗口 resize 防抖处理

### 交互效果

1. **粒子推开效果**：鼠标靠近时，150px 范围内的粒子会被推开最多 15px
2. **发光效果**：鼠标附近的粒子会发光并变大，创造聚焦效果
3. **动态连接**：距离较近的粒子之间会显示连接线，透明度随距离衰减
4. **光晕跟随**：鼠标位置显示渐变光晕，增强沉浸感
5. **平滑归位**：鼠标移开后，粒子使用缓动函数平滑回到原位

### 使用方法

```jsx
import HeroBackground from '../components/HeroBackground'

<div className="hero-section">
  <HeroBackground />
  {/* 其他内容 */}
</div>
```

### 性能说明

- 使用 Canvas API 而非 DOM 操作，性能卓越
- 移动端自动禁用所有交互效果
- 通过 DPR 限制避免在高分辨率屏幕上过度渲染
- 使用弹性动画平滑过渡，减少计算量
- 连接线绘制使用距离限制，避免 O(n²) 全量计算

### 可调整参数

在 `HeroBackground.jsx` 中可修改：

- `gridSpacing`: 网格间距（默认：桌面 32px，移动 40px）
- `interactionRadius`: 交互半径（默认：150px）
- `maxOffset`: 最大推开距离（默认：15px）
- `connectionDistance`: 连接线距离阈值（默认：gridSpacing * 1.5）
- 颜色：`dotColor`, `glowColor`, `connectionColor`
- 发光强度：`shadowBlur`（默认：10 * glowIntensity）

