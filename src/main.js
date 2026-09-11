import './style.css'
import { categories, featuredProducts, benefits, partners, steps } from './data/site.js'
import { categoryCard, footer, header, icon, infoBar, initNavigation, mediaPlaceholder } from './ui.js'

const productCards = featuredProducts.map((product) => `
  <article class="product-card">
    <div class="product-card__image" role="img" aria-label="Imagem do produto ainda não fornecida"></div>
    <h3>${product.name}</h3>
    <p>${product.description}</p>
  </article>
`).join('')

const benefitCards = benefits.map((item) => `
  <article class="benefit-card">
    <span class="benefit-card__icon">${icon(item.icon)}</span>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
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
  ${header({ base: './', active: 'inicio' })}
  <main>
    <section class="hero" id="inicio">
      <div class="container hero__grid">
        <div class="hero__content">
          <p class="eyebrow">Componentes eletrônicos</p>
          <h1>Soluções em<br>componentes<br>eletrônicos<br>para a indústria</h1>
        </div>
        ${mediaPlaceholder('Área reservada para imagem ou vídeo de componentes eletrônicos', 'hero__media')}
      </div>
    </section>

    <section class="category-strip" aria-labelledby="categorias-home">
      <div class="container">
        <h2 class="sr-only" id="categorias-home">Categorias</h2>
        <div class="category-grid category-grid--home">
          ${categories.map((category) => categoryCard(category, './categorias/')).join('')}
          <a class="category-card category-card--all" href="./categorias/">
            <span class="category-card__dots" aria-hidden="true"><i></i><i></i><i></i></span>
            <span>Ver todas categorias</span>
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

    <section class="about section-orange" aria-labelledby="about-home-title">
      <div class="container about__grid">
        ${mediaPlaceholder('Área reservada para imagem sobre a história da empresa', 'about__media')}
        <div class="about__content">
          <p class="eyebrow">Sobre a empresa</p>
          <h2 id="about-home-title">Experiência que transforma necessidades em soluções</h2>
          <p>A Painel Elétrico trabalha para conectar a indústria aos componentes e às soluções adequadas a cada projeto.</p>
          <p>Com atendimento próximo e conhecimento técnico, nossa equipe entende cada necessidade para orientar escolhas com clareza e segurança.</p>
          <a class="button" href="./sobre/">Conheça nossa história ${icon('ArrowRight')}</a>
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

    <section class="contact-cta" aria-labelledby="contact-cta-title">
      <div class="container contact-cta__panel">
        <span class="contact-cta__icon">${icon('MessageCircle')}</span>
        <div>
          <h2 id="contact-cta-title">Precisa de componentes eletrônicos?</h2>
          <p>Conte sua necessidade para nossa equipe.</p>
        </div>
        <a class="button button--light" href="./contato/">Fale com a equipe ${icon('ArrowRight')}</a>
      </div>
    </section>
  </main>
  ${footer('./')}
`

initNavigation()
