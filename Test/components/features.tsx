import {
  Clock,
  ShieldCheck,
  Cpu,
  HardDrive,
  Globe,
  Headphones,
} from 'lucide-react'
import { BrandIcon } from '@/components/brand-icon'

const features = [
  {
    icon: Clock,
    title: '24/7 Hosting',
    description:
      'Your server stays online around the clock with 99.9% guaranteed uptime and automatic restarts.',
  },
  {
    icon: ShieldCheck,
    title: 'DDoS Protection',
    description:
      'Enterprise-grade mitigation keeps your community safe from attacks at no extra cost.',
  },
  {
    icon: Cpu,
    title: 'High-Performance vCPU',
    description:
      'Latest-gen Ryzen processors deliver lag-free gameplay even on packed servers.',
  },
  {
    icon: HardDrive,
    title: 'NVMe SSD Storage',
    description:
      'Lightning-fast disk storage means quicker world loading and instant backups.',
  },
  {
    icon: Globe,
    title: 'Global Locations',
    description:
      'Deploy close to your players with data centers across multiple regions.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description:
      'Real humans ready to help you 24/7 through live chat and tickets.',
  },
]

const software = [
  { src: '/icons/minecraft.png', label: 'Minecraft' },
  { slug: 'fivem', label: 'FiveM' },
  { slug: 'curseforge', label: 'CurseForge' },
  { slug: 'nodedotjs', label: 'Node.js' },
  { slug: 'rust', label: 'Rust' },
  { src: '/icons/hytale.png', label: 'Hytale' },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border/60 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-primary">Features</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything you need to run a great server
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Powerful hardware and thoughtful tooling, built for gamers and
            communities of every size.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex size-11 items-center justify-center rounded-lg bg-accent text-primary">
                <feature.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supported software */}
        <div className="mt-20 rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-card-foreground">
              Supports all your favorite software
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              One-click installs for Minecraft, FiveM, CurseForge modpacks,
              Node.js, Rust, Hytale and more.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {software.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 rounded-xl border border-border/60 bg-background/40 px-4 py-6 transition-colors hover:border-primary/50"
              >
                <BrandIcon
                  slug={item.slug}
                  src={item.src}
                  label={item.label}
                  className="h-9 w-9"
                />
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
