interface SignupPayload {
  name?: unknown;
  email?: unknown;
  timestamp?: unknown;
}

export async function POST(request: Request) {
  let rawPayload: unknown;

  try {
    rawPayload = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  if (!rawPayload || typeof rawPayload !== 'object' || Array.isArray(rawPayload)) {
    return Response.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  const payload = rawPayload as SignupPayload;

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';

  if (!email) {
    return Response.json({ error: 'Email is required.' }, { status: 400 });
  }

  const signupUrl = process.env.LAYER8_SIGNUP_URL;

  if (!signupUrl) {
    console.error('LAYER8_SIGNUP_URL is not configured. Kernel Keeper signups cannot be forwarded.');
    return Response.json({ error: 'Signup service is unavailable.' }, { status: 500 });
  }

  const timestamp =
    typeof payload.timestamp === 'string' && payload.timestamp.trim()
      ? payload.timestamp
      : new Date().toLocaleString();

  try {
    const response = await fetch(signupUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, timestamp }),
    });

    if (!response.ok) {
      console.error(`Kernel Keeper signup upstream responded with status ${response.status}.`);
      return Response.json({ error: 'Signup service is unavailable.' }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Kernel Keeper signup upstream request failed.', error);
    return Response.json({ error: 'Signup service is unavailable.' }, { status: 502 });
  }
}
