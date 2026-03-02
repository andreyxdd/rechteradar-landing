const STORAGE_KEYS = {
  language: "rechteradar_lang",
  signups: "rechteradar_signups"
};

const translations = {
  de: {
    "hero.eyebrow": "Deutschlandweiter Fristenradar",
    "hero.title": "Ihre Rechte im Blick, bevor Fristen ablaufen.",
    "hero.subtitle":
      "RechteRadar beobachtet kollektive Verbraucherklagen in Deutschland und zeigt Ihnen früh, welche Verfahren für Sie relevant sein könnten.",
    "hero.primaryCta": "Berechtigung prüfen",
    "hero.secondaryCta": "Für Verbraucherverbände",
    "hero.pill1": "Nur Deutschland",
    "hero.pill2": "Fristen in Echtzeit",
    "hero.pill3": "Keine Kanzlei",
    "hero.note": "Neutraler Legal-Tech-Service zur Orientierung, ohne Rechtsberatung und ohne Ergebnisversprechen.",
    "mockup.panelTitle": "RechteRadar Monitor",
    "mockup.liveTag": "Live",
    "mockup.windowLabel": "Nächste 14 Tage",
    "mockup.activeCases": "Aktive Fälle",
    "mockup.deadlinesSoon": "Fristen bald",
    "mockup.tableCase": "Fall",
    "mockup.tableStatus": "Status",
    "mockup.tableDeadline": "Frist",
    "mockup.case1": "Diesel",
    "mockup.case2": "Telekom",
    "mockup.case3": "Reisen",
    "mockup.statusOpen": "Offen",
    "mockup.statusReview": "Prüfung",
    "mockup.timelineTitle": "Nächste Fristensignale",
    "mockup.timeline1": "Diesel-Verfahren: Dokumentenfenster endet in 3 Tagen",
    "mockup.timeline2": "Telekom-Fall: Opt-in startet morgen",
    "mockup.timeline3": "Reisen-Sammelklage: Neue Teilnahmeinfos verfügbar",
    "problem.kicker": "Warum der Markt Lücken hat",
    "problem.title": "Die meisten Betroffenen reagieren erst, wenn es zu spät ist.",
    "problem.bullet1": "Fristen sind kurz",
    "problem.bullet2": "Registrierung bleibt komplex",
    "problem.bullet3": "Es fehlt eine zentrale Benachrichtigung",
    "problem.bullet4": "Aktive Anmeldung erforderlich (Opt-in)",
    "problem.statValue": "400.000+",
    "problem.statText": "Teilnehmer an Deutschlands größter Musterfeststellungsklage",
    "solution.kicker": "So funktioniert RechteRadar",
    "solution.title": "Ein klarer Weg vom Hinweis bis zur Frist",
    "solution.step1.title": "Fälle entdecken",
    "solution.step1.text": "Neue relevante Verfahren werden gebündelt und priorisiert dargestellt.",
    "solution.step2.title": "Berechtigung prüfen",
    "solution.step2.text": "Sie erkennen früh, ob ein Fall zu Ihrer Situation passen kann.",
    "solution.step3.title": "Dokumente vorbereiten",
    "solution.step3.text": "Nötige Unterlagen und Schritte werden transparent vorbereitet.",
    "solution.step4.title": "Fristen verfolgen",
    "solution.step4.text": "Wichtige Termine bleiben priorisiert sichtbar, bevor Fristen enden.",
    "audience.kicker": "Für beide Seiten gedacht",
    "audience.consumer.title": "Für Verbraucher",
    "audience.consumer.bullet1": "Frühe Hinweise zu relevanten Verfahren",
    "audience.consumer.bullet2": "Klare Übersicht statt verstreuter Quellen",
    "audience.consumer.bullet3": "Orientierung zu Schritten und Fristen",
    "audience.consumer.bullet4": "Neutral, ohne Ergebnisversprechen",
    "audience.consumer.cta": "Interesse anmelden",
    "audience.association.title": "Für Verbände & Organisationen",
    "audience.association.bullet1": "Monitoring kollektiver Verfahren in einem Kanal",
    "audience.association.bullet2": "Strukturierte Fallinformationen für Teams",
    "audience.association.bullet3": "Unterstützung bei Fristenkommunikation",
    "audience.association.bullet4": "Frühzugang für Pilotpartnerschaften",
    "audience.association.cta": "Pilotzugang anfragen",
    "signup.title": "Frühzugang sichern",
    "signup.subtitle": "Erhalten Sie Updates, sobald der Pilot für passende Fälle startet.",
    "signup.emailLabel": "E-Mail",
    "signup.emailPlaceholder": "name@beispiel.de",
    "signup.checkbox": "Ich habe bereits an einer Sammelklage teilgenommen",
    "signup.submit": "Platz reservieren",
    "signup.success": "Danke. Ihr Interesse wurde lokal gespeichert.",
    "signup.error": "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    "faq.kicker": "Transparenz zuerst",
    "faq.title": "FAQ",
    "faq.q1": "Ist RechteRadar eine Kanzlei?",
    "faq.a1": "Nein. RechteRadar ist ein legales Technologieprodukt und keine Kanzlei.",
    "faq.q2": "Ist die Nutzung kostenlos?",
    "faq.a2": "Der geplante Frühzugang ist für Testnutzer kostenfrei.",
    "faq.q3": "Sind meine Daten sicher?",
    "faq.a3": "Daten werden für das MVP nur zweckgebunden verarbeitet und nicht für Rechtsberatung genutzt.",
    "faq.q4": "Trete ich automatisch einer Klage bei?",
    "faq.a4": "Nein. Eine Registrierung bei RechteRadar führt nicht automatisch zu einer Klagebeteiligung.",
    "finalCta.title": "Verpassen Sie keine relevante Frist mehr.",
    "finalCta.text": "Sammelklagen haben klare Zeitfenster. Mit RechteRadar behalten Sie Fristen und nächste Schritte im Blick.",
    "finalCta.button": "Berechtigung prüfen",
    "footer.disclaimer": "RechteRadar ist keine Rechtsberatung und keine Kanzlei."
  },
  en: {
    "hero.eyebrow": "Germany-wide deadline radar",
    "hero.title": "Keep your rights visible before deadlines close.",
    "hero.subtitle":
      "RechteRadar tracks collective consumer actions in Germany and highlights cases that may become relevant to you early.",
    "hero.primaryCta": "Check eligibility",
    "hero.secondaryCta": "For consumer associations",
    "hero.pill1": "Germany focus",
    "hero.pill2": "Real-time deadlines",
    "hero.pill3": "Not a law firm",
    "hero.note": "Neutral legal-tech positioning for orientation, without legal advice or outcome promises.",
    "mockup.panelTitle": "RechteRadar Monitor",
    "mockup.liveTag": "Live",
    "mockup.windowLabel": "Next 14 days",
    "mockup.activeCases": "Active cases",
    "mockup.deadlinesSoon": "Deadlines soon",
    "mockup.tableCase": "Case",
    "mockup.tableStatus": "Status",
    "mockup.tableDeadline": "Deadline",
    "mockup.case1": "Diesel",
    "mockup.case2": "Telecom",
    "mockup.case3": "Travel",
    "mockup.statusOpen": "Open",
    "mockup.statusReview": "Review",
    "mockup.timelineTitle": "Upcoming deadline signals",
    "mockup.timeline1": "Diesel action: document window closes in 3 days",
    "mockup.timeline2": "Telecom case: opt-in opens tomorrow",
    "mockup.timeline3": "Travel action: new participation guidance available",
    "problem.kicker": "Why the market has gaps",
    "problem.title": "Most affected consumers react only when it is already late.",
    "problem.bullet1": "Deadlines are short",
    "problem.bullet2": "Registration remains complex",
    "problem.bullet3": "There is no central notification channel",
    "problem.bullet4": "Active opt-in is required",
    "problem.statValue": "400,000+",
    "problem.statText": "Participants in Germany's largest model declaratory action",
    "solution.kicker": "How RechteRadar works",
    "solution.title": "A clear path from signal to deadline",
    "solution.step1.title": "Discover cases",
    "solution.step1.text": "New relevant actions are bundled and prioritised in one view.",
    "solution.step2.title": "Check eligibility",
    "solution.step2.text": "You can quickly assess whether a case may fit your situation.",
    "solution.step3.title": "Prepare documents",
    "solution.step3.text": "Required documents and next steps are prepared with clarity.",
    "solution.step4.title": "Track deadlines",
    "solution.step4.text": "Key dates stay prioritised before deadlines expire.",
    "audience.kicker": "Built for both audiences",
    "audience.consumer.title": "For consumers",
    "audience.consumer.bullet1": "Early signals on relevant proceedings",
    "audience.consumer.bullet2": "Clear overview instead of fragmented sources",
    "audience.consumer.bullet3": "Guidance on required steps and timing",
    "audience.consumer.bullet4": "Neutral positioning without outcome claims",
    "audience.consumer.cta": "Register interest",
    "audience.association.title": "For associations & organisations",
    "audience.association.bullet1": "Monitoring of collective actions in one channel",
    "audience.association.bullet2": "Structured case information for teams",
    "audience.association.bullet3": "Support for deadline communication",
    "audience.association.bullet4": "Early access for pilot partnerships",
    "audience.association.cta": "Request pilot access",
    "signup.title": "Secure early access",
    "signup.subtitle": "Receive updates as soon as the pilot opens for relevant cases.",
    "signup.emailLabel": "Email",
    "signup.emailPlaceholder": "name@example.com",
    "signup.checkbox": "I have already participated in a collective lawsuit",
    "signup.submit": "Reserve my place",
    "signup.success": "Thank you. Your interest was stored locally.",
    "signup.error": "Please enter a valid email address.",
    "faq.kicker": "Transparency first",
    "faq.title": "FAQ",
    "faq.q1": "Is RechteRadar a law firm?",
    "faq.a1": "No. RechteRadar is a legal-tech product and not a law firm.",
    "faq.q2": "Is the service free to use?",
    "faq.a2": "Planned early access is free for pilot users.",
    "faq.q3": "Is my data secure?",
    "faq.a3": "For this MVP, data is processed only for product testing purposes and not for legal advice.",
    "faq.q4": "Do I automatically join a lawsuit?",
    "faq.a4": "No. Registering with RechteRadar does not automatically enroll you in a lawsuit.",
    "finalCta.title": "Do not miss another relevant deadline.",
    "finalCta.text": "Collective actions run on strict windows. RechteRadar keeps deadlines and next steps visible.",
    "finalCta.button": "Check eligibility",
    "footer.disclaimer": "RechteRadar does not provide legal advice and is not a law firm."
  }
};

