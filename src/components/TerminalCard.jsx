// Decorative hero panel: a stylized, fictional SQL query over the portfolio's
// own schema. Purely visual — the query text is language-agnostic (SQL),
// so it's identical in both PT and EN builds.
const LINES = [
  [{ t: '-- top pending returns, by channel', c: 'muted' }],
  [{ t: 'SELECT', c: 'kw' }],
  [{ t: '  r.order_number, r.status, c.label ', c: 'text' }, { t: 'AS', c: 'kw' }, { t: ' channel', c: 'text' }],
  [{ t: 'FROM', c: 'kw' }, { t: ' returns r', c: 'text' }],
  [
    { t: 'JOIN', c: 'kw' },
    { t: ' return_channels c ', c: 'text' },
    { t: 'ON', c: 'kw' },
    { t: ' c.key = r.channel', c: 'text' },
  ],
  [{ t: 'WHERE', c: 'kw' }, { t: ' r.status = ', c: 'text' }, { t: "'aguardando_retorno'", c: 'str' }],
  [{ t: 'ORDER BY', c: 'kw' }, { t: ' r.created_at ', c: 'text' }, { t: 'DESC', c: 'kw' }],
  [{ t: 'LIMIT', c: 'kw' }, { t: ' 5;', c: 'text' }],
]

const TOKEN_CLASS = {
  kw: 'text-accent',
  str: 'text-accent-2',
  text: 'text-text',
  muted: 'text-text-muted',
}

export default function TerminalCard() {
  return (
    <div className="glow-panel w-full max-w-md overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-accent-2/70" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
        <span className="ml-2 font-mono text-xs text-text-muted">returns.sql</span>
      </div>
      <div className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        {LINES.map((line, i) => (
          <div key={i} className="whitespace-pre">
            {line.map((tok, j) => (
              <span key={j} className={TOKEN_CLASS[tok.c]}>
                {tok.t}
              </span>
            ))}
          </div>
        ))}
        <div className="mt-3 flex items-center gap-1.5 text-text-muted">
          <span className="text-accent-2">→</span>
          <span>5 rows</span>
          <span aria-hidden="true" className="caret ml-0.5 inline-block h-3.5 w-1.5 bg-accent align-middle" />
        </div>
      </div>
    </div>
  )
}
