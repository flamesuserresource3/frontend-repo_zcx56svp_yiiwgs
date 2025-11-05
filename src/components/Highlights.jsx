import { Award, Star } from 'lucide-react';

const highlights = [
  {
    title: 'Competenze chiave',
    points: [
      'Sviluppo web base: HTML, CSS, concetti di responsive design',
      'Programmazione: JavaScript e Python (fondamenti)',
      'Strumenti: Git, GitHub, VS Code, metodologie Agile di base'
    ]
  },
  {
    title: 'Risultati e riconoscimenti',
    points: [
      'Partecipazione attiva a project work di classe',
      'Consegna puntuale di elaborati e attività pratiche',
      'Collaborazione e spirito di squadra in laboratorio'
    ]
  },
  {
    title: 'Obiettivi',
    points: [
      'Approfondire React e sviluppo frontend moderno',
      'Creare progetti personali e pubblicarli online',
      'Sviluppare soft skills: comunicazione e problem solving'
    ]
  }
];

export default function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-lg bg-emerald-600/10 p-2 text-emerald-700">
          <Award className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">In evidenza</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur"
          >
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              {card.title}
            </h3>
            <ul className="space-y-2">
              {card.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-gray-700">
                  <Star className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
