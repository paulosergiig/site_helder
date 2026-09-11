import './style.css'
import { milestones, values } from './data/site.js'
import { footer, header, icon, infoBar, initNavigation, mediaPlaceholder } from './ui.js'

const milestoneCards = milestones.map((item) => `
  <article class="milestone-card">
    <span class="milestone-card__icon">${icon(item.icon)}</span>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  </article>
`).join('')

const valueCards = values.map((item) => `
  <article class="value-card">
    <span class="value-card__icon">${icon(item.icon)}</span>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  </article>
`).join('')

const indicators = ['Anos de experiência', 'Clientes atendidos', 'Produtos', 'Parceiros']

document.querySelector('#app').innerHTML = `
  ${infoBar()}
  ${header({ base: '../', active: 'sobre' })}
  <main>
    <section class="inner-hero about-hero">
      <div class="container inner-hero__grid">
        <div>
          <p class="eyebrow">Sobre a Painel Elétrico</p>
          <h1>Experiência que<br>transforma<br>necessidades em<br>soluções</h1>
          <p class="inner-hero__intro">Conhecimento técnico, proximidade e compromisso para atender às necessidades da indústria.</p>
        </div>
        ${mediaPlaceholder('Área reservada para imagem institucional da empresa', 'inner-hero__media')}
      </div>
    </section>

    <section class="history-section" aria-labelledby="history-title">
      <div class="container">
        <p class="eyebrow">Nossa história</p>
        <h2 id="history-title">Uma trajetória construída com<br>dedicação e confiança</h2>
        <div class="milestone-grid">${milestoneCards}</div>
      </div>
    </section>

    <section class="values-section" aria-labelledby="values-title">
      <div class="container">
        <p class="eyebrow">Nossa história</p>
        <h2 id="values-title">O que nos move todo dia</h2>
        <div class="value-grid">${valueCards}</div>
      </div>
    </section>

    <section class="indicator-strip" aria-label="Indicadores da empresa">
      <div class="container indicator-grid">
        ${indicators.map((label) => `<div><span aria-hidden="true">—</span><p>${label}</p></div>`).join('')}
      </div>
    </section>

    <section class="about-cta" aria-labelledby="about-cta-title">
      <div class="container about-cta__grid">
        ${mediaPlaceholder('Área reservada para imagem de atendimento', 'about-cta__media')}
        <div>
          <p class="eyebrow">Fale com a gente</p>
          <h2 id="about-cta-title">Vamos encontrar a solução ideal para sua empresa?</h2>
          <p>Compartilhe sua necessidade e conte com nossa equipe para orientar os próximos passos.</p>
          <a class="button" href="../contato/">Fale com nossa equipe ${icon('ArrowRight')}</a>
        </div>
      </div>
    </section>
  </main>
  ${footer('../')}
`

initNavigation()
