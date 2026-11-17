'use client';

import { useState, type FormEvent } from 'react';
import { Window } from '@/app/kernelkeepergame/_components/Window';
import { useLanguage } from '@/lib/i18n/LanguageContext';

type FeedbackStatus = 'idle' | 'loading' | 'success' | 'empty' | 'invalidEmail' | 'error';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const FEEDBACK_MAX_LENGTH = 2000;

export default function FeedbackForm() {
  const { t } = useLanguage();
  const copy = t.kernelKeeper.feedback;
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FeedbackStatus>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const feedback = message.trim();
    const mail = email.trim();
    if (!feedback) {
      setStatus('empty');
      return;
    }
    if (mail && !EMAIL_PATTERN.test(mail)) {
      setStatus('invalidEmail');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/layer8-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: mail, feedback, timestamp: new Date().toLocaleString() }),
      });
      if (!response.ok) throw new Error('Kernel Keeper feedback request failed');
      setStatus('success');
      setMessage('');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  const resetError = () => {
    if (status !== 'idle' && status !== 'loading' && status !== 'success') setStatus('idle');
  };

  const statusMessage = status === 'idle' ? null : copy[status];
  const messageColor =
    status === 'success'
      ? 'text-[var(--ram)]'
      : status === 'loading'
        ? 'text-[var(--amber)]'
        : 'text-[var(--danger)]';

  return (
    <Window id="feedback" title={copy.window} className="max-w-2xl w-full mx-auto">
      <h2 className="text-5xl text-[#111] mb-2">{copy.title}</h2>
      <p className="text-[#222] mb-5">{copy.prompt}</p>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
        <label className="flex flex-col gap-1">
          <span className="sr-only">{copy.messageLabel}</span>
          <textarea
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              resetError();
            }}
            placeholder={copy.messagePlaceholder}
            maxLength={FEEDBACK_MAX_LENGTH}
            rows={5}
            aria-invalid={status === 'empty'}
            aria-describedby="kk-feedback-status"
            disabled={status === 'loading'}
            className="kk-inset w-full px-3 py-2.5 text-[#111] placeholder:text-[#777] outline-none resize-y min-h-[7rem]"
          />
          <span className="self-end text-xs text-[#555]" aria-hidden="true">
            {message.length}/{FEEDBACK_MAX_LENGTH}
          </span>
        </label>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
          <label className="flex-1 flex flex-col gap-1">
            <span className="text-sm text-[#222]">{copy.emailLabel}</span>
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                resetError();
              }}
              placeholder={copy.emailPlaceholder}
              aria-invalid={status === 'invalidEmail'}
              aria-describedby="kk-feedback-status"
              disabled={status === 'loading'}
              className="kk-inset w-full px-3 py-2.5 text-[#111] placeholder:text-[#777] outline-none"
            />
          </label>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="kk-bevel-btn kk-display text-xl px-5 py-2 disabled:opacity-60"
          >
            {copy.submit}
          </button>
        </div>
      </form>

      <p
        id="kk-feedback-status"
        role="status"
        aria-live="polite"
        className={`kk-terminal mt-4 px-3 py-2 text-sm min-h-[2.75rem] ${statusMessage ? messageColor : 'text-[var(--dim)]'}`}
      >
        {statusMessage ?? '_'}
      </p>
    </Window>
  );
}
