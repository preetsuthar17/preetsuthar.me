import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");

  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }

    console.log(selectedServices);
  };

  const toggleBudget = (budget, amount) => {
    if (selectedBudget === budget) {
      setSelectedBudget("");
      setBudgetAmount("");
    } else {
      setSelectedBudget(budget);
      setBudgetAmount(amount);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !name ||
      !email ||
      !description ||
      selectedServices.length === 0 ||
      !selectedBudget
    ) {
      if (!name) document.getElementById("name").classList.add("invalid");
      if (!email)
        document.getElementById("email-address").classList.add("invalid");
      if (!description)
        document.getElementById("description").classList.add("invalid");
      if (selectedServices.length === 0)
        document.getElementById("services").classList.add("invalid");
      if (!selectedBudget)
        document.getElementById("budget").classList.add("invalid");

      setLoading(false);
      toast.error("Please fill all details!");
      return;
    }

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          selectedServices,
          budgetAmount,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.error === null) {
        toast.success("Message sent Successfully!");
        setName("");
        setEmail("");
        setSelectedServices([]);
        setSelectedBudget("");
        setDescription("");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-form-wrapper">
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">
          Your Name<span className="orange-color">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          placeholder="Charles Smith"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email-address">
          Email<span className="orange-color">*</span>
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          placeholder="charles.smith@yahoo.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          Services <span className="orange-color">*</span>
        </label>
        <div className="service-options">
          <div
            className={`service-option ${
              selectedServices.includes("web development services")
                ? "selected"
                : ""
            }`}
            onClick={() => toggleService("web development services")}
          >
            web development services
          </div>
          <div
            className={`service-option ${
              selectedServices.includes("web design services") ? "selected" : ""
            }`}
            onClick={() => toggleService("web design services")}
          >
            web design services
          </div>
        </div>

        <label>
          Your Budget <span className="orange-color">*</span>
        </label>
        <div className="service-options">
          <div
            className={`service-option ${
              selectedBudget === "Budget 1" ? "selected" : ""
            }`}
            onClick={() => toggleBudget("Budget 1", "$100 - $500")}
          >
            $100 - $500
          </div>
          <div
            className={`service-option ${
              selectedBudget === "Budget 2" ? "selected" : ""
            }`}
            onClick={() => toggleBudget("Budget 2", "$500 - $1,000")}
          >
            $500 - $1,000
          </div>
          <div
            className={`service-option ${
              selectedBudget === "Budget 3" ? "selected" : ""
            }`}
            onClick={() => toggleBudget("Budget 3", "$1,000 - $5,000+")}
          >
            $1,000 - $5,000+
          </div>
        </div>

        <label htmlFor="description">
          More details about project <span className="orange-color">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          autoComplete="false"
          required
          value={description}
          placeholder="brief summary, goals, requirements, etc."
          onChange={(e) => setDescription(e.target.value)}
        />
        {loading ? (
          <button type="submit" className="primary-button">
            Sending..
          </button>
        ) : (
          <button type="submit" className="primary-button">
            Send Message{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"
              />
            </svg>
          </button>
        )}
      </form>
    </section>
  );
};
