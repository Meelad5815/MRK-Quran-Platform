'use client';

import { signIn } from 'next-auth/react';

export default function SignInPage() {
  return (
    <section className="mx-auto max-w-md space-y-3 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
      <h1 className="text-2xl font-bold">Sign in</h1>
      <button onClick={() => signIn('google')} className="w-full rounded bg-accent px-3 py-2 text-white">
        Continue with Google
      </button>
      <button onClick={() => signIn('email')} className="w-full rounded border border-slate-300 px-3 py-2 dark:border-slate-600">
        Continue with Email Link
      </button>
    </section>
  );
}
