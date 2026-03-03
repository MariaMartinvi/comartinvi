import { motion } from "framer-motion";
import BlogGrid from "../components/blog/BlogGrid";
import type { BlogPost } from "../components/blog/BlogCard";

// Por ahora usamos posts de ejemplo; luego los sustituiremos por los reales
const samplePosts: BlogPost[] = [
  {
    id: 1,
    slug: "primer-articulo-ejemplo",
    title: "Primer artículo de ejemplo",
    excerpt:
      "Este es un texto de muestra para el blog de Comartinvi. Aquí podrás compartir historias, casos de éxito y reflexiones.",
    category: "Inspiración",
    date: "Marzo 2026",
    readTime: "4 min",
    imageUrl: "/pans.jpg",
  },
  {
    id: 2,
    slug: "segundo-articulo-ejemplo",
    title: "Segundo artículo de ejemplo",
    excerpt:
      "Otro ejemplo de artículo para mostrar la estructura del blog, con imagen, categoría, fecha y tiempo de lectura.",
    category: "Proyectos",
    date: "Marzo 2026",
    readTime: "3 min",
    imageUrl: "/freud.jpg",
  },
];

const BlogListPage = () => {
  return (
    <div>
      {/* Header / Hero del blog */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-200">
              Historias, proyectos y aprendizajes desde la agencia. Un espacio
              para compartir lo que hacemos y cómo lo hacemos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Listado de artículos */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <BlogGrid posts={samplePosts} />
        </div>
      </section>
    </div>
  );
};

export default BlogListPage;

