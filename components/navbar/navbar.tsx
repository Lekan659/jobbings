
import Link from 'next/link'
import React from 'react'
import { getServerSession } from "next-auth"
// import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { LogoutButton } from '@/app/auth'

export default async function Navbar() {
  const session = await getServerSession(authOptions)
  const piperole = session?.role
  const nameuser = session?.user?.name
  console.log(session)
  if (session){
    let pipe = session .role
    console.log("Tobias ", session.role)
    console.log(pipe)
    // if (pipe == "user"){
    //     redirect('api')
    // }
    // else if (pipe == "admin"){
    //     redirect('api')
    // }
}
  return (
    <nav>
        <div className='flex justify-between items-center p-6 container'>
            <Link href='/' className='text-[25px] font-bold'>Jobbings</Link>

            <ul className='flex gap-4 text-[1.2rem] text-md'>
                <li><Link href='/'>Home</Link></li>
                {piperole == "admin" ? (
                                  <li><Link href='/create-job'>Create a job</Link></li>
                )
                :
                (
                  <></>
                )

                

                }
                <li><Link href='/create-job'>Welcome {nameuser}</Link></li>
                     <LogoutButton/>
            </ul>

        </div>

    </nav>
  )
}
