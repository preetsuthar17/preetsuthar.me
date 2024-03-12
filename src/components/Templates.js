import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const TemplateCard = ({ template }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="template-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="template-image">
        <Image
          src={isHovered ? template.gifImage : template.image}
          width={1920}
          height={1080}
          loading="lazy"
          quality={100}
          alt={template.title}
        />
      </div>
      <div className="template-content">
        <h2 className="template-title">{template.title}</h2>
        <p className="template-description">{template.description}</p>
        <span className="template-price">{template.price}</span>
        <Link className="primary-button" href={template.buyLink}>
          Buy now
        </Link>
      </div>
    </div>
  );
};

export const Templates = () => {
  const TemplatesList = [
    {
      title: "Portfolio v1",
      description:
        "Elevate your creative prowess with our sleek, modern portfolio template.More than 5 section to showcasing your unique skills and work.",
      image: "https://i.imgur.com/Erf9nJ2.png",
      gifImage: "https://i.imgur.com/oc6dlzD.gif",
      buyLink: "https://dsc.gg/preet",
      price: "$100",
    },
    {
      title: "Portfolio v2",
      description:
        "Maximize your potential with Portfolio v2, a template designed for UI/UX designers. Showcase your work and skills professionally with its sleek, modern design.",
      image: "https://i.imgur.com/BYkxs29.png",
      gifImage: "https://i.imgur.com/N6uIXOs.gif",
      buyLink: "https://dsc.gg/preet",
      price: "$100",
    },
  ];
  return (
    <main className="templates">
      <div className="templates-heading">
        <h1>Templates</h1>
        <p>
          Buy beautiful ready to use website templates in very affordable price.
        </p>
      </div>
      <div className="templates-cards-list">
        {TemplatesList.map((template, index) => (
          <TemplateCard
            template={{
              title: template.title,
              description: template.description,
              image: template.image,
              gifImage: template.gifImage,
              buyLink: template.buyLink,
              price: template.price,
            }}
          />
        ))}
      </div>
    </main>
  );
};
