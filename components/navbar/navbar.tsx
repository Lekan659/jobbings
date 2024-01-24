
import Link from 'next/link'
import React from 'react'
import { getServerSession } from "next-auth"
// import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { LogoutButton } from '@/app/auth'

import { Button } from '../ui/button'

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
                <li></li>
                <li> <Button ><Link href='/'>Home</Link></Button></li>
                {piperole == "admin" ? (

                                  <li> <Button ><Link href='/create-job'>Create job</Link></Button></li>
                )
                :
                (
                  <></>
                )

                

                }
                                     <LogoutButton/>
                <li><button><Link href='#'>Welcome {nameuser}</Link></button></li>

            </ul>

        </div>

    </nav>
  )
}
