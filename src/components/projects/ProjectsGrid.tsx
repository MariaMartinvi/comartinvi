import { useState } from 'react';
import ProjectCard, { type ProjectType } from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectsGridProps {
  projects: ProjectType[];
}

type FilterCategory = 'todos' | string;

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('todos');

  // Extract unique categories from projects
  const allCategories = ['todos', ...new Set(projects.flatMap(project => project.categories))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'todos'
    ? projects
    : projects.filter(project => project.categories.includes(selectedCategory));

  return (
    <div>
      {/* Filter buttons */}
      <div className="mb-8 overflow-x-auto pb-2">
        <div className="flex space-x-4">
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`filter-button whitespace-nowrap ${selectedCategory === category ? 'active' : ''}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectsGrid;
