// components/chatsidebar/NavMain.js
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
  return createElement(SidebarGroup, {},
    createElement(SidebarGroupLabel, {}, "Platform"),
    createElement(SidebarMenu, {},
      items.map(item =>
        createElement(Collapsible, {
          key: item.title,
          asChild: true,
          defaultOpen: item.isActive
        }, 
          createElement(SidebarMenuItem, {},
            createElement(SidebarMenuButton, {
              asChild: true,
              tooltip: item.title
            }, 
              createElement("a", {
                href: item.url
              },
                createElement(item.icon),
                createElement("span", {}, item.title)
              )
            ),
            item.items?.length ? 
              createElement(CollapsibleTrigger, {
                asChild: true
              }, 
                createElement(SidebarMenuAction, {
                  className: "data-[state=open]:rotate-90"
                },
                  createElement(ChevronRight),
                  createElement("span", {
                    className: "sr-only"
                  }, "Toggle")
                )
              ) : null,
            item.items?.length ? 
              createElement(CollapsibleContent, {},
                createElement(SidebarMenuSub, {},
                  item.items?.map(subItem =>
                    createElement(SidebarMenuSubItem, {
                      key: subItem.title
                    },
                      createElement(SidebarMenuSubButton, {
                        asChild: true
                      },
                        createElement("a", {
                          href: subItem.url
                        },
                          createElement("span", {}, subItem.title)
                        )
                      )
                    )
                  )
                )
              ) : null
          )
        )
      )
    )
  )
}