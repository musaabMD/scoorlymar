// TeamSwitcher.js
"use client"
import React, { createElement, useState } from "react"
import { ChevronDown, Plus, Command, Cpu, Frame } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.jsx"

// Define teams directly in the client component
const TEAMS = [
  {
    name: "Acme Inc",
    iconType: "command",
    plan: "Enterprise"
  },
  {
    name: "DigitalEdge",
    iconType: "cpu",
    plan: "Pro"
  },
  {
    name: "CreativeWorks",
    iconType: "frame",
    plan: "Basic"
  }
]

// Helper function to render icon based on type
const renderIcon = (iconType, className) => {
  switch(iconType) {
    case "command":
      return createElement(Command, { className });
    case "cpu":
      return createElement(Cpu, { className });
    case "frame":
      return createElement(Frame, { className });
    default:
      return createElement(Command, { className });
  }
}

export function TeamSwitcher({ initialTeamIndex = 0 }) {
  const [activeTeam, setActiveTeam] = useState(TEAMS[initialTeamIndex]);
  
  if (!activeTeam) {
    return null
  }
  
  return createElement(SidebarMenu, {
    children: createElement(SidebarMenuItem, {
      children: createElement(DropdownMenu, {
        children: [
          createElement(DropdownMenuTrigger, {
            asChild: true,
            children: createElement(SidebarMenuButton, {
              className: "w-fit px-1.5",
              children: [
                createElement("div", {
                  className: "flex aspect-square size-5 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground",
                  children: renderIcon(activeTeam.iconType, "size-3")
                }),
                createElement("span", { 
                  className: "truncate font-semibold",
                  children: activeTeam.name
                }),
                createElement(ChevronDown, { className: "opacity-50" })
              ]
            })
          }),
          createElement(DropdownMenuContent, {
            className: "w-64 rounded-lg",
            align: "start",
            side: "bottom",
            sideOffset: 4,
            children: [
              createElement(DropdownMenuLabel, {
                className: "text-xs text-muted-foreground",
                children: "Teams"
              }),
              ...TEAMS.map((team, index) =>
                createElement(DropdownMenuItem, {
                  key: team.name,
                  onClick: () => setActiveTeam(team),
                  className: "gap-2 p-2",
                  children: [
                    createElement("div", {
                      className: "flex size-6 items-center justify-center rounded-sm border",
                      children: renderIcon(team.iconType, "size-4 shrink-0")
                    }),
                    team.name,
                    createElement(DropdownMenuShortcut, {
                      children: `⌘${index + 1}`
                    })
                  ]
                })
              ),
              createElement(DropdownMenuSeparator),
              createElement(DropdownMenuItem, {
                className: "gap-2 p-2",
                children: [
                  createElement("div", {
                    className: "flex size-6 items-center justify-center rounded-md border bg-background",
                    children: createElement(Plus, { className: "size-4" })
                  }),
                  createElement("div", {
                    className: "font-medium text-muted-foreground",
                    children: "Add team"
                  })
                ]
              })
            ]
          })
        ]
      })
    })
  })
}