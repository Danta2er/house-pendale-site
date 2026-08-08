(function () {
  "use strict";

  var gateKey = "house-pendale-age-ack";
  var analyticsKey = "house-pendale-analytics-choice";

  function setAnalyticsConsent(granted) {
    if (typeof window.gtag !== "function") return;
    window.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
  }

  function dismiss(gate) {
    gate.remove();
    document.body.style.overflow = "";
  }

  function installStyles() {
    if (document.getElementById("house-notice-styles")) return;
    var style = document.createElement("style");
    style.id = "house-notice-styles";
    style.textContent = [
      '#house-notice{position:fixed;inset:0;z-index:1000;display:grid;place-items:center;padding:24px;background:rgba(7,6,9,.88);backdrop-filter:blur(7px);}',
      '.house-notice__panel{width:min(620px,100%);border:1px solid #8e735b;background:#161318;color:#e6d9c4;padding:clamp(30px,6vw,52px);box-shadow:0 30px 100px rgba(0,0,0,.65);font-family:Georgia,serif;}',
      '.house-notice__eyebrow{margin:0 0 18px;color:#b67333;font:12px Arial,sans-serif;letter-spacing:.18em;text-transform:uppercase;}',
      '.house-notice__panel h1{margin:0 0 20px;font-size:clamp(30px,5vw,46px);line-height:1.08;}',
      '.house-notice__panel p{color:#c9c4bd;font-size:16px;line-height:1.7;}',
      '.house-notice__small{font-size:14px!important;color:#a9a4a0!important;}',
      '.house-notice__small a{color:#b67333;}',
      '.house-notice__actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px;}',
      '.house-notice__actions button{border:1px solid #b67333;background:#b67333;color:#0b0b0f;padding:14px 18px;cursor:pointer;font:600 12px Arial,sans-serif;letter-spacing:.07em;text-transform:uppercase;}',
      '.house-notice__actions button:first-child{background:transparent;color:#e6d9c4;border-color:#5e5653;}',
      '@media(max-width:540px){.house-notice__actions button{width:100%;}.house-notice__panel{padding:30px 24px;}}'
    ].join("");
    document.head.appendChild(style);
  }

  function openGate() {
    var forcePreview = new URLSearchParams(window.location.search).has("notice");
    if (!forcePreview && localStorage.getItem(gateKey) === "yes") {
      setAnalyticsConsent(localStorage.getItem(analyticsKey) === "yes");
      return;
    }

    installStyles();
    var gate = document.createElement("section");
    gate.id = "house-notice";
    gate.setAttribute("role", "dialog");
    gate.setAttribute("aria-modal", "true");
    gate.setAttribute("aria-labelledby", "house-notice-title");
    gate.innerHTML = [
      '<div class="house-notice__panel">',
      '<p class="house-notice__eyebrow">House Rules</p>',
      '<h1 id="house-notice-title">This House is for grown readers.</h1>',
      '<p>House Pendale contains explicit adult fiction. By entering, you confirm you are 18 or older. If you are not, the House is very flattered, but absolutely not.</p>',
      '<p class="house-notice__small">You may also choose whether anonymous Google Analytics helps us see which pages and book links are useful. It never receives form messages, names, or email addresses. <a href="/privacy/">Read the particulars.</a></p>',
      '<div class="house-notice__actions">',
      '<button type="button" data-choice="no">I am 18+ — enter quietly</button>',
      '<button type="button" data-choice="yes">I am 18+ — and you may count me</button>',
      '</div>',
      '</div>'
    ].join("");

    document.body.appendChild(gate);
    document.body.style.overflow = "hidden";
  }

  document.addEventListener("click", function (event) {
    var target = event.target;
    var button = target && target.closest ? target.closest("#house-notice button[data-choice]") : null;
    if (!button) return;
    var consent = button.getAttribute("data-choice") === "yes";
    localStorage.setItem(gateKey, "yes");
    localStorage.setItem(analyticsKey, consent ? "yes" : "no");
    setAnalyticsConsent(consent);
    dismiss(button.closest("#house-notice"));
  }, true);

  // The Design export rebuilds its document tree during initial load.  Mount
  // after that work finishes so the acknowledgement gate cannot be discarded.
  if (document.readyState === "complete") {
    setTimeout(openGate, 50);
  } else {
    window.addEventListener("load", function () {
      setTimeout(openGate, 50);
    }, { once: true });
  }
}());
