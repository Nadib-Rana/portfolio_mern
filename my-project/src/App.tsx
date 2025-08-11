import About from "./components/About";
import AchievementComponent from "./components/AchievementComponent";
import Bio from "./components/Biocomponent";
import Contact from "./components/Contact";

import EducationComponent from "./components/EducationComponent";
import ExpertiseComponent from "./components/expertiseComponent";
import ProjectsComponent from "./components/projectsComponent";
import TestimonialComponent from "./components/testimonial.component";



const App = () => {
  return (
    <div>
         <Bio />
         <About />
         <EducationComponent />
         <ExpertiseComponent />
         <ProjectsComponent />
         <AchievementComponent />
         <TestimonialComponent />
         <Contact />
    </div>
  );
};

export default App;