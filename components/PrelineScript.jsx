"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    // Dynamically import preline
    import("preline/preline")
      .then(() => {
        // Ensure HSStaticMethods is available before calling autoInit
        if (
          window.HSStaticMethods &&
          typeof window.HSStaticMethods.autoInit === "function"
        ) {
          window.HSStaticMethods.autoInit();
        } else {
          console.error("HSStaticMethods or autoInit is not defined.");
        }
      })
      .catch((err) => {
        console.error("Error importing preline:", err);
      });
  }, [path]);

  return null;
}
