import {
  createElement,
  CircuitBoard,
  Cable,
  RadioTower,
  BatteryCharging,
  Bot,
  Factory,
  Truck,
  ShieldCheck,
  Headphones,
  Boxes,
  ClipboardList,
  Search,
  FileText,
  Send,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
} from 'lucide'

const icons = {
  CircuitBoard,
  Cable,
  RadioTower,
  BatteryCharging,
  Bot,
  Factory,
  Truck,
  ShieldCheck,
  Headphones,
  Boxes,
  ClipboardList,
  Search,
  FileText,
  Send,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
}

export const icon = (name, className = '') => {
  const node = icons[name] || CircuitBoard
  return createElement(node, {
    class: className,
    'aria-hidden': 'true',
    width: 24,
    height: 24,
  }).outerHTML
}

export const brand = (href = './') => `
  <a class="brand" href="${href}" aria-label="Painel Elétrico — página inicial">
    <span class="brand__mark">${icon('CircuitBoard')}</span>
    <span class="brand__name"><strong>PAINEL</strong><b>ELÉTRICO</b><small>MGX SERVIÇOS</small></span>
  </a>
`

export const infoBar = () => `
  <div class="info-bar">
    <div class="container info-bar__inner">
      <span>Componentes eletrônicos para automação industrial</span>
      <span>Atendimento especializado</span>
      <span>Distribuição para todo o Brasil</span>
    </div>
  </div>
`

export const header = (homeHref = './') => `
  <header class="site-header">
    <div class="container header__inner">
      ${brand(homeHref)}
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-menu" aria-label="Abrir menu">
        <span class="menu-open">${icon('Menu')}</span>
        <span class="menu-close">${icon('X')}</span>
      </button>
      <nav id="main-menu" class="main-nav" aria-label="Navegação principal">
        <a class="active" href="${homeHref}#inicio">Início</a>
        <a href="${homeHref}#produtos">Produtos</a>
        <a href="${homeHref}#sobre">Sobre</a>
        <a href="${homeHref}#parceiros">Parceiros</a>
        <a href="${homeHref}#como-funciona">Como funciona</a>
        <a href="${homeHref}#contato">Contato</a>
      </nav>
    </div>
  </header>
`

export const categoryCard = (category, href = '#produtos') => `
  <a class="category-card" href="${href}">
    <span class="category-card__icon">${icon(category.icon)}</span>
    <span>${category.title}</span>
  </a>
`

export const footer = (homeHref = './') => `
  <footer class="site-footer">
    <div class="container footer__grid">
      <div>
        ${brand(homeHref)}
        <p>Soluções em componentes eletrônicos para a indústria.</p>
      </div>
      <div>
        <h2>Navegação</h2>
        <a href="${homeHref}#produtos">Produtos</a>
        <a href="${homeHref}#sobre">Sobre a empresa</a>
        <a href="${homeHref}categorias/">Categorias</a>
      </div>
      <div>
        <h2>Atendimento</h2>
        <p>Atendimento especializado para sua empresa.</p>
      </div>
      <div>
        <h2>Localização</h2>
        <p>—</p>
      </div>
    </div>
    <div class="container footer__bottom">Painel Elétrico · Todos os direitos reservados.</div>
  </footer>
`

export const initNavigation = () => {
  const toggle = document.querySelector('.menu-toggle')
  const nav = document.querySelector('.main-nav')
  if (!toggle || !nav) return

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false')
    toggle.setAttribute('aria-label', 'Abrir menu')
    nav.classList.remove('is-open')
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true'
    toggle.setAttribute('aria-expanded', String(!isOpen))
    toggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu')
    nav.classList.toggle('is-open', !isOpen)
  })

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu()
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu()
      toggle.focus()
    }
  })
}
