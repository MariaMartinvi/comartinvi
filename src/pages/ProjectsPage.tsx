import { motion } from 'framer-motion';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import type { ProjectType } from '../components/projects/ProjectCard';

// Sample projects data - in a real app this would come from an API or CMS
const allProjects: ProjectType[] = [
  {
    id: 1,
    title: 'Audiogretel',
    imageUrl: '/audiogretel.JPG',
    categories: ['comunicación', 'contenidos', 'diseño'],
    slug: 'audiogretel',
    websiteUrl: 'https://audiogretel.com' // Add your website URL here
  },
  {
    id: 2,
    title: 'Chatsalsa',
    imageUrl: '/freud.jpg',
    categories: ['diseño'],
    slug: 'chatsalsa',
    websiteUrl: 'https://chatsalsa.com' // Add your website URL here
  },
  {
    id: 3,
    title: 'Rankcoworker',
    imageUrl: '/rankcoworker.jpg',
    categories: ['diseño', 'operaciones'],
    slug: 'rankcoworker',
    websiteUrl: 'https://rankcoworker.com'
  },
  {
    id: 4,
    title: 'Anycoworker',
    imageUrl: '/anycoworker.jpg',
    categories: ['diseño', 'comunicación'],
    slug: 'anycoworker',
    websiteUrl: 'https://www.anycoworker.com'
  },
  {
    id: 5,
    title: 'Informe.pro',
    imageUrl: '/inorme.jpg',
    categories: ['sector financiero', 'diseño'],
    slug: 'informe-pro',
    websiteUrl: 'https://www.inorme.pro'
  }
];

const ProjectsPage = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Proyectos</h1>
            <p className="text-xl">
              Echa un vistazo a nuestro portfolio. Comartinvi es una Agencia Tecnológica con grandes clientes y una gran
              diversidad de proyectos que reflejan la polivalencia, creatividad y pasión de nuestro equipo de diseño,
              comunicación y operaciones Online y offline.
            </p>
            <p className="text-xl mt-4">
              Somos expertos en gastronomía, estilo de vida y tendencias. Trabajamos desde la estrategia a su
              ejecución, tanto con negocios familiares como con grandes marcas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ProjectsGrid projects={allProjects} />
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
