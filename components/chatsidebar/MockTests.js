import React, { createElement } from 'react';
import { Button } from "@/components/ui/button";
import { FileSpreadsheet } from "lucide-react";

export function MockTests({ onClose }) {
  const generateMockTest = () => {
    // TODO: Implement mock test generation logic based on qbank and blueprint
    const mockTest = {
      id: Date.now(),
      name: `Mock Test ${new Date().toLocaleDateString()}`,
      progress: {
        anatomy: 25,
        physiology: 30,
        pathology: 45
      }
    };

    // Dispatch event to notify parent components
    const event = new CustomEvent('mockTestGenerated', { 
      detail: mockTest 
    });
    window.dispatchEvent(event);
  };

  return createElement("div", { className: "p-4" },
    createElement("div", { className: "flex justify-between items-center mb-6" },
      createElement("h2", { className: "text-2xl font-bold" }, "Mock Tests"),
      createElement(Button, { 
        onClick: onClose,
        variant: "ghost",
        size: "sm"
      }, "Close")
    ),
    createElement(Button, {
      onClick: generateMockTest,
      className: "w-full mb-4"
    },
      createElement(FileSpreadsheet, { className: "mr-2 h-4 w-4" }),
      "Generate New Mock Test"
    ),
    createElement("div", { className: "space-y-4" },
      createElement("h3", { className: "text-lg font-semibold" }, "Blueprint Coverage"),
      createElement("div", { className: "space-y-2" },
        createElement("div", { className: "flex justify-between" },
          createElement("span", null, "Anatomy"),
          createElement("span", null, "25%")
        ),
        createElement("div", { className: "flex justify-between" },
          createElement("span", null, "Physiology"),
          createElement("span", null, "30%")
        ),
        createElement("div", { className: "flex justify-between" },
          createElement("span", null, "Pathology"),
          createElement("span", null, "45%")
        )
      )
    )
  );
}
