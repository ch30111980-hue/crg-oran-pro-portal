/* ==========================================================================
   CRG ORAN - COMPTOIR DE ROBINETTERIE GÉNÉRALE (4ÈME PÉRIPHÉRIQUE)
   Moteur Applicatif B2B : Catalogue, Panier Devis Express & Traduction
   ========================================================================== */

// Base de données des Produits Phares de CRG Oran
const PRODUCTS_DATA = [
  // --- RAYON 1 : ROBINETTERIE & VANNES ---
  {
    id: "rob-01",
    cat: "robinetterie",
    brand: "Miro Europe (Italie)",
    name_fr: "Mitigeur Lavabo Miro Design Luxe",
    name_ar: "خلاط مغسلة ميرو أوروبا تصميم فاخر",
    desc_fr: "Cartouche céramique 35mm haute résistance, aérateur anticalcaire Neoperl, finition chromée miroir 15 microns.",
    desc_ar: "خرطوشة سيراميك 35 مم عالية المقاومة، فوهة مضادة للترسبات، طلاء كروم مرآة 15 ميكرون.",
    specs_fr: "Pression : 1-10 bars | Débit : 12 L/min",
    specs_ar: "الضغط : 1-10 بار | التدفق : 12 ل/د",
    unit: "Unité",
    inStock: true
  },
  {
    id: "rob-02",
    cat: "robinetterie",
    brand: "CRG Industriel",
    name_fr: "Vanne d'Arrêt à Boisseau Sphérique Laiton PN25",
    name_ar: "صمام قفل كروي نحاسي صناعي ضغط 25 بار",
    desc_fr: "Corps en laiton matricé à chaud CW617N, passage intégral, poignée acier anti-corrosion rouge, étanchéité PTFE.",
    desc_ar: "هيكل نحاسي مسحوب بالحرارة، تدفق كامل، مقبض فولاذي مضاد للصدأ، ختم إحكام PTFE.",
    specs_fr: "Diamètres dispo : DN15 (1/2\") à DN100 (4\")",
    specs_ar: "الأقطار المتوفرة : من 1/2 بوصة إلى 4 بوصات",
    unit: "Pièce",
    inStock: true
  },
  {
    id: "rob-03",
    cat: "robinetterie",
    brand: "Haksu",
    name_fr: "Kit Douche Encastrable avec Pomme Plafond Extra-Plate",
    name_ar: "طقم دش مدمج مع رأس دش سقفي رفيع",
    desc_fr: "Mitigeur thermostatique de sécurité 38°C, corps laiton massif, picots en silicone autonettoyants.",
    desc_ar: "خلاط حراري مع أمان 38 درجة، هيكل نحاسي صلب، رؤوس سيليكون ذاتية التنظيف.",
    specs_fr: "Tête 300x300mm Inox 304 | Inverseur 2 voies",
    specs_ar: "رأس 300×300 مم ستانلس ستيل | محول مسارين",
    unit: "Kit",
    inStock: true
  },
  {
    id: "rob-04",
    cat: "robinetterie",
    brand: "CRG Robinetterie",
    name_fr: "Robinet d'Ablution et Jardin Renforcé 1/2\"",
    name_ar: "حنفية وضوء وحدائق مقواة 1/2 بوصة",
    desc_fr: "Manette quart de tour ergonomique, sortie filetée avec raccord nez de robinet démontable.",
    desc_ar: "مقبض ربع دورة مريح، مخرج ملولب مع وصلة خرطوم قابلة للفك.",
    specs_fr: "Filetage 15/21 mâle | Laiton chromé",
    specs_ar: "لولب 15/21 ذكر | نحاس مطلي بالكروم",
    unit: "Boîte de 10",
    inStock: true
  },

  // --- RAYON 2 : POMPES & SURPRESSION ---
  {
    id: "pmp-01",
    cat: "pompes",
    brand: "Wilo (Allemagne)",
    name_fr: "Circulateur Électronique Wilo-Yonos PICO",
    name_ar: "مضخة تدوير إلكترونية ويلو ألمانية عالية الكفاءة",
    desc_fr: "Pompe de circulation à haut rendement pour chauffage à eau chaude, technologie de moteur CE sans entretien.",
    desc_ar: "مضخة تدوير عالية الأداء لأنظمة التدفئة المركزية، محرك إلكتروني ألماني بدون صيانة.",
    specs_fr: "Alimentation 230V | Indice d'efficacité EEI ≤ 0,20",
    specs_ar: "تغذية 230 فولط | كفاءة طاقة قصوى",
    unit: "Unité",
    inStock: true
  },
  {
    id: "pmp-02",
    cat: "pompes",
    brand: "CRG Pompes",
    name_fr: "Pompe Centrifuge Industrielle Multicellulaire CRG-CPM158",
    name_ar: "مضخة مياه طرد مركزي صناعية متعددة المراحل",
    desc_fr: "Conçue pour l'adduction d'eau des immeubles et arrosage agricole. Turbine laiton et arbre inox AISI 304.",
    desc_ar: "مصممة لتغذية العمارات السكنية والسقي الزراعي. عنفة نحاسية وعمود دوران ستانلس ستيل.",
    specs_fr: "Puissance : 1.0 HP (0.75 kW) | Hauteur manométrique : 35m",
    specs_ar: "القدرة : 1 حصان | أقصى ارتفاع : 35 متر",
    unit: "Unité",
    inStock: true
  },
  {
    id: "pmp-03",
    cat: "pompes",
    brand: "CRG Automatisme",
    name_fr: "Pressostat Automatique Servo-Contrôleur de Pression",
    name_ar: "جهاز التحكم الإلكتروني الآلي في ضغط المضخات (سيرفو)",
    desc_fr: "Contrôleur électronique remplaçant le ballon et le manomètre classique. Protection contre la marche à sec.",
    desc_ar: "متحكم إلكتروني بديل لخزان الضغط. مزود بحماية ذكية ضد التشغيل الجاف بدون ماء.",
    specs_fr: "Courant max : 10A | Pression d'enclenchement : 1.5 bar",
    specs_ar: "التيار الأقصى : 10 أمبير | ضغط التشغيل : 1.5 بار",
    unit: "Unité",
    inStock: true
  },

  // --- RAYON 3 : CHAUFFAGE CENTRAL ---
  {
    id: "chf-01",
    cat: "chauffage",
    brand: "CRG Thermique",
    name_fr: "Radiateur Aluminium Haute Émission Thermique (Éléments)",
    name_ar: "مشعاع تدفئة ألمنيوم فائق التبادل الحراري (أقسام)",
    desc_fr: "Alliage d'aluminium injecté sous pression, double couche de peinture époxy par anaphorèse, chauffe ultra-rapide.",
    desc_ar: "سبيكة ألمنيوم مصبوبة تحت الضغط، طلاء إيبوكسي مزدوج عالي الجودة، تسخين فوري للغرف.",
    specs_fr: "Entraxe 500mm | Rendement : 185 Watts / élément",
    specs_ar: "المسافة بين المحاور 500 مم | المردود : 185 واط / قسم",
    unit: "Batterie 10 élém.",
    inStock: true
  },
  {
    id: "chf-02",
    cat: "chauffage",
    brand: "CIMM / Varem",
    name_fr: "Vase d'Expansion à Membrane Interchangeable Chauffage",
    name_ar: "خزان تمدد بغشاء مطاطي لأنظمة التدفئة المركزية",
    desc_fr: "Absorption des variations de volume d'eau causées par la montée en température. Membrane EPDM haute température.",
    desc_ar: "استيعاب تمدد المياه الناتج عن ارتفاع درجة الحرارة. غشاء EPDM يتحمل درجات الحرارة العالية.",
    specs_fr: "Capacité : 24L, 50L, 100L | Pression max : 8 bars",
    specs_ar: "السعة : 24 ل، 50 ل، 100 ل | أقصى ضغط : 8 بار",
    unit: "Unité",
    inStock: true
  },

  // --- RAYON 4 : RACCORDS & TUYAUTERIE ---
  {
    id: "tub-01",
    cat: "tuyauterie",
    brand: "General Fittings (Italie)",
    name_fr: "Raccords Multicouche à Sertir et Compression Métal",
    name_ar: "توصيلات أنابيب متعددة الطبقات كبس وضغط إيطالية",
    desc_fr: "Certification technique européenne CSTB/DVGW. Bague inox de sertissage avec fenêtres de contrôle visuel.",
    desc_ar: "شهادة جودة أوروبية معتمدة. حلقة ستانلس ستيل مع نوافذ فحص بصري لدخول الأنبوب.",
    specs_fr: "Gamme : Coudes, Tés, Manchons Ø16, 20, 26, 32 mm",
    specs_ar: "التشكيلة : كوع، تي، وصلة أقطار 16، 20، 26، 32 مم",
    unit: "Lot de 25",
    inStock: true
  },
  {
    id: "tub-02",
    cat: "tuyauterie",
    brand: "Halcor (Grèce)",
    name_fr: "Tube Cuivre Écroui & Recuit Sanitaire / Gaz",
    name_ar: "أنابيب نحاس صلب ومرن صحي وللغاز هالكور",
    desc_fr: "Cuivre pur désoxyydé au phosphore Cu-DHP 99,9%, traitement interne anti-corrosion, norme EN 1057.",
    desc_ar: "نحاس نقي منزوع الأكسجين 99.9%، معالجة داخلية ضد التآكل، معيار أوروبي EN 1057.",
    specs_fr: "Barres de 5m ou Couronnes 50m | Ø12 à Ø42 mm",
    specs_ar: "قضبان 5 أمتار أو لفائف 50 متر | أقطار 12 إلى 42 مم",
    unit: "Barre / Rouleau",
    inStock: true
  },

  // --- RAYON 5 : ÉVACUATION & SIPHONS ---
  {
    id: "evc-01",
    cat: "evacuation",
    brand: "Alba & CRG",
    name_fr: "Caniveau de Douche à l'Italienne Inox Brossé avec Siphon 360°",
    name_ar: "قناة تصريف دوش إيطالي ستانلس ستيل مع سيفون 360 درجة",
    desc_fr: "Grille design découpée laser inox AISI 304, garde d'eau anti-odeurs amovible, nettoyage sans démontage.",
    desc_ar: "شبكة ستانلس ستيل مقصوصة بالليزر، حاجز مائي مانع للروائح قابل للفك، تنظيف فائق السهولة.",
    specs_fr: "Longueurs : 60cm, 80cm, 100cm | Débit : 45 L/min",
    specs_ar: "الأطوال : 60 سم، 80 سم، 100 سم | التصريف : 45 ل/د",
    unit: "Kit complet",
    inStock: true
  },
  {
    id: "evc-02",
    cat: "evacuation",
    brand: "CRG Assainissement",
    name_fr: "Siphon de Sol Orientable avec Clapet Anti-Retour Anti-Rats",
    name_ar: "سيفون أرضي قابل للتوجيه مع صمام مضاد للرجوع والروائح",
    desc_fr: "Corps PVC résistant aux chocs thermiques et chimiques, platine inox 150x150 mm.",
    desc_ar: "هيكل PVC مقاوم للصدمات والمواد الكيميائية، لوحة ستانلس 150×150 مم.",
    specs_fr: "Sortie verticale/horizontale Ø50 et Ø75 mm",
    specs_ar: "مخرج رأسي أو أفقي قطر 50 و 75 مم",
    unit: "Pièce",
    inStock: true
  },

  // --- RAYON 6 : SANITAIRE & CUMULUS ---
  {
    id: "san-01",
    cat: "sanitaire",
    brand: "Nofer (Espagne)",
    name_fr: "Chauffe-eau Électrique Blindé Haute Durabilité Nofer",
    name_ar: "سخان مياه كهربائي عالي الجودة والمتانة نوفر إسباني",
    desc_fr: "Cuve en acier émaillé au titane, anode magnésium surdimensionnée anti-calcaire, isolation polyuréthane 0% CFC.",
    desc_ar: "خزان فولاذي مطلي بالمينا والتيتانيوم، حماية ضد الترسبات الكلسية، عزل حراري فائق.",
    specs_fr: "Capacités disponibles : 50L, 80L, 100L, 150L",
    specs_ar: "السعات المتوفرة : 50 ل، 80 ل، 100 ل، 150 ل",
    unit: "Unité",
    inStock: true
  }
];

