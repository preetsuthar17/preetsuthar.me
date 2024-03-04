import { FaStar } from "react-icons/fa";

const TestimonialsCard = ({ TestimonialData }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-header">
        <h3>{TestimonialData.name}</h3>
        <p>{TestimonialData.title}</p>
      </div>
      <p className="testimonial-card-text">{TestimonialData.content}</p>
      <div className="testimonial-card-stars">
        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </div>
    </div>
  );
};

export const FreelancePageTestimonials = () => {
  const testimonials = [
    {
      name: "Joel",
      title: "Back-End Developer",
      content:
        "The best web developer who is working with me. We both connected on discord. My guy is down to earth humble and im proud to say, he comes in as one of the best guys ive worked with. Homie can spin up a ui design in seconds, test it, and its ready for the world!! Its only upwards with him! :3",
    },
    {
      name: "Tazhys",
      title: "Back-End Developer",
      content:
        "Preet was really quick to complete a commission, even though he had to go out for a couple of days. He really crunched everything into a few days, thus making him quicker than other website commissions I've had.",
    },
    {
      name: "Soren",
      title: "Front-End Developer",
      content:
        "Preet is one of the most friendliest person I know around and undoubtedly one of the most enthusiastic programmers I've seen in the tech community. I just can't rant enough about how generous and helpful he is. Love him.",
    },
    {
      name: "Jai",
      title: "Back-End Developer",
      content:
        "Working with Preet was a breeze. They were efficient, reliable, and a pleasure to collaborate with. The website they created exceeded my expectations in both design and functionality. I highly recommend him!",
    },
    {
      name: "Terry",
      title: "Back-End Developer",
      content:
        "If you're looking for a skilled web developer, look no further than Preet. Their strong understanding of web development principles is evident in the user-friendly and visually appealing website they created for me. I highly recommend him for his expertise and professionalism.",
    },
  ];
  return (
    <section className="freelancing-page-testimonials">
      <h2>What they say</h2>
      <div className="freelancing-page-testimonials-cards-list">
        {testimonials.map((testimonial, index) => (
          <TestimonialsCard key={index} TestimonialData={testimonial} />
        ))}
        {testimonials.map((testimonial, index) => (
          <TestimonialsCard
            key={index + testimonials.length}
            TestimonialData={testimonial}
          />
        ))}
      </div>
    </section>
  );
};
