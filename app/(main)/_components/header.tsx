'use client'

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu } from "lucide-react"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Curso de Inglês', href: '/course-english' },
    { name: 'Quiz', href: '/quiz'},
    { name: 'Curso de Espanhol', href: '/course-spanish' },
    { name: 'Contato', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const targetId = target.getAttribute('href')?.substring(1)
      const targetElement = document.getElementById(targetId || '')
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleScroll)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll)
      })
    }
  }, [])

  return (
    <nav className="bg-zinc-950 text-zinc-50 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold flex flex-col space-y-1 text-red-500">
            Windsor
          </Link>
          <div className="hidden md:block">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={`ml-4 hover:text-red-300 ${pathname === item.href ? 'text-red-500' : ''
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button 
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 py-2">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 hover:bg-zinc-900 ${pathname === item.href ? 'text-red-500' : ''
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}