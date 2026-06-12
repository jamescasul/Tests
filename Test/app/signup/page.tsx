'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { AuthShell } from '@/components/auth-shell'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <AuthShell
      title="Create your account"
      subtitle="Spin up your first server in under a minute. No credit card required."
      aside={{
        heading: 'Start hosting in seconds, scale whenever you grow.',
        points: [
          'Free Dirt plan to get started',
          'One-click modpack installs',
          'Cancel or upgrade anytime',
        ],
      }}
    >
      <form
        className="space-y-5"
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            autoComplete="username"
            placeholder="Steve"
            required
          />
        </div>

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
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              placeholder="At least 8 characters"
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
          Create account
        </Button>

        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          By signing up, you agree to our{' '}
          <a href="#" className="text-foreground hover:underline">
            Terms
          </a>{' '}
          and{' '}
          <a href="#" className="text-foreground hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link
          href="/login"
          className="font-medium text-primary hover:underline"
        >
          Log in
        </Link>
      </p>
    </AuthShell>
  )
}
