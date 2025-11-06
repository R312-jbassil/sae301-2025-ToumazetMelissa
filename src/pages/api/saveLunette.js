import pb from '../../utils/pb';

export const POST = async ({ request }) => {
  const body = await request.json();
  try {
    console.log('Mise à jour lunette:', body.id);
    console.log('Avec couleurs:', body);
    
    // On met à jour uniquement les couleurs et l'image SVG
    const data = {
      couleur_branches: body.couleur_branches,
      couleur_monture: body.couleur_monture,
      image: body.image,
    };
  
    // ⚠️ On UPDATE l'enregistrement existant créé dans Personnalisation1
    const updated = await pb.collection('LUNETTE').update(body.id, data);

    return new Response(JSON.stringify({ ok: true, record: updated }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('saveLunette error', err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
