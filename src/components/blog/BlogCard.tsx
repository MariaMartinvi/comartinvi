import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <motion.article
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-gray-500 mb-3 gap-3">
          <span className="uppercase tracking-wide text-primary font-semibold">
            {post.category}
          </span>
          <span>|</span>
          <span>{post.date}</span>
          <span>· {post.readTime}</span>
        </div>

        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-primary font-medium text-sm mt-auto"
        >
          Leer más
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;

