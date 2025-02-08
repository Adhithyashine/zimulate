'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Building2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { ModeToggle } from './mode-toggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const getLinkClass = (href: string) => 
    pathname === href ? 'text-primary font-semibold' : 'hover:text-primary'

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-6 w-6" />
              <span className="font-bold text-xl">Zimulate Consultech</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <Link href="/" className={getLinkClass('/')}>HOME</Link>
              <Link href="/services" className={getLinkClass('/services')}>SERVICES</Link>
              <Link href="/about" className={getLinkClass('/about')}>ABOUT</Link>
              <Link href="/contact" className={getLinkClass('/contact')}>CONTACT</Link>
              <ModeToggle />
              
              <Link href="/contact">
  <Button>CONNECT WITH US</Button>
</Link>            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b">
            <Link href="/" className={`block px-3 py-2 rounded-md ${getLinkClass('/')}`}>HOME</Link>
            <Link href="/services" className={`block px-3 py-2 rounded-md ${getLinkClass('/services')}`}>SERVICES</Link>
            <Link href="/about" className={`block px-3 py-2 rounded-md ${getLinkClass('/about')}`}>ABOUT</Link>
            <Link href="/contact" className={`block px-3 py-2 rounded-md ${getLinkClass('/contact')}`}>CONTACT</Link>
            <div className="px-3 py-2">
              <ModeToggle />
            </div>           
          </div>
        </motion.div>
      )}
    </nav>
  )
}
