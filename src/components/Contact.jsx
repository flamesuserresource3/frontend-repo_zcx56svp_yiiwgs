import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-lg bg-violet-600/10 p-2 text-violet-700">
          <Mail className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Contatti</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <a
          href="mailto:tuo.nome@example.com"
          className="group rounded-xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-violet-50 px-2 py-1 text-sm font-medium text-violet-700">
            <Mail className="h-4 w-4" />
            Email
          </div>
          <p className="text-gray-700 group-hover:text-gray-900">
            tuo.nome@example.com
          </p>
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="group rounded-xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-sky-50 px-2 py-1 text-sm font-medium text-sky-700">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </div>
          <p className="text-gray-700 group-hover:text-gray-900">
            Inserisci qui il tuo profilo LinkedIn
          </p>
        </a>
      </div>
    </section>
  );
}
