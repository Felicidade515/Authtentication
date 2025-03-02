'use client'

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export const Social = () => {
  return (
    <div className='flex items-center w-full '>
        <Button size="lg" className="w-1/2 mr-2" variant="outline" onClick={()=> {}}>
            <FcGoogle  />
        </Button>   
        <Button size="lg" className="w-1/2" variant="outline" onClick={()=> {}}>
            <FaGithub />
        </Button> 
    </div>
  )
}