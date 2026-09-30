export default function SectionHeading({ eyebrow, title, id }) {
  return (
    <div className="mb-10">
      {eyebrow ? (
        <p className="mb-2 font-mono text-sm uppercase tracking-widest text-accent">{eyebrow}</p>
      ) : null}
      <h2 id={id} className="section-heading text-3xl font-semibold text-text sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-accent-dim" aria-hidden="true" />
    </div>
  )
}
