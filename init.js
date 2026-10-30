// Kept in a file (not inline) so the docs page works under a strict Content-Security-Policy.
window.ui = SwaggerUIBundle({
  url: "openapi.yaml",
  dom_id: "#swagger-ui",
  deepLinking: true,
  displayRequestDuration: true,
  persistAuthorization: false,
  tryItOutEnabled: false,
  defaultModelsExpandDepth: 0,
  docExpansion: "none",
  filter: true,
});
