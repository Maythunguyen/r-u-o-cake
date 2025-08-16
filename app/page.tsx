import About from "@/components/About";
import Hero from "@/components/Hero";
import { OurNavBar } from "@/components/NavBar";
import Team from "@/components/Team";

export default function Home() {
    return (
        <main>
            <OurNavBar />
            <Hero />
            <About />
            <Team />
        </main>
    );
};
