import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">La Agencia</h1>
            <p className="text-xl">
              Comartinvi es una agencia creativa con grandes clientes y una diversidad de proyectos
              que reflejan nuestra pasión por el diseño, comunicación y contenidos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/pans.jpg"
                alt="About Comartinvi"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">Nuestra historia</h2>
              <p className="text-lg mb-4">
                Desde nuestros inicios, hemos estado comprometidos con la creación de experiencias
                de marca únicas y memorables. Fundada por un equipo de profesionales apasionados
                por el diseño y la comunicación, Comartinvi ha crecido para convertirse en una
                agencia de referencia en el sector.
              </p>
              <p className="text-lg mb-6">
                Entendemos que cada proyecto es único y merece un enfoque personalizado. Por eso,
                trabajamos estrechamente con nuestros clientes para entender sus necesidades y
                objetivos, y desarrollar soluciones creativas que superan sus expectativas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros valores</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Los valores que guían nuestro trabajo día a día y definen quiénes somos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Creatividad',
                description: 'Pensamos fuera de la caja para ofrecer soluciones innovadoras que destacan en el mercado.'
              },
              {
                title: 'Compromiso',
                description: 'Nos involucramos profundamente en cada proyecto, considerándolo como propio.'
              },
              {
                title: 'Calidad',
                description: 'Nos esforzamos por la excelencia en cada detalle, garantizando resultados de primera.'
              },
              {
                title: 'Colaboración',
                description: 'Trabajamos mano a mano con nuestros clientes, formando equipos sólidos.'
              },
              {
                title: 'Adaptabilidad',
                description: 'Nos adaptamos rápidamente a los cambios y nuevas tendencias del mercado.'
              },
              {
                title: 'Pasión',
                description: 'Amamos lo que hacemos, y eso se refleja en nuestro trabajo y resultados.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 shadow-lg rounded-lg text-center"
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros servicios</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios para cubrir todas las necesidades de tu marca.
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
                className="bg-white bg-opacity-10 p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quieres trabajar con nosotros?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Estamos listos para ayudarte a llevar tu marca al siguiente nivel con soluciones creativas y efectivas.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
