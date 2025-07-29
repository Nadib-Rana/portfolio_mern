import React from "react";
import type { IProject } from "../types/project";

interface Props {
  project: IProject;
  onDelete: (id: string) => void;
  onEdit: (project: IProject) => void;
}

const ProjectCard: React.FC<Props> = ({ project, onDelete, onEdit }) => (
  <div className="p-4 border rounded shadow">
    <img src={project.image} alt={project.title} className="w-full h-40 object-cover mb-2" />
    <h2 className="text-xl font-bold">{project.title}</h2>
    <p>{project.description}</p>
    <div className="mt-2 flex justify-between text-sm">
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        Visit Project
      </a>
      <div className="space-x-2">
        <button onClick={() => onEdit(project)} className="text-yellow-600">Edit</button>
        <button onClick={() => project._id && onDelete(project._id)} className="text-red-600">Delete</button>
      </div>
    </div>
  </div>
);

export default ProjectCard;