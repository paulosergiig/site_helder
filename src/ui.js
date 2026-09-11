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
  Mail,
  Clock3,
  MapPin,
  Navigation,
  BadgeCheck,
  BriefcaseBusiness,
  Users,
  Lightbulb,
  CalendarDays,
  TrendingUp,
  Puzzle,
  Handshake,
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
  Mail,
  Clock3,
  MapPin,
  Navigation,
  BadgeCheck,
  BriefcaseBusiness,
  Users,
  Lightbulb,
  CalendarDays,
  TrendingUp,
  Puzzle,
  Handshake,
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
  <div class="info-bar" aria-label="Informações de atendimento">
    <div class="container info-bar__inner">
      <span>Componentes eletrônicos para automação industrial</span>
      <span>Atendimento especializado</span>
      <span>Distribuição para todo o Brasil</span>
    </div>
  </div>
`

export const header = ({ base = './', active = '' } = {}) => {
  const activeClass = (name) => active === name ? ' class="active" aria-current="page"' : ''
  return `
    <header class="site-header">
      <div class="container header__inner">
        ${brand(base)}
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-menu" aria-label="Abrir menu">
          <span class="menu-open">${icon('Menu')}</span>
          <span class="menu-close">${icon('X')}</span>
        </button>
        <nav id="main-menu" class="main-nav" aria-label="Navegação principal">
          <a${activeClass('inicio')} href="${base}">Início</a>
          <a href="${base}#produtos">Produtos</a>
          <a${activeClass('sobre')} href="${base}sobre/">Sobre</a>
          <a href="${base}#parceiros">Parceiros</a>
          <!-- Temporário: o Blog ainda não possui conteúdo ou rota publicada. -->
          <span class="nav-link is-disabled" aria-disabled="true" title="Blog em breve">Blog</span>
          <a${activeClass('contato')} href="${base}contato/">Contato</a>
        </nav>
      </div>
    </header>
  `
}

export const mediaPlaceholder = (label, className = '') => `
  <div class="media-placeholder ${className}" role="img" aria-label="${label}">
    <span class="sr-only">Conteúdo visual aguardando o arquivo final da designer.</span>
  </div>
`

export const categoryCard = (category, href = '#produtos') => `
  <a class="category-card" href="${href}">
    <span class="category-card__icon">${icon(category.icon)}</span>
    <span>${category.title}</span>
  </a>
`

export const footer = (base = './') => `
  <footer class="site-footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        ${brand(base)}
        <p>Soluções em componentes eletrônicos para a indústria.</p>
      </div>
      <div>
        <h2>Navegação</h2>
        <a href="${base}">Início</a>
        <a href="${base}#produtos">Produtos</a>
        <a href="${base}sobre/">Sobre</a>
        <a href="${base}contato/">Contato</a>
      </div>
      <div>
        <h2>Categorias</h2>
        <a href="${base}categorias/">Componentes eletrônicos</a>
        <a href="${base}categorias/">Automação industrial</a>
        <a href="${base}categorias/">Ver todas</a>
      </div>
      <div>
        <h2>Atendimento</h2>
        <p>Atendimento especializado para encontrar a solução ideal para sua empresa.</p>
        <a href="${base}contato/">Fale com a equipe</a>
      </div>
      <div>
        <h2>Localização</h2>
        <p>Av. Assis Chateaubriand, 2993<br>Distrito Industrial<br>Campina Grande - PB</p>
        <div class="footer__map" aria-label="Representação da localização da Painel Elétrico">${icon('MapPin')}</div>
      </div>
    </div>
    <div class="footer__legal">
      <div class="container">Painel Elétrico · Todos os direitos reservados.</div>
    </div>
  </footer>
  ${infoBar()}
`

export const initNavigation = () => {
  const toggle = document.querySelector('.menu-toggle')
  const nav = document.querySelector('.main-nav')
  if (!toggle || !nav) return

  const closeMenu = ({ restoreFocus = false } = {}) => {
    const wasOpen = toggle.getAttribute('aria-expanded') === 'true'
    toggle.setAttribute('aria-expanded', 'false')
    toggle.setAttribute('aria-label', 'Abrir menu')
    nav.classList.remove('is-open')
    if (restoreFocus && wasOpen) toggle.focus()
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
    if (event.key === 'Escape') closeMenu({ restoreFocus: true })
  })
}
