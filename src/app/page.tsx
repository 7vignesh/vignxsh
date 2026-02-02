import { Navigation, Footer } from '@/components/layout';
import { Hero, About, Projects, Experience, Education, Contact } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
