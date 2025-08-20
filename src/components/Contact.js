import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error('Failed to send message');
      }
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } catch (_err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex w-full flex-col items-center gap-12 text-left">
      <div className="flex w-full flex-col gap-8">
        <h2 className="px-10 text-lg tracking-tight">Contact</h2>
        <div className="px-10">
          {submitted
            ? <div className="text-left font-medium text-blue">
                Thank you for reaching out! I will get back to you soon.
              </div>
            : <form
                autoComplete="off"
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <input
                  className="border border-border bg-transparent px-4 py-3 transition-colors focus:border-blue focus:outline-none"
                  disabled={loading}
                  name="name"
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  type="text"
                  value={form.name}
                />
                <input
                  className="border border-border bg-transparent px-4 py-3 transition-colors focus:border-blue focus:outline-none"
                  disabled={loading}
                  name="email"
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  type="email"
                  value={form.email}
                />
                <textarea
                  className="resize-none border border-border bg-transparent px-4 py-3 transition-colors focus:border-blue focus:outline-none"
                  disabled={loading}
                  name="message"
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  value={form.message}
                />
                <button
                  className="mt-2 w-fit border border-blue bg-blue px-4 py-2 text-white hover:brightness-90 disabled:opacity-60"
                  disabled={loading}
                  type="submit"
                >
                  {loading ? 'Sending' : 'Send Message'}
                </button>
                {error && (
                  <div className="mt-2 text-red-500 text-sm">{error}</div>
                )}
              </form>}
        </div>
        <div className="px-10 text-sm opacity-80">
          or email me directly at{' '}
          <a
            className="text-blue underline underline-offset-4"
            href="mailto:preetsuthar17@gmail.com"
          >
            hi@preetsuthar.me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
