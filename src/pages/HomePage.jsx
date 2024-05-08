// components
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Projects from "../components/Projects";
import Skill from "../components/Skill";

function HomePage() {
  return (
    <div id="homepage" className="dark:bg-black">
    <div className="max-w-7xl mx-auto space-y-10 md:space-y-20 p-5 xl:p-0">
      <Header />
      <Presentation />
      <Projects />
      <Skill />
      <Contact />
      <Footer />
    </div>
    </div>
  )
}

export default HomePage;
