const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <h3>{review.user}</h3>
        <small>{review.title}</small>
      </div>
      <p className="review-content">{review.content}</p>
    </div>
  );
};

export const Reviews = () => {
  const reviews = [
    {
      user: "Axel",
      title: "Back-end developer",
      content: `The best web developer who is working with me. We both connected on
      discord. My guy is down to earth humble and im proud to say, he
      comes in as one of the best guys ive worked with. Homie can spin up
      a ui design in seconds, test it, and its ready for the world!! Its
      only upwards with him! :3`,
    },
    {
      user: "Soren",
      title: "Front-end developer",
      content: `Preet is one of the most friendliest person I know around and undoubtedly one of the most enthusiastic programmers I've seen in the tech community. I just can't rant enough about how generous and helpful he is. Love him.`,
    },
    {
      user: "Tazhys",
      title: "Back-end developer",
      content: `Preet was really quick to complete a commission, even though he had to go out for a couple of days. He really crunched everything into a few days, thus making him quicker than other website commissions I've had.`,
    },
    {
      user: "Mohammed Ayaan",
      title: "Product designer",
      content:
        "Designed, coded and delivered a fully fledged visually stunning portfolio website in less than 12 hrs, unreal speed and excellent communication skills. Good job 👍",
    },
    {
      user: "Y345",
      title: "Full-stack developer",
      content: `I highly recommend this guy, if you are trying to find someone to make your website,and has great customer support with a quick and reliable response time.
      `,
    },
    {
      user: "Mustafa",
      title: "Web developer",
      content: `Hey Preet! The new look of the website is soo sleek and decent, I like those small details that you made on this website, the time the dedication you have hats off to it, overall I like this new design of your portfolio :)      `,
    },
  ];
  return (
    <div>
      <section className="reviews">
        <div className="reviews-heading">
          <h2>
            REVIEWS <span className="orange-color">.</span>
          </h2>
        </div>
        <div className="reviews-cards-list">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              review={{
                title: review.title,
                user: review.user,
                content: review.content,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
