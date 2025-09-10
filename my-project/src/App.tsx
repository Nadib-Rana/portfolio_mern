// import About from "./components/About";
// import AchievementComponent from "./components/AchievementComponent";
// import AiChatBot from "./components/AiChatBot";
// import Bio from "./components/Biocomponent";
// import Contact from "./components/Contact";

// import EducationComponent from "./components/EducationComponent";
// import ExpertiseComponent from "./components/expertiseComponent";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import ProjectsComponent from "./components/projectsComponent";
// import TestimonialComponent from "./components/testimonial.component";



// const App = () => {
//   return (
//     <div>
//          <Navbar />
//          <br />
//          <Bio />
//          <About />
//          <EducationComponent />
//          <ExpertiseComponent />
//          <ProjectsComponent />
//          <AchievementComponent />
//          <TestimonialComponent />
//          <Contact />
//          <Footer />
//          <AiChatBot />   

//     </div>

//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import AchievementComponent from "./components/AchievementComponent";
import AiChatBot from "./components/AiChatBot";
import Bio from "./components/Biocomponent";
import Contact from "./components/Contact";
import EducationComponent from "./components/EducationComponent";
import ExpertiseComponent from "./components/expertiseComponent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectsComponent from "./components/projectsComponent";
import TestimonialComponent from "./components/testimonial.component";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import AuthLayout from "./components/AuthLayout";

const App = () => {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<EducationComponent />} />
        <Route path="/expertise" element={<ExpertiseComponent />} />
        <Route path="/projects" element={<ProjectsComponent />} />
        <Route path="/achievements" element={<AchievementComponent />} />
        <Route path="/testimonials" element={<TestimonialComponent />} />
        <Route path="/contact" element={<Contact />} />
        <Route  path="/amdin" element={<Admin />} />
        <Route 
  path="/auth" 
  element={
    <AuthLayout title="Authentication" subtitle="Welcome back!">
      {/* Replace this with your actual auth component */}
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Login or Register</h2>
        {/* You can import and use your login/signup form here */}
      </div>
    </AuthLayout>
  }
/>
      </Routes>
      <Footer />
      <AiChatBot />
    </Router>
  );
};

export default App;