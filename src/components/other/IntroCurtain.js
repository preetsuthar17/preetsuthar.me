import gsap from "gsap";

export const IntroCurtain = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="intro-curtain">
      <h1>Preet Suthar</h1>
      <p>&copy; {year}</p>
    </div>
  );
};
