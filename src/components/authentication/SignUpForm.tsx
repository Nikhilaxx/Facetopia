"use client"
import React from 'react'
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from '@/lib/utils';

const passwordValidationRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
  );
  

const formSchema=z.object({
    name:z.string().min(3,{message:"Please enter a valid name"}),
email:z.string().email({
    message:"Please enter a valid email address"
}),
password:z.string({
    required_error:"Password is required"
}).min(8,{
    message: "Password must be atleast 8 characters long"
}).regex(
    passwordValidationRegex,{
        message:"Password must be 8 characters,containing atleast 1 uppercase,1 lowercase and 1 special charcater"
    }
),
confirmPassword:z.string({
    required_error:" Confirm Password is required"
})
}).refine(data => data.password===data.confirmPassword,{
    message:"Passwords don't match",
    path:["confirmPassword"]
    
});
const SignUpForm = ({className}:{className?:string}) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
          name:"",
          confirmPassword:""
        },
      })
      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
      }
  return (
    <div className={cn("grid gap-6",className)}><Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Your full Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="name@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="enter your password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
       <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="re-enter your password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit"className='w-full'>Sign Up</Button>
    </form>
    </Form></div>
  )
}

export default SignUpForm