export const ProjectCardCursor = ({ position, scale }) => {
  const style = {
    position: "fixed",
    top: position.y - 16,
    left: position.x - 16,
    transform: `scale(${scale})`,
    transition: "transform 0.1s ease-in-out",
  };
  return (
    <div className="projectCardCursor" style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path fill="#000" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z" />
      </svg>
    </div>
  );
};
