import { BentoGrid, BentoGridItem } from "@/components/home/BentoGridItem";
import Clients from "@/components/home/Clients";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import RecentProjects from "@/components/home/RecentProjects";
import Resume from "@/components/home/Resume";
import { FloatingNav } from "@/components/ui/floating-nav";
import { gridItems, navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />

        <section id="about">
          <BentoGrid className="w-full py-20">
            {gridItems.map((item, i) => (
              <BentoGridItem
                id={item.id}
                key={i}
                title={item.title}
                description={item.description}
                className={item.className}
                img={item.img}
                imgClassName={item.imgClassName}
                titleClassName={item.titleClassName}
                spareImg={item.spareImg}
              />
            ))}
          </BentoGrid>
        </section>

        <RecentProjects />
        <Clients />
        <Resume />
        <Footer />

      </div>
    </main>
  );
}
