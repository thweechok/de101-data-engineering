import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { prompt, systemPrompt, provider = 'gemini' } = body;

    if (!prompt) {
      return NextResponse.json({ error: 'prompt is required' }, { status: 400 });
    }

    if (provider === 'openai') {
      const key = process.env.OPENAI_API_KEY;
      if (!key) return NextResponse.json({ error: 'OpenAI key not configured' }, { status: 500 });

      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            ...(systemPrompt ? [{ role: 'system', content: systemPrompt }] : []),
            { role: 'user', content: prompt },
          ],
          max_tokens: 1500,
        }),
      });

      const data = await res.json();
      if (data.error) return NextResponse.json({ error: data.error.message }, { status: 400 });
      return NextResponse.json({ text: data.choices?.[0]?.message?.content || '' });

    } else {
      // Default: Gemini
      const key = process.env.GEMINI_API_KEY;
      if (!key) return NextResponse.json({ error: 'Gemini key not configured' }, { status: 500 });

      const fullPrompt = systemPrompt ? systemPrompt + '\n\nคำถาม: ' + prompt : prompt;

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: fullPrompt }] }],
            generationConfig: { maxOutputTokens: 1500 },
          }),
        }
      );

      const data = await res.json();
      if (data.error) return NextResponse.json({ error: data.error.message }, { status: 400 });
      return NextResponse.json({ text: data.candidates?.[0]?.content?.parts?.[0]?.text || '' });
    }

  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
