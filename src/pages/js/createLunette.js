import pb from '../../utils/pb';

export async function POST({ request }) {
  try {
    const body = await request.json();
    console.log('Données reçues pour createLunette:', body);
    
    const recordData = {
      user: body.userId || null,
      image: '',
    };

    // Ajouter les relations uniquement si elles ont une valeur
    if (body.materiau_monture) {
      recordData.materiau_monture = body.materiau_monture;
    }
    if (body.materiau_verre) {
      recordData.materiau_verre = body.materiau_verre;
    }
    if (body.taille_verre) {
      recordData.taille_verre = body.taille_verre;
    }
    if (body.taille_pont) {
      recordData.taille_pont = body.taille_pont;
    }

    console.log('Création lunette avec données:', recordData);
    const created = await pb.collection('LUNETTE').create(recordData);

    return new Response(JSON.stringify({ ok: true, id: created.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('createLunette error', err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
