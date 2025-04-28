import React, { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: ReactNode;
}
interface CardHeaderProps {
  className?: string;
  children: ReactNode;
}
interface CardTitleProps {
  className?: string;
  children: ReactNode;
}
interface CardDescriptionProps {
  className?: string;
  children: ReactNode;
}
interface CardContentProps {
  className?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/10 backdrop-blur-lg shadow-2xl p-6 transition-transform duration-300 hover:scale-105 hover:border-white/20",
        className
      )}
    >
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardHeaderProps> = ({ className, children }) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {children}
    </div>
  );
};

const CardTitle: React.FC<CardTitleProps> = ({ className, children }) => {
  return (
    <h3 className={cn("text-xl font-bold text-white", className)}>
      {children}
    </h3>
  );
};

const CardDescription: React.FC<CardDescriptionProps> = ({ className, children }) => {
  return (
    <p className={cn("text-sm text-gray-300", className)}>
      {children}
    </p>
  );
};

const CardContent: React.FC<CardContentProps> = ({ className, children }) => {
  return (
    <div className={cn("mt-4 space-y-2", className)}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
