import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface ProjectType {
  id: number;
  title: string;
  imageUrl: string;
  categories: string[];
  slug: string;
  websiteUrl?: string; // Optional external website URL
}

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardContent = (
    <div className="relative h-full">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="project-card-overlay">
        <h5 className="text-lg font-semibold">{project.title}</h5>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.categories.map((category) => (
            <span key={`${project.id}-${category}`} className="text-xs opacity-80">
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      className="project-card aspect-[4/3] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      {project.websiteUrl ? (
        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {cardContent}
        </a>
      ) : (
        <Link to={`/projects/${project.slug}`} className="block h-full">
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
};

export default ProjectCard;
