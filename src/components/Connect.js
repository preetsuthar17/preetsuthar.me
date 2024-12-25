import Link from "next/link";

const Connect = () => {
  return (
    <>
      <section className="flex flex-col gap-6">
        <h2 className="font-medium">Connect with me</h2>
        <p>
          <span className="opacity-80">Reach me at</span>{" "}
          <Link className="underline" href="https://x.com/nott_preett">
            @nott_preett
          </Link>{" "}
          <span className="opacity-80">or mail me at</span>{" "}
          <Link className="underline" href="mailto:hi@preetsuthar.me">
            hi@preetsuthar.me
          </Link>
        </p>
      </section>
    </>
  );
};

export default Connect;