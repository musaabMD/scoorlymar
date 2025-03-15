// NavUser.js
import React, { createElement } from 'react'
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.jsx"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar.jsx"

export function NavUser({ user }) {
  // Fixed hook issue: Always call hooks at the top level
  const sidebarContext = typeof useSidebar === 'function' ? useSidebar() : { isMobile: false };
  const isMobile = sidebarContext?.isMobile || false;
  
  return createElement(SidebarMenu, null,
    createElement(SidebarMenuItem, null,
      createElement(DropdownMenu, null,
        createElement(DropdownMenuTrigger, 
          { asChild: true },
          createElement(SidebarMenuButton, 
            {
              size: "lg",
              className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            },
            createElement(Avatar, 
              { className: "h-8 w-8 rounded-lg" },
              createElement(AvatarImage, { src: user.avatar, alt: user.name }),
              createElement(AvatarFallback, 
                { className: "rounded-lg" },
                "CN"
              )
            ),
            createElement("div", 
              { className: "grid flex-1 text-left text-sm leading-tight" },
              createElement("span", 
                { className: "truncate font-semibold" },
                user.name
              ),
              createElement("span", 
                { className: "truncate text-xs" },
                user.email
              )
            ),
            createElement(ChevronsUpDown, { className: "ml-auto size-4" })
          )
        ),
        createElement(DropdownMenuContent, 
          {
            className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg",
            side: isMobile ? "bottom" : "right",
            align: "end",
            sideOffset: 4
          },
          createElement(DropdownMenuLabel, 
            { className: "p-0 font-normal" },
            createElement("div", 
              { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" },
              createElement(Avatar, 
                { className: "h-8 w-8 rounded-lg" },
                createElement(AvatarImage, { src: user.avatar, alt: user.name }),
                createElement(AvatarFallback, 
                  { className: "rounded-lg" },
                  "CN"
                )
              ),
              createElement("div", 
                { className: "grid flex-1 text-left text-sm leading-tight" },
                createElement("span", 
                  { className: "truncate font-semibold" },
                  user.name
                ),
                createElement("span", 
                  { className: "truncate text-xs" },
                  user.email
                )
              )
            )
          ),
          createElement(DropdownMenuSeparator),
          createElement(DropdownMenuGroup, null,
            createElement(DropdownMenuItem, null,
              createElement(Sparkles),
              "Upgrade to Pro"
            )
          ),
          createElement(DropdownMenuSeparator),
          createElement(DropdownMenuGroup, null,
            createElement(DropdownMenuItem, null,
              createElement(BadgeCheck),
              "Account"
            ),
            createElement(DropdownMenuItem, null,
              createElement(CreditCard),
              "Billing"
            ),
            createElement(DropdownMenuItem, null,
              createElement(Bell),
              "Notifications"
            )
          ),
          createElement(DropdownMenuSeparator),
          createElement(DropdownMenuItem, null,
            createElement(LogOut),
            "Log out"
          )
        )
      )
    )
  )
}