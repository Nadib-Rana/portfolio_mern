import About from "./components/About";
import AchievementComponent from "./components/AchievementComponent";
import AiChatBot from "./components/AiChatBot";
import Bio from "./components/Biocomponent";
import Contact from "./components/Contact";

import EducationComponent from "./components/EducationComponent";
import ExpertiseComponent from "./components/expertiseComponent";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import ProjectsComponent from "./components/projectsComponent";
import SignupForm from "./components/SignupForm";
import TestimonialComponent from "./components/testimonial.component";



const App = () => {
  return (
    <div>
         <Navbar />
         <br />
         <Bio />
         <About />
         <EducationComponent />
         <ExpertiseComponent />
         <ProjectsComponent />
         <AchievementComponent />
         <TestimonialComponent />
         <Contact />
         <Footer />
         <AiChatBot />
         < SignupForm />
         <LoginForm />
         
    </div>
  );
};

export default App;