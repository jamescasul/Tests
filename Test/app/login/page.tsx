'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { AuthShell } from '@/components/auth-shell'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to manage your servers and keep your worlds online."
      aside={{
        heading: 'Your servers, always online and ready to play.',
        points: [
          '99.9% guaranteed uptime',
          'Instant server access',
          '24/7 expert support',
        ],
      }}
    >
      <form
        className="space-y-5"
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="text-xs font-medium text-primary hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              placeholder="••••••••"
              className="pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
        </div>

        <Button type="submit" size="lg" className="h-11 w-full">
          Log in
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{' '}
        <Link
          href="/signup"
          className="font-medium text-primary hover:underline"
        >
          Sign up
        </Link>
      </p>
    </AuthShell>
  )
}
