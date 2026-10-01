const ENTITIES = [
  {
    name: 'users',
    x: 20,
    y: 20,
    w: 230,
    h: 128,
    fields: [
      ['id', 'PK'],
      ['name', null],
      ['email', null],
      ['role', null],
      ['permissions', null],
    ],
  },
  {
    name: 'password_resets',
    x: 300,
    y: 20,
    w: 230,
    h: 128,
    fields: [
      ['id', 'PK'],
      ['user_id', 'FK'],
      ['token_hash', null],
      ['expires_at', null],
      ['used', null],
    ],
  },
  {
    name: 'audit_logs',
    x: 580,
    y: 20,
    w: 230,
    h: 146,
    fields: [
      ['id', 'PK'],
      ['user_id', 'FK'],
      ['action', null],
      ['details', null],
      ['ip_address', null],
      ['created_at', null],
    ],
  },
  {
    name: 'manuals',
    x: 860,
    y: 20,
    w: 230,
    h: 146,
    fields: [
      ['id', 'PK'],
      ['title', null],
      ['slug', null],
      ['status', null],
      ['is_template', null],
      ['created_by', 'FK'],
    ],
  },
  {
    name: 'sections',
    x: 20,
    y: 206,
    w: 230,
    h: 128,
    fields: [
      ['id', 'PK'],
      ['manual_id', 'FK'],
      ['type', null],
      ['content', null],
      ['sort_order', null],
    ],
  },
  {
    name: 'logos',
    x: 300,
    y: 206,
    w: 230,
    h: 128,
    fields: [
      ['id', 'PK'],
      ['brand_name', null],
      ['svg_url', null],
      ['png_url', null],
      ['uploaded_by', 'FK'],
    ],
  },
  {
    name: 'tools',
    x: 580,
    y: 206,
    w: 230,
    h: 146,
    fields: [
      ['id', 'PK'],
      ['title', null],
      ['slug', null],
      ['html_url', null],
      ['is_active', null],
      ['created_by', 'FK'],
    ],
  },
  {
    name: 'size_charts',
    x: 860,
    y: 206,
    w: 230,
    h: 128,
    fields: [
      ['id', 'PK'],
      ['title', null],
      ['brand', null],
      ['category', null],
      ['data', null],
    ],
  },
  {
    name: 'return_channels',
    x: 20,
    y: 392,
    w: 230,
    h: 128,
    fields: [
      ['id', 'PK'],
      ['key', null],
      ['label', null],
      ['is_active', null],
      ['requires_return_id', null],
    ],
  },
  {
    name: 'return_reasons',
    x: 300,
    y: 392,
    w: 230,
    h: 128,
    fields: [
      ['id', 'PK'],
      ['channel', 'FK'],
      ['label', null],
      ['is_active', null],
      ['sort_order', null],
    ],
  },
  {
    name: 'returns',
    x: 580,
    y: 392,
    w: 230,
    h: 146,
    fields: [
      ['id', 'PK'],
      ['order_number', null],
      ['channel', 'FK'],
      ['status', null],
      ['created_by', 'FK'],
      ['product', null],
    ],
  },
]

// users -> manuals (bus above row 0), with audit_logs tapping the same bus
// users -> tools (bus below row 0), with logos tapping the same bus
// return_channels -> returns (bus above row 2)
const RELATIONSHIPS = [
  'M135,20 V6 H975 V20',
  'M695,6 V20',
  'M250,84 L300,84',
  'M975,166 V186 H135 V206',
  'M135,148 V190 H695 V206',
  'M415,190 V206',
  'M250,456 L300,456',
  'M135,392 V378 H695 V392',
  'M250,110 H1105 V465 H810',
]

const HEADER_HEIGHT = 28
const ROW_HEIGHT = 18

function EntityBox({ name, x, y, w, h, fields }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        fill="var(--color-surface)"
        stroke="var(--color-border)"
      />
      <rect x={x} y={y} width={w} height={HEADER_HEIGHT} rx={8} fill="var(--color-surface-2)" />
      <rect x={x} y={y + HEADER_HEIGHT / 2} width={w} height={HEADER_HEIGHT / 2} fill="var(--color-surface-2)" />
      <text
        x={x + 10}
        y={y + HEADER_HEIGHT / 2 + 4}
        fontFamily="var(--font-mono)"
        fontSize="12"
        fontWeight="600"
        fill="var(--color-accent)"
      >
        {name}
      </text>
      {fields.map(([field, badge], i) => {
        const rowY = y + HEADER_HEIGHT + i * ROW_HEIGHT + ROW_HEIGHT / 2 + 4
        return (
          <g key={field}>
            <text x={x + 10} y={rowY} fontFamily="var(--font-mono)" fontSize="11" fill="var(--color-text)">
              {field}
            </text>
            {badge ? (
              <text
                x={x + w - 10}
                y={rowY}
                textAnchor="end"
                fontFamily="var(--font-mono)"
                fontSize="10"
                fill={badge === 'PK' ? 'var(--color-accent-2)' : 'var(--color-accent)'}
              >
                {badge}
              </text>
            ) : null}
          </g>
        )
      })}
    </g>
  )
}

export default function ErDiagram({ title }) {
  return (
    <svg
      viewBox="0 0 1120 580"
      role="img"
      aria-label={title}
      className="h-auto w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {RELATIONSHIPS.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="var(--color-accent-dim)" strokeWidth="1.5" />
      ))}
      {ENTITIES.map((entity) => (
        <EntityBox key={entity.name} {...entity} />
      ))}
    </svg>
  )
}
