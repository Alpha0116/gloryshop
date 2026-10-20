(function () {
  "use strict";

  const WHATSAPP = "2290169296243";
  const products = [
    {id:"GS-FC01",name:"Cascade Lumière",gender:"Femme",category:"Colliers",image:"/images/women-necklace-cascade.webp",price:18500,badge:"Nouveau",desc:"Collier sautoir coulissant aux lignes fines, conçu pour allonger délicatement la silhouette.",material:"Acier inoxydable plaqué",quality:"Premium",finish:"Dorure brillante",stone:"Cristaux sertis",colors:["Doré","Rose gold"],sizes:["Réglable 45–70 cm"],weight:"18 g",style:"Chic minimaliste",occasion:"Travail, soirée, cadeau",care:"Essuyer après usage et ranger à l'abri de l'humidité.",compatibility:"Peaux sensibles, sans nickel déclaré",availability:"En stock",delivery:"24 à 72 h",wholesale:"Oui, dès 10 pièces",advice:"Idéal avec un col en V ou une robe unie.",warranty:"Contrôle qualité à réception"},
    {id:"GS-FB01",name:"Constellation",gender:"Femme",category:"Bracelets",image:"/images/women-bracelets-star.webp",price:12500,badge:"Tendance",desc:"Composition de bracelets fins, étoilés et lumineux à porter seuls ou en accumulation.",material:"Alliage premium et acier",quality:"Sélection supérieure",finish:"Polie et pavée",stone:"Cristaux zircon",colors:["Doré","Argenté"],sizes:["16–21 cm réglable"],weight:"6 à 12 g",style:"Délicat",occasion:"Quotidien, anniversaire",care:"Éviter parfum direct et produits abrasifs.",compatibility:"Poignet fin à moyen",availability:"En stock",delivery:"24 à 72 h",wholesale:"Oui, selon stock",advice:"Mélangez deux modèles maximum pour un rendu raffiné.",warranty:"Vérification avant expédition"},
    {id:"GS-FB02",name:"Main de Grâce",gender:"Femme",category:"Bracelets",image:"/images/women-hand-jewels.webp",price:15000,badge:"Signature",desc:"Bracelet de main aérien, ponctué de cristaux pour un effet bijou spectaculaire et léger.",material:"Acier fin plaqué",quality:"Premium",finish:"Dorure satinée",stone:"Zircons transparents",colors:["Doré"],sizes:["Réglable"],weight:"9 g",style:"Glamour",occasion:"Cérémonie, shooting, soirée",care:"Retirer avant la douche et ranger à plat.",compatibility:"Main droite ou gauche",availability:"Stock limité",delivery:"24 à 72 h",wholesale:"Sur demande",advice:"Associez-le à une manucure neutre.",warranty:"Contrôle visuel inclus"},
    {id:"GS-FR01",name:"Solène Crystal",gender:"Femme",category:"Bagues",image:"/images/women-rings-crystal.webp",price:22000,badge:"Coup de cœur",desc:"Solitaire lumineux à pierre taille émeraude, ovale ou princesse, serti sur un anneau pavé.",material:"Argent 925 selon modèle",quality:"Haute brillance",finish:"Rhodium ou dorure",stone:"Zircon cubique 2 ct",colors:["Argenté","Doré"],sizes:["52","54","56","58","60"],weight:"4,8 g",style:"Intemporel",occasion:"Fiançailles, cadeau, cérémonie",care:"Nettoyer avec un chiffon doux sans alcool.",compatibility:"Guide : mesurez le diamètre intérieur d'une bague ajustée.",availability:"En stock",delivery:"24 à 72 h",wholesale:"Oui",advice:"Entre deux tailles, choisissez la plus grande.",warranty:"Pierre vérifiée avant remise"},
    {id:"GS-FE01",name:"Mini Delicate",gender:"Femme",category:"Boucles",image:"/images/women-earrings-delicate.webp",price:9500,badge:"6 paires",desc:"Coffret de six paires de puces dorées : étoile, cœur, cygne, lune, cercle et papillon.",material:"Acier inoxydable",quality:"Confort quotidien",finish:"Dorure brillante",stone:"Micro-zircons",colors:["Doré"],sizes:["4–9 mm"],weight:"0,8–1,5 g par boucle",style:"Ludique et délicat",occasion:"Tous les jours, cadeau",care:"Nettoyer la tige après chaque port.",compatibility:"Oreilles percées",availability:"En stock",delivery:"24 à 72 h",wholesale:"Oui, dès 6 coffrets",advice:"Changez de motif selon votre tenue.",warranty:"Attaches contrôlées",attachment:"Poussette",length:"4 à 9 mm"},
    {id:"GS-FS01",name:"Ébène Royal",gender:"Femme",category:"Ensembles",image:"/images/women-set-ebony.webp",price:32000,badge:"Ensemble",desc:"Duo bracelet et bague ouvert, sculpté autour de pierres noires en goutte pour un contraste saisissant.",material:"Alliage premium plaqué",quality:"Premium",finish:"Dorée ou argentée",stone:"Cristal noir facetté",colors:["Doré","Argenté"],sizes:["Bracelet réglable","Bague 54–60"],weight:"28 g l'ensemble",style:"Audacieux",occasion:"Soirée, cérémonie",care:"Conserver séparément dans la pochette.",compatibility:"Poignet moyen, bague ajustable",availability:"Stock limité",delivery:"24 à 72 h",wholesale:"Sur réservation",advice:"Portez l'ensemble avec une tenue monochrome.",warranty:"Contrôle des sertissages",pieces:"2 pièces",composition:"1 bracelet + 1 bague"},
    {id:"GS-MS01",name:"Coffret Héritage Noir",gender:"Homme",category:"Ensembles",image:"/images/men-set-black.webp",price:38500,badge:"Coffret",desc:"Coffret coordonné noir comprenant montre, bracelet, collier croix et bague pour un style complet.",material:"Acier et similicuir",quality:"Sélection premium",finish:"Noire mate",stone:"Sans pierre",colors:["Noir"],sizes:["Bracelet réglable","Bague 60–66"],weight:"165 g",style:"Urbain affirmé",occasion:"Cadeau, sortie, travail",care:"Éviter l'immersion de la montre.",compatibility:"Poignet 16–22 cm",availability:"En stock",delivery:"24 à 72 h",wholesale:"Oui, dès 5 coffrets",advice:"Un cadeau prêt à offrir.",warranty:"30 jours sur le mouvement",pieces:"4 pièces",composition:"Montre + bracelet + collier + bague"},
    {id:"GS-MW01",name:"Chrono Minuit",gender:"Homme",category:"Montres",image:"/images/men-set-black.webp",price:24500,badge:"Best-seller",desc:"Montre au cadran bleu nuit, lisible et structurée, montée sur bracelet noir à surpiqûres.",material:"Boîtier acier, bracelet PU",quality:"Mécanisme testé",finish:"Noir poli",stone:"Sans pierre",colors:["Noir","Bleu nuit"],sizes:["Bracelet 16–22 cm"],weight:"72 g",style:"Business casual",occasion:"Bureau, sortie",care:"Nettoyer avec un chiffon sec, ne pas immerger.",compatibility:"Poignet moyen à large",availability:"En stock",delivery:"24 à 72 h",wholesale:"Oui",advice:"Diamètre équilibré pour la majorité des poignets.",warranty:"30 jours sur le mouvement",diameter:"44 mm",strap:"Similicuir surpiqué",resistance:"Éclaboussures",movement:"Quartz"},
    {id:"GS-MC01",name:"Duo Croix Impérial",gender:"Homme",category:"Colliers",image:"/images/men-necklace-cross.webp",price:18000,badge:"Duo",desc:"Deux chaînes superposées, dont un pendentif croix épuré, pour une présence moderne.",material:"Acier inoxydable",quality:"Maille renforcée",finish:"Dorée brillante",stone:"Sans pierre",colors:["Doré","Noir"],sizes:["50 cm + 60 cm"],weight:"46 g",style:"Street chic",occasion:"Quotidien, cadeau",care:"Essuyer après sport et ranger fermé.",compatibility:"Tous types de cols",availability:"En stock",delivery:"24 à 72 h",wholesale:"Oui",advice:"À porter sur un haut noir ou blanc.",warranty:"Fermoir contrôlé"},
    {id:"GS-MC02",name:"Cuba Gold",gender:"Homme",category:"Colliers",image:"/images/men-chains-gold.webp",price:21000,badge:"Iconique",desc:"Chaîne cubaine dorée à mailles denses, disponible en plusieurs largeurs pour ajuster l'impact.",material:"Acier inoxydable",quality:"Maille dense",finish:"Dorure miroir",stone:"Sans pierre",colors:["Doré"],sizes:["50 cm / 4 mm","55 cm / 6 mm","60 cm / 8 mm"],weight:"38 à 86 g",style:"Classique puissant",occasion:"Quotidien, soirée",care:"Rincer à l'eau claire après transpiration puis sécher.",compatibility:"Longueurs adaptées à tous les cous",availability:"En stock",delivery:"24 à 72 h",wholesale:"Oui, dès 10 unités",advice:"4 mm discret, 8 mm plus affirmé.",warranty:"Fermoir contrôlé"},
    {id:"GS-MB01",name:"X-Link",gender:"Homme",category:"Bracelets",image:"/images/men-bracelets-silver.webp",price:14500,badge:"Nouveau",desc:"Bracelet articulé aux maillons géométriques, souple sur le poignet et facile à assortir.",material:"Acier inoxydable",quality:"Résistant",finish:"Argentée polie",stone:"Sans pierre",colors:["Argenté","Bicolore"],sizes:["19 cm","21 cm","23 cm"],weight:"32 à 48 g",style:"Contemporain",occasion:"Travail, quotidien",care:"Laver doucement à l'eau savonneuse et sécher.",compatibility:"Poignet moyen à large",availability:"En stock",delivery:"24 à 72 h",wholesale:"Oui",advice:"Laissez l'espace d'un doigt au poignet.",warranty:"Fermoir contrôlé"},
    {id:"GS-MR01",name:"Chevalière Onyx",gender:"Homme",category:"Bagues",image:"/images/editorial-collection.webp",price:19500,badge:"Signature",desc:"Chevalière structurée à pierre noire, pensée pour apporter du caractère sans excès.",material:"Acier inoxydable",quality:"Corps massif",finish:"Dorée",stone:"Onyx synthétique",colors:["Doré","Noir"],sizes:["60","62","64","66","68"],weight:"12 g",style:"Élégant affirmé",occasion:"Bureau, soirée, cadeau",care:"Essuyer la pierre avec une microfibre.",compatibility:"Guide : mesurez le tour du doigt en mm.",availability:"Stock limité",delivery:"24 à 72 h",wholesale:"Sur demande",advice:"Entre deux tailles, prenez la taille supérieure.",warranty:"Pierre et anneau contrôlés"}
  ];

  const reviews = [
    ["Aïcha M.","Cotonou","Mon ensemble est encore plus beau en vrai. La finition est propre et la livraison a été très rapide."],
    ["Sandrine K.","Abomey-Calavi","J'ai reçu de bons conseils pour la taille de ma bague. Elle me va parfaitement."],
    ["Nadia A.","Porto-Novo","Commande simple sur WhatsApp, équipe aimable et emballage très élégant."],
    ["Grâce H.","Parakou","La montre offerte à mon mari a eu beaucoup de succès. Je recommande sans hésiter."],
    ["Prisca D.","Cotonou","Les boucles sont légères et lumineuses. Je peux varier tous les jours."],
    ["Merveille S.","Bohicon","Le colis était bien protégé et conforme aux photos. Très belle expérience."],
    ["Ruth E.","Ouidah","Mon bracelet n'a pas bougé et reste agréable à porter. Service très sérieux."],
    ["Jean-Marc T.","Cotonou","Le coffret homme est complet et fait vraiment premium. Livraison le jour convenu."],
    ["Carine V.","Natitingou","On m'a envoyé des photos complémentaires avant de confirmer. J'ai beaucoup apprécié."],
    ["Esther B.","Lokossa","Une boutique attentive, des prix corrects et un très joli paquet cadeau."]
  ];

  const faqs = [
    ["Vos bijoux sont-ils inoxydables ?","Plusieurs modèles sont en acier inoxydable. La matière exacte est indiquée sur chaque fiche produit afin de choisir en toute transparence."],
    ["Les bijoux changent-ils de couleur ?","La tenue dépend de la matière, de la peau et de l'entretien. Évitez parfum, chlore et produits ménagers, puis essuyez le bijou après usage."],
    ["Les bijoux résistent-ils à l'eau ?","L'acier supporte les éclaboussures, mais nous conseillons de retirer tous les bijoux avant douche, piscine ou mer pour préserver leur éclat."],
    ["Quels sont les délais de livraison ?","La majorité des commandes disponibles sont préparées et livrées sous 24 à 72 heures selon votre ville."],
    ["Livrez-vous dans tout le Bénin ?","Oui, nous organisons des livraisons à Cotonou, dans les communes voisines et dans les autres villes du pays."],
    ["Comment commander ?","Ajoutez les articles souhaités, complétez le formulaire, puis cliquez sur Commander sur WhatsApp. Le récapitulatif est généré automatiquement."],
    ["Quels moyens de paiement acceptez-vous ?","Les moyens disponibles vous sont confirmés sur WhatsApp avant validation : mobile money, espèces selon le mode de remise, ou autre option convenue."],
    ["Puis-je commander plusieurs articles ?","Oui. Ajoutez autant d'articles que nécessaire, choisissez couleur, taille et quantité pour chacun, puis envoyez une seule commande."],
    ["Comment choisir ma taille de bague ?","Mesurez le diamètre intérieur d'une bague qui vous va ou le tour du doigt en millimètres. Notre équipe peut vous guider sur WhatsApp."],
    ["Puis-je offrir un article ?","Oui. Signalez-le dans les remarques : un emballage cadeau peut être préparé et un message peut être ajouté."],
    ["Les photos sont-elles réelles ?","Les photos servent à présenter fidèlement les modèles et leur style. Une légère variation de couleur peut exister selon l'écran ou l'éclairage."],
    ["Les produits sont-ils garantis ?","Chaque article est contrôlé avant remise. Les garanties particulières, notamment pour les montres, sont précisées dans la fiche."],
    ["Comment entretenir mes bijoux ?","Essuyez-les avec un chiffon doux, conservez-les séparément et évitez parfum, alcool, chlore, transpiration prolongée et produits abrasifs."],
    ["Puis-je retourner un article ?","Contactez-nous rapidement après réception, sans porter ni modifier l'article. Nous étudierons la situation selon son état et les conditions convenues."],
    ["Puis-je échanger une taille ?","Un échange peut être étudié si le modèle est intact et si la taille souhaitée est disponible. Contactez-nous avant tout retour."],
    ["Comment savoir si un produit est disponible ?","La disponibilité est affichée sur la fiche. Elle reste confirmée par notre équipe au moment de votre commande."],
    ["Les prix affichés sont-ils définitifs ?","Les prix indiqués correspondent aux produits et peuvent être mis à jour. Le montant final est confirmé sur WhatsApp avant livraison."],
    ["La livraison est-elle incluse dans le prix ?","Sauf mention contraire, les frais de livraison sont calculés selon la ville et le quartier, puis confirmés avant validation."],
    ["Puis-je modifier ma commande ?","Oui, tant qu'elle n'a pas été préparée ou remise au livreur. Écrivez-nous au plus vite sur WhatsApp."],
    ["Puis-je annuler ma commande ?","Prévenez-nous rapidement. Une annulation est possible avant la préparation ou l'expédition de la commande."],
    ["Comment suivre ma livraison ?","Notre équipe vous communique l'état de la commande et les informations utiles du livreur via WhatsApp."],
    ["Que faire si le livreur ne me trouve pas ?","Restez joignable et transmettez un point de repère précis. Le livreur ou notre équipe vous contactera."],
    ["Puis-je choisir une heure de livraison ?","Indiquez votre préférence dans les remarques. Nous ferons au mieux selon la tournée et vous confirmerons le créneau."],
    ["Livrez-vous le dimanche ?","Les disponibilités du dimanche varient. Contactez-nous sur WhatsApp pour vérifier les possibilités dans votre zone."],
    ["Avez-vous une boutique physique ?","Les modalités de retrait et l'adresse de rendez-vous sont communiquées lors de la confirmation sur WhatsApp."],
    ["Puis-je voir d'autres photos d'un article ?","Oui. Demandez-les sur WhatsApp en précisant le nom ou la référence du produit."],
    ["Les couleurs dorées sont-elles toutes identiques ?","La nuance peut varier légèrement selon la matière et la finition : doré jaune, champagne ou rose gold."],
    ["Vos bijoux contiennent-ils du nickel ?","La composition est indiquée lorsque l'information est disponible. En cas d'allergie connue, signalez-la avant de commander."],
    ["Les boucles conviennent-elles aux oreilles sensibles ?","Certains modèles en acier sont mieux tolérés. Vérifiez la matière et demandez conseil si vous êtes sensible."],
    ["Quel type d'attache ont les boucles ?","Le type d'attache est précisé dans la fiche : poussette, dormeuse, crochet ou créole selon le modèle."],
    ["Les colliers sont-ils réglables ?","La plupart disposent d'une chaînette ou d'un système ajustable. La longueur exacte figure dans les tailles disponibles."],
    ["Comment choisir la longueur d'un collier ?","45 cm tombe près du cou, 50 à 55 cm sur le haut du buste et 60 cm ou plus donne un effet plus long."],
    ["Comment mesurer mon poignet ?","Entourez le poignet d'un ruban sans serrer, notez la mesure puis ajoutez environ 1 cm pour un port confortable."],
    ["Les bracelets sont-ils réglables ?","Cela dépend du modèle. Les bracelets ouverts ou à chaînette sont réglables ; les tailles fixes sont indiquées."],
    ["Les montres sont-elles résistantes à l'eau ?","Le niveau de résistance est précisé sur la fiche. Sans indication d'étanchéité, évitez toute immersion."],
    ["Quel mouvement utilisent les montres ?","La plupart des modèles de la sélection utilisent un mouvement quartz simple et précis."],
    ["Les piles de montre sont-elles fournies ?","Oui, la montre est remise prête à fonctionner et testée avant l'envoi."],
    ["Les bracelets de montre sont-ils ajustables ?","Les bracelets à maillons peuvent nécessiter un ajustement ; les bracelets à boucle proposent plusieurs positions."],
    ["Proposez-vous des achats en gros ?","Oui pour plusieurs références. Les quantités minimales et tarifs sont étudiés selon le produit et le stock."],
    ["Comment demander un tarif de gros ?","Envoyez la liste des références, couleurs et quantités souhaitées sur WhatsApp pour recevoir une proposition."],
    ["Pouvez-vous réserver un article ?","Une courte réservation peut être convenue selon la demande. Elle n'est effective qu'après confirmation de notre équipe."],
    ["Les ensembles peuvent-ils être séparés ?","Les coffrets sont généralement vendus complets. Contactez-nous pour savoir si une pièce existe aussi à l'unité."],
    ["Puis-je mélanger les couleurs d'un ensemble ?","Cela dépend du stock et de la composition. Indiquez votre préférence avant confirmation."],
    ["Puis-je ajouter un message cadeau ?","Oui. Écrivez le texte exact dans les remarques, nous vous confirmerons la présentation possible."],
    ["L'emballage cadeau est-il payant ?","L'emballage standard est offert. Une présentation spéciale peut dépendre du format et sera confirmée à l'avance."],
    ["Comment utiliser la barre de recherche ?","Saisissez un nom, une catégorie, une couleur ou un style. Les résultats du catalogue se mettent à jour instantanément."],
    ["Comment fonctionnent les filtres ?","Choisissez Femme, Homme ou un type de bijou, puis affinez par couleur et tranche de prix."],
    ["Mes articles restent-ils dans ma sélection ?","Oui, la sélection est conservée sur votre appareil pour faciliter une commande ultérieure."],
    ["Mes données personnelles sont-elles protégées ?","Les informations du formulaire servent uniquement à composer votre message WhatsApp et ne sont pas stockées dans une base de données par ce site."],
    ["Comment contacter le service client ?","Écrivez ou appelez le +229 01 69 29 62 43. WhatsApp reste le moyen le plus rapide pour une réponse détaillée."]
  ];

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const money = value => new Intl.NumberFormat("fr-FR").format(value) + " FCFA";
  let cart = JSON.parse(localStorage.getItem("bhz-cart") || localStorage.getItem("glory-cart") || "[]");
  let activeFilter = "Tous";
  let faqsExpanded = false;

  function applyTheme(theme, persist = true) {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    const button = $("#themeToggle");
    const dark = theme === "dark";
    if (button) {
      const label = dark ? "Activer le mode clair" : "Activer le mode sombre";
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
      button.setAttribute("aria-pressed", String(dark));
    }
    if (persist) { localStorage.setItem("bhz-theme", theme); localStorage.setItem("glory-theme", theme); }
  }

  function productCard(product) {
    return `<article class="product-card" data-id="${product.id}">
      <div class="product-image"><img src="${product.image}" alt="${product.name} — ${product.category} ${product.gender}" loading="lazy" data-product-image data-gender="${product.gender}"><span class="product-badge">${product.badge}</span><span class="stock-dot">● ${product.availability}</span><button class="quick-view" data-details="${product.id}">Voir tous les détails</button></div>
      <div class="product-meta"><div class="topline"><span class="category">${product.gender} · ${product.category}</span><span class="price">${money(product.price)}</span></div><h3>${product.name}</h3><p class="desc">${product.desc}</p><div class="card-actions"><button data-add="${product.id}">Ajouter à la commande</button><button class="details-btn" data-details="${product.id}" aria-label="Voir les détails de ${product.name}">＋</button></div></div>
    </article>`;
  }

  function filteredProducts() {
    const search = ($("#globalSearch")?.value || "").toLowerCase().trim();
    const color = $("#colorFilter")?.value || "Toutes";
    const priceRange = $("#priceFilter")?.value || "Tous";
    return products.filter(p => {
      const filterMatch = activeFilter === "Tous" || p.gender === activeFilter || p.category === activeFilter;
      const searchMatch = !search || [p.name,p.gender,p.category,p.desc,p.style,p.colors.join(" ")].join(" ").toLowerCase().includes(search);
      const colorMatch = color === "Toutes" || p.colors.includes(color);
      let priceMatch = true;
      if (priceRange !== "Tous") { const [min,max] = priceRange.split("-").map(Number); priceMatch = p.price >= min && p.price <= max; }
      return filterMatch && searchMatch && colorMatch && priceMatch;
    });
  }

  function renderProducts() {
    const list = filteredProducts();
    $("#productGrid").innerHTML = list.map(productCard).join("");
    $("#resultCount").textContent = `${list.length} article${list.length > 1 ? "s" : ""}`;
    $("#emptyState").classList.toggle("show", list.length === 0);
  }

  function setFilter(value) {
    activeFilter = value;
    $$("#categoryFilters button").forEach(btn => btn.classList.toggle("active", btn.dataset.filter === value));
    renderProducts();
  }

  function openModal(id) {
    const p = products.find(item => item.id === id); if (!p) return;
    const extra = [p.attachment && ["Type d'attache",p.attachment],p.length && ["Longueur",p.length],p.pieces && ["Nombre de pièces",p.pieces],p.composition && ["Composition",p.composition],p.diameter && ["Diamètre",p.diameter],p.strap && ["Bracelet",p.strap],p.resistance && ["Résistance",p.resistance],p.movement && ["Mouvement",p.movement]].filter(Boolean);
    const specs = [["Référence",p.id],["Matière",p.material],["Qualité",p.quality],["Finition",p.finish],["Pierre",p.stone],["Poids",p.weight],["Style",p.style],["Occasion",p.occasion],["Compatibilité",p.compatibility],["Disponibilité",p.availability],["Livraison",p.delivery],["Achat en gros",p.wholesale],["Garantie",p.warranty],...extra];
    $("#modalContent").innerHTML = `<div class="modal-product"><div class="modal-visual"><img src="${p.image}" alt="${p.name}"></div><div class="modal-info"><p class="eyebrow">${p.gender} · ${p.category}</p><h2 id="modalTitle">${p.name}</h2><div class="modal-price">${money(p.price)}</div><p class="modal-description">${p.desc}</p><div class="spec-grid">${specs.map(([a,b]) => `<div><small>${a}</small><strong>${b}</strong></div>`).join("")}</div><div class="modal-selectors"><label>Couleur<select id="modalColor">${p.colors.map(c=>`<option>${c}</option>`).join("")}</select></label><label>Taille<select id="modalSize">${p.sizes.map(s=>`<option>${s}</option>`).join("")}</select></label></div><p class="modal-care"><strong>Conseil :</strong> ${p.advice}<br><strong>Entretien :</strong> ${p.care}</p><div class="modal-actions"><button data-modal-add="${p.id}">Ajouter à ma commande</button><a href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Bonjour BHZ EMPIRE, je souhaite en savoir plus sur " + p.name + " (" + p.id + ").")}" target="_blank" aria-label="Demander sur WhatsApp">◉</a></div></div></div>`;
    $("#productModal").classList.add("open"); $("#productModal").setAttribute("aria-hidden","false"); document.body.classList.add("locked");
  }

  function closeModal() { $("#productModal").classList.remove("open"); $("#productModal").setAttribute("aria-hidden","true"); document.body.classList.remove("locked"); }
  function saveCart() { localStorage.setItem("bhz-cart", JSON.stringify(cart)); renderCart(); }
  function addToCart(id, color, size) { const p = products.find(item=>item.id===id); if(!p)return; const c=color||p.colors[0], s=size||p.sizes[0]; const existing=cart.find(i=>i.id===id&&i.color===c&&i.size===s); if(existing) existing.qty+=1; else cart.push({id,color:c,size:s,qty:1}); saveCart(); toast(`${p.name} ajouté à la commande`); }
  function changeQty(index, delta) { if(!cart[index])return; cart[index].qty += delta; if(cart[index].qty < 1) cart.splice(index,1); saveCart(); }
  function cartMarkup() { if(!cart.length) return `<div class="cart-empty"><span>◇</span><p>Votre sélection est vide.</p><a href="#catalogue">Découvrir les bijoux</a></div>`; return cart.map((item,index)=>{const p=products.find(x=>x.id===item.id);return `<div class="order-line"><img src="${p.image}" alt="${p.name}"><div><h4>${p.name}</h4><p>${item.color} · ${item.size}</p><strong>${money(p.price*item.qty)}</strong></div><div class="order-line-controls"><button data-qty="${index}" data-delta="-1">−</button><span>${item.qty}</span><button data-qty="${index}" data-delta="1">+</button><button class="remove-item" data-remove="${index}">Retirer</button></div></div>`}).join(""); }
  function renderCart() { const markup=cartMarkup(); $("#orderItems").innerHTML=markup; $("#drawerItems").innerHTML=markup; const qty=cart.reduce((s,i)=>s+i.qty,0); const total=cart.reduce((s,i)=>{const p=products.find(x=>x.id===i.id);return s+(p?p.price*i.qty:0)},0); $("#cartCount").textContent=qty; $("#drawerTotal").textContent=money(total); }
  function openCart(){ $("#cartDrawer").classList.add("open"); $("#drawerBackdrop").classList.add("open"); $("#cartDrawer").setAttribute("aria-hidden","false"); document.body.classList.add("locked"); }
  function closeCart(){ $("#cartDrawer").classList.remove("open"); $("#drawerBackdrop").classList.remove("open"); $("#cartDrawer").setAttribute("aria-hidden","true"); document.body.classList.remove("locked"); }
  let toastTimer; function toast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2600)}

  function renderReviews(){ $("#testimonialTrack").innerHTML=reviews.map(([name,city,text])=>`<article class="testimonial-card reveal"><div class="stars">★★★★★</div><blockquote>“${text}”</blockquote><footer><strong>${name}</strong><small>✓ Achat vérifié · ${city}</small></footer></article>`).join(""); observeReveals(); }
  function renderFaqs(){const term=($("#faqSearch")?.value||"").toLowerCase();const entries=faqs.map((f,i)=>({f,i})).filter(({f})=>!term||f.join(" ").toLowerCase().includes(term));$("#faqList").innerHTML=entries.map(({f,i},shown)=>`<article class="faq-item ${!faqsExpanded&&!term&&shown>=12?"hidden-faq":""}"><button class="faq-question" aria-expanded="false"><span>${String(i+1).padStart(2,"0")}</span><strong>${f[0]}</strong><i>＋</i></button><div class="faq-answer"><div><p>${f[1]}</p></div></div></article>`).join("");$("#faqMore").style.display=term?"none":"block";$("#faqMore").innerHTML=faqsExpanded?`Réduire la liste <span>↑</span>`:`Afficher les ${faqs.length} questions <span>↓</span>`;}
  function observeReveals(){const els=$$(".reveal:not(.observed)");if(!("IntersectionObserver" in window)){els.forEach(e=>e.classList.add("visible"));return}const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");io.unobserve(entry.target)}}),{threshold:.1});els.forEach(e=>{e.classList.add("observed");io.observe(e)})}

  document.addEventListener("error", event => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || image.dataset.fallbackApplied === "true") return;
    const source = image.getAttribute("src") || "";
    const product = products.find(item => item.image === source);
    if (!product) return;
    image.dataset.fallbackApplied = "true";
    image.src = product.gender === "Homme" ? "/images/editorial-men.webp" : "/images/editorial-woman.webp";
  }, true);

  document.addEventListener("click", event => {
    const target = event.target.closest("button,a"); if(!target)return;
    if(target.dataset.details) openModal(target.dataset.details);
    if(target.dataset.add) addToCart(target.dataset.add);
    if(target.dataset.modalAdd){addToCart(target.dataset.modalAdd,$("#modalColor").value,$("#modalSize").value);closeModal();openCart()}
    if(target.matches("[data-close-modal]")) closeModal();
    if(target.dataset.qty) changeQty(Number(target.dataset.qty),Number(target.dataset.delta));
    if(target.dataset.remove!==undefined){cart.splice(Number(target.dataset.remove),1);saveCart()}
    if(target.dataset.filter){setFilter(target.dataset.filter);}
    if(target.dataset.gender){setFilter(target.dataset.gender);$("#catalogue").scrollIntoView({behavior:"smooth"})}
    if(target.dataset.filterJump){setFilter(target.dataset.filterJump);$("#catalogue").scrollIntoView({behavior:"smooth"})}
    if(target.closest(".faq-question")){const item=target.closest(".faq-item");const open=item.classList.toggle("open");target.setAttribute("aria-expanded",String(open))}
  });

  $("#categoryFilters").addEventListener("click",e=>{const btn=e.target.closest("button");if(btn)setFilter(btn.dataset.filter)});
  $("#colorFilter").addEventListener("change",renderProducts); $("#priceFilter").addEventListener("change",renderProducts); $("#globalSearch").addEventListener("input",()=>{renderProducts();$("#catalogue").scrollIntoView({behavior:"smooth",block:"start"})});
  $("#resetFilters").addEventListener("click",()=>{$("#globalSearch").value="";$("#colorFilter").value="Toutes";$("#priceFilter").value="Tous";setFilter("Tous")});
  $("#searchToggle").addEventListener("click",()=>{$("#searchPanel").classList.add("open");setTimeout(()=>$("#globalSearch").focus(),50)}); $("#searchClose").addEventListener("click",()=>$("#searchPanel").classList.remove("open"));
  $("#themeToggle").addEventListener("click",()=>applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
  $("#menuToggle").addEventListener("click",()=>{const open=$("#mobileNav").classList.toggle("open");$("#menuToggle").setAttribute("aria-expanded",String(open))}); $$("#mobileNav a").forEach(a=>a.addEventListener("click",()=>$("#mobileNav").classList.remove("open")));
  $("#cartToggle").addEventListener("click",openCart); $("#cartClose").addEventListener("click",closeCart); $("#drawerBackdrop").addEventListener("click",closeCart); $("#checkoutLink").addEventListener("click",closeCart);
  $("#faqSearch").addEventListener("input",renderFaqs); $("#faqMore").addEventListener("click",()=>{faqsExpanded=!faqsExpanded;renderFaqs()});
  $("#backTop").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"})); window.addEventListener("scroll",()=>$("#backTop").classList.toggle("show",window.scrollY>700),{passive:true});
  $("#orderForm").addEventListener("submit",event=>{event.preventDefault();if(!cart.length){toast("Ajoutez au moins un article à votre commande");$("#catalogue").scrollIntoView({behavior:"smooth"});return}const data=new FormData(event.currentTarget);const lines=cart.map((item,index)=>{const p=products.find(x=>x.id===item.id);return `Article ${index+1} : ${p.name} (${p.id})\nCouleur : ${item.color}\nTaille : ${item.size}\nQuantité : ${item.qty}\nPrix : ${money(p.price*item.qty)}`}).join("\n\n");const total=cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.qty,0);const message=`Bonjour BHZ EMPIRE, je souhaite passer cette commande :\n\nNom : ${data.get("name")}\nTéléphone : ${data.get("phone")}\nVille : ${data.get("city")}\nQuartier : ${data.get("district")||"Non précisé"}\nAdresse : ${data.get("address")||"Non précisée"}\nMode de livraison : ${data.get("delivery")}\n\n${lines}\n\nTotal estimé : ${money(total)}\nRemarques : ${data.get("notes")||"Aucune"}\n\nMerci de me confirmer la disponibilité et les frais de livraison.`;window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer")});
  $("#newsletterForm").addEventListener("submit",event=>{event.preventDefault();event.currentTarget.reset();toast("Merci ! Vous êtes inscrit(e) aux nouvelles BHZ EMPIRE.")});
  document.addEventListener("keydown",event=>{if(event.key==="Escape"){closeModal();closeCart();$("#searchPanel").classList.remove("open")}});

  applyTheme(document.documentElement.dataset.theme || "light", false);
  const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
  themeMedia.addEventListener?.("change", event => { if (!localStorage.getItem("glory-theme")) applyTheme(event.matches ? "dark" : "light", false); });
  renderProducts(); renderCart(); renderReviews(); renderFaqs(); observeReveals();
})();
