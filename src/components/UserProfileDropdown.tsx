'use client'
import {
    LogOut,
    User,
  } from "lucide-react"
  import { useSession, signIn, signOut } from "next-auth/react"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import TeamVote from "./TeamVote"
import { useEffect } from "react"
  
  export function UserProfileDropdown() {
    // const { data: session } = useSession()
    // useEffect(()=>{
    //   console.log({session})
    // },[])
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button id="profile-id" variant="ghost" className="bg-transparent hover:bg-transparent focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none ring-opacity-0"><TeamVote isActive={true} firstName="Admin" lastName="Name"/></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Hi Admin,</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem disabled>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
      
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  