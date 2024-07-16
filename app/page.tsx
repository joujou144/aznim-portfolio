import { Hero, Intro, RecentProject, Testimonials } from "@/components/home";
import { Footer } from "@/components";

export default function Home() {
  return (
    <main className="max-w-[93rem] mx-auto bg-gray-50">
      <Hero />
      <Intro />
      <RecentProject />
      <Testimonials />
      <Footer />
    </main>
  );
}
