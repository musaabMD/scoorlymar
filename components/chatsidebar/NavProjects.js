// components/chatsidebar/NavProjects.js
import React, { createElement } from 'react'
import {
  Folder,
  MoreHorizontal,
  Share,
  Trash2,
} from "lucide-react"

export function NavProjects({ projects, isMobile = false }) {
  const handleItemClick = (name) => {
    if (name === "Review") {
      window.dispatchEvent(new CustomEvent('showReview'));
    }
  };

  return createElement("div", { className: "px-2 py-2" }, // SidebarMenu replacement
    createElement("h3", { 
      className: "mb-2 px-4 text-sm font-semibold tracking-tight" 
    }, "Projects"), // SidebarMenuLabel replacement
    projects.map((project) => 
      createElement("div", {  // SidebarMenuItem replacement
        key: project.name,
        className: "mb-1"
      },
        createElement("a", {  // SidebarMenuLink replacement
          onClick: project.onClick,
          href: project.url,
          className: "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground"
        },
          createElement("div", { className: "flex items-center" },
            project.icon && createElement(project.icon, { 
              className: "mr-2 h-4 w-4" 
            }),
            createElement("span", null, project.name)
          )
        )
      )
    )
  );
}