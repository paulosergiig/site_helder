import './style.css'
import { categories } from './data/site.js'
import { categoryCard, footer, infoBar } from './ui.js'

const repeatedCategories = Array.from({ length: 3 }, () => categories).flat()

document.querySelector('#app').innerHTML = `
  ${infoBar()}
  <main class="categories-main">
    <section class="categories-hero" aria-labelledby="categories-title">
      <div class="container">
        <a class="back-link" href="../">← Voltar para o início</a>
        <h1 id="categories-title">Categorias</h1>
        <div class="category-grid category-grid--all">
          ${repeatedCategories.map((category) => categoryCard(category, '../#produtos')).join('')}
        </div>
      </div>
    </section>
  </main>
  ${footer('../')}
`
