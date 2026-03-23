import { motion } from "framer-motion";
import BlogGrid from "../components/blog/BlogGrid";
import { blogPosts } from "../data/blogPosts";

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
          <BlogGrid posts={blogPosts} />
        </div>
      </section>
    </div>
  );
};

export default BlogListPage;

