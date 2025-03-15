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
  return createElement(SidebarGroup, {
    ...props,
    children: createElement(SidebarGroupContent, {
      children: createElement(SidebarMenu, {
        children: items.map(item => 
          createElement(SidebarMenuItem, {
            key: item.title,
            children: createElement(SidebarMenuButton, {
              asChild: true,
              size: "sm",
              children: createElement("a", {
                href: item.url,
                children: [
                  createElement(item.icon),
                  createElement("span", { children: item.title })
                ]
              })
            })
          })
        )
      })
    })
  })
}