interface SignupPayload {
  name?: unknown;
  email?: unknown;
  feedback?: unknown;
  timestamp?: unknown;
}

const FEEDBACK_MAX_LENGTH = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

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
  const feedback =
    typeof payload.feedback === 'string'
      ? payload.feedback.trim().slice(0, FEEDBACK_MAX_LENGTH)
      : '';

  // Una inscripción necesita mail; un feedback puede llegar sin mail.
  if (!email && !feedback) {
    return Response.json({ error: 'Email or feedback is required.' }, { status: 400 });
  }

  if (email && !EMAIL_PATTERN.test(email)) {
    return Response.json({ error: 'Email is not valid.' }, { status: 400 });
  }

  const signupUrl = process.env.LAYER8_SIGNUP_URL;

  if (!signupUrl) {
    console.error(
      'LAYER8_SIGNUP_URL is not configured. Kernel Keeper signups cannot be forwarded.',
    );
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
      body: JSON.stringify({ name, email, feedback, timestamp }),
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
