import pb from "../../utils/pb";

export async function post({ request }) {
  try {
    const data = await request.json();
    
    // Créer ou mettre à jour l'entrée dans la collection LUNETTE
    const lunetteData = {
      materiau_monture: data.materiau_monture,
      materiau_verre: data.materiau_verre,
      taille_verre: data.taille_verre,
      taille_pont: data.taille_pont,
      user: data.userId,
      nom_couleur: data.couleurBranches, // On utilise la couleur des branches comme nom
      image: data.svgCode // Le code SVG complet
    };

    const lunette = await pb.collection('LUNETTE').create(lunetteData);

    // Créer une entrée dans la collection Svgs pour l'affichage dans la bibliothèque
    const svgData = {
      name: `Lunettes personnalisées - ${data.couleurBranches}`,
      code_svg: data.svgCode,
      user: data.userId
    };

    const svg = await pb.collection('Svgs').create(svgData);

    return new Response(JSON.stringify({ success: true, lunetteId: lunette.id, svgId: svg.id }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Erreur lors de la sauvegarde:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}