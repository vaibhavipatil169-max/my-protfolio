// ========== Mobile menu ==========
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  // close menu when a link is clicked (useful on mobile)
  navLinks.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    })
  );
}

// ========== Contact form (opens email app) ==========
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    // Updated to your real email from CV
    const to = "vaibhavipatil169@gmail.com"; 
    const subject = encodeURIComponent(`Portfolio Inquiry from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.name}\nEmail: ${data.email}`);
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    form.reset();
  });
}

// ========== Current year in footer ==========
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ========== Auto-fill profile highlights ==========
// Insert summary and role badge from profile
const summaryEl = document.getElementById("summary");
if (summaryEl) {
  summaryEl.textContent =
    "Production Engineer focused on managing lithium‑ion EV battery production, IR & OCV testing, and collaborating with robotics/automation teams to scale sustainable energy solutions.";
}

// Insert skills dynamically if element exists
const skillsEl = document.getElementById("skills-list");
if (skillsEl) {
  const skills = [
    "Battery • EV",
    "Generative AI",
    "Power Electronics",
    "Python",
    "MySQL",
    "Power BI",
    "Advanced Excel",
    "MATLAB / Simulink"
  ];
  skillsEl.innerHTML = skills.map(skill => `<li class="tag">${skill}</li>`).join("");
}

// Insert languages dynamically
const langsEl = document.getElementById("langs");
if (langsEl) {
  const langs = [
    { name: "English", level: "Native" },
    { name: "Marathi", level: "Native" },
    { name: "Hindi", level: "Native" }
  ];
  langsEl.innerHTML = langs.map(l => `<span class="lang">${l.name} • ${l.level}</span>`).join(" ");
}

