import  { useEffect, useState } from 'react';
import axios from 'axios';
import type { IProject } from '../types/project';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/project')
      .then(res => setProjects(res.data))
      .catch(err => console.error('Error fetching projects:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading Projects...</div>;
  if (projects.length === 0) return <div>No projects found.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
          onDelete={() => {}} 
          onEdit={() => {}}   
        />
      ))}
    </div>
  );
};

export default ProjectList;