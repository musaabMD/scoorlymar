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
  
  useEffect(() => {
    setIsOpen(true)
  }, [])
  
  return createElement("div", {
    className: "flex items-center gap-2 text-sm"
  }, [
    createElement("div", {
      className: "hidden font-medium text-muted-foreground md:inline-block",
      children: "Edit Oct 08"
    }),
    createElement(Button, {
      variant: "ghost",
      size: "icon",
      className: "h-7 w-7",
      children: createElement(Star)
    }),
    createElement(Popover, {
      open: isOpen,
      onOpenChange: setIsOpen,
      children: [
        createElement(PopoverTrigger, {
          asChild: true,
          children: createElement(Button, {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7 data-[state=open]:bg-accent",
            children: createElement(MoreHorizontal)
          })
        }),
        createElement(PopoverContent, {
          className: "w-56 overflow-hidden rounded-lg p-0",
          align: "end",
          children: createElement(Sidebar, {
            collapsible: "none",
            className: "bg-transparent",
            children: createElement(SidebarContent, {
              children: data.map((group, index) =>
                createElement(SidebarGroup, {
                  key: index,
                  className: "border-b last:border-none",
                  children: createElement(SidebarGroupContent, {
                    className: "gap-0",
                    children: createElement(SidebarMenu, {
                      children: group.map((item, itemIndex) =>
                        createElement(SidebarMenuItem, {
                          key: itemIndex,
                          children: createElement(SidebarMenuButton, {
                            children: [
                              createElement(item.icon),
                              createElement("span", { children: item.label })
                            ]
                          })
                        })
                      )
                    })
                  })
                })
              )
            })
          })
        })
      ]
    })
  ])
}