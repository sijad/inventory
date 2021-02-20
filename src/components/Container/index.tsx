import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps): JSX.Element {
  return <div className="container px-4 mx-auto">{children}</div>;
}
