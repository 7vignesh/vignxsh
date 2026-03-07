import { Hero, About, Projects, Experience, Education, Skills } from '@/components/sections';
import { Footer } from '@/components/layout';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 space-y-20">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Footer />
    </main>
  );
}
