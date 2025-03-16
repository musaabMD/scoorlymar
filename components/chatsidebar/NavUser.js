// components/chatsidebar/NavUser.js
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
  
  return createElement(SidebarMenu, {},
    createElement(SidebarMenuItem, {},
      createElement(DropdownMenu, {},
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
          createElement(DropdownMenuGroup, {},
            createElement(DropdownMenuItem, {},
              createElement(Sparkles),
              "Upgrade to Pro"
            )
          ),
          createElement(DropdownMenuSeparator),
          createElement(DropdownMenuGroup, {},
            createElement(DropdownMenuItem, {},
              createElement(BadgeCheck),
              "Account"
            ),
            createElement(DropdownMenuItem, {},
              createElement(CreditCard),
              "Billing"
            ),
            createElement(DropdownMenuItem, {},
              createElement(Bell),
              "Notifications"
            )
          ),
          createElement(DropdownMenuSeparator),
          createElement(DropdownMenuItem, {},
            createElement(LogOut),
            "Log out"
          )
        )
      )
    )
  )
}