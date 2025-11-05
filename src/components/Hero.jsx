import { GraduationCap, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-fuchsia-500/10 to-emerald-400/20" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-medium text-sky-700 shadow-sm backdrop-blur">
            <GraduationCap className="h-4 w-4" />
            Casa di Carità Arti e Mestieri — Sede di Grugliasco
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Il mio percorso di crescita
          </h1>
          <p className="max-w-2xl text-lg text-gray-700">
            Una raccolta delle esperienze, dei progetti e delle competenze
            che ho maturato durante il mio percorso alla Casa di Carità Arti e
            Mestieri di Grugliasco.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="inline-flex items-center gap-2 rounded-md bg-white/70 px-3 py-1 shadow-sm backdrop-blur">
              <MapPin className="h-4 w-4 text-rose-600" />
              Grugliasco (TO), Italia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
