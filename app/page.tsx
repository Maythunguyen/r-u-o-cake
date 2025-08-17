import About from "@/components/About";
import ConnectWithUs from "@/components/ConnectWithUs";
import Contact from "@/components/Contact";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { OurNavBar } from "@/components/NavBar";
import TalkAbout from "@/components/TalkAbout";
import Team from "@/components/Team";
import WhereToListen from "@/components/WhereToListen";

export default function Home() {
    return (
        <main>
            <OurNavBar />
            <Hero />
            <About />
            <Team />
            <WhereToListen />
            <TalkAbout />
            <ConnectWithUs />
            <Feedback />
            <Contact />
            <Footer />
        </main>
    );
};
