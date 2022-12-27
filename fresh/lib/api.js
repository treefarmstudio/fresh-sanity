import { client } from "./sanityClient.js";

export async function getTemplates() {
  try {
    const query = `*[_type == "template"] | order(publishedAt desc)`;
    const data = await client.fetch(query);
    return data.result;
  } catch (error) {
    console.error(error);
  }
}