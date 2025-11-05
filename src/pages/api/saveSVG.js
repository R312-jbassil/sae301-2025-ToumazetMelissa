import pb from '../../utils/pb';

export async function POST({ request }) {
  try {
    const body = await request.json();

    // Données préparées pour PocketBase
    const recordData = {
      name: body.name || 'Untitled SVG',
      code_svg: body.code_svg || '<svg></svg>',
      chat_history: body.chat_history || '[]', // ✅ reste une string JSON
      user: body.user || null,
    };

    // ⚠️ Vérifie que le nom correspond bien à ta collection PocketBase
    const created = await pb.collection('Svgs').create(recordData);

    return new Response(JSON.stringify({ ok: true, record: created }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('saveSVG error', err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
    });
  }
}
