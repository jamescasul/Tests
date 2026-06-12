import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Plan = {
  name: string
  icon: string
  price: string
  period: string
  tagline: string
  specs: { ram: string; cpu: string; disk: string }
  features: string[]
  cta: string
  featured?: boolean
}

const plans: Plan[] = [
  {
    name: 'Dirt',
    icon: '/icons/plan-dirt.png',
    price: '$0',
    period: '/mo',
    tagline: 'Perfect for trying things out with friends.',
    specs: { ram: '6 GB RAM', cpu: '4 vCPU Cores', disk: '30 GB SSD' },
    features: [
      'Up to 10 players',
      'Modpack support',
      'DDoS protection',
      'Community support',
    ],
    cta: 'Start for Free',
  },
  {
    name: 'Zombie',
    icon: '/icons/plan-zombie.png',
    price: '$6',
    period: '/mo',
    tagline: 'For small communities that want more power.',
    specs: { ram: '12 GB RAM', cpu: '6 vCPU Cores', disk: '75 GB NVMe' },
    features: [
      'Up to 40 players',
      'One-click modpacks',
      'Daily backups',
      'Priority support',
    ],
    cta: 'Choose Zombie',
  },
  {
    name: 'Ender Dragon',
    icon: '/icons/plan-enderdragon.png',
    price: '$14',
    period: '/mo',
    tagline: 'Maximum performance for serious servers.',
    specs: { ram: '24 GB RAM', cpu: '8 vCPU Cores', disk: '150 GB NVMe' },
    features: [
      'Unlimited players',
      'Dedicated IP address',
      'Hourly backups',
      '24/7 priority support',
    ],
    cta: 'Choose Ender Dragon',
    featured: true,
  },
  {
    name: 'Diamond',
    icon: '/icons/plan-diamond.png',
    price: '$26',
    period: '/mo',
    tagline: 'Enterprise-grade hardware for networks.',
    specs: { ram: '48 GB RAM', cpu: '12 vCPU Cores', disk: '300 GB NVMe' },
    features: [
      'Multi-server network',
      'Dedicated IP & ports',
      'Real-time backups',
      'Dedicated account manager',
    ],
    cta: 'Choose Diamond',
  },
]

export function Plans() {
  return (
    <section id="plans" className="border-t border-border/60 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-primary">Plans</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Simple pricing that scales with you
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            No hidden fees. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-2xl border bg-card p-6',
                plan.featured
                  ? 'border-primary ring-1 ring-primary/40'
                  : 'border-border',
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}

              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={plan.icon}
                  alt={`${plan.name} plan icon`}
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain"
                />
                <h3 className="text-lg font-semibold text-card-foreground">
                  {plan.name}
                </h3>
              </div>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-card-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {plan.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.tagline}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl border border-border/60 bg-background/40 p-3 text-center">
                <Spec label="RAM" value={plan.specs.ram} />
                <Spec label="CPU" value={plan.specs.cpu} />
                <Spec label="Disk" value={plan.specs.disk} />
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={plan.featured ? 'default' : 'outline'}
                className="mt-8 h-11 w-full"
                nativeButton={false}
                render={<Link href="/signup">{plan.cta}</Link>}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Spec({ label, value }: { label: string; value: string }) {
  const [amount, ...rest] = value.split(' ')
  return (
    <div>
      <p className="text-sm font-semibold text-card-foreground">{amount}</p>
      <p className="text-[0.7rem] leading-tight text-muted-foreground">
        {rest.join(' ')}
      </p>
      <span className="sr-only">{label}</span>
    </div>
  )
}
