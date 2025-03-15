// // AppSidebar.js
// import React, { createElement } from 'react'
// import {
//   BookOpen,
//   Bot,
//   Command,
//   Cpu,
//   Frame,
//   LifeBuoy,
//   Map,
//   PieChart,
//   Send,
//   Settings2,
//   SquareTerminal,
// } from "lucide-react"
// import { NavMain } from "./NavMain.js"
// import { NavProjects } from "./NavProjects.js"
// import { NavSecondary } from "./NavSecondary.js"
// import { NavUser } from "./NavUser.js"
// import { TeamSwitcher } from "./TeamSwitcher.js"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar.jsx"

// // Sample team data
// const teams = [
//   {
//     name: "Acme Inc",
//     logo: Command,
//     plan: "Enterprise"
//   },
//   {
//     name: "DigitalEdge",
//     logo: Cpu,
//     plan: "Pro"
//   },
//   {
//     name: "CreativeWorks",
//     logo: Frame,
//     plan: "Basic"
//   }
// ]

// const data = {
//   user: {
//     name: "shadcn",
//     email: "m@example.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   navMain: [
//     {
//       title: "Playground",
//       url: "#",
//       icon: SquareTerminal,
//       isActive: true,
//       items: [
//         {
//           title: "History",
//           url: "#",
//         },
//         {
//           title: "Starred",
//           url: "#",
//         },
//         {
//           title: "Settings",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Models",
//       url: "#",
//       icon: Bot,
//       items: [
//         {
//           title: "Genesis",
//           url: "#",
//         },
//         {
//           title: "Explorer",
//           url: "#",
//         },
//         {
//           title: "Quantum",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Documentation",
//       url: "#",
//       icon: BookOpen,
//       items: [
//         {
//           title: "Introduction",
//           url: "#",
//         },
//         {
//           title: "Get Started",
//           url: "#",
//         },
//         {
//           title: "Tutorials",
//           url: "#",
//         },
//         {
//           title: "Changelog",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Settings",
//       url: "#",
//       icon: Settings2,
//       items: [
//         {
//           title: "General",
//           url: "#",
//         },
//         {
//           title: "Team",
//           url: "#",
//         },
//         {
//           title: "Billing",
//           url: "#",
//         },
//         {
//           title: "Limits",
//           url: "#",
//         },
//       ],
//     },
//   ],
//   navSecondary: [
//     {
//       title: "Support",
//       url: "#",
//       icon: LifeBuoy,
//     },
//     {
//       title: "Feedback",
//       url: "#",
//       icon: Send,
//     },
//   ],
//   projects: [
//     {
//       name: "Design Engineering",
//       url: "#",
//       icon: Frame,
//     },
//     {
//       name: "Sales & Marketing",
//       url: "#",
//       icon: PieChart,
//     },
//     {
//       name: "Travel",
//       url: "#",
//       icon: Map,
//     },
//   ],
// }

// export function AppSidebar(props) {
//   return createElement(Sidebar, {
//     variant: "inset",
//     ...props,
//     children: [
//       createElement(SidebarHeader, {
//         children: [
//           // Team Switcher component
//           createElement(TeamSwitcher, { teams: teams }),
//           // Original header content
//           createElement(SidebarMenu, {
//             children: createElement(SidebarMenuItem, {
//               children: createElement(SidebarMenuButton, {
//                 size: "lg",
//                 asChild: true,
//                 children: createElement("a", {
//                   href: "#",
//                   children: [
//                     createElement("div", {
//                       className: "flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground",
//                       children: createElement(Command, { className: "size-4" })
//                     }),
//                     createElement("div", {
//                       className: "grid flex-1 text-left text-sm leading-tight",
//                       children: [
//                         createElement("span", {
//                           className: "truncate font-semibold",
//                           children: "Acme Inc"
//                         }),
//                         createElement("span", {
//                           className: "truncate text-xs",
//                           children: "Enterprise"
//                         })
//                       ]
//                     })
//                   ]
//                 })
//               })
//             })
//           })
//         ]
//       }),
//       createElement(SidebarContent, {
//         children: [
//           createElement(NavMain, { items: data.navMain }),
//           createElement(NavProjects, { projects: data.projects }),
//           createElement(NavSecondary, { items: data.navSecondary, className: "mt-auto" })
//         ]
//       }),
//       createElement(SidebarFooter, {
//         children: createElement(NavUser, { user: data.user })
//       })
//     ]
//   })
// }
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
  return createElement(Sidebar, {
    variant: "inset",
    ...props,
    children: [
      createElement(SidebarHeader, {
        children: [
          // TeamSwitcher with default initial team index
          createElement(TeamSwitcher, { initialTeamIndex: 0 }),
          // You can remove this section as TeamSwitcher already provides similar functionality
          createElement(SidebarMenu, {
            className: "hidden", // Hide this since TeamSwitcher replaces it
            children: createElement(SidebarMenuItem, {
              children: createElement(SidebarMenuButton, {
                size: "lg",
                asChild: true,
                children: createElement("a", {
                  href: "#",
                  children: [
                    createElement("div", {
                      className: "flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground",
                      children: createElement(Command, { className: "size-4" })
                    }),
                    createElement("div", {
                      className: "grid flex-1 text-left text-sm leading-tight",
                      children: [
                        createElement("span", {
                          className: "truncate font-semibold",
                          children: "Acme Inc"
                        }),
                        createElement("span", {
                          className: "truncate text-xs",
                          children: "Enterprise"
                        })
                      ]
                    })
                  ]
                })
              })
            })
          })
        ]
      }),
      createElement(SidebarContent, {
        children: [
          createElement(NavMain, { items: data.navMain }),
          createElement(NavProjects, { projects: data.projects }),
          createElement(NavSecondary, { items: data.navSecondary, className: "mt-auto" })
        ]
      }),
      createElement(SidebarFooter, {
        children: createElement(NavUser, { user: data.user })
      })
    ]
  })
}