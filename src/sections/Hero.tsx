import { links } from '../data/links'

function Hero() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <p className="text-sm uppercase tracking-widest text-slate-500">
          Portfolio
        </p>
        <h1 className="mt-2 text-3xl font-semibold">Valmar</h1>
        <p className="mt-3 text-slate-600">
          Junior front-end engineer with a background in applied informatics,
          system operations, and integrations. This page summarizes selected
          work from professional roles, academic background, and a personal
          project.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <a
            className="rounded border border-slate-200 px-3 py-1 text-slate-700 hover:border-slate-300"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded border border-slate-200 px-3 py-1 text-slate-700 hover:border-slate-300"
            href={`mailto:${links.email}`}
          >
            Email
          </a>
        </div>
      </div>
    </header>
  )
}

export default Hero
