// components/chatsidebar/NavProjects.js
import { createElement } from 'react'
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
} from "@/components/ui/sidebar.jsx"

// Define a constant for fallback isMobile value
const DEFAULT_IS_MOBILE = false;

export function NavProjects({ projects, isMobile = DEFAULT_IS_MOBILE }) {
  return createElement(SidebarGroup, 
    { className: "group-data-[collapsible=icon]:hidden" },
    createElement(SidebarGroupLabel, {}, "current exam "),
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
    //   createElement(SidebarMenuItem, {},
    //     createElement(SidebarMenuButton, {},
    //       createElement(MoreHorizontal),
    //       createElement("span", {}, "Mor1e")
    //     )
    //   )
    )
  )
}