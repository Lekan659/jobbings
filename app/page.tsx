import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { User } from "./user";
import { LoginButton, LogoutButton } from "./auth";

// export default async function Home() {
//   const session = await getServerSession(authOptions)
  
//   return (
//     <main>
//       <LoginButton/>
//       <LogoutButton/>
//       <div>Hello Worldie</div>
//       Server
//       <pre>{JSON.stringify(session)}</pre>

//       Client
//       <User/>
//     </main>
//   )
// }

import { redirect } from 'next/navigation'

export default function Home() {
 redirect('/jobs')
}