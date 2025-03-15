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
  // Handle useSidebar safely
  const sidebarContext = typeof useSidebar === 'function' ? useSidebar() : { isMobile: false };
  const isMobile = sidebarContext?.isMobile || false;
  
  return createElement(SidebarMenu, {
    children: createElement(SidebarMenuItem, {
      children: createElement(DropdownMenu, {
        children: [
          createElement(DropdownMenuTrigger, {
            asChild: true,
            children: createElement(SidebarMenuButton, {
              size: "lg",
              className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
              children: [
                createElement(Avatar, {
                  className: "h-8 w-8 rounded-lg",
                  children: [
                    createElement(AvatarImage, { src: user.avatar, alt: user.name }),
                    createElement(AvatarFallback, { 
                      className: "rounded-lg",
                      children: "CN" 
                    })
                  ]
                }),
                createElement("div", {
                  className: "grid flex-1 text-left text-sm leading-tight",
                  children: [
                    createElement("span", {
                      className: "truncate font-semibold",
                      children: user.name
                    }),
                    createElement("span", {
                      className: "truncate text-xs",
                      children: user.email
                    })
                  ]
                }),
                createElement(ChevronsUpDown, { className: "ml-auto size-4" })
              ]
            })
          }),
          createElement(DropdownMenuContent, {
            className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg",
            side: isMobile ? "bottom" : "right",
            align: "end",
            sideOffset: 4,
            children: [
              createElement(DropdownMenuLabel, {
                className: "p-0 font-normal",
                children: createElement("div", {
                  className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
                  children: [
                    createElement(Avatar, {
                      className: "h-8 w-8 rounded-lg",
                      children: [
                        createElement(AvatarImage, { src: user.avatar, alt: user.name }),
                        createElement(AvatarFallback, { 
                          className: "rounded-lg",
                          children: "CN" 
                        })
                      ]
                    }),
                    createElement("div", {
                      className: "grid flex-1 text-left text-sm leading-tight",
                      children: [
                        createElement("span", {
                          className: "truncate font-semibold",
                          children: user.name
                        }),
                        createElement("span", {
                          className: "truncate text-xs",
                          children: user.email
                        })
                      ]
                    })
                  ]
                })
              }),
              createElement(DropdownMenuSeparator),
              createElement(DropdownMenuGroup, {
                children: createElement(DropdownMenuItem, {
                  children: [
                    createElement(Sparkles),
                    "Upgrade to Pro"
                  ]
                })
              }),
              createElement(DropdownMenuSeparator),
              createElement(DropdownMenuGroup, {
                children: [
                  createElement(DropdownMenuItem, {
                    children: [
                      createElement(BadgeCheck),
                      "Account"
                    ]
                  }),
                  createElement(DropdownMenuItem, {
                    children: [
                      createElement(CreditCard),
                      "Billing"
                    ]
                  }),
                  createElement(DropdownMenuItem, {
                    children: [
                      createElement(Bell),
                      "Notifications"
                    ]
                  })
                ]
              }),
              createElement(DropdownMenuSeparator),
              createElement(DropdownMenuItem, {
                children: [
                  createElement(LogOut),
                  "Log out"
                ]
              })
            ]
          })
        ]
      })
    })
  })
}