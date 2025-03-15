// NavSecondary.js
import React, { createElement } from 'react'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.jsx"

export function NavSecondary({ items, ...props }) {
  return createElement(SidebarGroup, 
    { ...props },
    createElement(SidebarGroupContent, null,
      createElement(SidebarMenu, null,
        items.map(item => 
          createElement(SidebarMenuItem, 
            { key: item.title },
            createElement(SidebarMenuButton, 
              {
                asChild: true,
                size: "sm"
              },
              createElement("a", 
                { href: item.url },
                createElement(item.icon),
                createElement("span", null, item.title)
              )
            )
          )
        )
      )
    )
  )
}