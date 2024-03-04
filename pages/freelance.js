import { FreelancePageContact } from "@/src/components/FreelancePageComponents/FreelancePageContact";
import { FreelancePageHead } from "@/src/components/FreelancePageComponents/FreelancePageHeader";
import { FreelancePageServices } from "@/src/components/FreelancePageComponents/FreelancePageServices";
import { FreelancePageTestimonials } from "@/src/components/FreelancePageComponents/FreelancePageTestimonials";
import Footer from "@/src/components/footer";
import Navbar from "@/src/components/navbar";

const freelance = () => {
  return (
    <>
      <main>
        <Navbar />
        <FreelancePageHead />
        <FreelancePageTestimonials />
        <FreelancePageServices />
        <FreelancePageContact />
        <Footer />
      </main>
    </>
  );
};

export default freelance;
