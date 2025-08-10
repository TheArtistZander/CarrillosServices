// 🌿 Canvas Animation
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let circles = [];
for (let i = 0; i < 50; i++) {
  circles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 5 + 2,
    dx: (Math.random() - 0.5) * 2,
    dy: (Math.random() - 0.5) * 2
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(76, 175, 80, 0.5)";
    ctx.fill();
    c.x += c.dx;
    c.y += c.dy;

    if (c.x < 0 || c.x > canvas.width) c.dx *= -1;
    if (c.y < 0 || c.y > canvas.height) c.dy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();

// 🌐 Language Toggle
const translations = {
  en: {
    title: "Carrillos Services",
    titleHeader: "Carrillos Services",
    subtitle: "Landscaping & Junkyard Removal",
    servicesTitle: "Our Services",
    landscapingTitle: "🌳 Landscaping",
    landscapingDesc: "We design, maintain, and beautify your outdoor spaces.",
    landscapeGalleryTitle: "🌿 Landscaping Projects",
    junkTitle: "🗑️ Junk Removal",
    junkDesc: "Fast and eco-friendly removal of unwanted materials.",
    junkGalleryTitle: "🗑️ Junk Removal in Action",
    evictionTitle: "🚪 Evictions & Trash Outs",
    evictionDesc: "We help clear properties quickly and professionally.",
    dumpsterTitle: "🛻 Dumpster Rentals",
    dumpsterDesc: "Affordable dumpster rental for residential and commercial use.",
    galleryTitle: "🚛 Our Truck",
    contactTitle: "Contact Us",
    submitBtn: "Send",
    ctaText: "Prefer email? Reach out directly:",
    emailBtn: "📧 Email Us",
    availabilityTitle: "📅 Availability",
    availabilityDesc: "We’re available 7 days a week — email or text anytime.",
    depositTitle: "💵 Damage Deposit",
    depositDesc: "$100 deposit required for all jobs. Accepted via Cash App or Zelle.",
    paymentTitle: "📱 Payment Info",
    cashapp: "Cash App: $CarrillosServices",
    zelle: "Zelle: carrillosservices2025@gmail.com",
    footerMessage: "🤝 Built on Trust • ❤️ Powered by Family",
    familyOwned: "👨‍👩‍👧‍👦 Family-Owned & Operated",
    familyDesc: "We’re proud to be a small, family-run business serving our community with care, honesty, and hard work. Every job we take on is personal — because your trust means everything to us."
  },
  es: {
    title: "Servicios Carrillos",
    titleHeader: "Servicios Carrillos",
    subtitle: "Paisajismo y Remoción de Basura",
    servicesTitle: "Nuestros Servicios",
    landscapingTitle: "🌳 Paisajismo",
    landscapingDesc: "Diseñamos, mantenemos y embellecemos sus espacios exteriores.",
    landscapeGalleryTitle: "🌿 Proyectos de Paisajismo",
    junkTitle: "🗑️ Remoción de Basura",
    junkDesc: "Remoción rápida y ecológica de materiales no deseados.",
    junkGalleryTitle: "🗑️ Remoción de Basura en Acción",
    evictionTitle: "🚪 Desalojos y Limpiezas",
    evictionDesc: "Ayudamos a limpiar propiedades de manera rápida y profesional.",
    dumpsterTitle: "🛻 Alquiler de Contenedores",
    dumpsterDesc: "Alquiler asequible de contenedores para uso residencial y comercial.",
    galleryTitle: "🚛 Nuestro Camión",
    contactTitle: "Contáctenos",
    submitBtn: "Enviar",
    ctaText: "¿Prefiere correo electrónico? Contáctenos directamente:",
    emailBtn: "📧 Envíenos un correo",
    availabilityTitle: "📅 Disponibilidad",
    availabilityDesc: "Estamos disponibles los 7 días de la semana — envíe correo o mensaje en cualquier momento.",
    depositTitle: "💵 Depósito por Daños",
    depositDesc: "Se requiere un depósito de $100 para todos los trabajos. Se acepta por Cash App o Zelle.",
    paymentTitle: "📱 Información de Pago",
    cashapp: "Cash App: $CarrillosServices",
    zelle: "Zelle: carrillosservices2025@gmail.com",
    footerMessage: "🤝 Basado en la Confianza • ❤️ Impulsado por la Familia",
    familyOwned: "👨‍👩‍👧‍👦 Empresa Familiar",
    familyDesc: "Nos enorgullece ser una empresa familiar que sirve a nuestra comunidad con cuidado, honestidad y trabajo duro. Cada trabajo que realizamos es personal — porque su confianza lo es todo para nosotros."
  }
};

// Load saved language preference
let currentLang = localStorage.getItem("lang") || "en";

function applyTranslations(lang) {
  const t = translations[lang];
  for (const key in t) {
    const el = document.getElementById(key);
    if (el && t[key]) el.textContent = t[key];
  }
  document.getElementById("languageToggle").textContent = lang === "en" ? "Español" : "English";
  localStorage.setItem("lang", lang);
}

document.getElementById("languageToggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";
  applyTranslations(currentLang);
});

// Apply on page load
applyTranslations(currentLang);
