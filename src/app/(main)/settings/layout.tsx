import type { Metadata } from 'next';
import { APP_NAME } from '@/lib/constants';
import { SettingsLayout } from './SettingsLayout';

export default function ({ children }) {
  if (process.env.cloudMode) {
    return null;
  }

  return <SettingsLayout>{children}</SettingsLayout>;
}

export const metadata: Metadata = {
  title: {
    template: `%s | Settings | ${APP_NAME}`,
    default: `Settings | ${APP_NAME}`,
  },
};
