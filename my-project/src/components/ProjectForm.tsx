import React, { useState } from "react";
import type { IProject } from "../types/project";

interface Props {
  onSubmit: (project: IProject) => void;
  initialData?: IProject;
}

const ProjectForm: React.FC<Props> = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState<IProject>(
    initialData || { title: "", description: "", image: "", link: "" }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: "", description: "", image: "", link: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded shadow mb-6">
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border" required />
      <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border" />
      <input name="link" value={form.link} onChange={handleChange} placeholder="Project Link" className="w-full p-2 border" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{initialData ? "Update" : "Create"}</button>
    </form>
  );
};

export default ProjectForm;