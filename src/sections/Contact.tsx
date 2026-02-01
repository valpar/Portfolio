import Section from '../components/Section'
import { links } from '../data/links'

function Contact() {
  return (
    <Section
      title="Contact"
      description="If you would like a PDF CV, references, or additional project details, feel free to reach out."
    >
      <div className="flex flex-wrap gap-3 text-sm">
        <a
          className="rounded border border-slate-200 px-3 py-1 text-slate-700 hover:border-slate-300"
          href={`mailto:${links.email}`}
        >
          {links.email}
        </a>
        <a
          className="rounded border border-slate-200 px-3 py-1 text-slate-700 hover:border-slate-300"
          href={links.github}
          target="_blank"
          rel="noreferrer"
        >
          github.com/valpar
        </a>
      </div>
    </Section>
  )
}

export default Contact
