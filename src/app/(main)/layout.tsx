import type { Metadata } from 'next';
import { Suspense } from 'react';
import { APP_NAME } from '@/lib/constants';
import { App } from './App';

export default function ({ children }) {
  return (
    <Suspense>
      <App>{children}</App>
    </Suspense>
  );
}

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
};
