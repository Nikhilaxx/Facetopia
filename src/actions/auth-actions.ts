"use server"

import { createClient } from "@/lib/supabase/server";

interface AuthResponse{
    error:null|string,
    success:boolean,
    data:unknown|null;
}
export async function signup(formdata :FormData):Promise<AuthResponse>{
    const supabase = await createClient();
    const data={
        email:formdata.get('email') as string,
        password :formdata.get('password') as string,
        options:{
            data:{
                name:formdata.get('name')as string,
            }
        }
    }
    
        const { data: signupData, error } = await supabase.auth.signUp(data);
        return{
            error:error?.message||' there was an error signing up',
            success:!error,
            data:signupData||null
        }
      }
      

 