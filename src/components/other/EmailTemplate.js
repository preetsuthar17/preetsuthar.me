export const EmailTemplate = ({
    name,
    email,
    description,
  }) => {
    return (
      <div>
      <p>Email from {email} | name - {name}</p>
      <p>{description}</p>
      </div>
    )
  }