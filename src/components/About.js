import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="flex flex-col gap-6">
        <h2 className="font-medium">Currently</h2>
        <div className="flex flex-col gap-4 text-black/80 text-justify">
          <p>
            Focusing on YouTube channels and trying to create videos to provide
            value to other developers and solo entrepreneurs.
          </p>
          <p>
            I'm learning more about SaaS and Startups. Trying to launch Startups
            as fast as possible to avoid burnout also while managing my{" "}
            <Link
              href="https://hextastudio.in"
              target="_blank"
              className="text-black underline"
            >
              web design agency
            </Link>
            .
          </p>
          <p>
            I want to scale HextaStudio and achieve a mini milestone of $10k
            MRR.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
