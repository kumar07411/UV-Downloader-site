import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import Screenshots from "@/components/Screenshots";
import Features from "@/components/Features";
import { getLatestRelease } from "@/lib/github";

export const revalidate = 300; // har 5 minute me GitHub se fresh data

export default async function HomePage() {
  const release = await getLatestRelease();

  return (
    <>
      <Hero release={release} />
      <Screenshots />
      <Platforms />
      <Features />
    </>
  );
}
