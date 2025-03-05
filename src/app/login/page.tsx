import React from 'react'
import AuthImg from '@/public/background.jpg'
import Image from 'next/image'
import Logo from '@/components/Logo'

const AuthenticationPage = () => {
  return (
    <main className='h-screen grid grid-cols-2 relatives'>
      
    <div className='relative w-full flex flex-col bg-muted p-10 text-primary-foreground'>
      <div className='w-full h-[30%] bg-gradient-to-t from-transparent to-black/50 absolute top-0 left-0 z-10 ' />
      <div className='w-full h-[40%] bg-gradient-to-b from-transparent to-black/50 absolute bottom-0 left-0 z-10 ' />
       <Image src={AuthImg} alt="login Image" fill className='w-full h-full object cover '/> 
       <div className='relative z-20  items-center '>
        <Logo />
       </div>
       <div className='relative z-20 mt-auto'>
       <blockquote className='space-y-2'>
        <p className='text-lg'>&ldquo;Facetopia AI has completely transformed my workflow.
           The AI-generated portraits look stunning and realistic, saving me both time and money!&rdquo;</p>
           <footer className='text-sm'>
            Rachel R.
           </footer>
       </blockquote>
       </div>
       </div>
       
       <div>
        Login Form
        </div>
   
    
    </main>
  )
}

export default AuthenticationPage