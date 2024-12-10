import { About } from "./_components/about";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
    </>
  );
}
