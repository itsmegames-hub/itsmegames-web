'use client';

import { useState, type FormEvent } from 'react';
import { Window } from '@/app/kernelkeepergame/_components/Window';
import { useLanguage } from '@/lib/i18n/LanguageContext';

type SignupStatus = 'idle' | 'loading' | 'success' | 'invalid' | 'error';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function SignupForm() {
  const { t } = useLanguage();
  const signup = t.kernelKeeper.signup;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SignupStatus>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = email.trim();
    if (!EMAIL_PATTERN.test(value)) {
      setStatus('invalid');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/layer8-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value, timestamp: new Date().toLocaleString() }),
      });
      if (!response.ok) throw new Error('Kernel Keeper signup request failed');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  const message =
    status === 'loading'
      ? signup.loading
      : status === 'success'
        ? signup.success
        : status === 'invalid'
          ? signup.invalid
          : status === 'error'
            ? signup.error
            : null;
  const messageColor =
    status === 'success'
      ? 'text-[var(--ram)]'
      : status === 'loading'
        ? 'text-[var(--amber)]'
        : 'text-[var(--danger)]';

  return (
    <Window id="beta" title={signup.window} className="max-w-2xl w-full mx-auto">
      <h2 className="text-5xl text-[#111] mb-2">{signup.title}</h2>
      <p className="text-[#222] mb-5">{signup.prompt}</p>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3">
        <label className="flex-1">
          <span className="sr-only">{signup.emailLabel}</span>
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status === 'invalid' || status === 'error') setStatus('idle');
            }}
            placeholder={signup.placeholder}
            aria-invalid={status === 'invalid'}
            aria-describedby="kk-signup-status"
            disabled={status === 'loading'}
            className="kk-inset w-full px-3 py-2.5 text-[#111] placeholder:text-[#777] outline-none"
          />
        </label>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="kk-bevel-btn kk-display text-xl px-5 py-2 disabled:opacity-60"
        >
          {signup.submit}
        </button>
      </form>

      <p
        id="kk-signup-status"
        role="status"
        aria-live="polite"
        className={`kk-terminal mt-4 px-3 py-2 text-sm min-h-[2.75rem] ${message ? messageColor : 'text-[var(--dim)]'}`}
      >
        {message ?? '_'}
      </p>
    </Window>
  );
}
