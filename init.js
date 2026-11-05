// Kept in a file (not inline) so the docs page works under a strict Content-Security-Policy.
// The language selector switches between the English contract and its Brazilian Portuguese
// translation (?lang=en or ?lang=pt-BR also works; the choice is remembered).
(function () {
  var specs = { "en": "openapi.yaml", "pt-BR": "openapi.pt-BR.yaml" };
  var params = new URLSearchParams(window.location.search);
  var saved = null;
  try { saved = window.localStorage.getItem("kzms-docs-lang"); } catch (e) { saved = null; }
  var lang = params.get("lang") || saved || ((navigator.language || "").toLowerCase().indexOf("pt") === 0 ? "pt-BR" : "en");
  if (!specs[lang]) { lang = "en"; }
  var select = document.getElementById("lang");
  select.value = lang;
  document.documentElement.lang = lang;

  window.ui = SwaggerUIBundle({
    url: specs[lang],
    dom_id: "#swagger-ui",
    deepLinking: true,
    displayRequestDuration: true,
    persistAuthorization: false,
    tryItOutEnabled: false,
    defaultModelsExpandDepth: 0,
    docExpansion: "none",
    filter: true,
  });

  select.addEventListener("change", function () {
    var next = select.value;
    try { window.localStorage.setItem("kzms-docs-lang", next); } catch (e) { /* storage disabled */ }
    document.documentElement.lang = next;
    window.ui.specActions.updateUrl(specs[next]);
    window.ui.specActions.download(specs[next]);
  });
})();
