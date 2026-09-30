import { useState } from 'react'

export default function Avatar({ name = 'Alexandre Lopes', size = 128, rounded = 'rounded-2xl' }) {
  const [imgFailed, setImgFailed] = useState(false)
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <div
      className={`relative shrink-0 overflow-hidden border border-border bg-surface ${rounded}`}
      style={{ width: size, height: size }}
    >
      {!imgFailed ? (
        // TODO: place your photo at /public/foto.jpg — until then this falls back to initials.
        <img
          src="/foto.jpg"
          alt={name}
          width={size}
          height={size}
          className="h-full w-full object-cover"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center font-heading font-semibold text-accent"
          style={{ fontSize: Math.round(size * 0.38) }}
          role="img"
          aria-label={name}
        >
          {initials}
        </div>
      )}
    </div>
  )
}
