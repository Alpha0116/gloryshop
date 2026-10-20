import Script from "next/script";

export default function Home() {
  return (
    <>
      <div className="announcement">Livraison rapide au Bénin & à l'international <span>•</span> Service client WhatsApp <span>•</span> Emballage cadeau offert</div>
      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="BHZ EMPIRE, accueil">
          <img src="/images/bhz-logo.png" alt="BHZ EMPIRE" className="brand-logo" width="42" height="42" />
          <span><strong>BHZ</strong><small>EMPIRE</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="#collection">Collection</a>
          <a href="#femme">Femme</a>
          <a href="#homme">Homme</a>
          <a href="#avantages">Nos engagements</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" id="themeToggle" aria-label="Activer le mode sombre" title="Activer le mode sombre"><span className="sun-icon" aria-hidden="true">☼</span><span className="moon-icon" aria-hidden="true">☾</span></button>
          <button className="icon-button" id="searchToggle" aria-label="Ouvrir la recherche">⌕</button>
          <button className="cart-button" id="cartToggle" aria-label="Voir la commande">Commande <span id="cartCount">0</span></button>
          <button className="menu-button" id="menuToggle" aria-label="Ouvrir le menu" aria-expanded="false">☰</button>
        </div>
        <div className="search-panel" id="searchPanel">
          <label htmlFor="globalSearch">Que recherchez-vous ?</label>
          <input id="globalSearch" type="search" placeholder="Collier, montre, ensemble..." autoComplete="off" />
          <button id="searchClose" aria-label="Fermer la recherche">×</button>
        </div>
        <nav className="mobile-nav" id="mobileNav" aria-label="Navigation mobile">
          <a href="#collection">Collection</a><a href="#femme">Femme</a><a href="#homme">Homme</a><a href="#avantages">Nos engagements</a><a href="#faq">FAQ</a><a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <img src="/images/hero-couple.webp" alt="Couple élégant portant des bijoux BHZ EMPIRE" fetchPriority="high" />
          <div className="hero-shade" />
          <div className="hero-content reveal">
            <p className="eyebrow light">Nouvelle collection · 2026</p>
            <h1>Votre éclat.<br /><em>Votre signature.</em></h1>
            <p className="hero-copy">Des bijoux choisis pour illuminer les instants simples et sublimer les grands jours.</p>
            <div className="hero-buttons">
              <a className="button button-gold" href="#collection">Découvrir la collection</a>
              <a className="button button-ghost" href="https://wa.me/2290169296243" target="_blank" rel="noreferrer">Nous contacter</a>
            </div>
          </div>
          <div className="hero-note"><span>01</span><div /><p>Élégance<br />sans compromis</p></div>
        </section>

        <section className="trust-bar" aria-label="Nos garanties">
          <div><b>✦</b><span><strong>Qualité sélectionnée</strong><small>Des finitions soignées</small></span></div>
          <div><b>◇</b><span><strong>Livraison rapide</strong><small>Bénin & International</small></span></div>
          <div><b>♙</b><span><strong>Conseil personnalisé</strong><small>Sur WhatsApp</small></span></div>
          <div><b>✓</b><span><strong>Satisfaction garantie</strong><small>Votre confiance d'abord</small></span></div>
        </section>

        <section className="intro section-shell reveal" id="collection">
          <p className="eyebrow">La maison BHZ EMPIRE</p>
          <h2>Le bijou qui raconte<br /><em>votre histoire</em></h2>
          <p>Des pièces intemporelles aux détails contemporains, notre sélection accompagne chaque personnalité, chaque style et chaque occasion.</p>
        </section>

        <section className="gender-cards section-shell">
          <article className="gender-card reveal" id="femme">
            <img src="/images/editorial-woman.webp" alt="Collection de bijoux pour femme" loading="lazy" />
            <div className="gender-overlay"><p>Éclat délicat</p><h3>Femme</h3><button data-gender="Femme">Explorer la collection <span>→</span></button></div>
          </article>
          <article className="gender-card reveal" id="homme">
            <img src="/images/editorial-men.webp" alt="Collection de bijoux et montres pour homme" loading="lazy" />
            <div className="gender-overlay"><p>Caractère affirmé</p><h3>Homme</h3><button data-gender="Homme">Explorer la collection <span>→</span></button></div>
          </article>
        </section>

        <section className="catalogue section-shell" id="catalogue">
          <div className="section-heading reveal">
            <div><p className="eyebrow">Pièces choisies</p><h2>Notre <em>collection</em></h2></div>
            <p>Chaque pièce est présentée avec les informations utiles pour choisir sereinement.</p>
          </div>
          <div className="catalog-tools">
            <div className="filter-row" id="categoryFilters" role="group" aria-label="Filtrer les produits">
              <button className="active" data-filter="Tous">Tout</button><button data-filter="Femme">Femme</button><button data-filter="Homme">Homme</button><button data-filter="Colliers">Colliers</button><button data-filter="Bracelets">Bracelets</button><button data-filter="Bagues">Bagues</button><button data-filter="Montres">Montres</button><button data-filter="Boucles">Boucles</button><button data-filter="Ensembles">Ensembles</button>
            </div>
            <div className="filter-options">
              <select id="colorFilter" aria-label="Filtrer par couleur"><option value="Toutes">Toutes les couleurs</option><option>Doré</option><option>Argenté</option><option>Noir</option><option>Rose gold</option></select>
              <select id="priceFilter" aria-label="Filtrer par prix"><option value="Tous">Tous les prix</option><option value="0-15000">Moins de 15 000 F</option><option value="15000-30000">15 000 à 30 000 F</option><option value="30000-999999">Plus de 30 000 F</option></select>
              <span id="resultCount" aria-live="polite"></span>
            </div>
          </div>
          <div className="product-grid" id="productGrid" aria-live="polite" />
          <div className="empty-state" id="emptyState"><span>◇</span><h3>Aucun bijou trouvé</h3><p>Essayez un autre mot ou retirez un filtre.</p><button id="resetFilters">Réinitialiser</button></div>
        </section>

        <section className="editorial-banner reveal">
          <img src="/images/editorial-evening.webp" alt="Bijoux de soirée dorés" loading="lazy" />
          <div><p className="eyebrow light">Éditions soirée</p><h2>Brillez quand<br /><em>tout compte.</em></h2><p>Des pièces lumineuses, pensées pour les célébrations et les cadeaux inoubliables.</p><button className="button button-gold" data-filter-jump="Ensembles">Voir les ensembles</button></div>
        </section>

        <section className="values section-shell" id="avantages">
          <div className="section-heading centered reveal"><div><p className="eyebrow">L'expérience BHZ EMPIRE</p><h2>Pourquoi nous <em>choisir</em></h2></div></div>
          <div className="value-grid">
            <article className="reveal"><span>01</span><i>✦</i><h3>Qualité premium</h3><p>Des pièces sélectionnées pour leur éclat, leur finition et leur confort au quotidien.</p></article>
            <article className="reveal"><span>02</span><i>₣</i><h3>Prix accessibles</h3><p>Un style remarquable à prix juste, avec des options adaptées à chaque budget.</p></article>
            <article className="reveal"><span>03</span><i>↗</i><h3>Expédition</h3><p>Préparation attentive et expédition de votre commande au Bénin et à l'international.</p></article>
            <article className="reveal"><span>04</span><i>♙</i><h3>Service disponible</h3><p>Des conseils humains pour choisir une taille, une couleur ou le cadeau idéal.</p></article>
            <article className="reveal"><span>05</span><i>□</i><h3>Paiement rassurant</h3><p>Votre commande est confirmée directement avec notre équipe avant livraison.</p></article>
            <article className="reveal"><span>06</span><i>✓</i><h3>Satisfaction garantie</h3><p>Nous vérifions chaque article et restons disponibles après votre achat.</p></article>
          </div>
        </section>

        <section className="order-section" id="commande">
          <div className="order-image reveal"><img src="/images/gift-set.webp" alt="Coffret cadeau de bijoux BHZ EMPIRE" loading="lazy" /><div><span>Un cadeau ?</span><p>Demandez votre emballage offert.</p></div></div>
          <div className="order-panel reveal">
            <p className="eyebrow">Commande simple</p><h2>Finalisez sur <em>WhatsApp</em></h2><p className="order-intro">Ajoutez vos coups de cœur, complétez vos informations, puis envoyez votre commande en un clic.</p>
            <div className="order-items" id="orderItems"><div className="cart-empty"><span>◇</span><p>Votre sélection est vide.</p><a href="#catalogue">Découvrir les bijoux</a></div></div>
            <form id="orderForm">
              <div className="form-grid">
                <label>Nom complet *<input name="name" required placeholder="Votre nom et prénom" /></label>
                <label>Téléphone *<input name="phone" required type="tel" placeholder="Ex. 97 00 00 00" /></label>
                <label>Ville *<input name="city" required placeholder="Ex. Cotonou" /></label>
                <label>Quartier<input name="district" placeholder="Votre quartier" /></label>
                <label className="full">Adresse / point de repère<textarea name="address" rows={2} placeholder="Indiquez un point de repère utile" /></label>
                <label>Mode de livraison<select name="delivery"><option>Livraison à domicile</option><option>Point de rendez-vous</option><option>Retrait en boutique</option></select></label>
                <label className="full">Remarques<textarea name="notes" rows={3} placeholder="Emballage cadeau, horaire souhaité, précision..." /></label>
              </div>
              <button className="whatsapp-submit" type="submit"><span>◉</span> Commander sur WhatsApp</button>
              <small className="form-note">Vous serez redirigé vers WhatsApp avec le récapitulatif complet.</small>
            </form>
          </div>
        </section>

        <section className="testimonials section-shell">
          <div className="section-heading reveal"><div><p className="eyebrow">Vos mots précieux</p><h2>Ils nous font <em>confiance</em></h2></div><div className="review-score"><strong>4,9</strong><span>★★★★★<small>Plus de 200 clientes satisfaites</small></span></div></div>
          <div className="testimonial-track" id="testimonialTrack" />
        </section>

        <section className="faq section-shell" id="faq">
          <div className="faq-heading reveal"><p className="eyebrow">Besoin d'aide ?</p><h2>Questions <em>fréquentes</em></h2><p>Tout ce qu'il faut savoir avant, pendant et après votre commande.</p><div className="faq-search"><span>⌕</span><input id="faqSearch" type="search" placeholder="Rechercher dans les questions..." /></div></div>
          <div className="faq-list" id="faqList" />
          <button className="faq-more" id="faqMore">Afficher toutes les questions <span>↓</span></button>
        </section>

        <section className="contact" id="contact">
          <div className="contact-copy reveal"><p className="eyebrow light">Parlons de votre choix</p><h2>Nous sommes là<br /><em>pour vous.</em></h2><p>Un doute sur une taille ou une couleur ? Écrivez-nous, notre équipe vous répond avec plaisir.</p><a className="button button-gold" href="https://wa.me/2290169296243" target="_blank" rel="noreferrer">Écrire sur WhatsApp</a></div>
          <div className="contact-details reveal">
            <div><small>WhatsApp & téléphone</small><a href="tel:+2290169296243">+229 01 69 29 62 43</a></div>
            <div><small>Horaires</small><p>Lun — Sam · 08h00 — 20h00<br />Dimanche · Sur WhatsApp</p></div>
            <div><small>Adresse</small><p>Cotonou, Bénin<br />Livraison nationale & internationale</p></div>
            <div><small>Nous suivre</small><p className="socials"><a href="https://www.tiktok.com/@bhzempire?_r=1&_t=ZS-9AionjBdS6P" target="_blank" rel="noreferrer">TikTok</a><a href="https://www.instagram.com/bhz_empire?obrf=MWY0YXN6YWx4OHhhZA==" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/share/1A6D586Hub/" target="_blank" rel="noreferrer">Facebook</a></p></div>
          </div>
          <div className="map-placeholder" style={{ padding: 0, overflow: 'hidden' }}><img src="/images/brand-banner.png?v=2" alt="BHZ EMPIRE — Votre éclat. Votre signature." style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" /></div>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand"><a className="brand light-brand" href="#top"><img src="/images/bhz-logo.png" alt="BHZ EMPIRE" className="brand-logo" width="42" height="42" /><span><strong>BHZ</strong><small>EMPIRE</small></span></a><p>Des bijoux qui révèlent votre éclat.</p></div>
          <div><h3>Explorer</h3><a href="#collection">Collections</a><a href="#femme">Femme</a><a href="#homme">Homme</a><a href="#commande">Commander</a></div>
          <div><h3>Informations</h3><a href="#faq">Livraison & retours</a><a href="#faq">Guide des tailles</a><a href="#faq">Entretien</a><a href="#contact">Nous contacter</a></div>
          <div><h3>Newsletter privée</h3><p>Recevez nos nouveautés et offres exclusives.</p><form id="newsletterForm"><input type="email" required placeholder="Votre adresse e-mail" aria-label="Votre adresse e-mail" /><button aria-label="S'inscrire">→</button></form></div>
        </div>
        <div className="footer-bottom"><span>© 2026 BHZ EMPIRE. Tous droits réservés.</span><p><a href="#">Mentions légales</a><a href="#">Confidentialité</a><a href="#">Conditions générales</a></p></div>
      </footer>

      <a className="floating-whatsapp" href="https://wa.me/2290169296243" target="_blank" rel="noreferrer" aria-label="Contacter BHZ EMPIRE sur WhatsApp">◉<span>Besoin d'aide ?</span></a>
      <button className="back-top" id="backTop" aria-label="Retour en haut">↑</button>

      <div className="modal" id="productModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" aria-hidden="true"><div className="modal-backdrop" data-close-modal /><div className="modal-card"><button className="modal-close" data-close-modal aria-label="Fermer">×</button><div id="modalContent" /></div></div>
      <div className="cart-drawer" id="cartDrawer" aria-hidden="true"><div className="drawer-head"><div><p className="eyebrow">Votre sélection</p><h2>Commande</h2></div><button id="cartClose" aria-label="Fermer">×</button></div><div id="drawerItems" className="drawer-items" /><div className="drawer-total"><span>Total estimé</span><strong id="drawerTotal">0 FCFA</strong><a className="button button-gold" href="#commande" id="checkoutLink">Finaliser la commande</a></div></div><div className="drawer-backdrop" id="drawerBackdrop" />
      <div className="toast" id="toast" role="status" aria-live="polite" />
      <Script src="/shop.js" strategy="afterInteractive" />
    </>
  );
}
