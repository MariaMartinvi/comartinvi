import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Comartinvi</h4>
            <p className="mb-4">
              Somos una agencia creativa con grandes clientes y una gran
              diversidad de proyectos que reflejan la polivalencia,
              creatividad y pasión de nuestro equipo.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  La Agencia
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-primary transition-colors">
                  Proyectos
                </Link>
              </li>

              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contacto</h4>
            <address className="not-italic">
              <p className="mb-2">Marti 136</p>
              <p className="mb-2">08024 Barcelona</p>
              <p className="mb-2">España</p>

              <p>
                <a href="mailto:info@comartinvi.com" className="text-gray-300 hover:text-primary transition-colors">
                  info@comartinvi.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Comartinvi. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
