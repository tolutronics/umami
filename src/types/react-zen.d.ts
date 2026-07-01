import { ReactNode } from 'react';
import '@spectra/react-zen';

declare module '@spectra/react-zen' {
  interface SelectProps {
    children?: ReactNode;
  }

  interface TooltipProps {
    children?: ReactNode;
  }
}
