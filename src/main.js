import './style.css'
import { categories, featuredProducts, benefits, partners, steps } from './data/site.js'
import { categoryCard, footer, header, icon, infoBar, initNavigation } from './ui.js'

const productCards = featuredProducts.map((product) => `
  <article class="product-card">
    <div class="product-card__image" role="img" aria-label="Imagem do produto ainda não fornecida"></div>
    <h3>${product.name}</h3>
    <p>${product.description}</p>
  </article>
`).join('')

const benefitCards = benefits.map((item) => `
  <article class="benefit-card">
    <h3>${item.title}</h3>
    <p>${item.text}</p>
    <span>${icon(item.icon)}</span>
  </article>
`).join('')

const partnerCards = partners.map((partner) => `
  <div class="partner-card" aria-label="Marca parceira ${partner}">${partner}</div>
`).join('')

const processSteps = steps.map((step, index) => `
  <article class="process-step">
    <span class="process-step__number">${index + 1}</span>
    <span class="process-step__icon">${icon(step.icon)}</span>
    <h3>${step.title}</h3>
    <p>${step.text}</p>
  </article>
`).join('')

document.querySelector('#app').innerHTML = `
  ${infoBar()}
  ${header('./')}
  <main>
    <section class="hero" id="inicio">
      <div class="container hero__content">
        <p class="eyebrow">Componentes eletrônicos</p>
        <h1>Soluções em<br>componentes eletrônicos<br>para a indústria</h1>
      </div>
    </section>

    <section class="category-strip" aria-labelledby="categorias-home">
      <div class="container category-strip__inner">
        <h2 class="sr-only" id="categorias-home">Categorias</h2>
        <div class="category-grid category-grid--home">
          ${categories.map((category) => categoryCard(category)).join('')}
          <a class="category-card category-card--all" href="./categorias/">
            <span class="category-card__dots" aria-hidden="true"><i></i><i></i><i></i></span>
            <span>Ver todas as categorias</span>
          </a>
        </div>
      </div>
    </section>

    <section class="products section-orange" id="produtos">
      <div class="container">
        <div class="section-heading">
          <h2>Produtos em destaque</h2>
          <a href="./categorias/">Ver todos os produtos ${icon('ArrowRight')}</a>
        </div>
        <div class="product-grid">${productCards}</div>
      </div>
    </section>

    <section class="about section-orange" id="sobre">
      <div class="container about__grid">
        <div class="about__space" aria-hidden="true"><span>15+</span><small>anos de experiência</small></div>
        <div class="about__content">
          <p class="eyebrow">Sobre a empresa</p>
          <h2>Referência em distribuição de componentes eletrônicos</h2>
          <p>Há mais de 15 anos no mercado, oferecemos soluções completas em componentes eletrônicos com compromisso, qualidade e agilidade no atendimento.</p>
          <ul>
            <li>Mais de 15 anos de experiência</li>
            <li>Distribuidor autorizado das principais marcas</li>
            <li>Atendimento em todo território nacional</li>
            <li>Equipe técnica especializada</li>
          </ul>
          <a class="button" href="#como-funciona">Conheça nossa história</a>
        </div>
      </div>
    </section>

    <section class="benefits dark-section" aria-labelledby="diferenciais-title">
      <div class="container">
        <h2 class="sr-only" id="diferenciais-title">Nossos diferenciais</h2>
        <div class="benefit-grid">${benefitCards}</div>
      </div>
    </section>

    <section class="partners section-orange" id="parceiros">
      <div class="container">
        <h2>Marcas parceiras</h2>
        <div class="partner-grid">${partnerCards}</div>
      </div>
    </section>

    <section class="process dark-section" id="como-funciona">
      <div class="container">
        <h2>Como funciona</h2>
        <div class="process-grid">${processSteps}</div>
      </div>
    </section>

    <section class="contact" id="contato">
      <div class="container contact__panel">
        <span class="contact__icon">${icon('MessageCircle')}</span>
        <div><h2>Precisa de componentes eletrônicos?</h2><p>Fale com nossa equipe.</p></div>
        <a class="button button--light" href="#inicio">Voltar ao início ${icon('ArrowRight')}</a>
      </div>
    </section>
  </main>
  ${footer('./')}
`

initNavigation()

const sections = [...document.querySelectorAll('main section[id]')]
const navLinks = [...document.querySelectorAll('.main-nav a')]
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.find((entry) => entry.isIntersecting)
    if (!visible) return
    navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${visible.target.id}`))
  }, { rootMargin: '-30% 0px -60%', threshold: 0 })
  sections.forEach((section) => observer.observe(section))
}
