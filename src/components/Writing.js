import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Writing({ posts }) {
  return (
    <section className="flex w-full flex-col items-center gap-12 text-left">
      <div className="flex w-full flex-col gap-8">
        <h2 className="px-10 text-lg tracking-tight">Writing</h2>
        <div className="px-10">
          <ul className="group/blog-list flex w-full flex-col">
            {posts?.map((post, idx) => (
              <li
                className="group/blog-item flex w-full items-center justify-between gap-2 py-2 text-left transition-opacity duration-300 max-[590px]:flex-col max-[590px]:items-start"
                key={post.slug}
                onMouseEnter={(e) => {
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    Array.from(parent.children).forEach((li, i) => {
                      if (i !== idx) {
                        li.classList.add('opacity-40');
                      } else {
                        li.classList.remove('opacity-40');
                      }
                    });
                  }
                }}
                onMouseLeave={(e) => {
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    Array.from(parent.children).forEach((li) => {
                      li.classList.remove('opacity-40');
                    });
                  }
                }}
              >
                <Link
                  className="flex items-center justify-between gap-1 font-medium text-blue max-[590px]:w-full"
                  href={`/writing/${post.slug}`}
                >
                  {post.title}
                  <span>
                    <FiArrowUpRight size={18} />
                  </span>
                </Link>
                <p className="text-left opacity-80">
                  {(() => {
                    const date = new Date(post.date);
                    const day = date.getDate();
                    const month = date
                      .toLocaleString('en-US', { month: 'short' })
                      .toLowerCase();
                    const year = date.getFullYear();
                    return `${day} ${month}, ${year}`;
                  })()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
