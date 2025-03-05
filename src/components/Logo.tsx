import React from 'react'
import Link from 'next/link'
import { Rocket } from 'lucide-react'

const Logo = () => {
  return (
    <Link href="/" className='flex items-center gap-2'>
        <Rocket className='size-8' strokeWidth={1.5} />
        <span className='text-lg font semibold'>Facetopia ai</span>
        </Link>
)
}

export default Logo