// components/chatsidebar/NavProjects.js
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
  // IMPORTANT: Always call hooks unconditionally at the top level
  // Even if it might not be a function, we'll handle the error afterward
  let sidebarContext;
  let isMobile = false;
  
  try {
    sidebarContext = useSidebar();
    isMobile = sidebarContext?.isMobile || false;
  } catch (error) {
    console.error("Error with useSidebar:", error);
    isMobile = false;
  }

  return createElement(SidebarGroup, 
    { className: "group-data-[collapsible=icon]:hidden" },
    createElement(SidebarGroupLabel, {}, "Projects"),
    createElement(SidebarMenu, {},
      // Map through projects if they exist, otherwise render empty array
      ...(projects ? projects.map(item =>
        createElement(SidebarMenuItem,
          { key: item.name },
          createElement(SidebarMenuButton,
            { asChild: true },
            createElement("a",
              { href: item.url },
              createElement(item.icon),
              createElement("span", {}, item.name)
            )
          ),
          createElement(DropdownMenu, {},
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
              createElement(DropdownMenuItem, {},
                createElement(Folder, { className: "text-muted-foreground" }),
                createElement("span", {}, "View Project")
              ),
              createElement(DropdownMenuItem, {},
                createElement(Share, { className: "text-muted-foreground" }),
                createElement("span", {}, "Share Project")
              ),
              createElement(DropdownMenuSeparator),
              createElement(DropdownMenuItem, {},
                createElement(Trash2, { className: "text-muted-foreground" }),
                createElement("span", {}, "Delete Project")
              )
            )
          )
        )
      ) : []),
      createElement(SidebarMenuItem, {},
        createElement(SidebarMenuButton, {},
          createElement(MoreHorizontal),
          createElement("span", {}, "More")
        )
      )
    )
  )
}