// État global de l'application
const appState = {
  activeCat: "all",
  searchQuery: "",
  currentLang: "fr",
  cart: [] // { product, qty }
};

// Dictionnaire de Traduction Bilingue
const I18N = {
  fr: {
    topBarDepot: "Siège & Dépôt : Îlot N°08, Zone Industrielle, 4ème Périphérique, Es-Sénia, Oran",
    callUs: "Appel Commercial : 0560 25 26 32",
    wholesalerBadge: "GROSSISTE ET IMPORTATEUR OFFICIEL EN ALGÉRIE",
    heroTitlePart1: "L'Excellence en Robinetterie,",
    heroTitlePart2: "Pompage & Chauffage",
    heroTitlePart3: "à Oran",
    heroDesc: "Depuis plus de 30 ans, le Comptoir de Robinetterie Générale (CRG) approvisionne les installateurs, quincailleries et grands chantiers d'Algérie en matériel certifié d'origine européenne et internationale.",
    btnCatalog: "Consulter le Catalogue Pro",
    btnWhatsAppQuote: "Devis Express WhatsApp",
    statYears: "+30 Ans",
    statYearsLabel: "D'Excellence Métier",
    statRefs: "4 500+",
    statRefsLabel: "Articles en Stock Réel",
    statWilayas: "58 Wilayas",
    statWilayasLabel: "Livraison & Expédition",
    statBrands: "100%",
    statBrandsLabel: "Certifié d'Origine",
    depotLiveBadge: "Dépôt Ouvert 6j/7",
    depotTitle: "Enlèvement Rapide 4ème Périphérique",
    depotDesc: "Emplacement stratégique à Es-Sénia sur la 4e Rocade. Quai de chargement direct pour semi-remorques et camionnettes.",
    feature1: "Accès poids lourds et stationnement aisé",
    feature2: "Facturation pro et bons de livraison immédiats",
    feature3: "Conseil technique hydraulique par nos ingénieurs",
    btnGpsRoute: "Itinéraire GPS Dépôt",
    catalogueSubtitle: "STOCKS DISPONIBLES EN TEMPS RÉEL",
    catalogueTitle: "Rayons Spécialisés B2B & Industrie",
    searchPlaceholder: "Rechercher une vanne, pompe Wilo, raccord, diamètre, marque...",
    catAll: "Tous les Rayons",
    catRobinetterie: "Robinetterie & Vannes",
    catPompes: "Pompes & Surpresseurs",
    catChauffage: "Chauffage Central",
    catTuyauterie: "Tuyauterie & Raccords",
    catEvacuation: "Évacuation & Siphons",
    catSanitaire: "Chauffe-eau & Sanitaire",
    inStockText: "En stock au dépôt",
    btnAddToQuote: "+ Ajouter au Devis",
    modalQuoteTitle: "Votre Bon de Commande / Devis Express",
    modalQuoteSub: "Préparez votre liste et envoyez-la directement sur le WhatsApp du commercial CRG.",
    clientNameLabel: "Votre Nom / Entreprise :",
    clientPhoneLabel: "Numéro de Téléphone :",
    clientWilayaLabel: "Votre Ville / Wilaya :",
    btnSendWhatsApp: "Transmettre la Commande sur WhatsApp",
    emptyCartNotice: "Votre sélection de devis est vide. Cliquez sur '+ Ajouter au Devis' sur les articles de votre choix.",
    cartTriggerText: "Mon Devis Pro"
  },
  ar: {
    topBarDepot: "المقر والمستودع : القطعة رقم 08، المنطقة الصناعية، الطريق المحيطي الرابع، السانية، وهران",
    callUs: "المصلحة التجارية : 0560 25 26 32",
    wholesalerBadge: "المستورد والموزع الرسمي بالجملة في الجزائر",
    heroTitlePart1: "الريادة في صمامات المياه،",
    heroTitlePart2: "المضخات والتدفئة المركزية",
    heroTitlePart3: "في وهران",
    heroDesc: "منذ أكثر من 30 عاماً، تضمن شركة CRG تزويد كبرى ورشات البناء والموزعين والحرفيين في 58 ولاية بمعدات سباكة وصناعة أصلية معتمدة من كبرى العلامات العالمية.",
    btnCatalog: "استعراض الكتالوج المهني",
    btnWhatsAppQuote: "طلب تسعيرة فورية واتساب",
    statYears: "+30 عاماً",
    statYearsLabel: "من الخبرة في السوق",
    statRefs: "+4 500",
    statRefsLabel: "صنف في المخزن الفعلي",
    statWilayas: "58 ولاية",
    statWilayasLabel: "توصيل وشحن سريع",
    statBrands: "100%",
    statBrandsLabel: "أصلي ومعتمد بالكامل",
    depotLiveBadge: "المستودع مفتوح 6 أيام/7",
    depotTitle: "شحن سريع من مستودع المحيطي الرابع",
    depotDesc: "موقع استراتيجي بالسانية على الطريق المحيطي 4. رصيف شحن مباشر للشاحنات والمركبات التجارية.",
    feature1: "دخول سهل للشاحنات ومواقف واسعة للسيارات",
    feature2: "فواتير نظامية معتمدة ووصولات تسليم فورية",
    feature3: "استشارات تقنية هيدروليكية من مهندسينا",
    btnGpsRoute: "المسار المباشر عبر GPS",
    catalogueSubtitle: "مخزون فعلي متاح حالياً للتسليم",
    catalogueTitle: "الأقسام التخصصية للشركات والمهنيين",
    searchPlaceholder: "ابحث عن صمام، مضخة ويلو، رصاص، نحاس، قطر، علامة تجارية...",
    catAll: "جميع الأقسام",
    catRobinetterie: "الصمامات والخلاطات",
    catPompes: "المضخات ومتحكمات الضغط",
    catChauffage: "التدفئة المركزية",
    catTuyauterie: "الأنابيب والتوصيلات",
    catEvacuation: "الصرف الصحي والمزاريب",
    catSanitaire: "سخانات المياه واللوازم الصحية",
    inStockText: "متوفر حالياً بالمستودع",
    btnAddToQuote: "+ إضافة لطلب التسعيرة",
    modalQuoteTitle: "وصل طلب التسعيرة والطلبيات المباشرة",
    modalQuoteSub: "حدد المواد المطلوبة وأرسل القائمة فوراً إلى واتساب المصلحة التجارية لشركة CRG.",
    clientNameLabel: "الاسم أو اسم المؤسسة :",
    clientPhoneLabel: "رقم الهاتف للتواصل :",
    clientWilayaLabel: "البلدية أو الولاية :",
    btnSendWhatsApp: "إرسال قائمة الطلبية عبر واتساب",
    emptyCartNotice: "قائمة التسعيرة فارغة حالياً. انقر على '+ إضافة لطلب التسعيرة' لاختيار المنتجات.",
    cartTriggerText: "قائمة التسعيرة"
  }
};

