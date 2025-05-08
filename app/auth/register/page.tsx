
"use client"

import { useRouter } from 'next/navigation'
import { useForm} from 'react-hook-form'
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from 'zod'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from '@/components/ui/input';

const formSchema = z.object({
    name: z.string().min(3 , "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters long")
})


export default function RegisterPage() {
    const router = useRouter();
    const [loading , setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name: '',
            email:"",
            password:"",
        
        },


    })

    const onSubmit = async (values: z.infer<typeof formSchema>) =>{
        setLoading(true);
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values),
                    })
                    if(res.ok){
                        router.push('/auth/login')
                    }else{
                        const data = await res.json()
                        alert(data.message)
                    }
                    } catch (error) {
                        console.error("Register error :",error);
                        }
                        finally{
                            setLoading(false);
                        }
    }
  return (
    <div>
         <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

<FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

<FormField control={form.control} name="password" render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

<Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating..." : "Create Account"}
            </Button>

            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-blue-600 underline">
                Login
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>

      
    </div>
  )
}


