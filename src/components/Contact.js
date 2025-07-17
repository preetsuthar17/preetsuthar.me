import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error("Failed to send message");
      }
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col gap-24 text-left items-center w-full">
      <div className="flex flex-col gap-8 w-full">
        <h2 className="tracking-tight text-lg px-10">Contact</h2>
        <div className="px-10">
          {submitted ? (
            <div className="text-center text-[var(--blue-color)] font-medium">
              Thank you for reaching out! I will get back to you soon.
            </div>
          ) : (
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-[var(--blue-color)] transition-colors"
                disabled={loading}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-[var(--blue-color)] transition-colors"
                disabled={loading}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-[var(--blue-color)] transition-colors resize-none"
                disabled={loading}
              />
              <button
                type="submit"
                className="px-5 py-3 bg-[var(--blue-color)] text-white w-fit border border-[var(--blue-color)] hover:brightness-90 mt-2 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {error && (
                <div className="text-red-500 text-sm mt-2">{error}</div>
              )}
            </form>
          )}
        </div>
        <div className="text-sm opacity-80 px-10">
          Or email me directly at{" "}
          <a
            href="mailto:preetsuthar17@gmail.com"
            className="underline text-[var(--blue-color)] underline-offset-4"
          >
            hi@preetsuthar.me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
