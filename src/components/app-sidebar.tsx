
import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChevronsUpDown,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Rocket,
  Settings2,
  SquareTerminal,
  Image,
  Layers,
  CreditCard,
  Images
} from "lucide-react"

import { NavMain } from "@/components/nav-main"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"
import { createClient } from "@/lib/supabase/server"
import { NavUser } from "./nav-user"

// This is sample data.

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const supabase= await createClient();
  const{data}=await supabase.auth.getUser();


  const user = {
    name:data.user?.user_metadata.name,
    email:data.user?.email??"",
  }
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        <Rocket className="size-4" />
                      </div>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          Facetopia AI
                        </span>
                        <span className="truncate text-xs">Pro</span>
                      </div>
                      <ChevronsUpDown className="ml-auto" />
                    </SidebarMenuButton>
        
      </SidebarHeader>
      <SidebarContent>
        <NavMain  /> 
      </SidebarContent>
      <SidebarFooter>
         <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
