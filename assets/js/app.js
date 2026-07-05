
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

const translations = {
  en: {
    "nav.projects":"Projects", "nav.blog":"Dev Blog", "nav.support":"Support", "nav.privacy":"Privacy",
    "home.eyebrow":"Independent Game Studio",
    "home.title":"Altaris<br/>Studio",
    "home.subtitle":"Crafting immersive games through technology, creativity, and passion.",
    "home.projects":"Explore Projects",
    "home.privacy":"Privacy Policy",
    "home.sectionProjects":"Projects",
    "home.sectionText":"Games and interactive experiences currently developed by Altaris Studio.",
    "home.blog":"Latest Development Notes",
    "home.about":"About Altaris Studio",
    "home.aboutText":"Altaris Studio is an independent Brazilian game studio focused on creating polished, memorable, and visually distinctive experiences for players around the world."
  },
  pt: {
    "nav.projects":"Projetos", "nav.blog":"Dev Blog", "nav.support":"Suporte", "nav.privacy":"Privacidade",
    "home.eyebrow":"Estúdio Independente de Jogos",
    "home.title":"Altaris<br/>Studio",
    "home.subtitle":"Criando jogos imersivos com tecnologia, criatividade e paixão.",
    "home.projects":"Ver Projetos",
    "home.privacy":"Política de Privacidade",
    "home.sectionProjects":"Projetos",
    "home.sectionText":"Jogos e experiências interativas desenvolvidas pela Altaris Studio.",
    "home.blog":"Últimas Notas de Desenvolvimento",
    "home.about":"Sobre a Altaris Studio",
    "home.aboutText":"Altaris Studio é um estúdio brasileiro independente focado em criar experiências polidas, memoráveis e visualmente marcantes para jogadores do mundo todo."
  }
};

function applyLanguage(lang){
  const dict = translations[lang] || translations.en;
  $$("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if(dict[key]) el.innerHTML = dict[key];
  });
  localStorage.setItem("altaris_lang", lang);
}

function initLanguage(){
  const stored = localStorage.getItem("altaris_lang") || "en";
  applyLanguage(stored);
  $$("[data-lang]").forEach(btn => btn.addEventListener("click", () => applyLanguage(btn.dataset.lang)));
}

function initReveal(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, {threshold:.12});
  $$(".reveal").forEach(el => observer.observe(el));
}

function initNav(){
  const toggle = $(".mobile-toggle");
  const links = $(".nav-links");
  if(toggle && links){
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }
}

function initYear(){
  $$("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initReveal();
  initNav();
  initYear();
});
