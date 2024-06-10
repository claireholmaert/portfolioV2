// components
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

function App() {

  return (
    <div id="homepage" className="text-black dark:bg-slate-900 dark:text-amber-50" >
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

export default App;
