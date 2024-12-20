import Link from "next/link";

export const Freelancer = () => {
  const services = [
    {
      title: "Design & Development",
      description:
        "Custom websites, landing pages, and web applications built with modern technologies.",
    },
    {
      title: "Performance & SEO",
      description:
        "Fast, optimized websites that rank well and provide excellent user experience.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Regular updates, security patches, and technical support to keep your site running smoothly.",
    },
  ];

  return (
    <section className="flex flex-col py-8">
      <div className="flex flex-col gap-6">
        <h2 className="px-4 text-3xl h2 old-standard-fonts font-medium tracking-tight">
          Services
        </h2>

        <div className="px-4">
          <p className="text-[14px] text-neutral-600 dark:text-neutral-400">
            Focused on delivering clean, efficient, and user-friendly web
            solutions.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800">
          {services.map((service, index) => (
            <div
              key={index}
              className="px-4 py-6 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
            >
              <h3 className="text-lg font-medium mb-2">{service.title}</h3>
              <p className="text-[14px] text-neutral-600 dark:text-neutral-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
