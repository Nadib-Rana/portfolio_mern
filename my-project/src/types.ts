export interface Bio{
   name: string;
  description: string;
  title: string;
  socialMediaIcon: string;
  socialMediaLink: string;
  profilePic: string;
}



export interface NavLink {
  name: string;
  href: string;
}



export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Experience {
  detail: string;
  year: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface AcademicFocus {
  name: string;
  icon: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  href?: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/Nadib-Rana', icon: 'https://atechitsolution.com/wp-content/uploads/2024/12/GitHub.png' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nadib-rana-72923430a/', icon: 'https://creativezethdesigns.com/wp-content/uploads/2024/12/icons8-linkedin.gif' },
  { name: 'Upwork', href: 'https://www.upwork.com/freelancers/~014767b60367b4c940', icon: 'https://atechitsolution.com/wp-content/uploads/2024/12/Upwork.png' },
  { name: 'Fiverr', href: 'https://www.fiverr.com/codecrafersrana/buying?source=avatar_menu_profile', icon: 'https://atechitsolution.com/wp-content/uploads/2024/12/fiverr1.png' },
  { name: 'Kwork', href: 'https://kwork.com/user/codecrafersnadib', icon: 'https://atechitsolution.com/wp-content/uploads/2024/12/Kwork.png' },
  { name: 'Facebook', href: 'https://www.facebook.com/nadib.rana/', icon: 'https://creativezethdesigns.com/wp-content/uploads/2024/12/icons8-facebook.gif' },
  { name: 'Instagram', href: 'https://www.instagram.com/nadibrana9/?hl=en', icon: 'https://creativezethdesigns.com/wp-content/uploads/2024/12/icons8-instagram-logo.gif' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCNCUV3R8_VeOKKOr6ndUkkw', icon: 'https://atechitsolution.com/wp-content/uploads/2024/11/Youtube-Round.png' },
];

export const experience: Experience[] = [
  { detail: 'Web Design at GUB', year: '2022' },
  { detail: 'Web Development at GUB', year: '2022' },
  { detail: 'Software Design at GUB', year: '2023' },
];

export const education: Experience[] = [
  { detail: 'BSc in CSE at GUB', year: '2025' },
  { detail: 'HSE at KGC', year: '2020' },
  { detail: 'SSC at GAHSC', year: '2017' },
];

export const projects: Project[] = [
  { title: 'Portfolio Website', description: 'A fully responsive personal portfolio website to showcase skills and projects.', image: '/5ff.jpg', link: 'https://github.com/Nadib-Rana' },
  { title: 'Online Bookshop', description: 'An e-commerce platform for students to buy books online.', image: '/Project_logo/project2.jpg', link: 'https://github.com/Nadib-Rana' },
  { title: 'Food Delivery App', description: 'A mobile app for ordering food from local restaurants.', image: '/Project_logo/project3.png', link: 'https://github.com/Nadib-Rana' },
  { title: 'Focused Tracking', description: 'A task manager app that helps organize and schedule tasks efficiently.', image: '/Project_logo/project4.jpg', link: 'https://github.com/Nadib-Rana/focusedtracking' },
  { title: 'Fitness Tracker', description: 'An app that tracks fitness activities and provides personalized recommendations.', image: '/Project_logo/project5.png', link: 'https://github.com/Nadib-Rana' },
  { title: 'Weather App', description: 'A weather app that provides real-time weather data for any location.', image: '/Project_logo/project5.jpg', link: 'https Ur://github.com/Nadib-Rana' },
];

export const coreCompetencies: Skill[] = [
  { name: 'Web Development', level: 88 },
  { name: 'Data Structures & Algorithms', level: 88 },
  { name: 'Object-Oriented Programming', level: 85 },
  { name: 'Database Systems', level: 82 },
];

export const technicalStack: string[] = [
  'C++', 'Python', 'Java', 'SQL', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Linux', 'Git', 'LaTeX',
];

export const academicFocus: AcademicFocus[] = [
  { name: 'Machine Learning Fundamentals', icon: 'fa-brain' },
  { name: 'Cybersecurity Basics', icon: 'fa-shield-alt' },
  { name: 'Computer Networks', icon: 'fa-network-wired' },
  { name: 'OS & Distributed Systems', icon: 'fa-cogs' },
  { name: 'Information Systems Development', icon: 'fa-database' },
  { name: 'Integrated Design Project', icon: 'fa-project-diagram' },
];

export const uiuxDesign: AcademicFocus[] = [
  { name: 'Figma', icon: 'fa-figma' },
  { name: 'Canva', icon: 'fa-paint-brush' },
  { name: 'WordPress', icon: 'fa-wordpress' },
];

export const sqa: AcademicFocus[] = [
  { name: 'Selenium', icon: 'fa-tools' },
  { name: 'JIRA', icon: 'fa-tasks' },
  { name: 'Agile Testing', icon: 'fa-code-branch' },
];

export const contactInfo: ContactInfo[] = [
  { label: 'Phone', value: '+880 1567-823568', href: 'tel:+8801567823568', icon: 'https://cdn-icons-png.flaticon.com/512/15/15874.png' },
  { label: 'Mobile', value: '+880 1567-823568', href: 'tel:+8801567823568', icon: 'https://cdn-icons-png.flaticon.com/512/893/893292.png' },
  { label: 'Email', value: 'codecrafersnadib@gmail.com', href: 'mailto:codecrafersnadib@gmail.com', icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png' },
  { label: 'Website', value: 'nadibrana.com', href: 'https://github.com/Nadib-Rana', icon: 'https://cdn-icons-png.flaticon.com/512/3144/3144035.png' },
  { label: 'Location', value: 'Dhaka, Bangladesh', icon: 'https://cdn-icons-png.flaticon.com/512/535/535188.png' },
];