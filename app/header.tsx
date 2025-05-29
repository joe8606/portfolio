'use client'
import { useState, useEffect } from 'react'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

const TITLES = [
  'Data Analyst • Python • SQL • Power BI',
  'MSDS @ Rutgers • CDC • Alliance Health',
  'Transforming Data into Decisions',
  'Machine Learning • Web Scraping • Visualization',
]

export function Header() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TITLES.length)
    }, 4000) // 每 4 秒切換

    return () => clearInterval(interval)
  }, [])

  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Shang-Yi (Joe) Lin
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          {TITLES[index]}
        </TextEffect>
      </div>
    </header>
  )
}
