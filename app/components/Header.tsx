import Link from "next/link"
import React from "react"

export const Header = () => {
    return (
        <header className="bg-stone-100 drop-shadow-lg">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="mx-auto">
              <span className="sr-only">Billy Schweigert</span>
              Billy&apos;s Portfolio 🔥
            </Link>
          </div>

          <div className="flex lg:flex-1">
            <Link href="/gallery" className="mx-auto">
              <span className="sr-only">Billy Schweigert</span>
              Gallery
            </Link>
          </div>
        </nav>
      </header>
    )
}