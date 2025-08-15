import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

function H1({ children, className }: Props) {
  return (
    <h1 className={cn("text-3xl font-semibold", className)}>{children}</h1>
  );
}

function H2({ children, className }: Props) {
  return (
    <h2 className={cn("text-2xl font-semibold", className)}>{children}</h2>
  );
}

function H3({ children, className }: Props) {
  return <h3 className={cn("text-xl font-medium", className)}>{children}</h3>;
}

export { H1, H2, H3 };
