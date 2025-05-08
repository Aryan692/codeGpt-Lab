import { redirect } from "next/navigation"
import { cookies } from "next/headers";
import { getUserFromToken } from "@/lib/auth";
import LogoutButton from "@/components/logoutBtn";



export default async function ProfilePage(){
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value

    const user = token? await getUserFromToken(token):null

    if(!user){
        redirect("/auth/login")
    }

    const userId = user._id.toString();

    return (<>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-4">Welcome, {user.name} 👋</h1>
                    <p className="text-gray-600">Email: {user.email}</p>
                    <p className="text-gray-500 mt-2 text-sm">User ID: {userId}</p>
                    <button className="mt-2">
                    <LogoutButton/>
                </button> 
                </div>
                </div>

               
    
    </>)
}