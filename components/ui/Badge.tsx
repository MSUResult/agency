import React, { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "default" | "secondary";
  className?: string;
  children: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant = "default", className, children }) => {
  let baseClasses = "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide shadow-sm transition-all duration-300";
  let variantClasses = "";

  if (variant === "secondary") {
    variantClasses = "bg-gradient-to-r from-purple-500 to-blue-500 text-white";
  } else {
    variantClasses = "bg-slate-700/40 text-gray-300 border border-white/10";
  }

  const combinedClasses = cn(baseClasses, variantClasses, className);

  return (
    <span className={combinedClasses}>
      {children}
    </span>
  );
};

export default Badge;
