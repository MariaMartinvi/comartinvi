import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { ProjectType } from '../components/projects/ProjectCard';
import ProjectsGrid from '../components/projects/ProjectsGrid';

// Sample projects data
const featuredProjects: ProjectType[] = [
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

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Diseñamos experiencias creativas que conectan con las personas</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Somos Comartinvi, una agencia creativa con grandes clientes y una diversidad de proyectos
              que reflejan nuestra pasión por el diseño y la comunicación.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Hablemos de tu proyecto
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Proyectos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Echa un vistazo a nuestro portfolio. Comartinvi es una Agencia Creativa con grandes clientes y una gran
              diversidad de proyectos que reflejan la polivalencia, creatividad y pasión de nuestro equipo.
            </p>
          </div>

          <ProjectsGrid projects={featuredProjects} />

          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-outline">
              Ver todos los proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://ext.same-assets.com/543785121/3467343125.jpeg"
                alt="About Comartinvi"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nosotros</h2>
              <p className="text-lg mb-6">
                Comartinvi es una agencia creativa especializada en diseño, comunicación y contenidos.
                Trabajamos online y offline, tanto con negocios familiares como con grandes marcas.
              </p>
              <p className="text-lg mb-8">
                Somos expertos en gastronomía, estilo de vida y tendencias, creando estrategias efectivas
                y ejecutándolas con pasión y creatividad.
              </p>
              <Link to="/about" className="btn btn-primary">
                Conoce más sobre nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales para las necesidades de tu marca o negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Diseño', description: 'Creación de identidades de marca, materiales gráficos y diseño web.' },
              { title: 'Comunicación', description: 'Estrategias de comunicación, gestión de redes sociales y relaciones públicas.' },
              { title: 'Contenidos', description: 'Creación de contenido editorial, fotográfico y audiovisual para diversas plataformas.' },
              { title: 'Audiovisual', description: 'Producción de vídeos, fotografía y contenido multimedia de alta calidad.' },
              { title: 'Digital', description: 'Gestión de presencia online, marketing digital y optimización de conversión.' },
              { title: 'Producción', description: 'Producción de eventos, sesiones fotográficas y proyectos especiales.' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 shadow-lg rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para empezar tu proyecto?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contacta con nosotros para hablar sobre cómo podemos ayudarte a llevar tu idea al siguiente nivel.
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Contactar ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
