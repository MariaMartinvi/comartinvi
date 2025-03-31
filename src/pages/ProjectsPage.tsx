import { motion } from 'framer-motion';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import type { ProjectType } from '../components/projects/ProjectCard';

// Sample projects data - in a real app this would come from an API or CMS
const allProjects: ProjectType[] = [
  {
    id: 1,
    title: 'Mi Cuentacuentos',
    imageUrl: '/public/cuentacuentos.jpg',
    categories: ['comunicación', 'contenidos', 'diseño'],
    slug: 'cuentacuentos'
  },
  {
    id: 2,
    title: 'Wasapeo',
    imageUrl: '/public/freud.jpg',
    categories: ['diseño'],
    slug: 'wasapeo'
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
              Echa un vistazo a nuestro portfolio. Comartinvi es una Agencia Creativa con grandes clientes y una gran
              diversidad de proyectos que reflejan la polivalencia, creatividad y pasión de nuestro equipo de diseño,
              comunicación y contenidos. Online y offline.
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
