import React from "react";
import  { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import type { IProject } from '../types/project';
const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [editing, setEditing] = useState<IProject | null>(null);

  const fetchProjects = async () => {
    const res = await axios.get("/api/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreateOrUpdate = async (project: IProject) => {
    if (editing && editing._id) {
      await axios.put(`/api/projects/${editing._id}`, project);
    } else {
      await axios.post("/api/projects", project);
    }
    setEditing(null);
    fetchProjects();
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`/api/projects/${id}`);
    fetchProjects();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Project Dashboard</h1>
      <ProjectForm onSubmit={handleCreateOrUpdate} initialData={editing || undefined} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
            onDelete={handleDelete}
            onEdit={setEditing}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;