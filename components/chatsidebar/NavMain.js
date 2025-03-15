// NavMain.js
import React, { createElement } from 'react'
import { ChevronRight } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible.jsx"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar.jsx"

export function NavMain({ items }) {
  return createElement(SidebarGroup, {
    children: [
      createElement(SidebarGroupLabel, { children: "Platform" }),
      createElement(SidebarMenu, {
        children: items.map(item => 
          createElement(Collapsible, {
            key: item.title,
            asChild: true,
            defaultOpen: item.isActive,
            children: createElement(SidebarMenuItem, {
              children: [
                createElement(SidebarMenuButton, {
                  asChild: true,
                  tooltip: item.title,
                  children: createElement("a", {
                    href: item.url,
                    children: [
                      createElement(item.icon),
                      createElement("span", { children: item.title })
                    ]
                  })
                }),
                item.items?.length ? [
                  createElement(CollapsibleTrigger, {
                    asChild: true,
                    children: createElement(SidebarMenuAction, {
                      className: "data-[state=open]:rotate-90",
                      children: [
                        createElement(ChevronRight),
                        createElement("span", {
                          className: "sr-only",
                          children: "Toggle"
                        })
                      ]
                    })
                  }),
                  createElement(CollapsibleContent, {
                    children: createElement(SidebarMenuSub, {
                      children: item.items?.map(subItem => 
                        createElement(SidebarMenuSubItem, {
                          key: subItem.title,
                          children: createElement(SidebarMenuSubButton, {
                            asChild: true,
                            children: createElement("a", {
                              href: subItem.url,
                              children: createElement("span", {
                                children: subItem.title
                              })
                            })
                          })
                        })
                      )
                    })
                  })
                ] : null
              ].filter(Boolean)
            })
          })
        )
      })
    ]
  })
}