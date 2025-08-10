import AchievementComponent from "./components/achievementComponent";
import BioComponent from "./components/BioComponent";
import Contact from "./components/Contact";

import EducationComponent from "./components/EducationComponent";
import ExpertiseComponent from "./components/expertiseComponent";
import ProjectsComponent from "./components/projectsComponent";
import TestimonialComponent from "./components/testimonial.component";



const App = () => {
  return (
    <div>
       <BioComponent />
       <ProjectsComponent />
       <ExpertiseComponent />
        <EducationComponent />
         <AchievementComponent />
         <TestimonialComponent />
         <Contact />
         
    </div>
  );
};

export default App;