'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Shang-Yi(Joe) Lin
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Healthcare • Logistics
          Data Analyst • BI Developer • Data Scientist • Data Engineer
          Python • R • SQL • Power BI • Excel • SAS
        </TextEffect>
      </div>
    </header>
  )
}