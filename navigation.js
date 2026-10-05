const SiteNavigation = {
  copy: {
    pl: { home: "Strona główna", catalog: "Katalog", brand: "O marce", partners: "Partnerzy", contact: "Kontakt" },
    de: { home: "Startseite", catalog: "Katalog", brand: "Über uns", partners: "Partner", contact: "Kontakt" },
    en: { home: "Home", catalog: "Catalogue", brand: "Our story", partners: "Partners", contact: "Contact" },
    es: { home: "Inicio", catalog: "Catálogo", brand: "La marca", partners: "Socios", contact: "Contacto" },
    fr: { home: "Accueil", catalog: "Catalogue", brand: "La marque", partners: "Partenaires", contact: "Contact" },
    it: { home: "Home", catalog: "Catalogo", brand: "Il marchio", partners: "Partner", contact: "Contatti" }
  },
  apply(lang) {
    const copy = this.copy[lang] || this.copy.pl;
    document.querySelectorAll("[data-nav-label]").forEach((link) => {
      link.textContent = copy[link.dataset.navLabel];
    });
    document.querySelectorAll("[data-site-link], [data-home-link]").forEach((link) => {
      if (!link.dataset.baseHref) link.dataset.baseHref = link.getAttribute("href");
      const url = new URL(link.dataset.baseHref, window.location.href);
      url.searchParams.set("lang", lang);
      link.href = `${url.pathname}${url.search}${url.hash}`;
    });
  }
};
