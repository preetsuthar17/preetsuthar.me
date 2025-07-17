"use client";

import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";

import saas from "@/data/saas";

export default function work() {
  return (
    <>
      <section className="flex flex-col gap-24 text-left items-center w-full">
        <div className="flex flex-col gap-8 w-full">
          <h2 className="tracking-tight text-lg px-10">Work</h2>
          <div className="px-10">
            {/* SaaS list with hover muting effect */}
            <ul className="flex flex-col w-full group/saas-list">
              {saas.map((saas, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    window.open(`${saas.link}`);
                  }}
                  className="flex items-center text-left gap-2 w-full justify-between max-[590px]:flex-col max-[590px]:items-start group/saas-item transition-opacity cursor-pointer duration-300 py-2"
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
                  <p className="flex items-center gap-1 font-medium justify-between text-[var(--blue-color)]  max-[590px]:w-full">
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
    </>
  );
}
