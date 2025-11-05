import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import Highlights from './components/Highlights';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 text-gray-900">
      <header className="sticky top-0 z-20 border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight">Portfolio Scuola</span>
            <span className="hidden text-sm text-gray-500 sm:block">Casa di Carità — Grugliasco</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-gray-700 sm:flex">
            <a href="#esperienze" className="hover:text-gray-900">Esperienze</a>
            <a href="#in-evidenza" className="hover:text-gray-900">In evidenza</a>
            <a href="#contatti" className="hover:text-gray-900">Contatti</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <section id="esperienze">
          <ExperienceTimeline />
        </section>
        <section id="in-evidenza">
          <Highlights />
        </section>
        <section id="contatti">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-gray-100 bg-white/60 py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-600">
          © {new Date().getFullYear()} — Portfolio studente, Casa di Carità Arti e Mestieri di Grugliasco.
        </div>
      </footer>
    </div>
  );
}

export default App;
