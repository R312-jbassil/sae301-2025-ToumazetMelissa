import pb from '../../utils/pb';

export const GET = async ({ url }) => {
  try {
    const id = url.searchParams.get('id');
    
    if (!id) {
      return new Response(JSON.stringify({ ok: false, error: 'ID manquant' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const lunette = await pb.collection('LUNETTE').getOne(id);

    return new Response(JSON.stringify({ ok: true, lunette }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Erreur getLunette:', err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
