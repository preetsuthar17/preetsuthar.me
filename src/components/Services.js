const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-heading">
        <h3 className="service-title">✦ {service.title}</h3>
        <p className="service-description">{service.description}</p>
      </div>
      <div className="service-content">
        <ul className="service-tags">
          <li>{service.content1}</li>
          <li>{service.content2}</li>
          <li>{service.content3}</li>
          <li>{service.content4}</li>
        </ul>
        <p className="service-number">{service.number}</p>
      </div>
    </div>
  );
};

export const Services = () => {
  const services = [
    {
      title: "Website development",
      description: `Rely on my expertise for a fast, visually appealing website that exceeds expectations. I'm dedicated to delivering results that boost your online presence and business success.`,
      content1: "Landing page",
      content2: "Product website",
      content3: "Portfolio website",
      number: "01.",
    },
    {
      title: "SEO optimization",
      description: `I'll help you rank on Google by optimizing your website and creating quality content. My goal is to drive traffic, increase visibility, and improve your online presence.`,
      content1: "Ranking",
      content2: "On-page SEO",
      content3: "Off-page SEO",
      number: "02.",
    },
    {
      title: "Designing",
      description: `I create visually appealing designs that align with your brand and business goals. I'm dedicated to delivering results that boost your online presence and business success.`,
      content1: "UI/UX design",
      content2: "Landing page",
      content3: "Product page",
      content4: "Portfolio website",
      number: "03.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-heading">
        <h2>
          WHAT I DO<span className="orange-color"> .</span>
        </h2>
      </div>
      <div className="services-cards-lists">
        {services.map((service, index) => (
          <ServiceCard key={index} service={{ ...service }} />
        ))}
      </div>
      <div className="services-tilted-text">
        <div className="scrolling-text">
          <div>
            <p>
              &nbsp;&nbsp;&nbsp;WE BUILD EXPERIENCES
              &nbsp;&nbsp;✦&nbsp;&nbsp;IMPROVE YOUR
              DESIGN&nbsp;&nbsp;✦&nbsp;&nbsp;MAKE IT STUNNING
            </p>
          </div>
          <div>
            <p>
              ✦&nbsp;&nbsp;WE BUILD EXPERIENCES&nbsp;&nbsp;✦&nbsp;&nbsp;IMPROVE
              YOUR DESIGN&nbsp;&nbsp;✦&nbsp;&nbsp;MAKE IT STUNNING
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
