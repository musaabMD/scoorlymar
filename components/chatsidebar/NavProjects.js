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
  // Instead of destructuring directly which assumes it's a function,
  // we'll handle this more safely
  // First check if useSidebar is a function before calling it
  const sidebarContext = typeof useSidebar === 'function' ? useSidebar() : { isMobile: false };
  const isMobile = sidebarContext?.isMobile || false;
  
  return createElement(SidebarGroup, {
    className: "group-data-[collapsible=icon]:hidden",
    children: [
      createElement(SidebarGroupLabel, { children: "Projects" }),
      createElement(SidebarMenu, {
        children: [
          ...projects.map(item => 
            createElement(SidebarMenuItem, {
              key: item.name,
              children: [
                createElement(SidebarMenuButton, {
                  asChild: true,
                  children: createElement("a", {
                    href: item.url,
                    children: [
                      createElement(item.icon),
                      createElement("span", { children: item.name })
                    ]
                  })
                }),
                createElement(DropdownMenu, {
                  children: [
                    createElement(DropdownMenuTrigger, {
                      asChild: true,
                      children: createElement(SidebarMenuAction, {
                        showOnHover: true,
                        children: [
                          createElement(MoreHorizontal),
                          createElement("span", {
                            className: "sr-only",
                            children: "More"
                          })
                        ]
                      })
                    }),
                    createElement(DropdownMenuContent, {
                      className: "w-48",
                      side: isMobile ? "bottom" : "right",
                      align: isMobile ? "end" : "start",
                      children: [
                        createElement(DropdownMenuItem, {
                          children: [
                            createElement(Folder, { className: "text-muted-foreground" }),
                            createElement("span", { children: "View Project" })
                          ]
                        }),
                        createElement(DropdownMenuItem, {
                          children: [
                            createElement(Share, { className: "text-muted-foreground" }),
                            createElement("span", { children: "Share Project" })
                          ]
                        }),
                        createElement(DropdownMenuSeparator),
                        createElement(DropdownMenuItem, {
                          children: [
                            createElement(Trash2, { className: "text-muted-foreground" }),
                            createElement("span", { children: "Delete Project" })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ),
          createElement(SidebarMenuItem, {
            children: createElement(SidebarMenuButton, {
              children: [
                createElement(MoreHorizontal),
                createElement("span", { children: "More" })
              ]
            })
          })
        ]
      })
    ]
  })
}