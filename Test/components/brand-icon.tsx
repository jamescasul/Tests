import { cn } from '@/lib/utils'

const BASE =
  'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons'

type BrandIconProps = {
  slug?: string
  src?: string
  variant?: string
  label: string
  className?: string
}

// Brand marks are sourced from theSVG.org. Trademarks belong to their owners.
export function BrandIcon({
  slug,
  src,
  variant = 'default',
  label,
  className,
}: BrandIconProps) {
  const resolvedSrc = src ?? `${BASE}/${slug}/${variant}.svg`
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolvedSrc}
      alt={`${label} logo`}
      width={32}
      height={32}
      loading="lazy"
      className={cn('h-8 w-8 object-contain', className)}
    />
  )
}
