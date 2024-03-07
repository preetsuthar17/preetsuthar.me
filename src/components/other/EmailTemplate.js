export const EmailTemplate = ({
  name,
  email,
  budgetAmount,
  selectedServices,
  description,
}) => {
  return (
    <div>
      <p style={{ fontSize: "1.2em", fontWeight: "bold" }}>
        Email from {email} | Name - {name}
      </p>
      <p style={{ fontSize: "1em", margin: "10px 0" }}>
        Their budget - <span style={{ fontWeight: "500" }}>{budgetAmount}</span>
      </p>
      <p style={{ fontSize: "1em", margin: "10px 0" }}>
        Wanted Service(s) -{" "}
        <span style={{ fontWeight: "500" }}>{selectedServices.join(", ")}</span>
      </p>
      <blockquote
        style={{ fontSize: "1em", margin: "10px 0", fontWeight: "500" }}
      >
        {description}
      </blockquote>
    </div>
  );
};
