"use client"
import React, { useState } from 'react'
import LoginForm from './LoginForm';
import { Button } from '../ui/button';
import SignUpForm from './SignUpForm';
import Link from 'next/link';
import ResetPassword from './ResetPassword';

const AuthForm = () => {
    const [mode,setMode]=useState('login');
  return (
    <div className='space-y-6'>
        <div className='flexm flex-col space-y-2 text-center'>
           <h1 className='text-2xl font-semibold tracking-tight'>
           {
            mode=="reset"?"Reset Password":mode=="login"?"Login":"Sign up"
            }
           </h1>
           <p className='text-sm text-muted-foreground'>
           {
            mode=="reset"?"Enter your email below to reset your password":mode=="login"?"Enter your email below to login to your account":"Enter your information below to create your account"
            }
           </p>
            </div>
            {
                mode=="login"&&<><LoginForm />
                <div className='text-center flex justify-between'>
                    <Button variant={"link"}className='P-0' onClick={()=>setMode("signup")}>
                    Need an account? Sign Up
                    </Button>
                    <Button variant={"link"}className='P-0' onClick={()=>setMode("reset")}>
                    Forgot password? 
                    </Button>
                </div></>
            }
            {
                mode=="signup"&&<><SignUpForm/>
                <div className='text-center'>
                    <Button variant={"link"}className='P-0' onClick={()=>setMode("login")}>
                    Already have an account? Login
                    </Button>
            
                </div>
                <p className='px-8 text-center text-sm text-muted-foreground'>
                    By clicking signup ,you agree to our <Link  href="#" className='underline'>Terms and Conditions</Link>
                    </p></>
            } 
              {
                mode=="reset"&&<><ResetPassword/>
                <div className='text-center'>
                    <Button variant={"link"}className='P-0' onClick={()=>setMode("login")}>
                    Back to Login
                    </Button>
            
                </div></>
            }
    </div>
  )
}

export default AuthForm