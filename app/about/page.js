import { siteConfig } from "@/lib/config";
import AboutContent from "@/components/AboutContent";

export const metadata = {
  title: `About — ${siteConfig.appName}`,
  description: `Learn more about ${siteConfig.appName}, ${siteConfig.tagline}.`,
};

export default function AboutPage() {
  return <AboutContent />;
}
