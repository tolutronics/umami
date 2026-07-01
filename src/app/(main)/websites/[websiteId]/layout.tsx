import type { Metadata } from 'next';
import { WebsiteLayout } from '@/app/(main)/websites/[websiteId]/WebsiteLayout';
import { APP_NAME } from '@/lib/constants';
import { getWebsite } from '@/queries/prisma';

export default async function ({
  children,
  modal,
  params,
}: {
  children: any;
  modal: React.ReactNode;
  params: Promise<{ websiteId: string }>;
}) {
  const { websiteId } = await params;
  const website = await getWebsite(websiteId);

  if (!website || website?.deletedAt) {
    return null;
  }

  return (
    <WebsiteLayout websiteId={websiteId}>
      {children}
      {modal}
    </WebsiteLayout>
  );
}

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `Websites | ${APP_NAME}`,
  },
};
