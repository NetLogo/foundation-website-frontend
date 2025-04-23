import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.json();
  const directusUrl = `${import.meta.env.PUBLIC_BACKEND_URL}/items/download_responses`;
  
  try {
    const response = await fetch(directusUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error proxying to Directus:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch from Directus" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};