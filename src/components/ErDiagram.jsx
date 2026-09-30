const ENTITIES = [
  {
    name: 'roles',
    x: 20,
    y: 20,
    w: 220,
    h: 74,
    fields: [
      ['id', 'PK'],
      ['name', null],
    ],
  },
  {
    name: 'role_permissions',
    x: 300,
    y: 20,
    w: 220,
    h: 74,
    fields: [
      ['role_id', 'PK/FK'],
      ['permission_id', 'PK/FK'],
    ],
  },
  {
    name: 'permissions',
    x: 580,
    y: 20,
    w: 220,
    h: 92,
    fields: [
      ['id', 'PK'],
      ['module', null],
      ['action', null],
    ],
  },
  {
    name: 'users',
    x: 860,
    y: 20,
    w: 220,
    h: 128,
    fields: [
      ['id', 'PK'],
      ['name', null],
      ['email', null],
      ['role_id', 'FK'],
      ['created_at', null],
    ],
  },
  {
    name: 'manuals',
    x: 20,
    y: 208,
    w: 220,
    h: 110,
    fields: [
      ['id', 'PK'],
      ['title', null],
      ['created_by', 'FK'],
      ['updated_at', null],
    ],
  },
  {
    name: 'manual_blocks',
    x: 300,
    y: 208,
    w: 220,
    h: 128,
    fields: [
      ['id', 'PK'],
      ['manual_id', 'FK'],
      ['type', null],
      ['content', null],
      ['position', null],
    ],
  },
  {
    name: 'audit_logs',
    x: 860,
    y: 208,
    w: 220,
    h: 164,
    fields: [
      ['id', 'PK'],
      ['user_id', 'FK'],
      ['action', null],
      ['ip_address', null],
      ['target_table', null],
      ['target_id', null],
      ['created_at', null],
    ],
  },
  {
    name: 'channels',
    x: 20,
    y: 432,
    w: 220,
    h: 74,
    fields: [
      ['id', 'PK'],
      ['name', null],
    ],
  },
  {
    name: 'return_reasons',
    x: 300,
    y: 432,
    w: 220,
    h: 110,
    fields: [
      ['id', 'PK'],
      ['channel_id', 'FK'],
      ['label', null],
      ['active', null],
    ],
  },
  {
    name: 'returns',
    x: 580,
    y: 432,
    w: 220,
    h: 128,
    fields: [
      ['id', 'PK'],
      ['order_reference', null],
      ['reason_id', 'FK'],
      ['status', null],
      ['created_at', null],
    ],
  },
]

const RELATIONSHIPS = [
  'M970,20 V8 H130 V20',
  'M240,57 L300,57',
  'M520,57 L580,66',
  'M130,208 V178 H950 V148',
  'M970,148 L970,208',
  'M240,263 L300,272',
  'M240,469 L300,487',
  'M520,487 L580,496',
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
                fill="var(--color-accent)"
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
      viewBox="0 0 1120 600"
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
