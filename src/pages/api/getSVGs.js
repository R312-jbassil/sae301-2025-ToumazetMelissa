import type { APIRoute } from "astro";
import db from "../../lib/db"; // adapte selon ton système de DB

export const GET: APIRoute = async ({ request }) => {
  try {
    // Ex. si tu as un système utilisateur :
    // const user = JSON.parse(localStorage.getItem("user"));
    // const userId = user?.id;

    // Récupère tous les SVG
    const svgs = await db.svg.findMany({
      orderBy: { id: "desc" },
    });

    return new Response(JSON.stringify({ svgs }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Erreur lors du chargement des SVG" }), { status: 500 });
  }
};
