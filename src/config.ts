export const ROOT_DOMAIN = "m4rc3l.de";
export const MATRIX_CLIENT = `https://synapse.${ROOT_DOMAIN}`;
export const MATRIX_FEDERATION = `synapse.${ROOT_DOMAIN}:443`;

export const REDIRECT_DOMAINS = [
  `www.${ROOT_DOMAIN}`,
];

export const ROBOTS_EXCLUDE = [ // aka redirect to root
  `www.${ROOT_DOMAIN}`
];
