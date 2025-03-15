// NavProjects.js
import React, { createElement } from 'react'
import {
  Folder,
  MoreHorizontal,
  Share,
  Trash2,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar.jsx"

export function NavProjects({ projects }) {
  // Fixed hook issue: Always call hooks at the top level
  const sidebarContext = typeof useSidebar === 'function' ? useSidebar() : { isMobile: false };
  const isMobile = sidebarContext?.isMobile || false;
  
  return createElement(SidebarGroup, 
    { className: "group-data-[collapsible=icon]:hidden" },
    createElement(SidebarGroupLabel, null, "Projects"),
    createElement(SidebarMenu, null,
      // Map through projects
      ...projects.map(item => 
        createElement(SidebarMenuItem, 
          { key: item.name },
          createElement(SidebarMenuButton, 
            { asChild: true },
            createElement("a", 
              { href: item.url },
              createElement(item.icon),
              createElement("span", null, item.name)
            )
          ),
          createElement(DropdownMenu, null,
            createElement(DropdownMenuTrigger, 
              { asChild: true },
              createElement(SidebarMenuAction, 
                { showOnHover: true },
                createElement(MoreHorizontal),
                createElement("span", 
                  { className: "sr-only" },
                  "More"
                )
              )
            ),
            createElement(DropdownMenuContent, 
              {
                className: "w-48",
                side: isMobile ? "bottom" : "right",
                align: isMobile ? "end" : "start"
              },
              createElement(DropdownMenuItem, null,
                createElement(Folder, { className: "text-muted-foreground" }),
                createElement("span", null, "View Project")
              ),
              createElement(DropdownMenuItem, null,
                createElement(Share, { className: "text-muted-foreground" }),
                createElement("span", null, "Share Project")
              ),
              createElement(DropdownMenuSeparator),
              createElement(DropdownMenuItem, null,
                createElement(Trash2, { className: "text-muted-foreground" }),
                createElement("span", null, "Delete Project")
              )
            )
          )
        )
      ),
      createElement(SidebarMenuItem, null,
        createElement(SidebarMenuButton, null,
          createElement(MoreHorizontal),
          createElement("span", null, "More")
        )
      )
    )
  )
}