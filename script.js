/* ============================================================
   Renders SITE_DATA (from data.js) into the DOM.
   You shouldn't need to edit this file — edit data.js instead.
   ============================================================ */

const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.02-.01-1.85-2.78.61-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.29 9.29 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" fill="currentColor"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none"><path d="M6.94 8.5H3.56V20.5H6.94V8.5Z" fill="currentColor"/><path d="M5.25 7.1a1.96 1.96 0 1 0 0-3.92 1.96 1.96 0 0 0 0 3.92Z" fill="currentColor"/><path d="M9.75 8.5H13v1.63h.05c.45-.83 1.55-1.7 3.2-1.7 3.42 0 4.05 2.14 4.05 4.93v6.64h-3.38v-5.89c0-1.4-.03-3.2-1.98-3.2-1.98 0-2.29 1.5-2.29 3.1v6h-3.4V8.5Z" fill="currentColor"/></svg>`,
  leetcode: `<svg viewBox="0 0 24 24" fill="none"><path d="M13.5 3.5 7 10a3 3 0 0 0 0 4l4.6 4.6a2.7 2.7 0 0 0 3.82 0l1.4-1.4a1.35 1.35 0 0 0-1.9-1.9l-1.4 1.4-4-4a1 1 0 0 1 0-1.4l4-4 1.4 1.4a1.35 1.35 0 0 0 1.9-1.9l-1.4-1.4a2.7 2.7 0 0 0-1.92-.8" fill="currentColor"/><rect x="9" y="15.2" width="8" height="2" rx="1" fill="currentColor"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="m4 6.5 8 6.2 8-6.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 15 15 9M8.5 12.5 5.9 15.1a3 3 0 1 0 4.24 4.24l2.6-2.6M15.5 11.5l2.6-2.6a3 3 0 1 0-4.24-4.24L11.26 7.26" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function renderProfile() {
  const { name, tagline, location, photo, abstract, resumeUrl } = SITE_DATA.profile;

  document.getElementById("profilePhoto").src = photo;
  document.getElementById("profilePhoto").alt = name;
  document.getElementById("profileLocation").textContent = location;
  document.getElementById("profileTagline").textContent = tagline;
  document.getElementById("profileAbstract").textContent = abstract;
  document.getElementById("footerName").textContent = name;

  const nameEl = document.getElementById("profileName");
  nameEl.innerHTML = "";
  nameEl.append(document.createTextNode(name));
  nameEl.appendChild(el("span", "cursor"));

  if (resumeUrl) {
    const btn = document.getElementById("resumeBtn");
    btn.href = resumeUrl;
    btn.style.display = "inline-block";
  }

  document.getElementById("footerDate").textContent = new Date().toLocaleDateString("en-IN", {
    month: "long", year: "numeric",
  });
}

function renderSkills() {
  const wrap = document.getElementById("skillsList");
  SITE_DATA.skillGroups.forEach((group) => {
    const box = el("div", "skill-group reveal");
    box.appendChild(el("h3", "skill-group__title", group.group));
    const chips = el("div", "skill-group__chips");
    group.items.forEach((item) => chips.appendChild(el("span", "chip", item)));
    box.appendChild(chips);
    wrap.appendChild(box);
  });
}

function renderProjects() {
  const wrap = document.getElementById("projectsList");
  SITE_DATA.projects.forEach((p) => {
    const card = el("article", "card reveal");

    const top = el("div", "card__top");
    top.appendChild(el("h3", "card__title", p.title));
    const status = el("span", `status ${p.status === "active" ? "status--active" : ""}`);
    status.appendChild(el("span", "status__dot"));
    status.appendChild(document.createTextNode(p.status === "active" ? "In progress" : "Complete"));
    top.appendChild(status);
    card.appendChild(top);

    if (p.domain) card.appendChild(el("span", "card__domain", p.domain));
    card.appendChild(el("p", "card__desc", p.description));

    if (p.stack && p.stack.length) {
      const stack = el("div", "card__stack");
      p.stack.forEach((s) => stack.appendChild(el("span", "", s)));
      card.appendChild(stack);
    }

    const linkRow = el("div", "card__links");
    if (p.github) {
      const a = el("a", "", "Code");
      a.href = p.github; a.target = "_blank"; a.rel = "noopener";
      linkRow.appendChild(a);
    }
    if (p.demo) {
      const a = el("a", "", "Live demo");
      a.href = p.demo; a.target = "_blank"; a.rel = "noopener";
      linkRow.appendChild(a);
    }
    if (linkRow.children.length) card.appendChild(linkRow);

    wrap.appendChild(card);
  });
}

function renderTimeline(listId, items, isExperience) {
  const list = document.getElementById(listId);
  items.forEach((item) => {
    const li = el("li", "reveal");
    li.appendChild(el("p", "tl-role", isExperience ? item.role : item.degree || item.school));
    if (isExperience) {
      li.appendChild(el("p", "tl-org", item.org));
    } else if (item.degree) {
      li.appendChild(el("p", "tl-org", item.school));
    }
    const metaParts = [item.period, item.location].filter(Boolean);
    if (metaParts.length) li.appendChild(el("p", "tl-meta", metaParts.join(" · ")));
    if (item.description) li.appendChild(el("p", "tl-desc", item.description));
    list.appendChild(li);
  });
}

function renderPublications() {
  const wrap = document.getElementById("publicationsList");
  (SITE_DATA.publications || []).forEach((pub) => {
    const card = el("article", "pub-card reveal");
    card.appendChild(el("h3", "pub-card__title", pub.title));

    const meta = el("p", "pub-card__meta");
    if (pub.role) meta.appendChild(el("span", "role", pub.role));
    meta.appendChild(document.createTextNode([pub.venue, pub.period].filter(Boolean).join(" · ")));
    card.appendChild(meta);

    if (pub.description) card.appendChild(el("p", "pub-card__desc", pub.description));

    if (pub.url) {
      const a = el("a", "pub-card__link", "Read the paper");
      a.href = pub.url; a.target = "_blank"; a.rel = "noopener";
      card.appendChild(a);
    }

    wrap.appendChild(card);
  });
}

function renderAchievements() {
  const wrap = document.getElementById("achievementsList");
  (SITE_DATA.achievements || []).forEach((text) => {
    wrap.appendChild(el("li", "reveal", text));
  });
}

function renderLinks() {
  const wrap = document.getElementById("linksList");
  SITE_DATA.links.forEach((link) => {
    const a = el("a", "link-card reveal");
    a.href = link.url;
    if (link.url.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }

    const icon = el("span", "link-card__icon", ICONS[link.icon] || ICONS.link);
    const text = el("span", "");
    text.appendChild(el("span", "link-card__label", link.label));
    const value = el("span", "link-card__value", link.value);
    value.style.display = "block";
    text.appendChild(value);

    a.appendChild(icon);
    a.appendChild(text);
    wrap.appendChild(a);
  });
}

function setupNavToggle() {
  const toggle = document.getElementById("navToggle");
  const links = document.querySelector(".nav__links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

function setupScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((t) => observer.observe(t));
}

function init() {
  renderProfile();
  renderSkills();
  renderProjects();
  renderTimeline("experienceList", SITE_DATA.experience, true);
  renderTimeline("educationList", SITE_DATA.education, false);
  renderPublications();
  renderAchievements();
  renderLinks();
  setupNavToggle();
  setupScrollReveal();
}

document.addEventListener("DOMContentLoaded", init);
