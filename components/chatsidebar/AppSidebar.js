// AppSidebar.js
import React, { createElement } from 'react'
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"
import { NavMain } from "./NavMain.js"
import { NavProjects } from "./NavProjects.js"
import { NavSecondary } from "./NavSecondary.js"
import { NavUser } from "./NavUser.js"
import { TeamSwitcher } from "./TeamSwitcher.js"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.jsx"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar(props) {
  return createElement(Sidebar, 
    {
      variant: "inset",
      ...props
    },
    createElement(SidebarHeader, null,
      // TeamSwitcher with default initial team index
      createElement(TeamSwitcher, { initialTeamIndex: 0 }),
      // You can remove this section as TeamSwitcher already provides similar functionality
      createElement(SidebarMenu, 
        { className: "hidden" }, // Hide this since TeamSwitcher replaces it
        createElement(SidebarMenuItem, null,
          createElement(SidebarMenuButton,
            {
              size: "lg",
              asChild: true
            },
            createElement("a", 
              { href: "#" },
              createElement("div", 
                { className: "flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground" },
                createElement(Command, { className: "size-4" })
              ),
              createElement("div", 
                { className: "grid flex-1 text-left text-sm leading-tight" },
                createElement("span", 
                  { className: "truncate font-semibold" },
                  "Acme Inc"
                ),
                createElement("span", 
                  { className: "truncate text-xs" },
                  "Enterprise"
                )
              )
            )
          )
        )
      )
    ),
    createElement(SidebarContent, null,
      createElement(NavMain, { items: data.navMain }),
      createElement(NavProjects, { projects: data.projects }),
      createElement(NavSecondary, { items: data.navSecondary, className: "mt-auto" })
    ),
    createElement(SidebarFooter, null,
      createElement(NavUser, { user: data.user })
    )
  )
}