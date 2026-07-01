import type { Metadata } from 'next';
import { APP_NAME } from '@/lib/constants';
import { AdminLayout } from './AdminLayout';

export default function ({ children }) {
  if (process.env.cloudMode) {
    return null;
  }

  return <AdminLayout>{children}</AdminLayout>;
}

export const metadata: Metadata = {
  title: {
    template: `%s | Admin | ${APP_NAME}`,
    default: `Admin | ${APP_NAME}`,
  },
};
