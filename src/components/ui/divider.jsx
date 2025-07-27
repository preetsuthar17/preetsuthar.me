const Divider = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundImage:
          'repeating-linear-gradient(-45deg, #000 0 1px, transparent 1px 10px)',
        opacity: 1,
      }}
    />
  );
};

export { Divider };
