import pb from '../../utils/pb.js';

export async function post({ request }) {
  const body = await request.json();

  // On prépare les données à enregistrer dans LUNETTE
  const data = {
    user: body.userId,
    materiau_monture: body.materiau_monture,
    materiau_verre: body.materiau_verre,
    taille_verre: body.taille_verre,
    taille_pont: body.taille_pont,
    couleur_branche: body.couleurBranches,
    couleur_monture: body.couleurMonture,
    image: body.svgCode, // On stocke le SVG dans le champ image
  };
 // ⚠️ Vérifie que le nom correspond bien à ta collection PocketBase
    const created = await pb.collection('LUNETTE').create(recordData);

    return new Response(JSON.stringify({ ok: true, record: created }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('saveLunette error', err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
    });
  }
