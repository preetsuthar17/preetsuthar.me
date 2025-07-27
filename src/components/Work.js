'use client';

import { FiArrowUpRight } from 'react-icons/fi';

import saas from '@/data/saas';

export default function work() {
  return (
    <section className="flex w-full flex-col items-center gap-24 text-left">
      <div className="flex w-full flex-col gap-8">
        <h2 className="px-10 text-lg tracking-tight">Work</h2>
        <div className="px-10">
          {/* SaaS list with hover muting effect */}
          <ul className="group/saas-list flex w-full flex-col">
            {saas.map((saas, idx) => (
              <li
                className="group/saas-item flex w-full cursor-pointer items-center justify-between gap-2 py-2 text-left transition-opacity duration-300 max-[590px]:flex-col max-[590px]:items-start"
                key={idx}
                onClick={() => {
                  window.open(`${saas.link}?ref=preetsuthar.me`, '_blank');
                }}
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
                <p className="flex items-center justify-between gap-1 font-medium text-[var(--blue-color)] max-[590px]:w-full">
                  {saas.title}
                  <FiArrowUpRight size={18} />
                </p>
                <p className="opacity-80">{saas.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
