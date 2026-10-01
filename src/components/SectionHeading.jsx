export default function SectionHeading({ eyebrow, title, id, index }) {
  return (
    <div className="mb-10">
      {typeof index === 'number' ? (
        <p className="mb-2 flex items-baseline gap-2 font-mono text-sm tracking-widest text-accent">
          <span>{String(index).padStart(2, '0')}</span>
          <span aria-hidden="true" className="text-text-muted">
            /
          </span>
          <span className="uppercase">{title}</span>
        </p>
      ) : null}
      {eyebrow ? (
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent-2">{eyebrow}</p>
      ) : null}
      <h2 id={id} className="section-heading text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent to-transparent" aria-hidden="true" />
    </div>
  )
}
