import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">Artículo no encontrado.</p>
          <Link to="/blog" className="btn btn-primary">
            Volver al blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div>
      {/* Cabecera con imagen destacada */}
      <section className="bg-dark text-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-wide text-primary font-semibold mb-3">
              {post.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="text-sm text-gray-300 flex flex-wrap gap-3">
              <span>{post.date}</span>
              <span>· {post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-dark">
        <div className="container mx-auto px-4">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full max-h-[480px] object-cover"
          />
        </div>
      </section>

      {/* Contenido del artículo (placeholder) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {"content" in post && post.content ? (
            post.content
          ) : (
            <div className="prose prose-lg max-w-none">
              <p>
                Este es un contenido de ejemplo para el artículo del blog. Cuando
                tengamos los textos definitivos, sustituiremos este bloque por el
                contenido real del post.
              </p>
              <p>
                La estructura ya está preparada para que puedas compartir
                historias, aprendizajes de proyectos como{" "}
                <a
                  href="https://audiogretel.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  AudioGretel
                </a>{" "}
                u otros casos de éxito.
              </p>
            </div>
          )}

          <div className="mt-12">
            <Link to="/blog" className="btn btn-outline">
              ← Volver al blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;