const formState = {
  messageKey: ""
};

function setLanguage(lang) {
  const language = translations[lang] ? lang : "de";
  const dict = translations[language];

  document.documentElement.lang = language;
  localStorage.setItem(STORAGE_KEYS.language, language);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (dict[key]) {
      node.setAttribute("placeholder", dict[key]);
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === language);
  });

  updateFormMessage(language);
}

function updateFormMessage(lang) {
  const messageEl = document.getElementById("form-message");
  if (!messageEl || !formState.messageKey) {
    return;
  }
  const text = translations[lang][formState.messageKey];
  if (text) {
    messageEl.textContent = text;
  }
}

function setupLanguageToggle() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
}

function setupCtaScrollAndLogging() {
  document.querySelectorAll("[data-scroll-target]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const target = document.querySelector(trigger.dataset.scrollTarget);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (trigger.dataset.log) {
        console.log(trigger.dataset.log);
      }
    });
  });
}

function setupFaqAccordion() {
  const items = Array.from(document.querySelectorAll(".faq-item"));
  items.forEach((item) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!button || !answer) {
      return;
    }

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      items.forEach((otherItem) => {
        const otherBtn = otherItem.querySelector(".faq-question");
        const otherAnswer = otherItem.querySelector(".faq-answer");
        if (!otherBtn || !otherAnswer) {
          return;
        }
        otherBtn.setAttribute("aria-expanded", "false");
        otherAnswer.style.maxHeight = "0px";
      });

      if (!isExpanded) {
        button.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });
}

