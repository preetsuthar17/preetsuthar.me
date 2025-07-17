"use client";

import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";

import saas from "@/data/saas";

export default function work() {
  return (
    <>
      <article className="flex justify-between flex-col flex-wrap text-left font-medium relative">
        {/* Cross repeating line pattern background */}

        <div className="flex justify-between flex-col gap-24 text-left relative z-10">
          <div className="flex flex-col items-center w-full justify-between text-left gap-6 px-10">
            {/* SaaS list with hover muting effect */}
            <ul className="flex flex-col w-full group/saas-list">
              {saas.map((saas, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-left gap-2 w-full justify-between max-[590px]:flex-col max-[590px]:items-start group/saas-item transition-opacity duration-300 py-2"
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
                    className="flex items-center gap-1 font-medium justify-between text-[var(--blue-color)]  max-[590px]:w-full"
                    target="_blank"
                    href={saas.link}
                  >
                    {saas.title}
                    <FiArrowUpRight size={18} />
                  </Link>
                  <p className="opacity-80">{saas.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
