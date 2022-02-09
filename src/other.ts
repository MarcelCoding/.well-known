import { REDIRECT_DOMAINS, ROBOTS_EXCLUDE, ROOT_DOMAIN } from "./index";
import { ACCESS_CONTROL_ALLOW_ORIGIN, ASTERISK, CONTENT_TYPE, TEXT_PLAIN } from "./headers";

export async function robotsTxt(request: Request): Promise<Response | undefined> {
  const url = new URL(request.url);

  if (ROBOTS_EXCLUDE.includes(url.hostname)) {
    return;
  }

  if (!REDIRECT_DOMAINS.includes(url.hostname)) {
    const orgRobots = await fetch(request);

    if (orgRobots.status !== 404) {
      return orgRobots;
    }
  }

  return new Response(`User-agent: *\nDisallow: /`, {
    headers: {
      [CONTENT_TYPE]: TEXT_PLAIN,
      [ACCESS_CONTROL_ALLOW_ORIGIN]: ASTERISK
    }
  });
}

export function securityTxt(): Response {
  return new Response(
    `Contact: mailto:security@${ROOT_DOMAIN}
Expires: 2023-12-31T23:59:59.999Z
Preferred-Languages: en, de
Canonical: https://${ROOT_DOMAIN}/.well-known/security.txt`,
    {
      headers: {
        [CONTENT_TYPE]: TEXT_PLAIN,
        [ACCESS_CONTROL_ALLOW_ORIGIN]: ASTERISK
      }
    }
  );
}
