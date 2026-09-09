import SponsorSite from '../components/SponsorSite';
import { getSiteContent } from '../lib/sanity';

export const revalidate = 60;

export default async function Page() {
  const content = await getSiteContent();
  return <SponsorSite content={content} />;
}
