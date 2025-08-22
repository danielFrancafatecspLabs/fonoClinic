declare module 'react-dom/client' {
  import { ReactNode } from 'react';
  export function createRoot(container: Element | null): {
    render: (children: ReactNode) => void;
  };
}