import { Contact } from "lucide-react";
import About from "../components/About";
import AchievementComponent from "../components/AchievementComponent";
import Bio from "../components/Biocomponent";
import EducationComponent from "../components/EducationComponent";
import ExpertiseComponent from "../components/expertiseComponent";
import Navbar from "../components/Navbar";
import ProjectsComponent from "../components/projectsComponent";
import TestimonialComponent from "../components/testimonial.component";
import Footer from "../components/Footer";
import AiChatBot from "../components/AiChatBot";

const Profile = () => {
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
    </div>

  );
};

export default Profile;