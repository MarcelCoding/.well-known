export const ROOT_DOMAIN = "m4rc3l.de";
export const MATRIX_CLIENT = `https://matrix.${ROOT_DOMAIN}`;
export const MATRIX_FEDERATION = `matrix-federation.${ROOT_DOMAIN}:443`;

export const REDIRECT_DOMAINS = [
  `www.${ROOT_DOMAIN}`,
  "marcelcoding.ml",
  "www.marcelcoding.ml",
  "marcelcoding.tk",
  "www.marcelcoding.tk",
];

export const ROBOTS_EXCLUDE = [ // aka redirect to root
  `www.${ROOT_DOMAIN}`
];