// Initialisation au chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupEventListeners();
  applyLanguage(appState.currentLang);
  updateCartBadge();
});

// Configuration des Écouteurs d'Événements
function setupEventListeners() {
  // Recherche textuelle
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Filtres par Catégorie
  const filterPills = document.querySelectorAll(".cat-pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      appState.activeCat = pill.dataset.cat;
      renderProducts();
    });
  });

  // Switch de Langue FR / AR
  const langBtn = document.getElementById("lang-switch");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      appState.currentLang = appState.currentLang === "fr" ? "ar" : "fr";
      applyLanguage(appState.currentLang);
      renderProducts();
    });
  }

  // Modale Panier Devis
  const cartTrigger = document.getElementById("cart-trigger");
  const modalBackdrop = document.getElementById("cart-modal-backdrop");
  const modalClose = document.getElementById("modal-close-btn");

  if (cartTrigger && modalBackdrop) {
    cartTrigger.addEventListener("click", () => openCartModal());
  }
  if (modalClose && modalBackdrop) {
    modalClose.addEventListener("click", () => closeCartModal());
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeCartModal();
    });
  }

  // Envoi WhatsApp Formulaire
  const btnSendWhatsApp = document.getElementById("btn-send-whatsapp");
  if (btnSendWhatsApp) {
    btnSendWhatsApp.addEventListener("click", handleWhatsAppSubmit);
  }
}

