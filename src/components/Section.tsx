import type { ReactNode } from 'react'

type SectionProps = {
  title: string
  description?: string
  children: ReactNode
}

function Section({ title, description, children }: SectionProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold">{title}</h2>
      {description ? <p className="mt-2 text-slate-600">{description}</p> : null}
      <div className="mt-6">{children}</div>
    </section>
  )
}

export default Section
