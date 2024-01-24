import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export default async function Dashboard() {
    const session = await getServerSession(authOptions)

    // if(!session){
    //     redirect('api/auth/signin')
    // }
    if (session){
        let pipe = session.role
        console.log("Tobias ", session.role)
        console.log(pipe)
        if (pipe == "user"){
            redirect('api')
        }
        else if (pipe == "admin"){
            redirect('api')
        }
    }
    // return <>Super Secret Page</>
  }