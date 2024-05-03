// components
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Projects from "../components/Projects";
import Skill from "../components/Skill";

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-20">
      <Header />
      <Presentation />
      <Projects />
      <Skill />
    </div>
  )
}

export default HomePage;
