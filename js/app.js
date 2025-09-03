(function(){
  var translations = {
    fr: {
      nav:{home:'Accueil',products:'Produits',sustainability:'Engagement Durable',partnerships:'Partenariats',news:'Actualités',contact:'Contact'},
      home:{
        hero:{title:'Leader Africain du Soja Biologique',subtitle:'Benin Organics SA',description:"Transformation de soja biologique certifié USDA et UE, au service de 25 000 producteurs locaux et de clients internationaux exigeants.",cta:'Découvrir nos produits',contact:'Nous contacter',badge:'Certifié Biologique'},
        mission:{title:'Notre Mission',description:"Transformer le soja biologique avec excellence, en respectant les plus hauts standards de qualité, de durabilité et de traçabilité, tout en créant un impact social positif pour nos communautés agricoles."},
        certifications:{title:'Certifications Internationales',description:"Nos certifications garantissent la qualité et la conformité de nos produits aux standards internationaux les plus exigeants.",usda:'Certifié USDA Biologique',eu:'Certifié UE Biologique',usdaDesc:"Certification garantissant le respect des standards biologiques américains les plus stricts.",euDesc:"Conformité aux réglementations biologiques européennes pour l'exportation internationale."},
        stats:{producers:'25 000+ Producteurs',experience:"15+ Années d'expérience",capacity:'Capacité industrielle de pointe',producersLabel:'Partenaires agricoles',experienceLabel:"Dans l'industrie",capacityLabel:'Infrastructure moderne'},
        cta:{title:'Prêt à découvrir nos produits biologiques ?',subtitle:"Contactez-nous pour en savoir plus sur nos solutions de soja biologique certifié.",viewProducts:'Voir nos produits',quote:'Demander un devis'}
      },
      footer:{about:'À propos',quickLinks:'Liens rapides',contact:'Contact',certifications:'Certifications',rights:'© 2024 Benin Organics SA. Tous droits réservés.'},
      contact:{title:'Contactez-nous',form:{name:'Nom complet',email:'Email',company:'Entreprise',message:'Message',send:'Envoyer'},address:'Zone Industrielle de Glo-Djigbé, Bénin',phone:'+229 XX XX XX XX',email:'contact@beninorganics.com'},
      products:{
        title:'Nos Produits',subtitle:'Une gamme complète de produits biologiques certifiés',features:'Caractéristiques :',cta:'Demander un devis',
        oilsTitle:'Huiles de Soja Biologiques',oilsDesc:"Huiles de première qualité, extraites selon des procédés respectueux de l'environnement, certifiées USDA et UE.",oilsF1:'Extraction à froid',oilsF2:'Qualité premium',oilsF3:'Traçabilité complète',oilsF4:'Emballage écologique',
        mealTitle:'Tourteaux de Soja',mealDesc:"Tourteaux riches en protéines, idéaux pour l'alimentation animale biologique et les applications industrielles.",mealF1:'Riche en protéines',mealF2:'Alimentation animale',mealF3:'Applications industrielles',mealF4:'Certification bio',
        finishedTitle:'Produits Finis',finishedDesc:'Gamme diversifiée de produits transformés répondant aux besoins spécifiques de nos clients B2B.',finF1:'Solutions sur mesure',finF2:'Qualité constante',finF3:'Livraison internationale',finF4:'Support technique',
        ctaTitle:'Intéressé par nos produits ?',ctaSubtitle:'Contactez notre équipe commerciale pour discuter de vos besoins spécifiques.'
      },
      sustainability:{
        title:'Engagement Durable',subtitle:'Une chaîne de valeur éthique et responsable',tabs:{environment:'Environnement',social:'Social',economic:'Économique'},
        organic:{title:'Agriculture Biologique',desc:'Promotion des pratiques agricoles biologiques auprès de nos producteurs partenaires.'},
        traceability:{title:'Traçabilité Complète',desc:'Suivi rigoureux de nos produits de la ferme au consommateur final.'},
        quality:{title:'Contrôle Qualité',desc:'Standards de qualité exceptionnels à chaque étape de la transformation.'},
        details:'Nos Engagements Détaillés',
        environment:{title:'Protection Environnementale',impact:'Impact Environnemental',co2:'Réduction CO2',water:"Économie d'eau",i1:"Réduction de l'empreinte carbone",i2:"Gestion durable des ressources en eau",i3:'Préservation de la biodiversité',i4:'Énergies renouvelables'},
        social:{title:'Impact Social',i1:'Formation des producteurs',i2:'Amélioration des conditions de travail',i3:'Égalité des genres',i4:'Développement communautaire'},
        economic:{title:'Développement Économique',i1:'Prix équitables aux producteurs',i2:"Investissement dans l'infrastructure locale",i3:"Création d'emplois durables",i4:'Transfert de technologie'}
      },
      partnerships:{
        title:'Partenariats Agricoles',subtitle:'Soutien et développement des communautés locales',impactTitle:'Notre Impact en Chiffres',
        impact:{title:'Impact Socio-économique',desc:"Amélioration des revenus et des conditions de vie de 25 000 producteurs de soja au Bénin."},
        support:{title:'Accompagnement Technique',desc:'Formation, équipement et conseil pour optimiser la production biologique de nos partenaires.'},
        kpi1:'Producteurs partenaires',kpi2:'Augmentation des revenus',kpi3:'Années de partenariat',
        programs:'Nos Programmes de Soutien',training:'Formation Technique',training1:'Techniques agricoles biologiques',training2:'Gestion post-récolte',training3:'Certification biologique',
        finance:'Soutien Financier',finance1:'Primes de qualité',finance2:'Avances sur récolte',finance3:'Équipements agricoles',
        ctaTitle:'Rejoignez notre réseau de partenaires',ctaSubtitle:"Ensemble, construisons un avenir durable pour l'agriculture biologique au Bénin.",ctaBtn:'Devenir partenaire'
      },
      news:{
        title:'Actualités & Événements',subtitle:"Suivez les dernières nouvelles de Benin Organics et nos événements à venir",recent:'Actualités Récentes',
        readMore:'Lire plus',read:'Lire',
        featured:{category:'Certification',title:"Benin Organics obtient la certification EU Bio pour ses nouveaux produits",excerpt:"Une étape importante dans notre expansion sur les marchés européens avec de nouveaux standards de qualité."},
        card1:{category:'Partenariats',title:'Nouveau partenariat avec 5000 producteurs dans la région Nord',excerpt:"Extension de notre réseau de partenaires agricoles pour renforcer la production de soja biologique."},
        card2:{category:'Infrastructure',title:'Inauguration de notre nouvelle unité de transformation',excerpt:"Doublement de notre capacité de production avec des technologies respectueuses de l'environnement."},
        card3:{category:'Innovation',title:'Lancement de notre programme de traçabilité blockchain',excerpt:'Technologie de pointe pour garantir une transparence totale de la ferme au consommateur.'}
      },
      contact:{
        title:'Contactez-nous',subtitle:"Nous sommes là pour répondre à toutes vos questions et discuter de vos projets.",
        info:'Informations de Contact',addressLabel:'Adresse',phoneLabel:'Téléphone',hoursLabel:'Horaires',hours:'Lun - Ven: 8h00 - 17h00',
        location:'Notre Localisation',mapSoon:'Carte interactive disponible prochainement',formTitle:'Envoyez-nous un message',
        form:{name:'Nom complet',email:'Email',company:'Entreprise',message:'Message',send:'Envoyer'},address:'Zone Industrielle de Glo-Djigbé, Bénin',phone:'+229 XX XX XX XX',email:'contact@beninorganics.com'
      }
    },
    en: {
      nav:{home:'Home',products:'Products',sustainability:'Sustainability',partnerships:'Partnerships',news:'News',contact:'Contact'},
      home:{
        hero:{title:'African Leader in Organic Soy',subtitle:'Benin Organics SA',description:'USDA and EU certified organic soy transformation, serving 25,000 local producers and demanding international clients.',cta:'Discover our products',contact:'Contact us',badge:'Certified Organic'},
        mission:{title:'Our Mission',description:'Transform organic soy with excellence, respecting the highest standards of quality, sustainability and traceability, while creating positive social impact for our agricultural communities.'},
        certifications:{title:'International Certifications',description:'Our certifications guarantee the quality and compliance of our products with the most demanding international standards.',usda:'USDA Organic Certified',eu:'EU Organic Certified',usdaDesc:'Certification ensuring compliance with the strictest American organic standards.',euDesc:'Compliance with European organic regulations for international export.'},
        stats:{producers:'25,000+ Producers',experience:'15+ Years of experience',capacity:'State-of-the-art industrial capacity',producersLabel:'Agricultural partners',experienceLabel:'In the industry',capacityLabel:'Modern infrastructure'},
        cta:{title:'Ready to discover our organic products?',subtitle:'Contact us to learn more about our certified organic soy solutions.',viewProducts:'View our products',quote:'Request a quote'}
      },
      footer:{about:'About',quickLinks:'Quick links',contact:'Contact',certifications:'Certifications',rights:'© 2024 Benin Organics SA. All rights reserved.'},
      contact:{title:'Contact Us',form:{name:'Full name',email:'Email',company:'Company',message:'Message',send:'Send'},address:'Glo-Djigbé Industrial Zone, Benin',phone:'+229 XX XX XX XX',email:'contact@beninorganics.com'},
      products:{
        title:'Our Products',subtitle:'A complete range of certified organic products',features:'Features:',cta:'Request a quote',
        oilsTitle:'Organic Soy Oils',oilsDesc:'Premium quality oils, extracted using environmentally friendly processes, USDA and EU certified.',oilsF1:'Cold extraction',oilsF2:'Premium quality',oilsF3:'Complete traceability',oilsF4:'Eco-friendly packaging',
        mealTitle:'Soy Meal',mealDesc:'Protein-rich meal, ideal for organic animal feed and industrial applications.',mealF1:'High protein content',mealF2:'Animal feed',mealF3:'Industrial applications',mealF4:'Organic certification',
        finishedTitle:'Finished Products',finishedDesc:'Diversified range of processed products meeting the specific needs of our B2B clients.',finF1:'Custom solutions',finF2:'Consistent quality',finF3:'International delivery',finF4:'Technical support',
        ctaTitle:'Interested in our products?',ctaSubtitle:'Contact our sales team to discuss your specific needs.'
      },
      sustainability:{
        title:'Sustainable Commitment',subtitle:'An ethical and responsible value chain',tabs:{environment:'Environment',social:'Social',economic:'Economic'},
        organic:{title:'Organic Agriculture',desc:'Promotion of organic farming practices among our partner producers.'},
        traceability:{title:'Complete Traceability',desc:'Rigorous tracking of our products from farm to final consumer.'},
        quality:{title:'Quality Control',desc:'Exceptional quality standards at every stage of transformation.'},
        details:'Our Detailed Commitments',
        environment:{title:'Environmental Protection',impact:'Environmental Impact',co2:'CO2 Reduction',water:'Water Savings',i1:'Carbon footprint reduction',i2:'Sustainable water resource management',i3:'Biodiversity preservation',i4:'Renewable energy'},
        social:{title:'Social Impact',i1:'Producer training',i2:'Improved working conditions',i3:'Gender equality',i4:'Community development'},
        economic:{title:'Economic Development',i1:'Fair prices for producers',i2:'Investment in local infrastructure',i3:'Sustainable job creation',i4:'Technology transfer'}
      },
      partnerships:{
        title:'Agricultural Partnerships',subtitle:'Support and development of local communities',impactTitle:'Our Impact in Numbers',
        impact:{title:'Socio-economic Impact',desc:'Improving income and living conditions of 25,000 soy producers in Benin.'},
        support:{title:'Technical Support',desc:'Training, equipment and advice to optimize organic production of our partners.'},
        kpi1:'Partner producers',kpi2:'Income increase',kpi3:'Years of partnership',
        programs:'Our Support Programs',training:'Technical Training',training1:'Organic farming techniques',training2:'Post-harvest management',training3:'Organic certification',
        finance:'Financial Support',finance1:'Quality premiums',finance2:'Harvest advances',finance3:'Agricultural equipment',
        ctaTitle:'Join our partner network',ctaSubtitle:"Together, let's build a sustainable future for organic agriculture in Benin.",ctaBtn:'Become a partner'
      },
      news:{
        title:'News & Events',subtitle:'Follow the latest news from Benin Organics and our upcoming events',recent:'Recent News',
        readMore:'Read more',read:'Read',
        featured:{category:'Certification',title:'Benin Organics obtains EU Organic certification for its new products',excerpt:'An important step in our expansion into European markets with new quality standards.'},
        card1:{category:'Partnerships',title:'New partnership with 5000 producers in the Northern region',excerpt:'Expansion of our agricultural partner network to strengthen organic soy production.'},
        card2:{category:'Infrastructure',title:'Inauguration of our new processing unit',excerpt:'Doubling our production capacity with environmentally friendly technologies.'},
        card3:{category:'Innovation',title:'Launch of our blockchain traceability program',excerpt:'Cutting-edge technology to ensure complete transparency from farm to consumer.'}
      },
      contact:{
        title:'Contact Us',subtitle:'We are here to answer all your questions and discuss your projects.',
        info:'Contact Information',addressLabel:'Address',phoneLabel:'Phone',hoursLabel:'Business Hours',hours:'Mon - Fri: 8:00 AM - 5:00 PM',
        location:'Our Location',mapSoon:'Interactive map coming soon',formTitle:'Send us a message',
        form:{name:'Full name',email:'Email',company:'Company',message:'Message',send:'Send'},address:'Glo-Djigbé Industrial Zone, Benin',phone:'+229 XX XX XX XX',email:'contact@beninorganics.com'
      }
    }
  };

  var state = { lang: localStorage.getItem('lang') || 'fr' };

  function renderHeader() {
    var t = translations[state.lang];
    var path = location.pathname.split('/').pop() || 'index.html';
    function isActive(href){ return href===path || (href==='index.html' && (path===''||path==='index.html')); }
    var activeCls = 'text-green-600 border-b-2 border-green-600';
    var baseLink = 'block px-3 py-2 text-base font-medium transition-colors hover:text-green-600';
    var html = ''+
    '<header class="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">'+
      '<div class="container mx-auto px-4 sm:px-6 lg:px-8">'+
        '<div class="flex h-16 items-center justify-between">'+
          '<a href="index.html" class="flex items-center space-x-2">'+
            '<img src="logo_bo.png" alt="Benin Organics" class="w-12 h-12 rounded-lg object-contain" />'+
            '<div class="hidden sm:block">'+
              '<div class="font-bold text-lg text-gray-900">Benin Organics</div>'+
              '<div class="text-xs text-green-600 font-medium">SA</div>'+
            '</div>'+
          '</a>'+
          '<nav class="hidden md:flex items-center space-x-1">'+
            '<a href="index.html" class="nav-link px-3 py-2 text-sm '+(isActive('index.html')?'nav-active text-green-600':'text-gray-700')+'">'+t.nav.home+'</a>'+
            '<a href="products.html" class="nav-link px-3 py-2 text-sm '+(isActive('products.html')?'nav-active text-green-600':'text-gray-700')+'">'+t.nav.products+'</a>'+
            '<a href="sustainability.html" class="nav-link px-3 py-2 text-sm '+(isActive('sustainability.html')?'nav-active text-green-600':'text-gray-700')+'">'+t.nav.sustainability+'</a>'+
            '<a href="partnerships.html" class="nav-link px-3 py-2 text-sm '+(isActive('partnerships.html')?'nav-active text-green-600':'text-gray-700')+'">'+t.nav.partnerships+'</a>'+
            '<a href="news.html" class="nav-link px-3 py-2 text-sm '+(isActive('news.html')?'nav-active text-green-600':'text-gray-700')+'">'+t.nav.news+'</a>'+
            '<a href="contact.html" class="nav-link px-3 py-2 text-sm '+(isActive('contact.html')?'nav-active text-green-600':'text-gray-700')+'">'+t.nav.contact+'</a>'+
          '</nav>'+
          '<div class="flex items-center space-x-2">'+
            '<button id="lang-fr" class="px-2 py-1 text-sm rounded '+(state.lang==='fr'?'bg-green-600 text-white':'text-gray-700 border')+'">FR</button>'+
            '<button id="lang-en" class="px-2 py-1 text-sm rounded '+(state.lang==='en'?'bg-green-600 text-white':'text-gray-700 border')+'">EN</button>'+
            '<button id="mobile-toggle" aria-label="Open menu" class="md:hidden px-2 py-1 text-sm rounded border text-gray-700">☰</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div id="mobile-backdrop" class="fixed inset-0 bg-black/40 opacity-0 pointer-events-none transition-opacity duration-200 md:hidden"></div>'+
      '<aside id="mobile-drawer" class="fixed inset-y-0 right-0 w-[300px] sm:w-[400px] bg-white shadow-lg transform translate-x-full transition-transform duration-200 md:hidden">'+
        '<div class="p-4 border-b flex items-center justify-between">'+
          '<div class="flex items-center space-x-2">'+
            '<img src="logo_bo.png" alt="Benin Organics" class="w-10 h-10 rounded-lg object-contain" />'+
            '<div class="font-semibold text-gray-900">Benin Organics</div>'+
          '</div>'+
          '<button id="mobile-close" aria-label="Close menu" class="px-2 py-1 text-sm rounded border">✕</button>'+
        '</div>'+
        '<nav class="p-4 space-y-1 bg-white">'+
          '<a href="index.html" class="'+baseLink+' '+(isActive('index.html')?activeCls:'text-gray-700')+'" data-mobile-link>'+t.nav.home+'</a>'+
          '<a href="products.html" class="'+baseLink+' '+(isActive('products.html')?activeCls:'text-gray-700')+'" data-mobile-link>'+t.nav.products+'</a>'+
          '<a href="sustainability.html" class="'+baseLink+' '+(isActive('sustainability.html')?activeCls:'text-gray-700')+'" data-mobile-link>'+t.nav.sustainability+'</a>'+
          '<a href="partnerships.html" class="'+baseLink+' '+(isActive('partnerships.html')?activeCls:'text-gray-700')+'" data-mobile-link>'+t.nav.partnerships+'</a>'+
          '<a href="news.html" class="'+baseLink+' '+(isActive('news.html')?activeCls:'text-gray-700')+'" data-mobile-link>'+t.nav.news+'</a>'+
          '<a href="contact.html" class="'+baseLink+' '+(isActive('contact.html')?activeCls:'text-gray-700')+'" data-mobile-link>'+t.nav.contact+'</a>'+
        '</nav>'+
      '</aside>'+
    '</header>';
    $('#site-header').html(html);
    $('#lang-fr').on('click', function(){ state.lang='fr'; localStorage.setItem('lang','fr'); renderAll(); });
    $('#lang-en').on('click', function(){ state.lang='en'; localStorage.setItem('lang','en'); renderAll(); });

    function openDrawer(){
      $('#mobile-drawer').removeClass('translate-x-full');
      $('#mobile-backdrop').removeClass('pointer-events-none').addClass('opacity-100');
      $('body').addClass('overflow-hidden');
    }
    function closeDrawer(){
      $('#mobile-drawer').addClass('translate-x-full');
      $('#mobile-backdrop').addClass('pointer-events-none').removeClass('opacity-100');
      $('body').removeClass('overflow-hidden');
    }

    $('#mobile-toggle').on('click', openDrawer);
    $('#mobile-close, #mobile-backdrop').on('click', closeDrawer);
    $(document).on('keydown', function(e){ if(e.key==='Escape'){ closeDrawer(); } });
    $(document).on('click','[data-mobile-link]', function(){ closeDrawer(); });

    $('main').addClass('pt-16');
  }

  function renderFooter(){
    var t = translations[state.lang];
    var html = ''+
    '<footer class="bg-gray-900 text-white">'+
      '<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">'+
        '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">'+
          '<div class="space-y-4">'+
            '<div class="flex items-center space-x-2">'+
              '<div class="flex items-center justify-center w-10 h-10 bg-green-600 rounded-lg"><span class="text-white">🌿</span></div>'+
              '<div><div class="font-bold text-lg">Benin Organics</div><div class="text-sm text-green-400">SA</div></div>'+
            '</div>'+
            '<p class="text-gray-300 text-sm leading-relaxed">'+(state.lang==='fr'?'Leader africain dans la transformation du soja biologique certifié, au service de 25 000 producteurs locaux.':'African leader in certified organic soy transformation, serving 25,000 local producers.')+'</p>'+
          '</div>'+
          '<div>'+
            '<h3 class="font-semibold text-lg mb-4">'+t.footer.quickLinks+'</h3>'+
            '<ul class="space-y-2">'+
              '<li><a href="index.html" class="text-gray-300 hover:text-green-400">'+t.nav.home+'</a></li>'+
              '<li><a href="products.html" class="text-gray-300 hover:text-green-400">'+t.nav.products+'</a></li>'+
              '<li><a href="sustainability.html" class="text-gray-300 hover:text-green-400">'+t.nav.sustainability+'</a></li>'+
              '<li><a href="partnerships.html" class="text-gray-300 hover:text-green-400">'+t.nav.partnerships+'</a></li>'+
            '</ul>'+
          '</div>'+
          '<div>'+
            '<h3 class="font-semibold text-lg mb-4">'+t.footer.contact+'</h3>'+
            '<ul class="space-y-3">'+
              '<li class="flex items-start space-x-2"><span class="text-green-400">📍</span><span class="text-gray-300 text-sm">'+t.contact.address+'</span></li>'+
              '<li class="flex items-start space-x-2"><span class="text-green-400">📞</span><span class="text-gray-300 text-sm">'+t.contact.phone+'</span></li>'+
              '<li class="flex items-start space-x-2"><span class="text-green-400">✉️</span><span class="text-gray-300 text-sm">'+t.contact.email+'</span></li>'+
            '</ul>'+
          '</div>'+
          '<div>'+
            '<h3 class="font-semibold text-lg mb-4">'+t.footer.certifications+'</h3>'+
            '<div class="space-y-3">'+
              '<div class="flex items-center space-x-2"><div class="w-8 h-8 bg-green-600 rounded flex items-center justify-center"><span class="text-xs font-bold text-white">US</span></div><span class="text-gray-300 text-sm">'+translations[state.lang].home.certifications.usda+'</span></div>'+
              '<div class="flex items-center space-x-2"><div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center"><span class="text-xs font-bold text-white">EU</span></div><span class="text-gray-300 text-sm">'+translations[state.lang].home.certifications.eu+'</span></div>'+
            '</div>'+
          '</div>'+
        '</div>'+
        '<div class="border-t border-gray-800 mt-8 pt-8 text-center">'+
          '<p class="text-gray-400 text-sm">'+t.footer.rights+'</p>'+
        '</div>'+
      '</div>'+
    '</footer>';
    $('#site-footer').html(html);
  }

  function i18nFill(){
    var t = translations[state.lang];
    $('[data-i18n]').each(function(){
      var key = $(this).data('i18n');
      var parts = key.split('.');
      var cur = t;
      for(var i=0;i<parts.length;i++){ cur = cur && cur[parts[i]]; }
      if(typeof cur === 'string'){ $(this).text(cur); }
    });
  }

  function renderHome(){ if(!$('#page-home').length) return; i18nFill(); }

  function renderProducts(){ if(!$('#page-products').length) return; var t=translations[state.lang];
    $('#products-title').text(t.products.title);
    $('#products-subtitle').text(t.products.subtitle);
    $('[data-i18n="products.oilsTitle"]').text(t.products.oilsTitle);
    $('[data-i18n="products.oilsDesc"]').text(t.products.oilsDesc);
    $('[data-i18n="products.oilsF1"]').text(t.products.oilsF1);
    $('[data-i18n="products.oilsF2"]').text(t.products.oilsF2);
    $('[data-i18n="products.oilsF3"]').text(t.products.oilsF3);
    $('[data-i18n="products.oilsF4"]').text(t.products.oilsF4);
    $('[data-i18n="products.mealTitle"]').text(t.products.mealTitle);
    $('[data-i18n="products.mealDesc"]').text(t.products.mealDesc);
    $('[data-i18n="products.mealF1"]').text(t.products.mealF1);
    $('[data-i18n="products.mealF2"]').text(t.products.mealF2);
    $('[data-i18n="products.mealF3"]').text(t.products.mealF3);
    $('[data-i18n="products.mealF4"]').text(t.products.mealF4);
    $('[data-i18n="products.finishedTitle"]').text(t.products.finishedTitle);
    $('[data-i18n="products.finishedDesc"]').text(t.products.finishedDesc);
    $('[data-i18n="products.finF1"]').text(t.products.finF1);
    $('[data-i18n="products.finF2"]').text(t.products.finF2);
    $('[data-i18n="products.finF3"]').text(t.products.finF3);
    $('[data-i18n="products.finF4"]').text(t.products.finF4);
    $('[data-i18n="products.ctaTitle"]').text(t.products.ctaTitle);
    $('[data-i18n="products.ctaSubtitle"]').text(t.products.ctaSubtitle);
  }

  function renderSustainability(){ if(!$('#page-sustainability').length) return; var t=translations[state.lang]; i18nFill();
    $('[data-tab]').on('click', function(){ var val=$(this).data('tab'); $('[data-tab]').removeClass('bg-green-600 text-white').addClass('bg-white text-gray-700 border'); $(this).addClass('bg-green-600 text-white').removeClass('bg-white text-gray-700 border');
      $('[data-tab-content]').addClass('hidden'); $('[data-tab-content="'+val+'"]').removeClass('hidden');
    });
  }

  function renderPartnerships(){ if(!$('#page-partnerships').length) return; i18nFill(); }
  function renderNews(){ if(!$('#page-news').length) return; i18nFill();
    // Render sample news dates localization already handled in static
  }
  function renderContact(){ if(!$('#page-contact').length) return; var t=translations[state.lang]; i18nFill();
    $('#contact-form').on('submit', function(e){ e.preventDefault(); var btn=$('#contact-submit'); var original=btn.text(); btn.prop('disabled',true).addClass('opacity-70').text(state.lang==='fr'?'Envoi…':'Sending…');
      setTimeout(function(){ alert(state.lang==='fr'?'Message envoyé avec succès ! Nous vous répondrons bientôt.':'Message sent successfully! We will respond to you soon.'); $('#contact-form')[0].reset(); btn.prop('disabled',false).removeClass('opacity-70').text(t.contact.form.send); }, 700);
    });
  }

  function renderAll(){ renderHeader(); renderFooter(); i18nFill(); renderHome(); renderSustainability(); renderPartnerships(); renderNews(); renderContact(); }

  $(function(){ renderAll(); });
})();


