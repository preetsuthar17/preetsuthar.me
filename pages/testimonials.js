import Footer from "@/src/components/footer";
import Navbar from "@/src/components/navbar";

const {
  default: Card,
} = require("@/src/components/ReviewsComponents/ReviewCard");

const testimonials = () => {
  return (
    <>
      <Navbar goback={true} />
      <h1
        className="h2-color"
        style={{
          textAlign: "center",
        }}
      >
        Testimonials
      </h1>
      <div style={{ marginTop: "3rem" }} className="reviews-div" id="reviews">
        <div className="reviews-container testimonials-container">
          <>
            <Card
              heading="Joel"
              subHeading="Back-End Developer"
              description="The best web developer who is working with me. We both connected on discord. My guy is down to earth humble and im proud to say, he comes in as one of the best guys ive worked with. 
            Homie can spin up a ui design in seconds, test it, and its ready for the world!! Its only upwards with him! :3
            "
            ></Card>
            <Card
              heading="Soren"
              subHeading="Front-End Developer"
              description="Preet is one of the most friendliest person I know around and undoubtedly one of the most enthusiastic programmers I've seen in the tech community. I just can't rant enough about how generous and helpful he is. Love him."
            ></Card>
            <Card
              heading="Y345"
              subHeading="Full-Stack Developer"
              description="I highly recommend this guy, if you are trying to find someone to make your website,and has great customer support with a quick and reliable response time."
            ></Card>
            <Card
              heading="Mustafa"
              subHeading="Web Developer"
              description="Hey Preet! The new look of the website is soo sleek and decent, I like those small details that you made on this website, the time the dedication you have hats off to it, overall I like this new design of your portfolio :)"
            ></Card>
          </>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default testimonials;
