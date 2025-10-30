# 响应式适配指南

## 断点配置

本项目使用 **3个标准断点**，简洁实用：

| 断点名称 | 屏幕宽度 | 适用设备 |
|---------|---------|---------|
| 手机端 | ≤768px | 手机 |
| 平板端 | 769px-1024px | iPad、平板 |
| 电脑端 | ≥1025px | 笔记本、台式机 |

## 使用方法

### SCSS 变量

```scss
$mobile-max: 768px;
$tablet-min: 769px;
$tablet-max: 1024px;
$desktop-min: 1025px;
```

### 媒体查询写法

```scss
// 手机端
@media (max-width: 768px) {
  // 手机端样式
}

// 平板端
@media (min-width: 769px) and (max-width: 1024px) {
  // 平板端样式
}

// 电脑端
@media (min-width: 1025px) {
  // 电脑端样式
}
```

## 响应式规范

### 字体大小

| 元素 | 手机端 | 平板端 | 电脑端 |
|-----|-------|-------|-------|
| h1 | 2rem | 2.5rem | 3rem |
| h2 | 1.6rem | 2rem | 2.4rem |
| h3 | 1.3rem | 1.6rem | 1.9rem |
| h4 | 1.1rem | 1.3rem | 1.5rem |
| 正文 | 1rem | 1.1rem | 1.2rem |

### 容器宽度

| 断点 | padding | max-width |
|-----|---------|-----------|
| 手机端 | 1rem | 100% |
| 平板端 | 1.5rem | 960px |
| 电脑端 | 2rem | 1200px |

### 高度设置

| 区域类型 | 手机端 | 平板端 | 电脑端 |
|---------|-------|-------|-------|
| 主横幅 | 60vh | 70vh | 80vh |
| 次横幅 | 70vh | 80vh | 90vh |
| 内容区 | 50vh | 60vh | 70vh |

## 工具类

### 容器类

```html
<div class="responsive-container">
  <!-- 内容会根据断点自动调整padding和max-width -->
</div>
```

### 文本类

```html
<p class="responsive-text">
  <!-- 文字大小会根据断点自动调整 -->
</p>
```

### 显示/隐藏类

```html
<!-- 在手机端隐藏 -->
<div class="hide-mobile">平板和电脑端内容</div>

<!-- 在平板端隐藏 -->
<div class="hide-tablet">手机和电脑端内容</div>

<!-- 在电脑端隐藏 -->
<div class="hide-desktop">手机和平板端内容</div>

<!-- 只在手机端显示 -->
<div class="show-mobile-only">手机端专用内容</div>

<!-- 只在平板端显示 -->
<div class="show-tablet-only">平板端专用内容</div>

<!-- 只在电脑端显示 -->
<div class="show-desktop-only">电脑端专用内容</div>
```

## 最佳实践

1. **移动优先**: 先设计手机端样式，再通过媒体查询添加更大屏幕的样式
2. **简洁清晰**: 只使用3个断点，避免过多的媒体查询
3. **一致性**: 所有页面使用相同的断点值
4. **性能优化**: 媒体查询应该简洁高效，避免重复代码

## 示例

### 响应式横幅

```scss
.banner {
  height: 100vh; // 默认值
  
  @media (max-width: 768px) {
    height: 60vh;
    min-height: 400px;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 70vh;
    min-height: 500px;
  }
  
  @media (min-width: 1025px) {
    height: 80vh;
    min-height: 600px;
  }
}
```

### 响应式布局

```scss
.grid {
  display: grid;
  grid-template-columns: 1fr; // 默认单列
  gap: 1rem;
  
  @media (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr); // 平板端2列
    gap: 1.5rem;
  }
  
  @media (min-width: 1025px) {
    grid-template-columns: repeat(3, 1fr); // 电脑端3列
    gap: 2rem;
  }
}
```

## 测试建议

- **手机端**: iPhone SE (375px), iPhone 12 (390px), iPhone 12 Pro Max (428px)
- **平板端**: iPad (768px), iPad Pro (1024px)
- **电脑端**: MacBook Air (1280px), MacBook Pro (1440px), iMac (1920px)

## 更新日志

- 2025-01-24: 简化断点从4个到3个，提高可维护性