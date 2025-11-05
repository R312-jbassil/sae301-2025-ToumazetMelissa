import pb from '../../utils/pb';

export async function POST({ request }) {
  try {
    const body = await request.json();

    const recordData = {
      materiau_monture: body.materiau_monture || '',
      materiau_verre: body.materiau_verre || '',
      taille_verre: body.taille_verre || '',
      taille_pont: body.taille_pont || '',
      user: body.user || null,
      image: body.image || '',
      nom_couleur: body.nom_couleur || '',
    };

    const created = await pb.collection('LUNETTE').create(recordData);

    // Optionnel : créer un enregistrement Svgs lié
    try {
      await pb.collection('Svgs').create({
        name: 'Lunette personnalisée',
        code_svg: body.svgCode || '',
        lunette: created.id,
      });
    } catch (e) {
      // ignore svg creation errors but log
      console.error('createLunette: could not create Svgs record', e);
    }

    return new Response(JSON.stringify({ ok: true, id: created.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('createLunette error', err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 500 });
  }
}
