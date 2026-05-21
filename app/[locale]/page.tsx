import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Stack } from "@/components/Stack";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { Footer } from "@/components/Footer";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav locale={locale} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Stack />
        <ProjectsPreview />
      </main>
      <Footer />
    </>
  );
}