// Rendu des Cartes Produits
function renderProducts() {
  const container = document.getElementById("products-grid");
  if (!container) return;

  const isAr = appState.currentLang === "ar";

  const filtered = PRODUCTS_DATA.filter(p => {
    const matchCat = appState.activeCat === "all" || p.cat === appState.activeCat;
    const nameSearch = (p.name_fr + " " + p.name_ar + " " + p.brand + " " + p.specs_fr).toLowerCase();
    const matchSearch = appState.searchQuery === "" || nameSearch.includes(appState.searchQuery);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-dim);">
        <p style="font-size: 1.1rem; font-weight: 600;">
          ${isAr ? "لم يتم العثور على أي منتج مطابق لبحثك." : "Aucun article ne correspond à votre recherche."}
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const name = isAr ? p.name_ar : p.name_fr;
    const desc = isAr ? p.desc_ar : p.desc_fr;
    const specs = isAr ? p.specs_ar : p.specs_fr;
    const btnText = I18N[appState.currentLang].btnAddToQuote;
    const inStockText = I18N[appState.currentLang].inStockText;

    return `
      <div class="product-card" id="card-${p.id}">
        <div class="product-brand-tag">${escapeHtml(p.brand)}</div>
        <h3 class="product-name">${escapeHtml(name)}</h3>
        <p class="product-specs">${escapeHtml(desc)}</p>
        <div>
          <span class="product-spec-pill">${escapeHtml(specs)}</span>
        </div>
        <div class="product-card-footer">
          <div class="stock-status">
            <span class="stock-indicator-dot"></span>
            <span>${inStockText}</span>
          </div>
          <button class="btn-add-order" onclick="addToCart('${p.id}')">
            ${btnText}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Gestion du Panier B2B
function addToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = appState.cart.find(item => item.product.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    appState.cart.push({ product, qty: 1 });
  }

  updateCartBadge();
  animateButton(productId);
}

function updateCartQty(productId, delta) {
  const itemIndex = appState.cart.findIndex(i => i.product.id === productId);
  if (itemIndex > -1) {
    appState.cart[itemIndex].qty += delta;
    if (appState.cart[itemIndex].qty <= 0) {
      appState.cart.splice(itemIndex, 1);
    }
  }
  updateCartBadge();
  renderCartModalItems();
}

function updateCartBadge() {
  const countBadge = document.getElementById("cart-count");
  if (countBadge) {
    const totalCount = appState.cart.reduce((acc, i) => acc + i.qty, 0);
    countBadge.innerText = totalCount;
    countBadge.style.display = totalCount > 0 ? "inline-block" : "none";
  }
}

function animateButton(productId) {
  const card = document.getElementById(`card-${productId}`);
  if (card) {
    card.style.borderColor = "var(--primary)";
    card.style.boxShadow = "0 0 25px var(--primary-glow)";
    setTimeout(() => {
      card.style.borderColor = "";
      card.style.boxShadow = "";
    }, 450);
  }
}

// Affichage de la Modale de Commande WhatsApp
function openCartModal() {
  const modal = document.getElementById("cart-modal-backdrop");
  if (modal) {
    renderCartModalItems();
    modal.classList.add("open");
  }
}

function closeCartModal() {
  const modal = document.getElementById("cart-modal-backdrop");
  if (modal) {
    modal.classList.remove("open");
  }
}

function renderCartModalItems() {
  const container = document.getElementById("modal-cart-items");
  const formBox = document.getElementById("modal-cart-form");
  if (!container) return;

  const isAr = appState.currentLang === "ar";

  if (appState.cart.length === 0) {
    container.innerHTML = `
      <p style="color: var(--text-dim); text-align: center; padding: 25px 0;">
        ${I18N[appState.currentLang].emptyCartNotice}
      </p>
    `;
    if (formBox) formBox.style.display = "none";
    return;
  }

  if (formBox) formBox.style.display = "flex";

  container.innerHTML = appState.cart.map(({ product, qty }) => {
    const name = isAr ? product.name_ar : product.name_fr;
    return `
      <div class="cart-item-row">
        <div style="flex-grow: 1;">
          <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-main);">${escapeHtml(name)}</div>
          <div style="font-size: 0.78rem; color: var(--accent-gold); font-weight: 600;">${escapeHtml(product.brand)}</div>
        </div>
        <div class="item-qty-control">
          <button class="qty-btn" onclick="updateCartQty('${product.id}', -1)">-</button>
          <span style="font-weight: 800; min-width: 20px; text-align: center;">${qty}</span>
          <button class="qty-btn" onclick="updateCartQty('${product.id}', 1)">+</button>
        </div>
      </div>
    `;
  }).join("");
}

// Génération et Transmission vers WhatsApp Commercial
function handleWhatsAppSubmit() {
  if (appState.cart.length === 0) return;

  const clientName = document.getElementById("b2b-client-name")?.value.trim() || "Client Pro";
  const clientPhone = document.getElementById("b2b-client-phone")?.value.trim() || "Non spécifié";
  const clientWilaya = document.getElementById("b2b-client-wilaya")?.value.trim() || "Oran";

  const isAr = appState.currentLang === "ar";
  
  // Numéro commercial officiel de CRG Oran
  const targetPhone = "213560252632";

  let message = "";
  if (isAr) {
    message = `السلام عليكم ورحمة الله وبركاته،\n`;
    message += `طلب تسعيرة بضاعة من شركة CRG وهران (مستودع المحيطي الرابع):\n\n`;
    message += `👤 اسم العميل / المؤسسة : ${clientName}\n`;
    message += `📞 رقم الهاتف : ${clientPhone}\n`;
    message += `📍 الولاية / الموقع : ${clientWilaya}\n\n`;
    message += `📦 قائمة المنتجات المطلوبة :\n`;
    appState.cart.forEach((item, idx) => {
      message += `${idx + 1}. ${item.product.name_ar} (${item.product.brand}) — الكمية: ${item.qty} ${item.product.unit}\n`;
    });
    message += `\nيرجى تزويدنا بعرض الأسعار ووقت الجاهزية للاستلام. شكراً.`;
  } else {
    message = `Bonjour SARL CRG Oran (Service Commercial 4ème Périphérique),\n\n`;
    message += `Je souhaite obtenir un devis / disponibilité pour la sélection suivante :\n\n`;
    message += `👤 Établissement / Contact : ${clientName}\n`;
    message += `📞 Téléphone : ${clientPhone}\n`;
    message += `📍 Localisation / Wilaya : ${clientWilaya}\n\n`;
    message += `📦 Articles demandés :\n`;
    appState.cart.forEach((item, idx) => {
      message += `${idx + 1}. ${item.product.name_fr} [${item.product.brand}] — Qté: ${item.qty} (${item.product.unit})\n`;
    });
    message += `\nMerci de nous transmettre les prix de gros et conditions d'enlèvement au dépôt.`;
  }

  const encodedUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, "_blank");
}

// Application du Langage & Textes
function applyLanguage(lang) {
  const isAr = lang === "ar";
  document.body.classList.toggle("rtl", isAr);
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? "rtl" : "ltr";

  const t = I18N[lang];
  const langBtn = document.getElementById("lang-switch");
  if (langBtn) {
    langBtn.innerText = isAr ? "FR (Français)" : "العربية (AR)";
  }

  // Remplacement des textes avec data-i18n
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (t[key]) {
      elem.innerText = t[key];
    }
  });

  // Placeholder barre de recherche
  const searchInput = document.getElementById("search-input");
  if (searchInput && t.searchPlaceholder) {
    searchInput.placeholder = t.searchPlaceholder;
  }
}

// Sécurité : Échappement HTML basique
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>"']/g, function(m) {
    switch (m) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#039;';
      default: return m;
    }
  });
}
