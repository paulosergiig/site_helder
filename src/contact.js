import './style.css'
import { header, icon, infoBar, initNavigation } from './ui.js'

document.querySelector('#app').innerHTML = `
  ${infoBar()}
  ${header({ base: '../', active: 'contato' })}
  <main class="contact-main">
    <section class="contact-page-section" aria-labelledby="contact-title">
      <div class="container contact-page__grid">
        <div class="contact-details">
          <p class="eyebrow">Contato</p>
          <h1 id="contact-title">Vamos conversar?</h1>
          <p class="contact-details__intro">Fale com nossa equipe e conte o que sua empresa precisa. Estamos prontos para orientar você.</p>

          <div class="contact-list">
            <article class="contact-item">
              <span>${icon('MessageCircle')}</span>
              <div><h2>WhatsApp</h2><p>Canal em atualização</p></div>
            </article>
            <article class="contact-item">
              <span>${icon('Mail')}</span>
              <div><h2>E-mail</h2><p>Canal em atualização</p></div>
            </article>
            <article class="contact-item">
              <span>${icon('Clock3')}</span>
              <div><h2>Atendimento</h2><p>Atendimento especializado</p></div>
            </article>
            <article class="contact-item contact-item--address">
              <span>${icon('MapPin')}</span>
              <div>
                <h2>Onde estamos</h2>
                <p>Av. Assis Chateaubriand, 2993<br>Distrito Industrial<br>Campina Grande - PB</p>
                <span class="button button--disabled" aria-disabled="true" title="URL do mapa ainda não fornecida">Como chegar ${icon('Navigation')}</span>
              </div>
            </article>
          </div>
        </div>

        <div class="contact-form-card">
          <h2>Envie uma mensagem</h2>
          <form class="contact-form" aria-describedby="form-note">
            <label>Nome<input type="text" name="nome" autocomplete="name" required></label>
            <label>E-mail<input type="email" name="email" autocomplete="email" required></label>
            <label>Mensagem<textarea name="mensagem" rows="5" required></textarea></label>
            <label>Assunto<input type="text" name="assunto" required></label>
            <p id="form-note">Formulário visual. O canal de envio ainda não foi configurado.</p>
            <button class="button button--disabled" type="button" aria-disabled="true">Enviar mensagem ${icon('Send')}</button>
          </form>
        </div>
      </div>
    </section>
  </main>
`

initNavigation()