function setupSignupForm() {
  const form = document.getElementById("signup-form");
  const emailInput = document.getElementById("email");
  const priorParticipation = document.getElementById("prior-participation");
  const messageEl = document.getElementById("form-message");

  if (!form || !emailInput || !priorParticipation || !messageEl) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const lang = localStorage.getItem(STORAGE_KEYS.language) || "de";
    const emailValue = emailInput.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    if (!isValidEmail) {
      formState.messageKey = "signup.error";
      messageEl.classList.remove("success");
      messageEl.classList.add("error");
      updateFormMessage(lang);
      return;
    }

    const signups = JSON.parse(localStorage.getItem(STORAGE_KEYS.signups) || "[]");
    signups.push({
      email: emailValue,
      priorParticipation: priorParticipation.checked,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem(STORAGE_KEYS.signups, JSON.stringify(signups));

    formState.messageKey = "signup.success";
    messageEl.classList.remove("error");
    messageEl.classList.add("success");
    updateFormMessage(lang);

    console.log("Signup submitted");
    form.reset();
  });
}

function init() {
  setupLanguageToggle();
  setupCtaScrollAndLogging();
  setupFaqAccordion();
  setupSignupForm();

  const savedLang = localStorage.getItem(STORAGE_KEYS.language) || "de";
  setLanguage(savedLang);
}

init();
