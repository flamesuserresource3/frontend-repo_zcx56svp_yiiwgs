import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    period: '2023 - 2025',
    title: 'Percorso formativo — Informatica',
    place: 'Casa di Carità Arti e Mestieri, Grugliasco',
    details:
      'Studio di basi di programmazione, sviluppo web, reti, sistemi e metodologie di lavoro in team.',
    tags: ['HTML/CSS', 'JavaScript', 'Python', 'Reti']
  },
  {
    period: '2024',
    title: 'Project work — Sito vetrina',
    place: 'Laboratorio scolastico',
    details:
      'Progettazione e sviluppo di un sito vetrina responsive con attenzione all’accessibilità e alle prestazioni.',
    tags: ['Responsive', 'Accessibilità', 'UX/UI']
  },
  {
    period: '2024 - 2025',
    title: 'Stage/Alternanza (PCTO)',
    place: 'Esperienza sul campo',
    details:
      'Supporto a piccoli progetti interni, gestione contenuti e manutenzione di pagine web.',
    tags: ['Teamwork', 'Git', 'Problem solving']
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-lg bg-sky-600/10 p-2 text-sky-700">
          <Briefcase className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Esperienze e percorso
        </h2>
      </div>

      <ol className="relative border-s border-gray-200 pl-6">
        {experiences.map((item, idx) => (
          <li key={idx} className="mb-10 ms-4">
            <span className="absolute -start-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-white bg-sky-600"></span>
            <div className="mb-1 flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4 text-sky-700" />
              <span>{item.period}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="mb-2 text-sm text-gray-600">{item.place}</p>
            <p className="text-gray-700">{item.details}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
