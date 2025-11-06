import pb from '../../utils/pb';

export async function POST({ request }) {
  try {
    const cookie = request.headers.get('cookie') || '';
    if (cookie) {
      pb.authStore.loadFromCookie(cookie);
    }

    const body = await request.json();
    console.log('saveSVG body:', body);

    // Normaliser l'ID utilisateur au cas où on reçoit un objet { record: { id } }
    let userId = null;
    if (typeof body.user === 'string') userId = body.user;
    else if (body.user && typeof body.user === 'object') {
      userId = body.user.record?.id || body.user.id || null;
    }

    // Données préparées pour PocketBase
    const recordData = {
      name: body.name || 'Untitled SVG',
      code_svg: body.code_svg || '<svg></svg>',
      chat_history: body.chat_history || '[]', // ✅ reste une string JSON
      user: userId,
    };

    // ⚠️ Vérifie que le nom correspond bien à ta collection PocketBase
    // Si aucun user fourni par le client, on tente de l'inférer depuis la session
    if (!recordData.user) {
      const authedUser = pb.authStore.model;
      if (authedUser?.id) recordData.user = authedUser.id;
    }

    const created = await pb.collection('Svgs').create(recordData);

    return new Response(JSON.stringify({ ok: true, record: created }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('saveSVG error', err);
    const status = (err && err.status) ? err.status : 500;
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    try { pb.authStore.clear(); } catch {}
  }
}
