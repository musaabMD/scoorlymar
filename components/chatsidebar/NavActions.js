// NavActions.js
"use client"
import React, { createElement, useState, useEffect } from "react"
import {
  ArrowDown,
  ArrowUp,
  Bell,
  Copy,
  CornerUpLeft,
  CornerUpRight,
  FileText,
  GalleryVerticalEnd,
  LineChart,
  Link,
  MoreHorizontal,
  Settings2,
  Star,
  Trash,
  Trash2,
} from "lucide-react"
import { Button } from "@/components/ui/button.jsx"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.jsx"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.jsx"

const data = [
  [
    {
      label: "Customize Page",
      icon: Settings2,
    },
    {
      label: "Turn into wiki",
      icon: FileText,
    },
  ],
  [
    {
      label: "Copy Link",
      icon: Link,
    },
    {
      label: "Duplicate",
      icon: Copy,
    },
    {
      label: "Move to",
      icon: CornerUpRight,
    },
    {
      label: "Move to Trash",
      icon: Trash2,
    },
  ],
  [
    {
      label: "Undo",
      icon: CornerUpLeft,
    },
    {
      label: "View analytics",
      icon: LineChart,
    },
    {
      label: "Version History",
      icon: GalleryVerticalEnd,
    },
    {
      label: "Show delete pages",
      icon: Trash,
    },
    {
      label: "Notifications",
      icon: Bell,
    },
  ],
  [
    {
      label: "Import",
      icon: ArrowUp,
    },
    {
      label: "Export",
      icon: ArrowDown,
    },
  ],
]

export function NavActions() {
  const [isOpen, setIsOpen] = useState(false)
  
  return createElement("div", 
    { className: "flex items-center gap-2 text-sm" },
    createElement("div", 
      { className: "hidden font-medium text-muted-foreground md:inline-block" },
      "Upgrade | Score "
    ),
    createElement(Button, 
      {
        variant: "ghost",
        size: "icon",
        className: "h-7 w-7"
      },
      createElement(Star)
    ),
    createElement(Popover, 
      {
        open: isOpen,
        onOpenChange: setIsOpen
      },
      createElement(PopoverTrigger, 
        { asChild: true },
        createElement(Button, 
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 data-[state=open]:bg-accent"
          },
          createElement(MoreHorizontal)
        )
      ),
      createElement(PopoverContent, 
        {
          className: "w-56 overflow-hidden rounded-lg p-0",
          align: "end"
        },
        createElement(Sidebar, 
          {
            collapsible: "none",
            className: "bg-transparent"
          },
          createElement(SidebarContent, null,
            data.map((group, index) =>
              createElement(SidebarGroup, 
                {
                  key: index,
                  className: "border-b last:border-none"
                },
                createElement(SidebarGroupContent, 
                  { className: "gap-0" },
                  createElement(SidebarMenu, null,
                    group.map((item, itemIndex) =>
                      createElement(SidebarMenuItem, 
                        { key: itemIndex },
                        createElement(SidebarMenuButton, null,
                          createElement(item.icon),
                          createElement("span", null, item.label)
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
}