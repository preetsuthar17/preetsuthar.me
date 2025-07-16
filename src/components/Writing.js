import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function Writing({ posts }) {
  return (
    <div className="flex flex-col items-center w-full justify-between text-left gap-6 px-10">
      <ul className="flex flex-col w-full group/blog-list">
        {posts?.map((post, idx) => (
          <li
            key={post.slug}
            className="flex items-center text-left gap-2 w-full justify-between max-[590px]:flex-col max-[590px]:items-start group/blog-item transition-opacity duration-300 py-2"
            onMouseEnter={(e) => {
              const parent = e.currentTarget.parentElement;
              if (parent) {
                Array.from(parent.children).forEach((li, i) => {
                  if (i !== idx) li.classList.add("opacity-40");
                  else li.classList.remove("opacity-40");
                });
              }
            }}
            onMouseLeave={(e) => {
              const parent = e.currentTarget.parentElement;
              if (parent) {
                Array.from(parent.children).forEach((li) => {
                  li.classList.remove("opacity-40");
                });
              }
            }}
          >
            <Link
              className="flex items-center gap-1 font-medium justify-between text-[var(--blue-color)] max-[590px]:w-full"
              href={`/writing/${post.slug}`}
            >
              {post.title}
              <span>
                <FiArrowUpRight size={18} />
              </span>
            </Link>
            <p className="opacity-80 text-left">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
