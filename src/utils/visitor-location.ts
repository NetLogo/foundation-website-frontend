export type IpSource = "cloudflare" | "ipapi" | "none";

export interface VisitorLocation {
  ip: string | null;
  country: string | null;
  ip_source: IpSource;
  country_source: IpSource;
}

const fromCloudflare = async (): Promise<VisitorLocation | null> => {
  const res = await fetch("/cdn-cgi/trace");
  if (!res.ok) return null;
  const fields = new Map<string, string>();
  for (const line of (await res.text()).split("\n")) {
    const eq = line.indexOf("=");
    if (eq > 0) fields.set(line.slice(0, eq), line.slice(eq + 1).trim());
  }
  const ip = fields.get("ip");
  if (!ip) return null;
  const loc = fields.get("loc");
  return { ip, country: loc || null, ip_source: "cloudflare", country_source: "cloudflare" };
};

const fromIpapi = async (): Promise<VisitorLocation | null> => {
  const res = await fetch("https://ipapi.co/json/");
  if (!res.ok) return null;
  const data = await res.json();
  if (typeof data.ip !== "string" || !data.ip) return null;
  return { ip: data.ip, country: data.country || null, ip_source: "ipapi", country_source: "ipapi" };
};

export const lookupVisitorLocation = async (): Promise<VisitorLocation> => {
  for (const source of [fromCloudflare, fromIpapi]) {
    try {
      const found = await source();
      if (found) return found;
    } catch {
    }
  }
  return { ip: null, country: null, ip_source: "none", country_source: "none" };
};
