import "https://deno.land/x/dotenv@v3.2.0/load.ts";

export const config = {
  projectId: Deno.env.get("SANITY_PROJECT_ID"),
  dataset: Deno.env.get("SANITY_DATASET"),
  useCdn: true,
  apiVersion: Deno.env.get("SANITY_API_VERSION"),
}

// Micro client for Sanity, I was having issues with Sanity's client package through esm.sh
// so I made a small one
class SanityClient {
  constructor(config) {
    this.config = config
  }

  get projectId() {
    return this.config.projectId
  }

  get dataset() {
    return this.config.dataset
  }

  get apiVersion() {
    return this.config.apiVersion
  }

  get useCdn() {
    return this.config.useCdn
  }

  async fetch(query) {
    const url = `https://${this.projectId}.api.sanity.io/${this.apiVersion}/data/query/${this.dataset}?query=${encodeURIComponent(query)}`;
    const res = await fetch(url);
    return await res.json();
  }
}

export const client = new SanityClient(config);