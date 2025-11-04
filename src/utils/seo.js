/**
 * SEO工具类 - 动态更新页面SEO信息
 */

// 默认SEO配置
const defaultSEO = {
  title: '南通意中裁剪中心 - 专业格柏智能裁剪服务',
  description:
    '南通意中裁剪中心，专业格柏智能裁剪服务，提供全自动拉布机、自动裁剪机等设备，毫米级精度，为服装企业提供高效裁剪解决方案。',
  keywords:
    '南通裁剪中心,格柏裁剪,智能裁剪,自动裁剪机,拉布机,服装裁剪,裁剪设备,裁剪服务,南通服装加工',
  siteName: '南通意中裁剪中心'
}

/**
 * 更新页面SEO信息
 * @param {Object} seoConfig - SEO配置对象
 * @param {string} seoConfig.title - 页面标题
 * @param {string} seoConfig.description - 页面描述
 * @param {string} seoConfig.keywords - 页面关键词
 * @param {string} seoConfig.image - 分享图片URL
 */
export function updateSEO(seoConfig = {}) {
  const config = {
    ...defaultSEO,
    ...seoConfig
  }

  // 更新title
  if (config.title) {
    document.title = config.title
  }

  // 更新description
  updateMetaTag('description', config.description)
  updateMetaTag('property', 'og:description', config.description)

  // 更新keywords
  updateMetaTag('keywords', config.keywords)

  // 更新og:title
  updateMetaTag('property', 'og:title', config.title)

  // 更新og:site_name
  if (config.siteName) {
    updateMetaTag('property', 'og:site_name', config.siteName)
  }

  // 更新og:image
  if (config.image) {
    updateMetaTag('property', 'og:image', config.image)
  }

  // 更新og:url
  if (typeof window !== 'undefined') {
    updateMetaTag('property', 'og:url', window.location.href)
  }
}

/**
 * 更新或创建meta标签
 * @param {string} attr - 属性名（name或property）
 * @param {string} value - 属性值
 * @param {string} content - meta标签内容
 */
function updateMetaTag(attr, value, content) {
  if (!content) return

  let selector = `meta[${attr}="${value}"]`
  let meta = document.querySelector(selector)

  if (!meta) {
    meta = document.createElement('meta')
    if (attr === 'property') {
      meta.setAttribute('property', value)
    } else {
      meta.setAttribute('name', value)
    }
    document.getElementsByTagName('head')[0].appendChild(meta)
  }

  meta.setAttribute('content', content)
}

/**
 * 生成结构化数据（JSON-LD）
 * @param {Object} data - 结构化数据
 */
export function generateStructuredData(data) {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify(data)

  // 移除旧的structured data
  const oldScript = document.querySelector('script[type="application/ld+json"]')
  if (oldScript) {
    oldScript.remove()
  }

  document.getElementsByTagName('head')[0].appendChild(script)
}

/**
 * 生成组织结构化数据
 */
export function generateOrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '南通意中裁剪中心',
    description: '专业格柏智能裁剪服务，提供全自动拉布机、自动裁剪机等设备',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    logo: typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : '',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: '客户服务',
      areaServed: 'CN',
      availableLanguage: 'zh-CN'
    }
  }

  generateStructuredData(organizationSchema)
}

/**
 * 生成网站结构化数据
 */
export function generateWebSiteSchema() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '南通意中裁剪中心',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate:
          typeof window !== 'undefined'
            ? `${window.location.origin}/search?q={search_term_string}`
            : ''
      },
      'query-input': 'required name=search_term_string'
    }
  }

  generateStructuredData(websiteSchema)
}
